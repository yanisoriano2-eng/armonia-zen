/* ============================================
   PRODUCTOS DEL CATÁLOGO
   ============================================ */

const products = [
    {
        id: 1,
        name: 'Lámpara de Sal del Himalaya',
        category: 'lamparas',
        price: 45000,
        description: 'Luz cálida para purificar y armonizar ambientes',
        image: 'gradient(135deg, #6E8B63 0%, #243D2F 100%)'
    },
    {
        id: 2,
        name: 'Amatista Natural',
        category: 'piedras',
        price: 22000,
        description: 'Calma mental, intuición y protección energética',
        image: 'gradient(135deg, #9966CC 0%, #6E4C9E 100%)'
    },
    {
        id: 3,
        name: 'Cuarzo Rosa',
        category: 'piedras',
        price: 18000,
        description: 'Amor propio, suavidad y apertura emocional',
        image: 'gradient(135deg, #FF69B4 0%, #FF1493 100%)'
    },
    {
        id: 4,
        name: 'Fuente de Agua Zen',
        category: 'fuentes',
        price: 65000,
        description: 'Movimiento, sonido y equilibrio para espacios de descanso',
        image: 'gradient(135deg, #4A90E2 0%, #2C5AA0 100%)'
    },
    {
        id: 5,
        name: 'Buda Meditativo',
        category: 'budas',
        price: 35000,
        description: 'Símbolo de presencia, serenidad y sabiduría interior',
        image: 'gradient(135deg, #D4A574 0%, #8B7355 100%)'
    },
    {
        id: 6,
        name: 'Planta Monstera',
        category: 'plantas',
        price: 28000,
        description: 'Vida, frescura y energía natural al ambiente',
        image: 'gradient(135deg, #7CB342 0%, #558B2F 100%)'
    },
    {
        id: 7,
        name: 'Incienso de Sándalo',
        category: 'aromas',
        price: 12000,
        description: 'Aroma profundo para meditación y limpieza energética',
        image: 'gradient(135deg, #CD853F 0%, #8B4513 100%)'
    },
    {
        id: 8,
        name: 'Vela de Intención',
        category: 'aromas',
        price: 15000,
        description: 'Luz consciente para momentos de calma y enfoque',
        image: 'gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    {
        id: 9,
        name: 'Citrino Natural',
        category: 'piedras',
        price: 20000,
        description: 'Abundancia, alegría y energía positiva',
        image: 'gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    {
        id: 10,
        name: 'Lámpara de Sal Pequeña',
        category: 'lamparas',
        price: 28000,
        description: 'Versión compacta perfecta para espacios pequeños',
        image: 'gradient(135deg, #F4A460 0%, #D2691E 100%)'
    },
    {
        id: 11,
        name: 'Turmalina Negra',
        category: 'piedras',
        price: 25000,
        description: 'Protección contra energías negativas',
        image: 'gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)'
    },
    {
        id: 12,
        name: 'Bambú de la Suerte',
        category: 'plantas',
        price: 22000,
        description: 'Símbolo de abundancia y buena fortuna',
        image: 'gradient(135deg, #9ACD32 0%, #6B8E23 100%)'
    },
    {
        id: 13,
        name: 'Cuenco Tibetano',
        category: 'aromas',
        price: 55000,
        description: 'Instrumento para meditación y sanación sonora',
        image: 'gradient(135deg, #CD7F32 0%, #8B4513 100%)'
    },
    {
        id: 14,
        name: 'Buda Tailandés',
        category: 'budas',
        price: 42000,
        description: 'Representación de la riqueza y protección',
        image: 'gradient(135deg, #FFD700 0%, #DAA520 100%)'
    },
    {
        id: 15,
        name: 'Fuente de Cascada',
        category: 'fuentes',
        price: 78000,
        description: 'Cascada con iluminación LED integrada',
        image: 'gradient(135deg, #4169E1 0%, #1E90FF 100%)'
    },
    {
        id: 16,
        name: 'Selenita Cristal',
        category: 'piedras',
        price: 16000,
        description: 'Purificación, paz y conexión espiritual',
        image: 'gradient(135deg, #F0F8FF 0%, #E6E6FA 100%)'
    },
    {
        id: 17,
        name: 'Pothos Verde',
        category: 'plantas',
        price: 18000,
        description: 'Planta de interior fácil de cuidar',
        image: 'gradient(135deg, #228B22 0%, #006400 100%)'
    },
    {
        id: 18,
        name: 'Ámbar Aromático',
        category: 'aromas',
        price: 14000,
        description: 'Aroma cálido y reconfortante',
        image: 'gradient(135deg, #FF8C00 0%, #FF6347 100%)'
    },
    {
        id: 19,
        name: 'Agua de Rosas',
        category: 'aromas',
        price: 13000,
        description: 'Esencia natural para rituales y meditación',
        image: 'gradient(135deg, #FFB6C1 0%, #FF69B4 100%)'
    },
    {
        id: 20,
        name: 'Buda Feliz',
        category: 'budas',
        price: 32000,
        description: 'Símbolo de alegría y plenitud',
        image: 'gradient(135deg, #DAA520 0%, #B8860B 100%)'
    }
];

