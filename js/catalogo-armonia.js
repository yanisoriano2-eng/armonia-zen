/* ==========================================================================
   ARMONÍA ZEN — Catálogo (datos, filtros, render)
   Reutiliza window.addToCart / showToast de armonia.js
   ========================================================================== */

(function () {
    'use strict';

    var IMG = 'https://images.unsplash.com/photo-';
    var P = '?w=700&q=80&auto=format&fit=crop';

    var defaultProducts = [
        { id: 1,  name: 'Lámpara de Sal del Himalaya', cat: 'luz',        price: 45000, img: '1623241923490-5b2fd532828f', desc: 'Resplandor ámbar que purifica y entibia el ambiente.' },
        { id: 2,  name: 'Vela de Intención',            cat: 'luz',        price: 15000, img: '1561212856-44e9bae482aa',   desc: 'Cera natural para encender momentos de calma.' },
        { id: 3,  name: 'Amatista Natural',             cat: 'piedras',    price: 22000, img: '1609216970378-ce61cd74a187', desc: 'Calma mental, intuición y protección.' },
        { id: 4,  name: 'Cuarzo Rosa',                  cat: 'piedras',    price: 18000, img: '1593259213062-57b0ce5906cf', desc: 'Amor propio, suavidad y apertura emocional.' },
        { id: 5,  name: 'Citrino Natural',              cat: 'piedras',    price: 20000, img: '1614092872241-c9a193f2b4aa', desc: 'Abundancia, alegría y energía solar.' },
        { id: 6,  name: 'Drusa de Amatista',            cat: 'piedras',    price: 32000, img: '1632980205460-e490e885e848', desc: 'Pieza de gran porte para anclar un espacio.' },
        { id: 7,  name: 'Fuente de Bambú Zen',          cat: 'agua',       price: 65000, img: '1564462369724-4003221599e2', desc: 'El murmullo del agua que trae fluidez.' },
        { id: 8,  name: 'Fuente de Piedra',             cat: 'agua',       price: 58000, img: '1553090298-50fc519730d2',   desc: 'Movimiento sereno para espacios de descanso.' },
        { id: 9,  name: 'Buda Meditativo',              cat: 'presencia',  price: 35000, img: '1596045571419-664297d8f502', desc: 'Presencia, serenidad y sabiduría interior.' },
        { id: 10, name: 'Buda de Jardín',               cat: 'presencia',  price: 42000, img: '1671043121840-cf607dee6152', desc: 'Para rincones verdes y patios contemplativos.' },
        { id: 11, name: 'Cuenco Tibetano',              cat: 'presencia',  price: 38000, img: '1579291465308-fba6c5db2dfe', desc: 'Sonido que armoniza y reordena la energía.' },
        { id: 12, name: 'Monstera Deliciosa',           cat: 'plantas',    price: 28000, img: '1525498128493-380d1990a112', desc: 'Vida y frescura que oxigena el ambiente.' },
        { id: 13, name: 'Espada de San Jorge',          cat: 'plantas',    price: 24000, img: '1593482892290-f54927ae1bb6', desc: 'Protección y poder, casi sin cuidados.' },
        { id: 14, name: 'Incienso de Sándalo',          cat: 'aroma',      price: 12000, img: '1626937526107-ca0be0eecccd', desc: 'Aroma profundo para meditación y limpieza.' },
        { id: 15, name: 'Sahumerio de Palo Santo',      cat: 'aroma',      price: 14000, img: '1639390167093-9c62311fe84d', desc: 'Humo sagrado que despeja y renueva.' }
    ];

    var labels = {
        luz: 'Luz', piedras: 'Tierra', agua: 'Agua',
        aroma: 'Aroma', plantas: 'Naturaleza', presencia: 'Presencia'
    };

    // Si hay datos del panel (store.js), usarlos; si no, los productos por defecto.
    var products;
    if (window.AZ && AZ.publicProducts) {
        products = AZ.publicProducts().map(function (p) {
            return {
                id: p.id, name: p.name, cat: p.category, price: p.price,
                image: p.image, img: null,
                desc: p.descShort || p.descLong || '',
                out: p.status === 'out' || Number(p.stock) <= 0
            };
        });
        (AZ.list('categories') || []).forEach(function (c) { if (c.active !== false) labels[c.id] = labels[c.id] || c.name; });
    } else {
        products = defaultProducts;
    }

    var state = { cat: 'all', q: '', sort: 'default' };

    var grid = document.getElementById('shop-grid');
    var countEl = document.getElementById('shop-count');

    function money(n) { return '$' + n.toLocaleString('es-AR'); }

    function filtered() {
        var list = products.filter(function (p) {
            var okCat = state.cat === 'all' || p.cat === state.cat;
            var q = state.q.trim().toLowerCase();
            var okQ = !q || p.name.toLowerCase().indexOf(q) > -1 || p.desc.toLowerCase().indexOf(q) > -1;
            return okCat && okQ;
        });
        if (state.sort === 'price-asc') list.sort(function (a, b) { return a.price - b.price; });
        else if (state.sort === 'price-desc') list.sort(function (a, b) { return b.price - a.price; });
        else if (state.sort === 'name') list.sort(function (a, b) { return a.name.localeCompare(b.name); });
        return list;
    }

    function render() {
        var list = filtered();
        if (countEl) countEl.textContent = list.length + (list.length === 1 ? ' pieza' : ' piezas');
        if (!grid) return;

        if (list.length === 0) {
            grid.innerHTML = '<p class="shop-empty">No encontramos piezas con esos criterios.</p>';
            return;
        }

        grid.innerHTML = list.map(function (p) {
            var nameEsc = p.name.replace(/'/g, "\\'");
            var src = p.image || (IMG + p.img + P);
            var quick = p.out
                ? '<div class="product__quick"><button disabled style="opacity:.6;cursor:default;">Sin stock</button></div>'
                : '<div class="product__quick"><button onclick="addToCart(\'' + nameEsc + '\', ' + p.price + ')">Añadir · ' + money(p.price) + '</button></div>';
            return '' +
            '<article class="product reveal in">' +
                '<div class="product__media">' +
                    '<img src="' + src + '" alt="' + p.name + '" loading="lazy">' +
                    quick +
                '</div>' +
                '<div class="product__cat">' + (labels[p.cat] || p.cat) + '</div>' +
                '<h3 class="product__name">' + p.name + '</h3>' +
                '<p style="color:var(--ivory-soft);font-size:0.92rem;line-height:1.7;margin-bottom:8px;">' + p.desc + '</p>' +
                '<div class="product__price">' + money(p.price) + '</div>' +
            '</article>';
        }).join('');
    }

    // Filtros: pills
    var pills = document.querySelectorAll('.pill');
    pills.forEach(function (pill) {
        pill.addEventListener('click', function () {
            pills.forEach(function (x) { x.classList.remove('active'); });
            pill.classList.add('active');
            state.cat = pill.getAttribute('data-cat');
            render();
        });
    });

    var search = document.getElementById('shop-search');
    if (search) search.addEventListener('input', function () { state.q = search.value; render(); });

    var sort = document.getElementById('shop-sort');
    if (sort) sort.addEventListener('change', function () { state.sort = sort.value; render(); });

    render();
})();
