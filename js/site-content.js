/* ==========================================================================
   ARMONÍA ZEN — Inyección de contenido en la web pública desde el store
   Aplica lo editado en el panel (admin) sobre cada página.
   Requiere js/store.js cargado antes.
   ========================================================================== */
(function () {
    'use strict';
    if (!window.AZ) return;

    var s = AZ.all();
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (page === '' ) page = 'index.html';

    function set(sel, prop, val) {
        var el = document.querySelector(sel);
        if (el && val != null && val !== '') { if (prop === 'text') el.textContent = val; else if (prop === 'html') el.innerHTML = val; else el[prop] = val; }
    }
    function bg(sel, url) { var el = document.querySelector(sel); if (el && url) el.style.backgroundImage = "url('" + url + "')"; }

    /* ---- WhatsApp en todo el sitio ---- */
    var wa = (s.settings.whatsapp && s.settings.whatsapp.number) || s.settings.contact.whatsapp;
    if (wa) {
        document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
            a.href = a.href.replace(/wa\.me\/\d+/, 'wa.me/' + wa);
        });
    }
    window.AZ_WA = wa;
    window.AZ_WA_MSG = (s.settings.whatsapp && s.settings.whatsapp.autoMessage) || '';

    /* ---- Footer (marca + contacto) ---- */
    set('.footer-quote', 'text', '«' + s.settings.brand.quote + '»');

    /* ---- Home ---- */
    if (page === 'index.html') {
        var h = s.home;
        set('.hero .eyebrow', 'text', h.eyebrow);
        set('.hero__title', 'text', h.title);
        set('.hero__subtitle', 'text', h.subtitle);
        set('.hero__text', 'text', h.text);
        bg('.hero__media', h.heroImage);
        var btns = document.querySelectorAll('.hero__actions .btn');
        if (btns[0]) { btns[0].textContent = h.btn1Text; btns[0].setAttribute('href', h.btn1Link); }
        if (btns[1]) { btns[1].textContent = h.btn2Text; btns[1].setAttribute('href', h.btn2Link); }
    }

    /* ---- Banners de páginas internas ---- */
    var bannerKey = { 'catalogo.html': 'catalogo', 'piedras.html': 'piedras', 'plantas.html': 'plantas', 'blog.html': 'blog', 'nosotros.html': 'nosotros', 'contacto.html': 'contacto', 'preguntas-frecuentes.html': 'faq' }[page];
    if (bannerKey && s.banners[bannerKey]) {
        var b = s.banners[bannerKey];
        set('.page-hero .eyebrow', 'text', b.label);
        set('.page-hero__title', 'text', b.title);
        set('.page-hero__text', 'text', b.text);
        bg('.page-hero__media', b.image);
        var ov = document.querySelector('.page-hero__media');
        if (ov && typeof b.overlay === 'number') {
            // ajusta el gradiente del overlay según el % configurado
            var o = Math.max(0, Math.min(100, b.overlay)) / 100;
            var after = document.createElement('style');
            after.textContent = '.page-hero__media::after{background:linear-gradient(180deg,rgba(11,34,25,' + (o * 0.65).toFixed(2) + ') 0%,rgba(11,34,25,' + (o * 0.6).toFixed(2) + ') 40%,rgba(11,34,25,' + Math.min(1, o + 0.2).toFixed(2) + ') 100%)!important;}';
            document.head.appendChild(after);
        }
    }

    /* ---- FAQ dinámica ---- */
    if (page === 'preguntas-frecuentes.html') {
        var faqEl = document.querySelector('.faq');
        var faqs = (s.faqs || []).filter(function (f) { return f.active !== false; });
        if (faqEl && faqs.length) {
            faqEl.innerHTML = faqs.map(function (f) {
                return '<div class="faq-item"><button class="faq-q">' + escapeHtml(f.question) + '</button><div class="faq-a"><p>' + escapeHtml(f.answer) + '</p></div></div>';
            }).join('');
            // re-enlazar acordeón (armonia.js ya corrió)
            faqEl.querySelectorAll('.faq-q').forEach(function (q) {
                q.addEventListener('click', function () {
                    var item = q.parentElement, was = item.classList.contains('open');
                    faqEl.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); });
                    if (!was) item.classList.add('open');
                });
            });
        }
    }

    /* ---- Contacto: datos ---- */
    if (page === 'contacto.html') {
        var ct = s.settings.contact;
        var mail = document.querySelector('a[href^="mailto:"]');
        if (mail && ct.email) { mail.href = 'mailto:' + ct.email; mail.textContent = ct.email; }
    }

    function escapeHtml(t) { var d = document.createElement('div'); d.textContent = t == null ? '' : t; return d.innerHTML; }
})();
