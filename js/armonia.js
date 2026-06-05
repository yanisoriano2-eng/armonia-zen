/* ==========================================================================
   ARMONÍA ZEN — Interacciones
   Parallax · Scroll reveal · Header · Carrito · Menú móvil
   ========================================================================== */

(function () {
    'use strict';

    /* ---------- Preloader ---------- */
    window.addEventListener('load', function () {
        var pre = document.getElementById('preloader');
        if (pre) setTimeout(function () { pre.classList.add('hidden'); }, 1600);
    });

    /* ---------- Header: transparente -> glassmorphism ---------- */
    var header = document.getElementById('header');
    function onScrollHeader() {
        if (!header) return;
        if (window.scrollY > 60) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();

    /* ---------- Menú móvil ---------- */
    var toggle = document.getElementById('menu-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });
        mobileNav.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                toggle.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---------- Scroll reveal (IntersectionObserver) ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---------- Parallax suave (rAF, transform translateY) ---------- */
    var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    var ticking = false;
    function applyParallax() {
        var vh = window.innerHeight;
        parallaxEls.forEach(function (el) {
            var rect = el.parentElement.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > vh) return;
            var speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
            var offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
            el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
        });
        ticking = false;
    }
    function requestParallax() {
        if (!ticking) { window.requestAnimationFrame(applyParallax); ticking = true; }
    }
    if (parallaxEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestParallax, { passive: true });
        window.addEventListener('resize', requestParallax);
        applyParallax();
    }

    /* ==========================================================================
       CARRITO
       ========================================================================== */

    var cart = [];
    try { cart = JSON.parse(localStorage.getItem('armonia_cart')) || []; } catch (e) { cart = []; }

    var panel = document.getElementById('cart-panel');
    var overlay = document.getElementById('cart-overlay');

    function saveCart() { localStorage.setItem('armonia_cart', JSON.stringify(cart)); }

    function money(n) { return '$' + n.toLocaleString('es-AR'); }

    function renderCart() {
        var itemsEl = document.getElementById('cart-items');
        var countEl = document.getElementById('cart-count');
        var subEl = document.getElementById('cart-subtotal');
        if (!itemsEl) return;

        if (cart.length === 0) {
            itemsEl.innerHTML = '<p class="cart-empty">Tu carrito está esperando.<br>Aún no hay piezas elegidas.</p>';
        } else {
            itemsEl.innerHTML = cart.map(function (item, i) {
                return '<div class="cart-line">' +
                    '<div><div class="cart-line__name">' + item.name + '</div>' +
                    '<div class="cart-line__price">' + (item.qty > 1 ? item.qty + ' × ' : '') + money(item.price) + '</div></div>' +
                    '<button class="cart-line__remove" onclick="removeFromCart(' + i + ')">Quitar</button>' +
                    '</div>';
            }).join('');
        }

        var count = cart.reduce(function (s, i) { return s + i.qty; }, 0);
        var subtotal = cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
        if (countEl) countEl.textContent = count;
        if (subEl) subEl.textContent = money(subtotal);
    }

    window.addToCart = function (name, price) {
        var existing = cart.find(function (i) { return i.name === name; });
        if (existing) existing.qty += 1;
        else cart.push({ name: name, price: price, qty: 1 });
        saveCart();
        renderCart();
        showToast(name + ' · añadido al carrito');
        openCart();
    };

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    };

    function openCart() {
        if (panel) panel.classList.add('open');
        if (overlay) overlay.classList.add('open');
    }
    function closeCart() {
        if (panel) panel.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
    }

    var trigger = document.getElementById('cart-trigger');
    var closeBtn = document.getElementById('cart-close');
    if (trigger) trigger.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);

    function waNumber() { return window.AZ_WA || (window.AZ && AZ.get('settings.whatsapp.number')) || '5491234567890'; }

    window.checkoutWhatsApp = function () {
        if (cart.length === 0) { showToast('Tu carrito está vacío'); return; }
        var intro = window.AZ_WA_MSG || 'Hola Armonía Zen, me gustaría encargar:';
        var msg = intro + '%0A%0A';
        var total = 0;
        cart.forEach(function (i) {
            msg += '• ' + i.name + ' (x' + i.qty + ') — ' + money(i.price * i.qty) + '%0A';
            total += i.price * i.qty;
        });
        msg += '%0ATotal: ' + money(total);
        window.open('https://wa.me/' + waNumber() + '?text=' + encodeURIComponent(intro) + msg.slice(intro.length), '_blank');
    };

    /* ---------- Toast ---------- */
    var toastTimer;
    function showToast(text) {
        var t = document.getElementById('toast');
        if (!t) return;
        t.textContent = text;
        t.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
    }
    window.showToast = showToast;

    /* ---------- Newsletter ---------- */
    window.handleNewsletter = function (e) {
        e.preventDefault();
        e.target.reset();
        showToast('Gracias por sumarte a la carta de Armonía.');
    };

    /* ---------- FAQ acordeón ---------- */
    document.querySelectorAll('.faq-q').forEach(function (q) {
        q.addEventListener('click', function () {
            var item = q.parentElement;
            var wasOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); });
            if (!wasOpen) item.classList.add('open');
        });
    });

    /* ---------- Formulario de contacto -> WhatsApp ---------- */
    window.handleContactForm = function (e) {
        e.preventDefault();
        var f = e.target;
        var nombre = (f.nombre && f.nombre.value) || '';
        var email = (f.email && f.email.value) || '';
        var consulta = (f.consulta && f.consulta.value) || '';
        var mensaje = (f.mensaje && f.mensaje.value) || '';
        // Guardar la consulta para que aparezca en el panel
        if (window.AZ && AZ.upsert) {
            AZ.upsert('messages', { id: null, name: nombre, email: email, whatsapp: '', reason: consulta, message: mensaje, date: new Date().toISOString(), status: 'nuevo' });
        }
        var text = 'Hola Armonía Zen, soy ' + nombre + '.\n\nConsulta: ' + consulta + '\n\n' + mensaje;
        window.open('https://wa.me/' + waNumber() + '?text=' + encodeURIComponent(text), '_blank');
        f.reset();
        showToast('Te redirigimos a WhatsApp para enviar tu mensaje.');
    };

    renderCart();
})();
