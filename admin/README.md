# Panel de Administración · Armonía Zen

Panel privado para administrar toda la web sin tocar código: productos, banners,
inicio, blog, FAQ, testimonios, medios, contacto, WhatsApp, SEO y consultas.

## Acceso

Abrí **`admin/index.html`**.

Cuenta de prueba:

- **Email:** `admin@armoniazen.com`
- **Contraseña:** `armonia2026`

> Cambiá estas credenciales desde **Usuarios y roles** apenas entres.

## Cómo funciona (importante)

El contenido se guarda en el **almacenamiento del navegador** (`localStorage`) mediante
`js/store.js`, una capa compartida entre el panel y la web pública. Cuando editás algo en
el panel, las páginas (`index.html`, `catalogo.html`, etc.) lo leen al cargar y lo aplican.

### ⚠️ Para que los cambios se vean en la web

`localStorage` se comparte entre páginas **solo si comparten el mismo origen**. Según el
navegador, abrir archivos con doble clic (`file://`) puede aislar cada archivo. Para una
conexión en vivo confiable, serví la carpeta con un servidor local:

```bash
# Parado en la carpeta del proyecto:
python -m http.server 8000
#  o:  npx serve .
```

Luego entrá a `http://localhost:8000/admin/` y `http://localhost:8000/`.
Así el panel y la web comparten datos y los cambios se reflejan al instante.

### Publicar / Backup

El botón **Publicar / Backup** descarga un `.json` con todo el contenido. Sirve para:

- Llevar el contenido a otra computadora o navegador (luego se puede **Importar**).
- Subirlo a un hosting real cuando se conecte un backend.
- Guardar una copia de seguridad.

## Módulos

| Módulo | Qué administra |
|---|---|
| Dashboard | Resumen, métricas y accesos rápidos |
| Inicio | Hero, textos, botones, imagen y ticker |
| Banners | Banner de cada página (imagen, título, overlay, activo) |
| Catálogo | CRUD completo de productos (precio, stock, estados, fotos, SEO…) |
| Categorías / Intenciones | Filtros de la tienda |
| Blog Zen | Artículos (borrador/publicado, SEO, slug) |
| Preguntas frecuentes | FAQ con orden por arrastrar y activo/inactivo |
| Testimonios | Opiniones con puntuación |
| Biblioteca de medios | Subir/organizar imágenes por carpeta |
| Contacto y redes | WhatsApp, email, redes, dirección, horarios |
| WhatsApp / Pedidos | Número, mensaje automático, carrito |
| Configuración visual | Marca, colores, tipografías, preloader |
| SEO | Meta title/description, keywords, OG |
| Consultas recibidas | Mensajes del formulario de contacto |
| Usuarios y roles | Super admin · Editor · Soporte |

## Seguridad — leer

Este panel usa **autenticación del lado del cliente**. Es perfecto para administrar
contenido de forma cómoda, pero **no es seguridad real**: cualquiera con acceso al código
podría ver los datos del navegador. No lo uses para información sensible tal cual está.

### Para producción (paso siguiente recomendado)

Conectar un backend real:

1. Una API (Node/Express, PHP/Laravel, Supabase, Firebase…) con base de datos.
2. Login con contraseñas **hasheadas** (bcrypt) y tokens (JWT/sesión httpOnly).
3. Reemplazar en `js/store.js` los métodos `get/list/upsert/login…` por llamadas `fetch`
   a la API. El resto del panel y de la web **no necesita cambios** porque todo pasa por
   esa capa.

Tablas sugeridas: `users, products, categories, product_images, banners, home_sections,
blog_posts, faqs, testimonials, settings, media_library, contact_messages, intentions,
seo_settings`.

## Reset

Para volver al contenido de fábrica, en la consola del navegador:

```js
localStorage.removeItem('az_content_v1'); location.reload();
```
