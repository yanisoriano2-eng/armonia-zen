# Armonía Zen - Página Web Premium

Sitio web multipágina, premium y moderno para **Armonía Zen**, marca de decoración espiritual y bienestar para el hogar.

## 📋 Contenido

### Páginas Principales
- **index.html** - Página de inicio con hero, secciones destacadas y preloader
- **catalogo.html** - Catálogo completo con filtros, búsqueda y ordenamiento
- **piedras.html** - Página especializada en piedras energéticas
- **plantas.html** - Página especializada en plantas naturales
- **blog.html** - Blog zen con artículos educativos
- **nosotros.html** - Sobre la marca, misión, valores y FAQ
- **contacto.html** - Formulario de contacto e información de localización

### Archivos de Estilos
- **css/style.css** - Estilos CSS globales con variables de color, animaciones y diseño responsive

### Scripts JavaScript
- **js/main.js** - Funcionalidades principales (preloader, carrito, menú móvil, etc.)
- **js/catalogo.js** - Lógica de filtros, búsqueda y productos del catálogo

## 🎨 Características de Diseño

### Paleta de Colores
- Verde oscuro principal: `#17281F`
- Verde selva: `#243D2F`
- Verde oliva: `#6E8B63`
- Beige premium: `#E8DCC6`
- Dorado suave: `#C9B56F`
- Blanco cálido: `#F8F4EA`
- Marrón tierra: `#8A7254`

### Tipografías
- Serif: Playfair Display, Cormorant Garamond (títulos grandes)
- Sans: Inter, Manrope (textos y navegación)

### Animaciones Premium
✨ Preloader con loto flotante y partículas doradas
🌿 Hojas flotantes en hero
📊 Animaciones de scroll reveal
✍️ Hover effects elegantes
🎬 Transiciones suaves en todo el sitio

## 🛍️ Funcionalidades

### Carrito de Compras
- Agregar/remover productos
- Modificar cantidades
- Cálculo automático de subtotal
- Persistencia en localStorage
- Checkout por WhatsApp

### Filtrado de Productos
- Búsqueda en tiempo real
- Filtros por categoría
- Filtros por rango de precio
- Ordenamiento por precio y nombre
- Limpiar filtros rápidamente

### Navegación
- Header fijo con logo
- Menú principal responsive
- Menú hamburguesa para móvil
- Carrito flotante
- WhatsApp flotante
- Footer completo con links

### Contacto
- Formulario de contacto integrado
- Envío directo por WhatsApp
- FAQ interactivo con acordeones
- Información de horarios

## 📱 Responsive Design

El sitio está optimizado para:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

Todos los elementos se adaptan perfectamente a cualquier pantalla.

## 🚀 Cómo Usar

### Abrir el Sitio
1. Abre `index.html` en tu navegador
2. El sitio cargará con un preloader premium (2 segundos)
3. Navega por las diferentes secciones

### Modificar Contenido
- Edita el HTML en los archivos `.html`
- Los estilos están centralizados en `css/style.css`
- Las funcionalidades están en `js/main.js` y `js/catalogo.js`

### Personalizar Colores
En `css/style.css`, modifica las variables CSS:
```css
:root {
    --color-dark-green: #17281F;
    --color-gold: #C9B56F;
    /* ... más variables */
}
```

### Agregar Productos
En `js/catalogo.js`, modifica el array `products`:
```javascript
const products = [
    {
        id: 1,
        name: 'Producto',
        category: 'categoria',
        price: 25000,
        description: 'Descripción',
        image: 'gradient(...)'
    }
];
```

### Conectar WhatsApp Real
Reemplaza el número de teléfono en:
- `index.html` - Line: clase `whatsapp-float`
- `catalogo.html` - función `checkoutWhatsApp()`
- `contacto.html` - función `handleContactForm()`

Cambia `5491234567890` por tu número real.

## 🎯 Características por Página

### Index
- Preloader animado
- Hero con fondo degradado
- Ticker deslizante de categorías
- Sección de intenciones (8 opciones)
- Sección sensorial (5 elementos)
- Catálogo preview (8 productos)
- Guías rápidas (6 cards)
- Blog preview (3 artículos)
- Newsletter

### Catálogo
- Búsqueda avanzada
- Filtros: categoría, precio, ordenamiento
- Grid de 20 productos
- Cards con hover effects
- Carrito lateral

### Piedras
- Banner personalizado
- 6 piedras destacadas
- Información detallada de cada una
- Guía de uso (6 métodos)
- CTA para comprar

### Plantas
- Banner personalizado
- 6 plantas destacadas
- Información y cuidados
- Guía de cuidado (6 secciones)
- CTA para comprar

### Blog
- 10 artículos listados
- Categorías de contenido
- Tiempo de lectura
- Newsletter
- Estructura tipo revista

### Nosotros
- Descripción de la marca
- Misión y valores (6 valores)
- FAQ interactivo (10 preguntas)
- Información de contacto

### Contacto
- Formulario con 5 campos
- Tipo de consulta seleccionable
- Información de contacto
- Horarios de atención
- Social links
- Envío directo a WhatsApp

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados, variables, animaciones, Flexbox/Grid
- **JavaScript Vanilla** - Sin librerías externas
- **Google Fonts** - Tipografías premium
- **localStorage** - Persistencia del carrito

## 📦 Estructura de Carpetas

```
armonia-zen/
├── index.html
├── catalogo.html
├── piedras.html
├── plantas.html
├── blog.html
├── nosotros.html
├── contacto.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── catalogo.js
```

## 🎁 Características Premium

- ✨ Preloader cinematográfico con loto animado
- 🎨 Paleta de colores sofisticada
- 📐 Tipografía serif elegante para títulos
- 🌿 Animaciones sutiles y refinadas
- 💫 Efecto parallax y scroll reveal
- 📱 Diseño mobile-first responsive
- ⚡ Carga rápida sin librerías externas
- 🔒 Carrito con persistencia local
- 💬 Integración WhatsApp directa
- 🎯 Navegación intuitiva y clara

## 🌟 Próximas Mejoras Opcionales

- [ ] Sistema de pago integrado (Mercado Pago, Stripe)
- [ ] Admin panel para gestionar productos
- [ ] Sistema de comentarios en blog
- [ ] Reseñas de clientes
- [ ] Mapa de ubicación interactivo
- [ ] Chat en tiempo real
- [ ] Galería de fotos de ambientes
- [ ] Programa de referidos
- [ ] Suscripción a newsletter con confirmación
- [ ] Estadísticas y analytics

## 📞 Contacto

- **Email:** info@armoniagen.com
- **WhatsApp:** +54 9 1234567890
- **Ubicación:** Buenos Aires, Argentina

---

**Armonía Zen** © 2024. Todos los derechos reservados.
*Cada objeto tiene una energía. Cada espacio puede transformarse.*
# armonia-zen
