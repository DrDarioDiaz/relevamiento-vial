# Relevamiento Vial 2026 — Posadas y Garupá

Aplicación web de registro para el estudio observacional de seguridad vial.
Práctica Profesionalizante de Estadística — Instituto de Educación Técnica
Superior en Seguridad Vial, Garupá (Misiones).

Metodología: Manual Observacional de la Agencia Nacional de Seguridad Vial (ANSV).

## Archivos

| Archivo | Función |
|---|---|
| `index.html` | La aplicación completa (formularios, guardado, exportación) |
| `manifest.webmanifest` | Permite instalarla como aplicación en el teléfono |
| `sw.js` | Hace que funcione sin señal luego de la primera carga |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Ícono de la aplicación |

Los cuatro primeros deben quedar **en la misma carpeta**, sin subcarpetas.

## Cómo publicarla (opción recomendada: GitHub Pages)

1. Crear una cuenta gratuita en `github.com`.
2. Botón **New repository**. Nombre: `relevamiento-vial`. Marcar **Public**.
   Presionar **Create repository**.
3. En la página que aparece, hacer clic en **uploading an existing file**.
4. Arrastrar **los seis archivos** (no la carpeta). Presionar **Commit changes**.
5. Ir a **Settings** → **Pages** (menú izquierdo).
6. En *Source* elegir **Deploy from a branch**; en *Branch* elegir **main** y
   carpeta **/ (root)**. Presionar **Save**.
7. Esperar entre uno y dos minutos. La dirección queda:
   `https://USUARIO.github.io/relevamiento-vial/`

Esa dirección es la que se envía a los estudiantes.

## Cómo actualizar la aplicación más adelante

Si se modifica `index.html`, hay que abrir `sw.js` y subir el número de versión
(`rv-v1` → `rv-v2`). Sin ese cambio, los teléfonos seguirán usando la copia
guardada y no verán las modificaciones.

## Verificación en cada teléfono

Dentro de la aplicación, pestaña **Datos** → tarjeta **Diagnóstico del teléfono**.
Debe mostrar tildes verdes en *Guardado de datos*, *Dirección segura* y
*Funciona sin señal*.
