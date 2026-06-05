/* ============================================
   INICIALIZACIÓN Y CONFIGURACIÓN
   ============================================ */

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    hidePreloader();
    setupMobileMenu();
    setupIntentionCards();
    updateCartUI();
});

/* ============================================
   PRELOADER
   ============================================ */

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }, 2000);
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
   INTENTION CARDS
   ============================================ */

function setupIntentionCards() {
    const cards = document.querySelectorAll('.intention-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const intention = this.dataset.intention;
            showIntentionProducts(intention);
        });
    });
}

function showIntentionProducts(intention) {
    const intentionProducts = {
        proteccion: [
            'Amatista Natural',
            'Buda Meditativo',
            'Incienso de Sándalo'
        ],
        amor: [
            'Cuarzo Rosa',
            'Vela de Intención',
            'Planta Monstera'
        ],
        abundancia: [
            'Lámpara de Sal del Himalaya',
            'Fuente de Agua Zen'
        ],
        calma: [
            'Amatista Natural',
            'Lámpara de Sal del Himalaya'
        ],
        claridad: [
            'Cuarzo Rosa',
            'Buda Meditativo'
        ],
        limpieza: [
            'Incienso de Sándalo',
            'Lámpara de Sal del Himalaya'
        ],
        meditacion: [
            'Buda Meditativo',
            'Cuarzo Rosa',
            'Incienso de Sándalo'
        ],
        armonia: [
            'Fuente de Agua Zen',
            'Buda Meditativo',
            'Planta Monstera'
        ]
    };

    const products = intentionProducts[intention] || [];

    if (products.length > 0) {
        alert(`Productos recomendados para ${intention}:\n\n${products.join('\n')}\n\nVe a nuestro catálogo para comprar estos productos.`);
    }
}

/* ============================================
   NEWSLETTER
   ============================================ */

function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    alert(`¡Gracias por suscribirte! Revisa tu email ${email} para confirmar.`);
    e.target.reset();

    showNotification('¡Te has suscrito correctamente!');
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

/* ============================================
   SCROLL EFFECTS
   ============================================ */

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');

    if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

/* ============================================
   ANIMACIONES EN SCROLL
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .blog-card, .guide-card, .sensory-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});
