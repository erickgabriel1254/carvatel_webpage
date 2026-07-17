    <?php
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond($status, $message)
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function field($name, $maxLength)
{
    $value = trim((string)($_POST[$name] ?? ''));
    $value = str_replace(["\r", "\0"], '', $value);
    return function_exists('mb_substr')
        ? mb_substr($value, 0, $maxLength)
        : substr($value, 0, $maxLength);
}

function validate_origin()
{
    $allowedHosts = ['grupocarvatel.com', 'www.grupocarvatel.com', 'localhost', '127.0.0.1'];
    $targetHost = strtolower(preg_replace('/:\d+$/', '', (string)($_SERVER['HTTP_HOST'] ?? '')));
    $source = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');
    $sourceHost = strtolower((string)parse_url($source, PHP_URL_HOST));

    if (!in_array($targetHost, $allowedHosts, true) || $sourceHost === '' || $sourceHost !== $targetHost) {
        respond(403, 'Solicitud no autorizada.');
    }
}

function enforce_rate_limit($ip)
{
    $rateFile = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'carvatel-contact-rate.json';
    $handle = @fopen($rateFile, 'c+');

    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        respond(503, 'El formulario no está disponible temporalmente.');
    }

    $contents = stream_get_contents($handle);
    $records = json_decode($contents ?: '{}', true);
    if (!is_array($records)) {
        $records = [];
    }

    $now = time();
    $cutoff = $now - 3600;
    foreach ($records as $key => $timestamps) {
        if (!is_array($timestamps)) {
            unset($records[$key]);
            continue;
        }
        $timestamps = array_values(array_filter($timestamps, function ($timestamp) use ($cutoff) {
            return is_numeric($timestamp) && (int)$timestamp > $cutoff;
        }));
        if ($timestamps === []) {
            unset($records[$key]);
        } else {
            $records[$key] = $timestamps;
        }
    }

    $key = hash('sha256', $ip);
    $attempts = $records[$key] ?? [];
    $lastAttempt = $attempts === [] ? 0 : (int)end($attempts);

    if (count($attempts) >= 5 || ($lastAttempt > 0 && ($now - $lastAttempt) < 30)) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(429, 'Has realizado demasiados envíos. Intenta nuevamente más tarde.');
    }

    $attempts[] = $now;
    $records[$key] = $attempts;
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($records));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, 'Método no permitido.');
}

if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    respond(413, 'La solicitud es demasiado grande.');
}

validate_origin();

// Honeypot: los bots suelen completar este campo oculto.
if (field('website', 200) !== '') {
    respond(200, 'Mensaje enviado.');
}

$startedAt = (int)($_POST['form_started_at'] ?? 0);
$elapsed = time() - $startedAt;
if ($startedAt <= 0 || $elapsed < 3 || $elapsed > 7200) {
    respond(422, 'Actualiza la página e intenta nuevamente.');
}

$name = field('name', 120);
$company = field('company', 120);
$email = field('email', 180);
$phone = field('phone', 80);
$service = field('service', 120);
$message = field('message', 3000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, 'Revisa el nombre, el correo y el mensaje.');
}

if (preg_match_all('~(?:https?://|www\.)~i', $message) > 2) {
    respond(422, 'El mensaje contiene demasiados enlaces.');
}

enforce_rate_limit((string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'));

$recipient = 'operaciones@grupocarvatel.com';
$subject = 'Nuevo contacto desde grupocarvatel.com';
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$body = implode("\n", [
    'Nuevo mensaje recibido desde grupocarvatel.com',
    '',
    'Nombre: ' . $name,
    'Empresa: ' . ($company !== '' ? $company : 'No indicada'),
    'Correo: ' . $email,
    'Teléfono: ' . ($phone !== '' ? $phone : 'No indicado'),
    'Servicio: ' . ($service !== '' ? $service : 'No indicado'),
    '',
    'Mensaje:',
    $message,
    '',
    'Fecha: ' . date('Y-m-d H:i:s T'),
]);

$headers = [
    'From: Sitio web Carvatel <carvatel@grupocarvatel.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

if (!mail($recipient, $encodedSubject, $body, implode("\r\n", $headers))) {
    respond(500, 'El servidor no pudo enviar el correo en este momento.');
}

respond(200, 'Mensaje enviado correctamente.');
