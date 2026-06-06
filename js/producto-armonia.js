/* ==========================================================================
   ARMONÍA ZEN — Producto premium (ph- system)
   ========================================================================== */
(function () {
    'use strict';

    var BASE = 'https://images.unsplash.com/photo-';
    var Q    = '?w=1200&q=85&auto=format&fit=crop';
    var QM   = '?w=600&q=80&auto=format&fit=crop';
    var QS   = '?w=300&q=70&auto=format&fit=crop';

    var IMG_IDS = {
        crystal:   '1609216970378-ce61cd74a187',
        amethyst:  '1632980205460-e490e885e848',
        rose:      '1593259213062-57b0ce5906cf',
        stone:     '1597336465111-a392afd218bc',
        water:     '1564462369724-4003221599e2',
        salt:      '1623241923490-5b2fd532828f',
        buddha:    '1596045571419-664297d8f502',
        aroma:     '1639390167093-9c62311fe84d',
        plant:     '1764422097784-0eaa2340d0e1',
        space:     '1619166855707-bba87a7772a2',
        candle:    '1609850280339-b85f1fd5d351',
        nature:    '1650208532541-572697b3dd40',
        zen:       '1606744837616-56c9a5c6a6eb',
        smoke:     '1568990416308-c998af4cf9ee'
    };

    function imgUrl(key, size) {
        var id = IMG_IDS[key] || IMG_IDS.crystal;
        var q  = size === 'sm' ? QS : size === 'md' ? QM : Q;
        return BASE + id + q;
    }

    function money(n) { return '$ ' + Number(n).toLocaleString('es-AR'); }
    function $(id) { return document.getElementById(id); }

    function getParam(name) {
        var m = (location.search || '').match(new RegExp('[?&]' + name + '=([^&]*)'));
        return m ? decodeURIComponent(m[1]) : null;
    }

    function getWish() { try { return JSON.parse(localStorage.getItem('az_wish') || '[]'); } catch(e) { return []; } }
    function setWish(a) { localStorage.setItem('az_wish', JSON.stringify(a)); }

    function addRecent(id) {
        try {
            var r = JSON.parse(localStorage.getItem('az_recent') || '[]').filter(function(x){ return x !== id; });
            r.unshift(id); localStorage.setItem('az_recent', JSON.stringify(r.slice(0,6)));
        } catch(e) {}
    }

    function waitProducts(cb) {
        if (window.__azProducts) { cb(window.__azProducts); return; }
        var t = 0, iv = setInterval(function(){
            t += 50;
            if (window.__azProducts) { clearInterval(iv); cb(window.__azProducts); }
            if (t > 4000) { clearInterval(iv); showNotFound(); }
        }, 50);
    }

    function showNotFound() {
        var s = $('ph-skeleton');
        if (s) s.innerHTML = '<div style="padding:100px var(--gutter);text-align:center;grid-column:1/-1;"><p style="font-family:var(--serif);font-size:1.6rem;color:var(--ivory-soft);">Producto no encontrado.</p><a href="catalogo.html" style="color:var(--gold);margin-top:18px;display:inline-block;letter-spacing:.1em;font-size:.8rem;">Volver al catálogo</a></div>';
    }

    /* ---- Icons para beneficios ---- */
    var ICONS = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2a5 5 0 0 1 5 5c0 5.25-5 13-5 13S7 12.25 7 7a5 5 0 0 1 5-5z"/><circle cx="12" cy="7" r="2"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
    ];

    /* ---- Defaults por categoría ---- */
    var CAT_DEFAULTS = {
        joyeria: {
            ritual: [
                { title: 'Limpiá la pieza', desc: 'Pasá un paño suave sobre la joya antes de usarla por primera vez.' },
                { title: 'Ponétela con intención', desc: 'Mientras la colocás, pensá en el propósito que querés que acompañe.' },
                { title: 'Usála como recordatorio', desc: 'Cada vez que la veas o la toques, volvé a tu intención original.' },
                { title: 'Limpiála energéticamente', desc: 'Una vez por semana, dejála bajo luz de luna o sobre un cuarzo blanco.' }
            ],
            edu: { title: 'Sobre las piedras naturales', blocks: [
                { h: 'Origen', p: 'Cada piedra es un fragmento de historia geológica. Su formación puede haber tomado millones de años bajo presiones y temperaturas extremas.' },
                { h: 'Propiedades', p: 'La cristaloterapia trabaja con la vibración energética de los minerales. Cada piedra tiene una frecuencia particular que puede complementar distintos aspectos del bienestar.' },
                { h: 'Cuidado', p: 'Evitá exponer las piedras a luz solar directa por períodos prolongados. Limpiá con paño seco y recargálas bajo la luna llena.' }
            ]}
        },
        plantas: {
            ritual: [
                { title: 'Elegí el lugar', desc: 'Observá la luz natural de tu espacio. Cada planta tiene sus preferencias.' },
                { title: 'Preparála', desc: 'Revisá el sustrato y el drenaje antes de ubicarla definitivamente.' },
                { title: 'Integrála', desc: 'Colocá la planta con cuidado y dale tiempo para adaptarse al nuevo ambiente.' },
                { title: 'Establecé una rutina', desc: 'El riego regular y la observación semanal son la clave para una planta sana.' }
            ],
            edu: { title: 'Cuidados de la planta', blocks: [
                { h: 'Luz', p: 'Cada especie tiene sus necesidades lumínicas. Como regla general, una luz brillante indirecta favorece a la mayoría de las plantas de interior.' },
                { h: 'Riego', p: 'Menos es más en la mayoría de los casos. Es preferible regar bien y con menor frecuencia que humedecer superficialmente a diario.' },
                { h: 'Sustrato', p: 'Un sustrato con buen drenaje es fundamental. Mezclá tierra de calidad con perlita o arena gruesa para evitar encharcamientos.' }
            ]}
        },
        decoracion: {
            ritual: [
                { title: 'Elegí un lugar especial', desc: 'Encontrá un espacio donde la pieza sea vista y apreciada a diario.' },
                { title: 'Limpiá el entorno', desc: 'Despejá el área y limpiá con intención antes de colocar la pieza.' },
                { title: 'Colocála con intención', desc: 'Ubicá la pieza pensando en el mensaje o la energía que querés que irradie.' },
                { title: 'Acompañá el momento', desc: 'Usá incienso o palo santo para acompañar la inauguración del espacio.' }
            ],
            edu: { title: 'Sobre la decoración consciente', blocks: [
                { h: 'El objeto como intención', p: 'En las tradiciones orientales, cada objeto en el hogar es elegido con propósito. No se trata de acumular, sino de seleccionar piezas que eleven la vibración del espacio.' },
                { h: 'Feng Shui básico', p: 'La posición de los objetos influye en el flujo de energía del hogar. Ubicar piezas cerca de fuentes de luz natural amplifica su efecto visual y energético.' }
            ]}
        },
        aromaterapia: {
            ritual: [
                { title: 'Prepárate', desc: 'Elegí un momento tranquilo, alejate del teléfono y prepará el espacio.' },
                { title: 'Activá el aroma', desc: 'Encendé el sahumerio, esencia o palo santo y dejá que el humo circule.' },
                { title: 'Respirá', desc: 'Respirá profundo tres veces, inhalando el aroma conscientemente.' },
                { title: 'Cerrá el ritual', desc: 'Apagá la fuente de aroma y permanecé en silencio un momento antes de continuar.' }
            ],
            edu: { title: 'Aromaterapia y bienestar', blocks: [
                { h: '¿Qué es?', p: 'La aromaterapia usa aceites esenciales y resinas naturales para influir en el estado ánímico y la salud a través del sentido del olfato.' },
                { h: 'Beneficios comprobados', p: 'Estudios respaldan el efecto de ciertos aromas en la reducción del cortisol (hormona del estrés), mejora del sueño y elevación del ánimo.' }
            ]}
        }
    };

    function getDefaults(cat) { return CAT_DEFAULTS[cat] || CAT_DEFAULTS.decoracion; }

    /* ==========================================================================
       RENDER
    ========================================================================== */
    function render(p, enriched) {
        var data = enriched || {};

        /* Ocultar skeleton, mostrar hero */
        var skel = $('ph-skeleton'); if (skel) skel.style.display = 'none';
        var hero = $('ph-hero');     if (hero) hero.style.display = '';

        /* SEO */
        document.title = p.name + ' — Armonía Zen';
        var mDesc = $('doc-desc');  if (mDesc) mDesc.setAttribute('content', p.descShort);
        var ogT   = $('og-title'); if (ogT)   ogT.setAttribute('content', p.name + ' — Armonía Zen');
        var ogD   = $('og-desc');  if (ogD)   ogD.setAttribute('content', p.descShort);
        var ogI   = $('og-image'); if (ogI)   ogI.setAttribute('content', imgUrl(p.img));

        injectSchemas(p);

        /* Breadcrumb */
        var bcN = $('ph-bc-name'); if (bcN) bcN.textContent = p.name;

        /* Imágenes */
        var mainImg = $('ph-img-main');
        if (mainImg) { mainImg.src = imgUrl(p.img); mainImg.alt = p.name; }
        var ctaBg = $('ph-cta-bg');
        if (ctaBg) ctaBg.style.backgroundImage = "url('" + imgUrl(p.img, 'md') + "')";
        var storyImg = $('ph-story-img');
        if (storyImg) { storyImg.src = imgUrl(p.img, 'md'); storyImg.alt = p.name; }

        renderThumbs(p, data.images || []);

        /* Sticky */
        var si = $('ph-sticky-img');   if (si) { si.src = imgUrl(p.img, 'sm'); si.alt = p.name; }
        var sn = $('ph-sticky-name');  if (sn) sn.textContent = p.name;
        var sp = $('ph-sticky-price'); if (sp) sp.textContent = money(p.price);

        /* Badges */
        var bd = $('ph-badges');
        if (bd && p.badges && p.badges.length) {
            bd.innerHTML = p.badges.map(function(b){
                return '<span class="pbadge pbadge--' + b.cls + '">' + b.label + '</span>';
            }).join('');
        }

        /* Nombre / categoría */
        var catEl = $('ph-cat');  if (catEl) catEl.textContent = p.subcat || p.cat;
        var nmEl  = $('ph-name'); if (nmEl)  nmEl.textContent  = p.name;
        var cnEl  = $('ph-cta-name'); if (cnEl) cnEl.textContent = p.name + '.';

        /* Precio */
        renderPrice(p);

        /* Social proof */
        var vn = $('ph-viewing-n'); if (vn) vn.textContent = Math.floor(Math.random()*12)+5;
        var rt = $('ph-recent-t');  if (rt) rt.textContent  = Math.floor(Math.random()*5)+1;

        /* Storytelling */
        var sb = $('ph-story-body');
        if (sb) sb.innerHTML = p.descLong || ('<p>' + p.descShort + '</p>');

        /* Secciones */
        renderBenefits(p, data.benefits || []);
        renderEnergy(p);
        renderSpecs(p, data.specs || []);
        renderRitual(p, data.ritual || null, getDefaults(p.cat).ritual);
        renderMasonry(p, data.gallery || []);
        if (data.reviews && data.reviews.length) renderReviews(data.reviews);
        renderRelated(p);
        renderEducational(p, data.educational || null, getDefaults(p.cat).edu);
        renderFaq(p);

        /* Interacciones */
        wireButtons(p);
        wireWishlist(p);
        wireShare(p);
        initSticky();
        initZoom();
        initLightbox();
        initTestimonialsSlider();
        initFaq();
        initReveal();

        /* FAQ siempre visible */
        var faqSec = $('ph-faq-sec'); if (faqSec) faqSec.style.display = '';

        addRecent(p.id);
    }

    /* ---- Thumbnails ---- */
    function renderThumbs(p, extra) {
        var c = $('ph-thumbs'); if (!c) return;
        var urls = [imgUrl(p.img), imgUrl(p.img,'md'), imgUrl(p.img,'sm')];
        extra.forEach(function(u){ if (u) urls.push(u); });
        c.innerHTML = urls.slice(0,6).map(function(src,i){
            return '<img class="ph-gallery__thumb'+(i===0?' active':'')+'" src="'+src+'" alt="Vista '+(i+1)+'" loading="lazy">';
        }).join('');
        c.querySelectorAll('.ph-gallery__thumb').forEach(function(th){
            th.addEventListener('click', function(){
                c.querySelectorAll('.ph-gallery__thumb').forEach(function(x){ x.classList.remove('active'); });
                th.classList.add('active');
                var mi = $('ph-img-main'); if (mi) mi.src = th.src.replace(/\?.*/,Q);
            });
        });
    }

    /* ---- Precio ---- */
    function renderPrice(p) {
        var el = $('ph-price'); if (!el) return;
        el.innerHTML = p.priceOrig
            ? '<span class="ph-price-orig">'+money(p.priceOrig)+'</span><span class="ph-price-main ph-price-sale">'+money(p.price)+'</span>'
            : '<span class="ph-price-main">'+money(p.price)+'</span>';
    }

    /* ---- Beneficios ---- */
    function renderBenefits(p, extra) {
        var sec  = $('ph-benefits-sec');
        var grid = $('ph-benefits-grid');
        if (!sec || !grid) return;
        var items = extra.length ? extra : (p.benefits || []);
        if (!items.length) return;
        sec.style.display = '';
        grid.innerHTML = items.map(function(b,i){
            return '<div class="ph-benefit-card"><div class="ph-benefit-icon">'+ICONS[i%ICONS.length]+'</div><div class="ph-benefit-card__text">'+b+'</div></div>';
        }).join('');
    }

    /* ---- Energía ---- */
    function renderEnergy(p) {
        var strip = $('ph-energy-strip');
        if (!strip || !p.energy) return;
        strip.style.display = '';
        var en = $('ph-energy-name'); if (en) en.textContent = p.energy.name || '';
        var eg = $('ph-energy-grid'); if (!eg) return;
        var rows = [
            { l:'Chakra', v: p.energy.chakra },
            { l:'Elemento', v: p.energy.element },
            { l:'Intención', v: p.energy.intention }
        ].filter(function(r){ return r.v; });
        eg.innerHTML = rows.map(function(r){
            return '<div class="ph-energy-item"><div class="ph-energy-label">'+r.l+'</div><div class="ph-energy-val">'+r.v+'</div></div>';
        }).join('');
    }

    /* ---- Specs ---- */
    function renderSpecs(p, extra) {
        var sec  = $('ph-specs-sec');
        var list = $('ph-specs-list');
        if (!sec || !list) return;
        var items = extra.length ? extra : (p.features || []);
        if (!items.length) return;
        sec.style.display = '';
        list.innerHTML = items.map(function(f){
            return '<div class="ph-spec-item"><dt class="ph-spec-label">'+(f.l||f.label||'')+'</dt><dd class="ph-spec-val">'+(f.v||f.value||'')+'</dd></div>';
        }).join('');
    }

    /* ---- Ritual ---- */
    function renderRitual(p, supabase, defaults) {
        var sec   = $('ph-ritual-sec');
        var steps = $('ph-ritual-steps');
        if (!sec || !steps) return;
        var ritual = supabase || defaults;
        if (!ritual || !ritual.length) return;
        sec.style.display = '';
        steps.innerHTML = ritual.map(function(s,i){
            return '<li class="ph-ritual-step"><span class="ph-ritual-num">0'+(i+1)+'</span><div class="ph-ritual-text"><h4>'+(s.title||s.step||'')+'</h4><p>'+(s.desc||s.description||'')+'</p></div></li>';
        }).join('');
    }

    /* ---- Masonry ---- */
    function renderMasonry(p, supabase) {
        var mas = $('ph-masonry'); if (!mas) return;
        var urls = supabase.length ? supabase : [
            imgUrl(p.img), imgUrl(p.img,'md'), imgUrl(p.img,'sm'),
            imgUrl(p.img), imgUrl(p.img,'md'), imgUrl(p.img)
        ];
        mas.innerHTML = urls.map(function(src,i){
            return '<div class="ph-masonry-item" data-idx="'+i+'"><img src="'+src+'" alt="Galería '+(i+1)+'" loading="lazy"></div>';
        }).join('');
        mas.querySelectorAll('.ph-masonry-item').forEach(function(item){
            item.addEventListener('click', function(){
                openLightbox(parseInt(item.dataset.idx), urls);
            });
        });
    }

    /* ---- Reviews Supabase ---- */
    function renderReviews(reviews) {
        var track = $('ph-testimonials-track');
        var dots  = $('ph-testimonials-dots');
        if (!track) return;
        track.innerHTML = reviews.map(function(r){
            return '<div class="ph-testimonial">'+
                '<div class="ph-testimonial__stars">'+'★'.repeat(r.rating||5)+'</div>'+
                '<p class="ph-testimonial__text">"'+r.text+'"</p>'+
                '<div class="ph-testimonial__author">'+
                    '<div class="ph-testimonial__avatar">'+(r.reviewer_name||'A')[0]+'</div>'+
                    '<div><strong>'+(r.reviewer_name||'')+'</strong><span>'+(r.city||'')+'</span></div>'+
                '</div></div>';
        }).join('');
        if (dots) {
            dots.innerHTML = reviews.map(function(_,i){
                return '<button class="ph-dot'+(i===0?' active':'')+'" data-idx="'+i+'"></button>';
            }).join('');
        }
    }

    /* ---- Relacionados ---- */
    function renderRelated(p) {
        var sec   = $('ph-related-sec');
        var track = $('ph-related-track');
        if (!sec || !track) return;
        var related = (window.__azProducts||[]).filter(function(x){ return x.cat===p.cat && x.id!==p.id; }).slice(0,8);
        if (!related.length) return;
        sec.style.display = '';
        track.innerHTML = related.map(function(rp){
            return '<a href="producto.html?id='+rp.id+'" class="ph-rel-card">'+
                '<div class="ph-rel-card__img"><img src="'+imgUrl(rp.img,'md')+'" alt="'+rp.name+'" loading="lazy"></div>'+
                '<div class="ph-rel-card__sub">'+rp.subcat+'</div>'+
                '<div class="ph-rel-card__name">'+rp.name+'</div>'+
                '<div class="ph-rel-card__price">'+money(rp.price)+'</div></a>';
        }).join('');
    }

    /* ---- Educativo ---- */
    function renderEducational(p, supabase, defaults) {
        var sec     = $('ph-edu-sec');
        var title   = $('ph-edu-title');
        var content = $('ph-edu-content');
        if (!sec || !content) return;
        var edu = supabase || defaults;
        if (!edu) return;
        sec.style.display = '';
        if (title) title.textContent = edu.title || 'Conocé más';
        content.innerHTML = (edu.blocks||[]).map(function(b){
            return '<div class="ph-edu-block"><h4>'+b.h+'</h4><p>'+b.p+'</p></div>';
        }).join('');
    }

    /* ---- FAQ ---- */
    function renderFaq(p) {
        var list = $('ph-faq-list'); if (!list) return;
        if (!p.faq || !p.faq.length) return;
        list.innerHTML = p.faq.map(function(item){
            return '<div class="ph-faq-item"><button class="ph-faq-q">'+item.q+'</button><div class="ph-faq-a">'+item.a+'</div></div>';
        }).join('');
    }

    /* ---- Botones ---- */
    function wireButtons(p) {
        var wa  = (window.AZ && AZ.get && AZ.get('whatsapp')) || '5491234567890';
        var msg = encodeURIComponent('Hola, me interesa: '+p.name+' ('+money(p.price)+')');
        var waHref = 'https://wa.me/'+wa+'?text='+msg;
        function doCart(){ if (window.addToCart) addToCart(p.name, p.price); }
        var ids = ['ph-btn-cart','ph-sticky-cart','ph-final-btn'];
        ids.forEach(function(id){ var el=$( id); if(el) el.addEventListener('click', doCart); });
        var buyBtn = $('ph-btn-buy'); if (buyBtn) buyBtn.addEventListener('click', doCart);
        ['ph-btn-wa','ph-sticky-wa'].forEach(function(id){ var el=$(id); if(el) el.href=waHref; });
    }

    /* ---- Wishlist ---- */
    function wireWishlist(p) {
        var btn   = $('ph-wish-btn');
        var label = $('ph-wish-label');
        if (!btn) return;
        var active = getWish().indexOf(p.id) > -1;
        if (active) { btn.classList.add('active'); if(label) label.textContent='Guardado'; }
        btn.addEventListener('click', function(){
            var w = getWish(), idx = w.indexOf(p.id);
            if (idx>-1){ w.splice(idx,1); btn.classList.remove('active'); if(label) label.textContent='Guardar'; }
            else        { w.push(p.id);   btn.classList.add('active');    if(label) label.textContent='Guardado'; }
            setWish(w);
        });
    }

    /* ---- Share ---- */
    function wireShare(p) {
        var btn   = $('ph-share-btn');
        var panel = $('ph-share-panel');
        var close = $('ph-share-close');
        var links = $('ph-share-links');
        if (!btn || !panel) return;
        var url  = encodeURIComponent(location.href);
        var text = encodeURIComponent(p.name+' — Armonía Zen');
        if (links) {
            links.innerHTML = [
                { l:'Copiar enlace', h:'#', cls:'copy' },
                { l:'WhatsApp',      h:'https://wa.me/?text='+text+'%20'+url },
                { l:'Instagram',     h:'https://www.instagram.com/' }
            ].map(function(i){
                return '<a class="ph-share-link" href="'+i.h+'"'+(i.cls?' data-action="'+i.cls+'"':'')+' target="_blank" rel="noopener">'+i.l+'</a>';
            }).join('');
            var copyLink = links.querySelector('[data-action="copy"]');
            if (copyLink) copyLink.addEventListener('click', function(e){
                e.preventDefault();
                if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(function(){
                    copyLink.textContent='¡Copiado!';
                    setTimeout(function(){ copyLink.textContent='Copiar enlace'; }, 2000);
                });
            });
        }
        btn.addEventListener('click', function(){ panel.classList.add('open'); });
        if (close) close.addEventListener('click', function(){ panel.classList.remove('open'); });
        panel.addEventListener('click', function(e){ if(e.target===panel) panel.classList.remove('open'); });
    }

    /* ---- Sticky ---- */
    function initSticky() {
        var bar  = $('ph-sticky');
        var hero = $('ph-hero');
        if (!bar || !hero || !window.IntersectionObserver) return;
        new IntersectionObserver(function(entries){
            bar.classList.toggle('visible', !entries[0].isIntersecting);
        },{ threshold: 0 }).observe(hero);
    }

    /* ---- Zoom cursor ---- */
    function initZoom() {
        var wrap = $('ph-zoom-wrap');
        var img  = $('ph-img-main');
        var lens = $('ph-lens');
        if (!wrap || !img || !lens) return;
        var SCALE = 2.2;
        wrap.addEventListener('mouseleave', function(){
            img.style.transform = ''; lens.style.opacity='0';
        });
        wrap.addEventListener('mousemove', function(e){
            var rect = wrap.getBoundingClientRect();
            var x = (e.clientX-rect.left)/rect.width;
            var y = (e.clientY-rect.top)/rect.height;
            lens.style.left = (e.clientX-rect.left-lens.offsetWidth/2)+'px';
            lens.style.top  = (e.clientY-rect.top-lens.offsetHeight/2)+'px';
            lens.style.opacity = '1';
            var tx = (0.5-x)*(SCALE-1)*100;
            var ty = (0.5-y)*(SCALE-1)*100;
            img.style.transformOrigin = (x*100)+'% '+(y*100)+'%';
            img.style.transform = 'scale('+SCALE+') translate('+tx+'%,'+ty+'%)';
        });
        var fb = $('ph-fullscreen-btn');
        if (fb) fb.addEventListener('click', function(){ openLightbox(0,[img.src]); });
    }

    /* ---- Lightbox ---- */
    var _lbImages=[], _lbIdx=0;
    function openLightbox(idx, images) {
        _lbImages=images; _lbIdx=idx;
        var lb=$('ph-lightbox'), lbi=$('ph-lb-img'), ctr=$('ph-lb-counter');
        if(!lb||!lbi) return;
        lbi.src=_lbImages[_lbIdx]||'';
        if(ctr) ctr.textContent=(_lbIdx+1)+' / '+_lbImages.length;
        lb.classList.add('open');
        document.body.style.overflow='hidden';
    }
    function closeLightbox(){ var lb=$('ph-lightbox'); if(lb) lb.classList.remove('open'); document.body.style.overflow=''; }
    function lbGo(dir){
        _lbIdx=(_lbIdx+dir+_lbImages.length)%_lbImages.length;
        var lbi=$('ph-lb-img'), ctr=$('ph-lb-counter');
        if(lbi) lbi.src=_lbImages[_lbIdx];
        if(ctr) ctr.textContent=(_lbIdx+1)+' / '+_lbImages.length;
    }
    function initLightbox(){
        var lb=$('ph-lightbox');
        if(!lb) return;
        var cl=$('ph-lb-close'), prev=$('ph-lb-prev'), next=$('ph-lb-next');
        if(cl)   cl.addEventListener('click', closeLightbox);
        if(prev) prev.addEventListener('click', function(){ lbGo(-1); });
        if(next) next.addEventListener('click', function(){ lbGo(1); });
        lb.addEventListener('click', function(e){ if(e.target===lb) closeLightbox(); });
        document.addEventListener('keydown', function(e){
            if(!lb.classList.contains('open')) return;
            if(e.key==='Escape') closeLightbox();
            if(e.key==='ArrowLeft') lbGo(-1);
            if(e.key==='ArrowRight') lbGo(1);
        });
    }

    /* ---- Testimonios slider ---- */
    function initTestimonialsSlider(){
        var track=$('ph-testimonials-track'), dots=$('ph-testimonials-dots');
        var prev=$('ph-tprev'), next=$('ph-tnext');
        if(!track) return;
        var items=track.querySelectorAll('.ph-testimonial'), total=items.length, cur=0;
        function goTo(idx){
            cur=(idx+total)%total;
            track.style.transform='translateX(-'+(cur*100)+'%)';
            if(dots) dots.querySelectorAll('.ph-dot').forEach(function(d,i){ d.classList.toggle('active',i===cur); });
        }
        if(prev) prev.addEventListener('click', function(){ goTo(cur-1); });
        if(next) next.addEventListener('click', function(){ goTo(cur+1); });
        if(dots) dots.querySelectorAll('.ph-dot').forEach(function(d){
            d.addEventListener('click', function(){ goTo(parseInt(d.dataset.idx)); });
        });
        var timer=setInterval(function(){ goTo(cur+1); }, 5000);
        track.addEventListener('mouseenter', function(){ clearInterval(timer); });
        var sx=0;
        track.addEventListener('touchstart', function(e){ sx=e.touches[0].clientX; },{passive:true});
        track.addEventListener('touchend',   function(e){ var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40) goTo(dx<0?cur+1:cur-1); });
    }

    /* ---- FAQ accordion ---- */
    function initFaq(){
        document.querySelectorAll('.ph-faq-item').forEach(function(item){
            var q=item.querySelector('.ph-faq-q');
            if(q) q.addEventListener('click', function(){
                var was=item.classList.contains('open');
                document.querySelectorAll('.ph-faq-item.open').forEach(function(x){ x.classList.remove('open'); });
                if(!was) item.classList.add('open');
            });
        });
    }

    /* ---- Scroll reveal ---- */
    function initReveal(){
        var els=document.querySelectorAll('.reveal');
        if(!els.length) return;
        if(window.IntersectionObserver){
            var io=new IntersectionObserver(function(entries){
                entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
            },{threshold:0.07});
            els.forEach(function(el){ io.observe(el); });
        } else { els.forEach(function(el){ el.classList.add('in'); }); }
    }

    /* ---- Schema ---- */
    function injectSchemas(p){
        var sp=$('schema-product');
        if(sp) sp.textContent=JSON.stringify({
            '@context':'https://schema.org','@type':'Product',
            name:p.name, description:p.descShort, image:imgUrl(p.img),
            brand:{'@type':'Brand',name:'Armonía Zen'},
            offers:{'@type':'Offer',price:p.price,priceCurrency:'ARS',
                availability:'https://schema.org/InStock',
                seller:{'@type':'Organization',name:'Armonía Zen'}}
        });
        var sbr=$('schema-breadcrumb');
        if(sbr) sbr.textContent=JSON.stringify({
            '@context':'https://schema.org','@type':'BreadcrumbList',
            itemListElement:[
                {'@type':'ListItem',position:1,name:'Inicio',item:location.origin+'/index.html'},
                {'@type':'ListItem',position:2,name:'Tienda',item:location.origin+'/catalogo.html'},
                {'@type':'ListItem',position:3,name:p.name}
            ]
        });
        if(p.faq && p.faq.length){
            var sf=$('schema-faq');
            if(sf) sf.textContent=JSON.stringify({
                '@context':'https://schema.org','@type':'FAQPage',
                mainEntity:p.faq.map(function(f){
                    return {'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}};
                })
            });
        }
    }

    /* ==========================================================================
       ARRANQUE
    ========================================================================== */
    var id = getParam('id');
    if (!id) { showNotFound(); return; }

    waitProducts(function(products) {
        var p = products.filter(function(x){ return x.id===id; })[0];
        if (!p) { showNotFound(); return; }
        if (window.azEnrichProduct) {
            window.azEnrichProduct(p).then(function(enriched){ render(p, enriched); }).catch(function(){ render(p, {}); });
        } else {
            render(p, {});
        }
    });

})();
