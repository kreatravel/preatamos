# Preatamos

Primera versión del proyecto con **HTML, CSS y JavaScript vanilla** (JavaScript puro, sin frameworks). Es una página de bienvenida que sirve como base para definir y desarrollar el producto.

## Iniciar el proyecto

No necesitas instalar paquetes ni compilar. Para trabajar con un servidor local, usa Python 3:

```bash
cd /workspace/preatamos
python3 -m http.server 8000 --bind 127.0.0.1
```

En tu computadora, ejecuta el comando desde la carpeta donde clonaste el repositorio. El servidor utiliza el puerto 8000; puedes detenerlo con `Ctrl+C`.

También puedes abrir `index.html` directamente en tu navegador. La disponibilidad del almacenamiento de preferencias puede variar al abrir archivos locales.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura, textos y navegación de la página. |
| `styles.css` | Diseño adaptable a móvil, colores y temas. |
| `script.js` | Menú móvil y preferencia de tema claro u oscuro. |
| `favicon.svg` | Icono de la pestaña del navegador. |

## Personalizar

- Cambia los textos y las secciones en `index.html`.
- Ajusta los colores en las variables `:root` de `styles.css`.
- Añade interacciones en `script.js`.

La navegación permanece disponible sin JavaScript. Al activarlo, se añaden el menú desplegable para móvil y el selector de tema. La preferencia de tema se guarda en el navegador cuando el almacenamiento está disponible.

## Comprobar cambios

Si tienes Node.js, puedes revisar la sintaxis del JavaScript:

```bash
node --check script.js
git diff --check
```

Con el servidor iniciado, comprueba en un navegador:

1. Que la página y los recursos carguen sin errores.
2. Que los enlaces lleven a las secciones correspondientes.
3. Que puedas abrir y cerrar el menú en una pantalla pequeña; `Escape` también lo cierra.
4. Que el cambio de tema funcione y se conserve al recargar cuando el almacenamiento esté disponible.
5. Que no aparezca desplazamiento horizontal en móvil.

## Alcance de esta versión

Es un sitio estático inicial. No incluye base de datos, formularios que envíen información, autenticación ni integraciones externas. Estas funciones se pueden desarrollar cuando se defina el objetivo del proyecto.
