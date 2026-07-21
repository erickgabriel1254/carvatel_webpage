# Landing page de Carvatel

Sitio empresarial público desarrollado con Next.js, TypeScript y Tailwind CSS.

## Páginas del sitio

- `/`: landing principal de Carvatel.
- `/zebra/`: productos Zebra y soporte técnico autorizado.
- `/motorola/`: radios Motorola, accesorios y comunicación empresarial.
- `/hytera/`: radios PoC, radios analógicos/digitales y bodycams Hytera.
- `/software/`: servicios de software empresarial, trazabilidad e integraciones.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Generar archivos para cPanel

```bash
npm run export:cpanel
```

Next.js generará la carpeta `out/`. Su contenido es completamente estático y no
requiere Node.js, npm, base de datos ni procesos activos en el hosting.

Las páginas internas se exportan como carpetas con su propio `index.html`, por
ejemplo `out/zebra/index.html`, `out/motorola/index.html`,
`out/hytera/index.html` y `out/software/index.html`.

## Publicar en cPanel

1. Abre **Administrador de archivos** en cPanel.
2. Entra en `public_html/` o en la raíz asignada al dominio.
3. Sube el ZIP generado para cPanel.
4. Extrae el ZIP directamente en esa carpeta.
5. Comprueba que `index.html` quede directamente dentro de `public_html/`, no
   dentro de otra carpeta adicional.
6. Abre el dominio y limpia la caché del navegador si aún muestra la web anterior.

El formulario envía los mensajes mediante `contact.php`, por lo que el hosting debe
tener PHP y la función `mail()` habilitados. Los correos se entregan a
`operaciones@grupocarvatel.com`. WhatsApp y Google Maps usan enlaces externos. Los datos
de contacto se administran desde `config/company.ts`.
