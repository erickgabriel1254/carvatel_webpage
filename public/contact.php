<?php
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

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

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, 'Método no permitido.');
}

if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    respond(413, 'La solicitud es demasiado grande.');
}

// Honeypot: bots suelen completar este campo oculto.
if (field('website', 200) !== '') {
    respond(200, 'Mensaje enviado.');
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

$recipient = 'carvatel@grupocarvatel.com';
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
