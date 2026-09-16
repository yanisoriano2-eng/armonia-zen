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

    /* ---------- Tarjetas de ofertas (home): tocar la tarjeta lleva al detalle ---------- */
    document.querySelectorAll('.offer-card[data-id]').forEach(function (card) {
        card.addEventListener('click', function (e) {
            if (e.target.closest('button, a')) return;
            window.location.href = 'producto.html?id=' + card.getAttribute('data-id');
        });
    });

    /* ---------- Tarjetas de "piezas destacadas" (home): tocar lleva al detalle ---------- */
    document.querySelectorAll('.product[data-id]').forEach(function (card) {
        card.addEventListener('click', function (e) {
            if (e.target.closest('button, a')) return;
            window.location.href = 'producto.html?id=' + card.getAttribute('data-id');
        });
    });

    /* ---------- Descubrí tu piedra energética ---------- */
    var stoneForm = document.getElementById('stone-finder-form');
    if (stoneForm) {
        var STONES = {
            aries:       { stone: 'Ojo de Tigre',        trait: 'coraje, confianza y ganas de arrancar todo lo que te propongas.', id: 'pulsera-ojo-tigre-acero', name: 'Pulsera de Acero con Ojo de Tigre', price: 5000, img: 'imagenes/catalogo/pulsera-ojo-tigre-acero.jpg' },
            tauro:       { stone: 'Cuarzo Rosa',         trait: 'amor propio, calma y estabilidad emocional.', id: 'cadena-corazon-cuarzo-rosa-acero', name: 'Cadena Corazón Cuarzo Rosa', price: 8000, img: 'imagenes/catalogo/cadena-corazon-cuarzo-rosa-acero.jpg' },
            geminis:     { stone: 'Citrino',             trait: 'alegría, claridad mental y buena comunicación.', id: 'cadena-citrino-bruto-acero', name: 'Cadena Piedra de Citrino en Bruto', price: 12000, img: 'imagenes/catalogo/cadena-citrino-bruto-acero.jpg' },
            cancer:      { stone: 'Piedra de la Luna',   trait: 'intuición, sensibilidad y conexión con tus ciclos.', id: 'aros-piedra-luna-acero', name: 'Aros de Acero Quirúrgico con Piedra de la Luna', price: 5000, img: 'imagenes/catalogo/aros-piedra-luna-acero.jpg' },
            leo:         { stone: 'Ojo de Tigre',        trait: 'poder personal y brillo propio, sin miedo a mostrarte.', id: 'anillo-ojo-tigre-acero', name: 'Anillo de Acero con Ojo de Tigre', price: 8000, img: 'imagenes/catalogo/anillo-ojo-tigre-acero.jpg' },
            virgo:       { stone: 'Aventurina',          trait: 'orden, buena suerte y calma frente a los cambios.', id: 'aros-aventurina-acero', name: 'Aros de Acero Quirúrgico con Aventurina', price: 5000, img: 'imagenes/catalogo/aros-aventurina-acero.jpg' },
            libra:       { stone: 'Cuarzo Rosa',         trait: 'armonía, vínculos sanos y equilibrio emocional.', id: 'anillo-alpaca-cuarzo-rosa', name: 'Anillo de Alpaca con Cuarzo Rosa', price: 8000, img: 'imagenes/catalogo/anillo-alpaca-cuarzo-rosa.jpg' },
            escorpio:    { stone: 'Obsidiana',           trait: 'transformación, intensidad y protección desde la fuerza.', id: 'cadena-corazon-obsidiana-acero', name: 'Cadena Corazón Obsidiana', price: 8000, img: 'imagenes/catalogo/cadena-corazon-obsidiana-acero.jpg' },
            sagitario:   { stone: 'Turquesa',            trait: 'aventura, libertad y protección en cada viaje.', id: 'anillo-alpaca-turquesa', name: 'Anillo de Alpaca con Turquesa', price: 8000, img: 'imagenes/catalogo/anillo-alpaca-turquesa.jpg' },
            capricornio: { stone: 'Labradorita + Pirita', trait: 'ambición, visión clara y voluntad para construir a largo plazo.', id: 'anillo-labradorita-pirita', name: 'Anillo Labradorita + Pirita', price: 15000, img: 'imagenes/catalogo/anillo-labradorita-pirita-real.jpg' },
            acuario:     { stone: 'Amatista',            trait: 'originalidad, claridad mental y espíritu independiente.', id: 'anillo-alpaca-amatista-regulable', name: 'Anillo Regulable de Alpaca con Amatista', price: 10000, img: 'imagenes/catalogo/anillo-alpaca-amatista-regulable.jpg' },
            piscis:      { stone: 'Amatista',            trait: 'intuición profunda, sensibilidad y conexión espiritual.', id: 'pulsera-amatista-piedras', name: 'Pulsera de Piedras Amatista', price: 10000, img: 'imagenes/catalogo/pulsera-amatista-piedras.jpg' }
        };

        function zodiacSign(month, day) {
            if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricornio';
            if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'acuario';
            if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'piscis';
            if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
            if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'tauro';
            if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'geminis';
            if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
            if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
            if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
            if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
            if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'escorpio';
            return 'sagitario';
        }

        stoneForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var nameEl = document.getElementById('stone-finder-name');
            var dateEl = document.getElementById('stone-finder-date');
            var resultEl = document.getElementById('stone-finder-result');
            var name = (nameEl.value || '').trim();
            var dateVal = dateEl.value;
            if (!name || !dateVal) return;

            var parts = dateVal.split('-');
            var month = parseInt(parts[1], 10);
            var day = parseInt(parts[2], 10);
            var sign = zodiacSign(month, day);
            var rec = STONES[sign];

            var firstName = name.split(' ')[0];
            resultEl.innerHTML =
                '<div class="stone-result reveal in">' +
                    '<img class="stone-result__img" src="' + rec.img + '" alt="' + rec.name + '">' +
                    '<div class="stone-result__body">' +
                        '<span class="stone-result__eyebrow">Para ' + firstName + '</span>' +
                        '<h3 class="stone-result__stone">Tu piedra es ' + rec.stone + '</h3>' +
                        '<p class="stone-result__trait">Te acompaña con ' + rec.trait + '</p>' +
                        '<div class="stone-result__product">' +
                            '<span class="stone-result__product-name">' + rec.name + '</span>' +
                            '<span class="stone-result__product-price">' + money(rec.price) + '</span>' +
                        '</div>' +
                        '<div class="stone-result__actions">' +
                            '<a href="producto.html?id=' + rec.id + '" class="btn btn--solid">Ver detalle</a>' +
                            '<button class="btn" onclick="addToCart(\'' + rec.name.replace(/'/g, "\\'") + '\', ' + rec.price + ')">Agregar al carrito</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    /* ---------- Header: transparente -> glassmorphism ---------- */
    var header = document.getElementById('header');
    /* Páginas internas cargan el header ya "scrolled" (opaco) a propósito,
       porque no tienen una foto de hero oscura detrás para contrastar el
       texto claro del header transparente. Solo alternamos el estado en
       páginas que arrancan sin esa clase (home, con hero transparente). */
    var headerTogglesOnScroll = header && !header.classList.contains('scrolled');
    function onScrollHeader() {
        if (!header || !headerTogglesOnScroll) return;
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
                    '<div class="cart-line__top">' +
                        '<div><div class="cart-line__name">' + item.name + '</div>' +
                        '<div class="cart-line__price">' + money(item.price) + ' c/u</div></div>' +
                        '<button class="cart-line__remove" onclick="removeFromCart(' + i + ')" aria-label="Quitar">&times;</button>' +
                    '</div>' +
                    '<div class="cart-line__bottom">' +
                        '<div class="cart-line__qty">' +
                            '<button class="cart-line__qty-btn" onclick="decrementCartItem(' + i + ')" aria-label="Restar uno">&minus;</button>' +
                            '<span class="cart-line__qty-val">' + item.qty + '</span>' +
                            '<button class="cart-line__qty-btn" onclick="incrementCartItem(' + i + ')" aria-label="Sumar uno">+</button>' +
                        '</div>' +
                        '<div class="cart-line__linetotal">' + money(item.price * item.qty) + '</div>' +
                    '</div>' +
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

    window.incrementCartItem = function (index) {
        if (!cart[index]) return;
        cart[index].qty += 1;
        saveCart();
        renderCart();
    };

    window.decrementCartItem = function (index) {
        if (!cart[index]) return;
        cart[index].qty -= 1;
        if (cart[index].qty <= 0) cart.splice(index, 1);
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
