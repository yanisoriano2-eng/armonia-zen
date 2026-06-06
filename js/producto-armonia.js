/* ==========================================================================
   ARMONÍA ZEN — Página de producto individual
   ========================================================================== */

(function () {
    'use strict';

    var BASE = 'https://images.unsplash.com/photo-';
    var Q    = '?w=1000&q=85&auto=format&fit=crop';
    var QS   = '?w=300&q=70&auto=format&fit=crop';

    function $(id) { return document.getElementById(id); }

    function money(n) { return '$ ' + Number(n).toLocaleString('es-AR'); }

    function getWishlist() {
        try { return JSON.parse(localStorage.getItem('az_wish') || '[]'); } catch(e) { return []; }
    }
    function setWishlist(arr) { localStorage.setItem('az_wish', JSON.stringify(arr)); }

    function addRecent(id) {
        try {
            var r = JSON.parse(localStorage.getItem('az_recent') || '[]').filter(function(x){ return x !== id; });
            r.unshift(id);
            localStorage.setItem('az_recent', JSON.stringify(r.slice(0, 6)));
        } catch(e) {}
    }

    /* ---- Leer ?id= de la URL ---- */
    function getParam(name) {
        var m = (location.search || '').match(new RegExp('[?&]' + name + '=([^&]*)'));
        return m ? decodeURIComponent(m[1]) : null;
    }

    var id = getParam('id');

    /* Espera a que el catalogo-armonia.js haya definido window.__azProducts */
    function waitProducts(cb) {
        if (window.__azProducts) { cb(window.__azProducts); return; }
        var t = 0;
        var iv = setInterval(function() {
            t += 50;
            if (window.__azProducts) { clearInterval(iv); cb(window.__azProducts); }
            if (t > 3000) { clearInterval(iv); showNotFound(); }
        }, 50);
    }

    function showNotFound() {
        var d = $('prod-detail');
        if (d) d.innerHTML = '<div style="padding:100px var(--gutter);text-align:center;"><p style="font-family:var(--serif);font-size:1.6rem;color:var(--sage-faint);">Producto no encontrado.</p><a href="catalogo.html" style="color:var(--sage);margin-top:18px;display:inline-block;">Volver al catálogo</a></div>';
    }

    function imgUrl(p, size) {
        var I = { crystal:'1609216970378-ce61cd74a187', amethyst:'1632980205460-e490e885e848', rose:'1593259213062-57b0ce5906cf', stone:'1597336465111-a392afd218bc', water:'1564462369724-4003221599e2', salt:'1623241923490-5b2fd532828f', buddha:'1596045571419-664297d8f502', aroma:'1639390167093-9c62311fe84d', plant:'1764422097784-0eaa2340d0e1', space:'1619166855707-bba87a7772a2', candle:'1609850280339-b85f1fd5d351', nature:'1650208532541-572697b3dd40', zen:'1606744837616-56c9a5c6a6eb', smoke:'1568990416308-c998af4cf9ee' };
        var key = p.img || 'crystal';
        return BASE + (I[key] || I.crystal) + (size === 'sm' ? QS : Q);
    }

    function render(p) {
        /* SEO */
        document.title = p.name + ' — Armonía Zen';
        var descEl = document.getElementById('doc-desc');
        if (descEl) descEl.setAttribute('content', p.descShort);

        /* Breadcrumb */
        var bcName = $('bc-name');
        if (bcName) bcName.textContent = p.name;

        /* Galería */
        var gImg = $('gallery-img');
        if (gImg) { gImg.src = imgUrl(p); gImg.alt = p.name; }

        /* Thumbnails — usamos la misma imagen 3 veces (sin fotos múltiples reales) */
        var thumbs = $('gallery-thumbs');
        if (thumbs) {
            var srcMain = imgUrl(p);
            var srcAlt1 = imgUrl(p, 'sm');
            thumbs.innerHTML = [srcMain, srcAlt1, srcAlt1].map(function(src, i) {
                return '<img class="prod-gallery__thumb' + (i === 0 ? ' active' : '') + '" src="' + src + '" alt="' + p.name + ' vista ' + (i+1) + '">';
            }).join('');
            thumbs.querySelectorAll('.prod-gallery__thumb').forEach(function(th) {
                th.addEventListener('click', function() {
                    thumbs.querySelectorAll('.prod-gallery__thumb').forEach(function(x){ x.classList.remove('active'); });
                    th.classList.add('active');
                    if (gImg) gImg.src = th.src.replace(/\?.*/, Q);
                });
            });
        }

        /* Badges */
        var badgesEl = $('info-badges');
        if (badgesEl && p.badges && p.badges.length) {
            badgesEl.innerHTML = p.badges.map(function(b){
                return '<span class="pbadge pbadge--' + b.cls + '">' + b.label + '</span>';
            }).join('');
        }

        /* Nombre */
        var nameEl = $('info-name');
        if (nameEl) nameEl.textContent = p.name;

        /* Precio */
        var priceEl = $('info-price');
        if (priceEl) {
            if (p.priceOrig) {
                priceEl.innerHTML = '<span class="prod-info__price-orig">' + money(p.priceOrig) + '</span><span class="prod-info__price-main prod-info__price-sale">' + money(p.price) + '</span>';
            } else {
                priceEl.innerHTML = '<span class="prod-info__price-main">' + money(p.price) + '</span>';
            }
        }

        /* Descripción */
        var descEl2 = $('info-desc');
        if (descEl2) descEl2.innerHTML = p.descLong || p.descShort;

        /* Botón carrito */
        var btnCart = $('btn-cart');
        if (btnCart) {
            btnCart.addEventListener('click', function() {
                if (window.addToCart) addToCart(p.name, p.price);
            });
        }

        /* Botón WhatsApp */
        var btnWa = $('btn-wa');
        if (btnWa) {
            var num = (window.AZ && AZ.get('whatsapp')) || '5491234567890';
            var msg = encodeURIComponent('Hola! Me interesa: ' + p.name + ' (' + money(p.price) + ')');
            btnWa.href = 'https://wa.me/' + num + '?text=' + msg;
        }

        /* Wishlist */
        var btnWish = $('btn-wish');
        var wish = getWishlist();
        var inWish = wish.indexOf(p.id) > -1;
        if (btnWish) {
            btnWish.textContent = inWish ? '♥' : '♡';
            if (inWish) btnWish.classList.add('liked');
            btnWish.addEventListener('click', function() {
                var w = getWishlist();
                var idx = w.indexOf(p.id);
                if (idx > -1) { w.splice(idx, 1); btnWish.classList.remove('liked'); btnWish.textContent = '♡'; }
                else { w.push(p.id); btnWish.classList.add('liked'); btnWish.textContent = '♥'; }
                setWishlist(w);
            });
        }

        /* Características */
        if (p.features && p.features.length) {
            var bl = $('block-features');
            var fl = $('features-list');
            if (bl && fl) {
                bl.style.display = '';
                fl.innerHTML = p.features.map(function(f) {
                    return '<li class="prod-features__item"><span class="prod-features__label">' + f.l + '</span><span class="prod-features__val">' + f.v + '</span></li>';
                }).join('');
            }
        }

        /* Beneficios */
        if (p.benefits && p.benefits.length) {
            var bb = $('block-benefits');
            var bg = $('benefits-grid');
            if (bb && bg) {
                bb.style.display = '';
                bg.innerHTML = p.benefits.map(function(b) {
                    return '<span class="prod-benefit">' + b + '</span>';
                }).join('');
            }
        }

        /* Info energética */
        if (p.energy) {
            var be = $('block-energy');
            var en = $('energy-name');
            var eg = $('energy-grid');
            if (be && en && eg) {
                be.style.display = '';
                en.textContent = p.energy.name;
                var rows = [
                    { l: 'Chakra', v: p.energy.chakra },
                    { l: 'Elemento', v: p.energy.element },
                    { l: 'Intención', v: p.energy.intention }
                ].filter(function(r){ return r.v; });
                eg.innerHTML = rows.map(function(r) {
                    return '<div class="prod-energy__item"><div class="prod-energy__label">' + r.l + '</div><div class="prod-energy__val">' + r.v + '</div></div>';
                }).join('');
            }
        }

        /* FAQ */
        if (p.faq && p.faq.length) {
            var bf = $('block-faq');
            var fl2 = $('faq-list');
            if (bf && fl2) {
                bf.style.display = '';
                fl2.innerHTML = p.faq.map(function(item, i) {
                    return '<div class="prod-faq-item" id="pfaq-' + i + '">' +
                        '<button class="prod-faq-q">' + item.q + '</button>' +
                        '<div class="prod-faq-a">' + item.a + '</div>' +
                    '</div>';
                }).join('');
                fl2.querySelectorAll('.prod-faq-item').forEach(function(item) {
                    item.querySelector('.prod-faq-q').addEventListener('click', function() {
                        item.classList.toggle('open');
                    });
                });
            }
        }

        /* Productos relacionados — misma categoría */
        var related = (window.__azProducts || []).filter(function(x){ return x.cat === p.cat && x.id !== p.id; }).slice(0, 4);
        if (related.length) {
            var rs = $('related-section');
            var rg = $('related-grid');
            if (rs && rg) {
                rs.style.display = '';
                rg.innerHTML = related.map(function(rp) {
                    return '<a href="producto.html?id=' + rp.id + '" class="pcard" style="text-decoration:none;">' +
                        '<div class="pcard__img"><img src="' + imgUrl(rp) + '" alt="' + rp.name + '" loading="lazy"></div>' +
                        '<div class="pcard__body">' +
                            '<span class="pcard__sub">' + rp.subcat + '</span>' +
                            '<h3 class="pcard__name">' + rp.name + '</h3>' +
                            '<div class="pcard__foot">' +
                                '<div class="pcard__price">' + money(rp.price) + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</a>';
                }).join('');
            }
        }

        /* Registrar vista */
        addRecent(p.id);

        /* Scroll reveal */
        document.querySelectorAll('.reveal').forEach(function(el) {
            el.classList.add('in');
        });
    }

    /* ---- Arranque ---- */
    if (!id) { showNotFound(); return; }

    waitProducts(function(products) {
        var p = products.filter(function(x){ return x.id === id; })[0];
        if (!p) { showNotFound(); return; }
        render(p);
    });

})();