/* ============================================
   INICIALIZACIÓN
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    updateCartUI();
    renderProducts(products);
    setupFilters();
});

/* ============================================
   RENDERIZAR PRODUCTOS
   ============================================ */

function renderProducts(productsToRender) {
    const catalogResults = document.getElementById('catalog-results');

    if (productsToRender.length === 0) {
        catalogResults.innerHTML = '<div class="no-results"><h3>No se encontraron productos</h3><p>Intenta con otros filtros o términos de búsqueda</p></div>';
        return;
    }

    catalogResults.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image" style="background: ${product.image};"></div>
            <div class="product-category">${getCategoryLabel(product.category)}</div>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toLocaleString('es-AR')}</div>
            <button class="btn-secondary" onclick="addToCart('${product.name}', ${product.price})">Agregar al carrito</button>
        </div>
    `).join('');
}

/* ============================================
   FILTROS
   ============================================ */

function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const searchInputMain = document.getElementById('search-input-main');
    const categoryCheckboxes = document.querySelectorAll('[id^="cat-"]');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');

    const applyFiltersEvent = () => applyFilters();

    searchInput.addEventListener('input', applyFiltersEvent);
    searchInputMain.addEventListener('input', applyFiltersEvent);
    categoryCheckboxes.forEach(cb => cb.addEventListener('change', applyFiltersEvent));
    priceFilter.addEventListener('change', applyFiltersEvent);
    sortFilter.addEventListener('change', applyFiltersEvent);
}

function applyFilters() {
    let filtered = [...products];

    // BÚSQUEDA
    const searchTerm = document.getElementById('search-input').value.toLowerCase() ||
                      document.getElementById('search-input-main').value.toLowerCase();

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    // CATEGORÍAS
    const selectedCategories = [];
    document.querySelectorAll('[id^="cat-"]:checked').forEach(cb => {
        selectedCategories.push(cb.value);
    });

    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // PRECIO
    const priceRange = document.getElementById('price-filter').value;
    if (priceRange) {
        filtered = filtered.filter(p => {
            if (priceRange === '0-15000') return p.price < 15000;
            if (priceRange === '15000-30000') return p.price >= 15000 && p.price <= 30000;
            if (priceRange === '30000-50000') return p.price >= 30000 && p.price <= 50000;
            if (priceRange === '50000+') return p.price >= 50000;
            return true;
        });
    }

    // ORDENAR
    const sortBy = document.getElementById('sort-filter').value;
    if (sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    }

    renderProducts(filtered);
}

function clearAllFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('search-input-main').value = '';
    document.querySelectorAll('[id^="cat-"]').forEach(cb => cb.checked = false);
    document.getElementById('price-filter').value = '';
    document.getElementById('sort-filter').value = '';
    renderProducts(products);
}

/* ============================================
   UTILIDADES
   ============================================ */

function getCategoryLabel(category) {
    const labels = {
        'piedras': 'Piedra Energética',
        'lamparas': 'Iluminación',
        'fuentes': 'Decoración Sensorial',
        'plantas': 'Naturaleza Interior',
        'budas': 'Decoración Espiritual',
        'aromas': 'Aromas & Velas'
    };
    return labels[category] || category;
}

/* ============================================
   MENÚ MÓVIL
   ============================================ */

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
}

/* ============================================
   CARRITO
   ============================================ */

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const item = {
        id: Date.now(),
        name: productName,
        price: price,
        quantity: 1
    };

    const existingItem = cart.find(p => p.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }

    saveCart();
    updateCartUI();
    openCart();
    showNotification(`${productName} agregado al carrito`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(id, quantity) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    let subtotal = 0;
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: rgba(232, 220, 198, 0.6); padding: 40px 20px;">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toLocaleString('es-AR')}</p>
                </div>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <input type="number"
                           value="${item.quantity}"
                           min="1"
                           style="width: 50px; padding: 5px; background: rgba(255,255,255,0.1); border: 1px solid rgba(201,181,111,0.3); color: var(--color-beige);"
                           onchange="updateCartQuantity(${item.id}, this.value)">
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    cartSubtotal.textContent = '$' + subtotal.toLocaleString('es-AR');
}

function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

document.getElementById('cart-toggle').addEventListener('click', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
});

/* ============================================
   CHECKOUT WHATSAPP
   ============================================ */

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    let message = '*PEDIDO DESDE ARMONÍA ZEN*\n\n';
    let subtotal = 0;

    cart.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
        message += `• ${item.name}\n  Cantidad: ${item.quantity}\n  Subtotal: $${itemSubtotal.toLocaleString('es-AR')}\n\n`;
    });

    message += `*Total: $${subtotal.toLocaleString('es-AR')}*\n\n`;
    message += 'Por favor, confirmame la disponibilidad y los datos de envío.';

    const phoneNumber = '5491234567890';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}

/* ============================================
   NOTIFICACIONES
   ============================================ */

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #25D366;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        font-size: 0.9rem;
        z-index: 300;
        animation: slideInUp 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
