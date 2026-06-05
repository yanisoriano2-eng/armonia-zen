/* ==========================================================================
   ARMONÍA ZEN — Admin app
   ========================================================================== */
(function () {
    'use strict';
    var $ = function (s, r) { return (r || document).querySelector(s); };
    var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

    /* ---------- utils ---------- */
    function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function attr(s) { return String(s == null ? '' : s).replace(/"/g, '&quot;'); }
    function toast(msg, err) {
        var t = $('#toast'); t.textContent = msg; t.className = 'toast show' + (err ? ' err' : '');
        clearTimeout(t._t); t._t = setTimeout(function () { t.className = 'toast'; }, 2600);
    }
    function confirmModal(title, text, okLabel, onOk) {
        var m = $('#modal');
        $('#modal-title').textContent = title; $('#modal-text').textContent = text;
        $('#modal-ok').textContent = okLabel || 'Eliminar';
        m.classList.add('show');
        var ok = $('#modal-ok'), cancel = $('#modal-cancel');
        function close() { m.classList.remove('show'); ok.onclick = null; cancel.onclick = null; }
        ok.onclick = function () { close(); onOk(); };
        cancel.onclick = close;
    }
    function readFile(file, cb) {
        var r = new FileReader();
        r.onload = function () { cb(r.result); };
        r.readAsDataURL(file);
    }

    /* ---------- field builders ---------- */
    function fText(key, label, val, opts) {
        opts = opts || {};
        var t = opts.type || 'text';
        var cls = opts.full ? 'fld full' : 'fld';
        var help = opts.help ? '<span class="help">' + esc(opts.help) + '</span>' : '';
        if (opts.area) return '<div class="' + cls + '"><label>' + esc(label) + '</label><textarea data-k="' + key + '" rows="' + (opts.rows || 4) + '">' + esc(val) + '</textarea>' + help + '</div>';
        return '<div class="' + cls + '"><label>' + esc(label) + '</label><input type="' + t + '" data-k="' + key + '" value="' + attr(val) + '">' + help + '</div>';
    }
    function fSelect(key, label, val, options, opts) {
        opts = opts || {};
        var o = options.map(function (op) {
            var v = op.value != null ? op.value : op, l = op.label != null ? op.label : op;
            return '<option value="' + attr(v) + '"' + (String(v) === String(val) ? ' selected' : '') + '>' + esc(l) + '</option>';
        }).join('');
        return '<div class="' + (opts.full ? 'fld full' : 'fld') + '"><label>' + esc(label) + '</label><select data-k="' + key + '">' + o + '</select></div>';
    }
    function fSwitch(key, label, val) {
        return '<div class="fld"><label>' + esc(label) + '</label><label class="switch"><input type="checkbox" data-k="' + key + '"' + (val ? ' checked' : '') + '><span class="track"></span><span class="lbl">' + (val ? 'Sí' : 'No') + '</span></label></div>';
    }
    function fImg(key, label, val) {
        return '<div class="fld full"><label>' + esc(label) + '</label><div class="img-field">' +
            '<img class="preview" data-prev="' + key + '" src="' + attr(val) + '" alt="" onerror="this.style.opacity=0.2">' +
            '<div class="controls">' +
            '<input type="text" data-k="' + key + '" value="' + attr(val) + '" placeholder="URL de la imagen…">' +
            '<label class="btn btn--sm" style="align-self:flex-start;">Subir archivo<input type="file" accept="image/*" data-upload="' + key + '" style="display:none;"></label>' +
            '</div></div></div>';
    }
    function collectForm(root) {
        var out = {};
        $$('[data-k]', root).forEach(function (el) {
            var k = el.getAttribute('data-k');
            if (el.type === 'checkbox') out[k] = el.checked;
            else if (el.type === 'number') out[k] = el.value === '' ? 0 : Number(el.value);
            else out[k] = el.value;
        });
        return out;
    }
    function wireForm(root) {
        // switch label + image upload/preview
        $$('.switch input[type=checkbox]', root).forEach(function (c) {
            c.addEventListener('change', function () { var l = c.parentElement.querySelector('.lbl'); if (l) l.textContent = c.checked ? 'Sí' : 'No'; });
        });
        $$('[data-upload]', root).forEach(function (inp) {
            inp.addEventListener('change', function () {
                if (!inp.files[0]) return;
                if (inp.files[0].size > 1500000) { toast('Imagen muy pesada (máx ~1.5MB para guardar local).', true); }
                readFile(inp.files[0], function (dataUrl) {
                    var key = inp.getAttribute('data-upload');
                    var txt = root.querySelector('[data-k="' + key + '"]');
                    var prev = root.querySelector('[data-prev="' + key + '"]');
                    if (txt) txt.value = dataUrl;
                    if (prev) { prev.src = dataUrl; prev.style.opacity = 1; }
                });
            });
        });
        $$('[data-k]', root).forEach(function (el) {
            if (el.type === 'text' || el.tagName === 'INPUT') {
                el.addEventListener('input', function () {
                    var prev = root.querySelector('[data-prev="' + el.getAttribute('data-k') + '"]');
                    if (prev) { prev.src = el.value; prev.style.opacity = 1; }
                });
            }
        });
    }

    /* ---------- NAV config ---------- */
    var NAV = [
        { group: 'General', items: [
            { id: 'dashboard', label: 'Dashboard', ico: '◇', roles: ['super', 'editor', 'soporte'] },
            { id: 'home', label: 'Inicio', ico: '⌂', roles: ['super', 'editor'] },
            { id: 'banners', label: 'Banners', ico: '▤', roles: ['super', 'editor'] }
        ]},
        { group: 'Tienda', items: [
            { id: 'products', label: 'Catálogo', ico: '❖', roles: ['super', 'editor'] },
            { id: 'categories', label: 'Categorías', ico: '⊞', roles: ['super', 'editor'] },
            { id: 'intentions', label: 'Intenciones', ico: '✶', roles: ['super', 'editor'] }
        ]},
        { group: 'Contenido', items: [
            { id: 'blog', label: 'Blog Zen', ico: '✎', roles: ['super', 'editor'] },
            { id: 'faqs', label: 'Preguntas frecuentes', ico: '?', roles: ['super', 'editor'] },
            { id: 'testimonials', label: 'Testimonios', ico: '❝', roles: ['super', 'editor'] },
            { id: 'media', label: 'Biblioteca de medios', ico: '▣', roles: ['super', 'editor'] }
        ]},
        { group: 'Configuración', items: [
            { id: 'contact', label: 'Contacto y redes', ico: '✆', roles: ['super', 'soporte'] },
            { id: 'whatsapp', label: 'WhatsApp / Pedidos', ico: '✺', roles: ['super', 'soporte'] },
            { id: 'visual', label: 'Configuración visual', ico: '◐', roles: ['super'] },
            { id: 'seo', label: 'SEO', ico: '⌕', roles: ['super'] },
            { id: 'messages', label: 'Consultas recibidas', ico: '✉', roles: ['super', 'soporte'] },
            { id: 'users', label: 'Usuarios y roles', ico: '☖', roles: ['super'] }
        ]}
    ];
    var SUB = {
        dashboard: 'Resumen general', home: 'Página de inicio', banners: 'Banner de cada página',
        products: 'Gestión de productos', categories: 'Categorías y filtros', intentions: 'Filtros por intención',
        blog: 'Artículos del journal', faqs: 'Preguntas frecuentes', testimonials: 'Opiniones de clientes',
        media: 'Imágenes y referencias', contact: 'Datos de contacto y redes', whatsapp: 'Carrito y pedidos por WhatsApp',
        visual: 'Identidad visual', seo: 'Posicionamiento', messages: 'Mensajes del formulario', users: 'Acceso al panel'
    };

    var current = 'dashboard';
    var user = null;

    /* ---------- AUTH ---------- */
    function showApp() {
        $('#login').style.display = 'none';
        $('#app').classList.add('show');
        $('#side-user').innerHTML = '<b>' + esc(user.name) + '</b><span>' + esc(roleLabel(user.role)) + '</span>';
        buildNav();
        route(location.hash.replace('#', '') || 'dashboard');
    }
    function roleLabel(r) { return r === 'super' ? 'Super admin' : r === 'editor' ? 'Editor' : 'Soporte'; }
    function buildNav() {
        var html = NAV.map(function (g) {
            var items = g.items.filter(function (it) { return it.roles.indexOf(user.role) > -1; });
            if (!items.length) return '';
            return '<div class="nav-group"><div class="nav-group__label">' + esc(g.group) + '</div>' +
                items.map(function (it) {
                    return '<div class="nav-item" data-go="' + it.id + '"><span class="ico">' + esc(it.ico) + '</span>' + esc(it.label) + '</div>';
                }).join('') + '</div>';
        }).join('');
        $('#nav').innerHTML = html;
        $$('#nav .nav-item').forEach(function (n) { n.onclick = function () { route(n.getAttribute('data-go')); $('#sidebar').classList.remove('open'); }; });
    }
    function canAccess(section) {
        for (var i = 0; i < NAV.length; i++) for (var j = 0; j < NAV[i].items.length; j++)
            if (NAV[i].items[j].id === section) return NAV[i].items[j].roles.indexOf(user.role) > -1;
        return false;
    }

    /* ---------- ROUTER ---------- */
    function route(section) {
        if (!canAccess(section)) section = 'dashboard';
        current = section; location.hash = section;
        $$('#nav .nav-item').forEach(function (n) { n.classList.toggle('active', n.getAttribute('data-go') === section); });
        $('#page-title').textContent = (NAV.reduce(function (a, g) { return a.concat(g.items); }, []).filter(function (i) { return i.id === section; })[0] || {}).label || 'Panel';
        $('#page-sub').textContent = SUB[section] || '';
        var c = $('#content'); c.scrollTop = 0;
        (RENDER[section] || RENDER.dashboard)(c);
    }

    /* ====================================================================
       RENDERERS
       ==================================================================== */
    var RENDER = {};

    /* ---- DASHBOARD ---- */
    RENDER.dashboard = function (c) {
        var prods = AZ.list('products');
        var active = prods.filter(function (p) { return p.status === 'active'; }).length;
        var out = prods.filter(function (p) { return p.status === 'out' || Number(p.stock) <= 0; }).length;
        var recent = prods.slice().sort(function (a, b) { return (b.editedAt || 0) - (a.editedAt || 0); }).slice(0, 5);
        var msgsNew = AZ.list('messages').filter(function (m) { return m.status === 'nuevo'; }).length;

        c.innerHTML =
            '<div class="stat-grid">' +
            stat(prods.length, 'Productos') +
            stat(active, 'Activos', 'accent') +
            stat(out, 'Sin stock', out ? 'warn' : '') +
            stat(AZ.list('categories').length, 'Categorías') +
            stat(AZ.list('blog').length, 'Artículos') +
            stat(AZ.list('messages').length, 'Consultas' + (msgsNew ? ' (' + msgsNew + ' nuevas)' : '')) +
            '</div>' +
            '<div class="panel"><h3>Accesos rápidos</h3><div class="quick-grid">' +
            quick('products', '＋', 'Agregar producto') +
            quick('banners', '▤', 'Cambiar banner') +
            quick('home', '⌂', 'Editar inicio') +
            quick('blog', '✎', 'Crear artículo') +
            quick('contact', '✆', 'Editar contacto') +
            '</div></div>' +
            '<div class="panel"><h3>Últimos productos editados</h3>' +
            (recent.length ? '<table class="table"><thead><tr><th></th><th>Producto</th><th>Categoría</th><th>Precio</th><th>Estado</th></tr></thead><tbody>' +
                recent.map(function (p) {
                    return '<tr><td><img class="thumb" src="' + attr(p.image) + '" onerror="this.style.opacity=.2"></td><td>' + esc(p.name) + '</td><td>' + esc(catName(p.category)) + '</td><td>' + AZ.money(p.price) + '</td><td>' + statusBadge(p) + '</td></tr>';
                }).join('') + '</tbody></table>' : '<p class="empty">Sin ediciones recientes.</p>') +
            '</div>';
        $$('[data-quick]', c).forEach(function (q) { q.onclick = function () { route(q.getAttribute('data-quick')); }; });
    };
    function stat(n, l, cls) { return '<div class="stat ' + (cls || '') + '"><div class="n">' + n + '</div><div class="l">' + esc(l) + '</div></div>'; }
    function quick(go, ico, label) { return '<div class="quick" data-quick="' + go + '"><span class="ico">' + ico + '</span><b>' + esc(label) + '</b></div>'; }
    function catName(id) { var c = AZ.find('categories', id); return c ? c.name : id; }
    function statusBadge(p) {
        if (p.status === 'hidden') return '<span class="badge hidden">Oculto</span>';
        if (p.status === 'out' || Number(p.stock) <= 0) return '<span class="badge out">Sin stock</span>';
        return '<span class="badge active">Activo</span>';
    }

    /* ---- PRODUCTS ---- */
    RENDER.products = function (c) {
        var q = '', cat = 'all';
        function draw() {
            var list = AZ.list('products').filter(function (p) {
                var okq = !q || p.name.toLowerCase().indexOf(q.toLowerCase()) > -1;
                var okc = cat === 'all' || p.category === cat;
                return okq && okc;
            });
            var cats = AZ.list('categories').map(function (x) { return { value: x.id, label: x.name }; });
            c.innerHTML =
                '<div class="toolbar">' +
                '<button class="btn btn--gold" id="p-new">＋ Crear producto</button>' +
                '<div class="spacer"></div>' +
                '<input type="text" id="p-q" placeholder="Buscar producto…" value="' + attr(q) + '">' +
                '<select id="p-cat"><option value="all">Todas las categorías</option>' + cats.map(function (o) { return '<option value="' + o.value + '"' + (o.value === cat ? ' selected' : '') + '>' + esc(o.label) + '</option>'; }).join('') + '</select>' +
                '</div>' +
                (list.length ? '<table class="table"><thead><tr><th></th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Estado</th><th></th></tr></thead><tbody>' +
                    list.map(function (p) {
                        return '<tr><td><img class="thumb" src="' + attr(p.image) + '" onerror="this.style.opacity=.2"></td>' +
                            '<td>' + esc(p.name) + (p.featured ? ' <span class="badge gold">★</span>' : '') + '</td>' +
                            '<td>' + esc(catName(p.category)) + '</td><td>' + AZ.money(p.price) + '</td><td>' + esc(p.stock) + '</td>' +
                            '<td>' + statusBadge(p) + '</td>' +
                            '<td><div class="row-actions">' +
                            '<button class="btn btn--sm" data-edit="' + p.id + '">Editar</button>' +
                            '<button class="btn btn--sm" data-dup="' + p.id + '">Duplicar</button>' +
                            '<button class="btn btn--sm btn--danger" data-del="' + p.id + '">✕</button>' +
                            '</div></td></tr>';
                    }).join('') + '</tbody></table>' : '<p class="empty">No hay productos con esos criterios.</p>');

            $('#p-new').onclick = function () { editProduct(c, null); };
            var qi = $('#p-q'); qi.oninput = function () { q = qi.value; draw(); var n = $('#p-q'); n.focus(); n.setSelectionRange(q.length, q.length); };
            $('#p-cat').onchange = function () { cat = $('#p-cat').value; draw(); };
            $$('[data-edit]', c).forEach(function (b) { b.onclick = function () { editProduct(c, b.getAttribute('data-edit')); }; });
            $$('[data-dup]', c).forEach(function (b) { b.onclick = function () {
                var p = JSON.parse(JSON.stringify(AZ.find('products', b.getAttribute('data-dup'))));
                p.id = null; p.name = p.name + ' (copia)'; p.editedAt = Date.now(); AZ.upsert('products', p); toast('Producto duplicado'); draw();
            }; });
            $$('[data-del]', c).forEach(function (b) { b.onclick = function () {
                var p = AZ.find('products', b.getAttribute('data-del'));
                confirmModal('Eliminar producto', '¿Eliminar "' + p.name + '"? Esta acción no se puede deshacer.', 'Eliminar', function () { AZ.remove('products', p.id); toast('Producto eliminado'); draw(); });
            }; });
        }
        draw();
    };

    function editProduct(c, id) {
        var p = id ? JSON.parse(JSON.stringify(AZ.find('products', id))) : {
            id: null, name: '', category: (AZ.list('categories')[0] || {}).id || '', subcategory: '',
            price: 0, priceOld: 0, stock: 10, status: 'active', featured: false, isNew: false, bestSeller: false,
            image: '', gallery: [], descShort: '', descLong: '', benefits: '', meaning: '', howToUse: '',
            placement: '', care: '', material: '', size: '', color: '', intention: '', tags: '', seoTitle: '', seoDesc: ''
        };
        var cats = AZ.list('categories').map(function (x) { return { value: x.id, label: x.name }; });
        var ints = [{ value: '', label: '—' }].concat(AZ.list('intentions').map(function (x) { return { value: x.id, label: x.name }; }));
        var statusOpts = [{ value: 'active', label: 'Activo' }, { value: 'hidden', label: 'Oculto' }, { value: 'out', label: 'Sin stock' }];

        c.innerHTML = '<form id="pform"><div class="form-grid">' +
            '<div class="section-title">Información básica</div>' +
            fText('name', 'Nombre', p.name, { full: true }) +
            fSelect('category', 'Categoría', p.category, cats) +
            fText('subcategory', 'Subcategoría', p.subcategory) +
            fText('price', 'Precio', p.price, { type: 'number' }) +
            fText('priceOld', 'Precio anterior', p.priceOld, { type: 'number', help: '0 = sin oferta' }) +
            fText('stock', 'Stock', p.stock, { type: 'number' }) +
            fSelect('status', 'Estado', p.status, statusOpts) +
            fSwitch('featured', 'Destacado', p.featured) +
            fSwitch('isNew', 'Nuevo ingreso', p.isNew) +
            fSwitch('bestSeller', 'Más vendido', p.bestSeller) +
            '<div class="section-title">Imágenes</div>' +
            fImg('image', 'Imagen principal', p.image) +
            fText('gallery', 'Galería (una URL por línea)', (p.gallery || []).join('\n'), { area: true, full: true, rows: 3 }) +
            '<div class="section-title">Descripción y contenido</div>' +
            fText('descShort', 'Descripción corta', p.descShort, { area: true, full: true, rows: 2 }) +
            fText('descLong', 'Descripción larga', p.descLong, { area: true, full: true }) +
            fText('benefits', 'Beneficios', p.benefits, { area: true, full: true, rows: 2 }) +
            fText('meaning', 'Significado energético', p.meaning, { area: true, full: true, rows: 2 }) +
            fText('howToUse', 'Cómo usarlo', p.howToUse, { area: true, full: true, rows: 2 }) +
            fText('placement', 'Dónde colocarlo', p.placement, { area: true, rows: 2 }) +
            fText('care', 'Cuidados', p.care, { area: true, rows: 2 }) +
            '<div class="section-title">Atributos</div>' +
            fText('material', 'Material', p.material) +
            fText('size', 'Tamaño', p.size) +
            fText('color', 'Color', p.color) +
            fSelect('intention', 'Energía / intención', p.intention, ints) +
            fText('tags', 'Tags (separados por coma)', p.tags, { full: true }) +
            '<div class="section-title">SEO</div>' +
            fText('seoTitle', 'SEO título', p.seoTitle, { full: true }) +
            fText('seoDesc', 'SEO descripción', p.seoDesc, { area: true, full: true, rows: 2 }) +
            '</div>' +
            '<div class="form-foot">' +
            '<button class="btn btn--gold" type="submit">' + (id ? 'Guardar cambios' : 'Crear producto') + '</button>' +
            '<button class="btn btn--ghost" type="button" id="pcancel">Cancelar</button>' +
            (id ? '<button class="btn btn--sm" type="button" id="ppreview">Vista previa ↗</button>' : '') +
            '<div class="spacer"></div>' +
            (id ? '<button class="btn btn--danger" type="button" id="pdel">Eliminar</button>' : '') +
            '</div></form>';

        wireForm(c);
        $('#pform').onsubmit = function (e) {
            e.preventDefault();
            var d = collectForm(c);
            d.gallery = (d.gallery || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
            d.id = p.id; d.editedAt = Date.now();
            if (!d.name) { toast('El nombre es obligatorio', true); return; }
            AZ.upsert('products', d);
            toast(id ? 'Cambios guardados' : 'Producto creado');
            RENDER.products(c);
        };
        $('#pcancel').onclick = function () { RENDER.products(c); };
        if ($('#ppreview')) $('#ppreview').onclick = function () { window.open('../catalogo.html', '_blank'); };
        if ($('#pdel')) $('#pdel').onclick = function () { confirmModal('Eliminar producto', '¿Eliminar "' + p.name + '"?', 'Eliminar', function () { AZ.remove('products', p.id); toast('Eliminado'); RENDER.products(c); }); };
    }

    /* ---- GENERIC COLLECTION CRUD ---- */
    function collectionModule(coll, cfg) {
        return function (c) {
            function draw() {
                var list = AZ.list(coll);
                c.innerHTML = '<div class="toolbar"><button class="btn btn--gold" id="c-new">＋ ' + esc(cfg.addLabel) + '</button><div class="spacer"></div><span class="sub" style="color:var(--ivory-faint);font-size:.8rem;">' + list.length + ' registros</span></div>' +
                    (list.length ? '<table class="table"><thead><tr>' + cfg.columns.map(function (col) { return '<th>' + esc(col.label) + '</th>'; }).join('') + '<th></th></tr></thead><tbody>' +
                        list.map(function (item, i) {
                            return '<tr draggable="true" data-id="' + item.id + '">' + cfg.columns.map(function (col) { return '<td>' + col.cell(item) + '</td>'; }).join('') +
                                '<td><div class="row-actions">' +
                                (cfg.orderable ? '<span class="drag" title="Arrastrar para ordenar">⋮⋮</span>' : '') +
                                '<button class="btn btn--sm" data-edit="' + item.id + '">Editar</button>' +
                                '<button class="btn btn--sm btn--danger" data-del="' + item.id + '">✕</button>' +
                                '</div></td></tr>';
                        }).join('') + '</tbody></table>' : '<p class="empty">' + esc(cfg.empty || 'Sin registros.') + '</p>');

                $('#c-new').onclick = function () { edit(null); };
                $$('[data-edit]', c).forEach(function (b) { b.onclick = function () { edit(b.getAttribute('data-edit')); }; });
                $$('[data-del]', c).forEach(function (b) { b.onclick = function () {
                    var it = AZ.find(coll, b.getAttribute('data-del'));
                    confirmModal('Eliminar', '¿Eliminar este registro?', 'Eliminar', function () { AZ.remove(coll, it.id); toast('Eliminado'); draw(); });
                }; });
                if (cfg.orderable) enableDrag(c, coll, draw);
            }
            function edit(id) {
                var item = id ? JSON.parse(JSON.stringify(AZ.find(coll, id))) : cfg.blank();
                c.innerHTML = '<form id="cform"><div class="form-grid">' + cfg.fields(item).join('') + '</div>' +
                    '<div class="form-foot"><button class="btn btn--gold" type="submit">' + (id ? 'Guardar' : 'Crear') + '</button>' +
                    '<button class="btn btn--ghost" type="button" id="cc">Cancelar</button></div></form>';
                wireForm(c);
                $('#cform').onsubmit = function (e) {
                    e.preventDefault();
                    var d = collectForm(c); d.id = item.id;
                    if (cfg.beforeSave) d = cfg.beforeSave(d, item);
                    AZ.upsert(coll, d); toast('Guardado'); draw();
                };
                $('#cc').onclick = draw;
            }
            draw();
        };
    }
    function enableDrag(c, coll, redraw) {
        var rows = $$('tr[draggable]', c), dragEl = null;
        rows.forEach(function (r) {
            r.addEventListener('dragstart', function () { dragEl = r; r.classList.add('dragging'); });
            r.addEventListener('dragend', function () {
                r.classList.remove('dragging');
                var ids = $$('tr[draggable]', c).map(function (x) { return x.getAttribute('data-id'); });
                AZ.reorder(coll, ids); dragEl = null;
            });
            r.addEventListener('dragover', function (e) {
                e.preventDefault();
                if (!dragEl || dragEl === r) return;
                var rect = r.getBoundingClientRect(), after = (e.clientY - rect.top) > rect.height / 2;
                r.parentNode.insertBefore(dragEl, after ? r.nextSibling : r);
            });
        });
    }

    RENDER.categories = collectionModule('categories', {
        addLabel: 'Nueva categoría', addLabelBtn: 'Crear', empty: 'Sin categorías.',
        columns: [
            { label: 'Nombre', cell: function (x) { return esc(x.name); } },
            { label: 'Slug', cell: function (x) { return '<code style="color:var(--gold)">' + esc(x.slug) + '</code>'; } },
            { label: 'Estado', cell: function (x) { return x.active !== false ? '<span class="badge active">Visible</span>' : '<span class="badge hidden">Oculta</span>'; } }
        ],
        blank: function () { return { id: null, name: '', slug: '', active: true }; },
        fields: function (x) { return [fText('name', 'Nombre', x.name, { full: true }), fText('slug', 'Slug', x.slug, { help: 'Identificador en minúsculas, sin espacios' }), fSwitch('active', 'Visible en la web', x.active !== false)]; },
        beforeSave: function (d) { if (!d.slug) d.slug = d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); if (!d.id) d.id = d.slug; return d; }
    });

    RENDER.intentions = collectionModule('intentions', {
        addLabel: 'Nueva intención', empty: 'Sin intenciones.',
        columns: [{ label: 'Intención', cell: function (x) { return esc(x.name); } }],
        blank: function () { return { id: null, name: '' }; },
        fields: function (x) { return [fText('name', 'Nombre de la intención', x.name, { full: true })]; },
        beforeSave: function (d) { if (!d.id) d.id = d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'); return d; }
    });

    RENDER.blog = collectionModule('blog', {
        addLabel: 'Nuevo artículo', empty: 'Sin artículos.',
        columns: [
            { label: '', cell: function (x) { return '<img class="thumb" src="' + attr(x.image) + '" onerror="this.style.opacity=.2">'; } },
            { label: 'Título', cell: function (x) { return esc(x.title); } },
            { label: 'Categoría', cell: function (x) { return esc(x.category); } },
            { label: 'Estado', cell: function (x) { return x.status === 'published' ? '<span class="badge active">Publicado</span>' : '<span class="badge hidden">Borrador</span>'; } }
        ],
        blank: function () { return { id: null, slug: '', title: '', category: '', image: '', excerpt: '', content: '', readTime: 5, author: 'Armonía Zen', date: new Date().toISOString().slice(0, 10), status: 'draft', seoTitle: '', seoDesc: '' }; },
        fields: function (x) { return [
            fText('title', 'Título', x.title, { full: true }),
            fText('category', 'Categoría', x.category),
            fSelect('status', 'Estado', x.status, [{ value: 'published', label: 'Publicado' }, { value: 'draft', label: 'Borrador' }]),
            fText('readTime', 'Tiempo de lectura (min)', x.readTime, { type: 'number' }),
            fText('author', 'Autor', x.author),
            fText('date', 'Fecha', x.date, { type: 'date' }),
            fText('slug', 'Slug', x.slug, { help: 'Se genera del título si lo dejás vacío' }),
            fImg('image', 'Imagen principal', x.image),
            fText('excerpt', 'Extracto', x.excerpt, { area: true, full: true, rows: 2 }),
            fText('content', 'Contenido completo', x.content, { area: true, full: true, rows: 8 }),
            fText('seoTitle', 'SEO título', x.seoTitle, { full: true }),
            fText('seoDesc', 'SEO descripción', x.seoDesc, { area: true, full: true, rows: 2 })
        ]; },
        beforeSave: function (d) { if (!d.slug) d.slug = (d.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); if (!d.id) d.id = 'b_' + d.slug; return d; }
    });

    RENDER.faqs = collectionModule('faqs', {
        addLabel: 'Nueva pregunta', empty: 'Sin preguntas.', orderable: true,
        columns: [
            { label: 'Pregunta', cell: function (x) { return esc(x.question); } },
            { label: 'Categoría', cell: function (x) { return esc(x.category); } },
            { label: 'Estado', cell: function (x) { return x.active !== false ? '<span class="badge active">Activa</span>' : '<span class="badge hidden">Inactiva</span>'; } }
        ],
        blank: function () { return { id: null, question: '', answer: '', category: 'Compras', active: true }; },
        fields: function (x) { return [
            fText('question', 'Pregunta', x.question, { full: true }),
            fText('answer', 'Respuesta', x.answer, { area: true, full: true }),
            fSelect('category', 'Categoría', x.category, ['Compras', 'Envíos', 'Piedras', 'Plantas', 'Lámparas de sal', 'Decoración', 'Mayoristas']),
            fSwitch('active', 'Activa', x.active !== false)
        ]; }
    });

    RENDER.testimonials = collectionModule('testimonials', {
        addLabel: 'Nuevo testimonio', empty: 'Sin testimonios.',
        columns: [
            { label: 'Cliente', cell: function (x) { return esc(x.name); } },
            { label: 'Comentario', cell: function (x) { return '<span style="color:var(--ivory-soft)">' + esc((x.text || '').slice(0, 60)) + '…</span>'; } },
            { label: 'Puntuación', cell: function (x) { return '<span class="badge gold">' + '★'.repeat(Number(x.rating) || 0) + '</span>'; } },
            { label: 'Estado', cell: function (x) { return x.active !== false ? '<span class="badge active">Visible</span>' : '<span class="badge hidden">Oculto</span>'; } }
        ],
        blank: function () { return { id: null, name: '', photo: '', text: '', rating: 5, product: '', active: true }; },
        fields: function (x) { return [
            fText('name', 'Nombre', x.name),
            fSelect('rating', 'Puntuación', x.rating, [5, 4, 3, 2, 1]),
            fImg('photo', 'Foto (opcional)', x.photo),
            fText('product', 'Producto relacionado', x.product),
            fText('text', 'Comentario', x.text, { area: true, full: true }),
            fSwitch('active', 'Visible en la web', x.active !== false)
        ]; }
    });

    /* ---- MEDIA LIBRARY ---- */
    RENDER.media = function (c) {
        var folder = 'all';
        var folders = ['Banners', 'Productos', 'Piedras', 'Plantas', 'Blog', 'Nosotros', 'Referencias', 'Iconos', 'Fondos'];
        function draw() {
            var items = AZ.list('media').filter(function (m) { return folder === 'all' || m.folder === folder; });
            c.innerHTML =
                '<div class="toolbar">' +
                '<select id="m-folder"><option value="all">Todas las carpetas</option>' + folders.map(function (f) { return '<option value="' + f + '"' + (f === folder ? ' selected' : '') + '>' + f + '</option>'; }).join('') + '</select>' +
                '<div class="spacer"></div></div>' +
                '<label class="uploader" id="m-up">▣ &nbsp; Subir imágenes (o pegá URLs al crear)<input type="file" accept="image/*" multiple style="display:none;" id="m-file"></label>' +
                '<div style="margin:14px 0;"><button class="btn btn--sm" id="m-url">＋ Agregar por URL</button></div>' +
                (items.length ? '<div class="media-grid">' + items.map(function (m) {
                    return '<div class="media-item"><img src="' + attr(m.url) + '" onerror="this.style.opacity=.2"><div class="meta"><b>' + esc(m.name) + '</b><span class="f">' + esc(m.folder || '—') + '</span></div><div class="acts"><button class="btn btn--sm" data-alt="' + m.id + '">ALT</button><button class="btn btn--sm btn--danger" data-mdel="' + m.id + '">✕</button></div></div>';
                }).join('') + '</div>' : '<p class="empty">Biblioteca vacía. Subí o agregá imágenes.</p>');

            $('#m-folder').onchange = function () { folder = $('#m-folder').value; draw(); };
            $('#m-up').onclick = function (e) { if (e.target.id !== 'm-file') $('#m-file').click(); };
            $('#m-file').onchange = function () {
                var fs = $('#m-file').files; var added = 0;
                Array.prototype.forEach.call(fs, function (f) {
                    if (f.size > 1500000) { toast('“' + f.name + '” supera ~1.5MB, puede llenar el almacenamiento.', true); }
                    readFile(f, function (url) { AZ.upsert('media', { id: null, name: f.name, folder: folder === 'all' ? 'Referencias' : folder, url: url, alt: '' }); added++; draw(); });
                });
            };
            $('#m-url').onclick = function () {
                var url = prompt('URL de la imagen:'); if (!url) return;
                AZ.upsert('media', { id: null, name: url.split('/').pop().slice(0, 24), folder: folder === 'all' ? 'Referencias' : folder, url: url, alt: '' }); draw();
            };
            $$('[data-mdel]', c).forEach(function (b) { b.onclick = function () { AZ.remove('media', b.getAttribute('data-mdel')); toast('Imagen eliminada'); draw(); }; });
            $$('[data-alt]', c).forEach(function (b) { b.onclick = function () {
                var m = AZ.find('media', b.getAttribute('data-alt')); var alt = prompt('Texto ALT (accesibilidad/SEO):', m.alt || '');
                if (alt != null) { m.alt = alt; AZ.upsert('media', m); toast('ALT actualizado'); }
            }; });
        }
        draw();
    };

    /* ---- MESSAGES ---- */
    RENDER.messages = function (c) {
        var filter = 'all';
        function draw() {
            var list = AZ.list('messages').filter(function (m) { return filter === 'all' || m.status === filter; }).slice().reverse();
            c.innerHTML = '<div class="toolbar"><select id="msg-f">' +
                ['all', 'nuevo', 'respondido', 'archivado'].map(function (s) { return '<option value="' + s + '"' + (s === filter ? ' selected' : '') + '>' + (s === 'all' ? 'Todas' : s.charAt(0).toUpperCase() + s.slice(1)) + '</option>'; }).join('') + '</select><div class="spacer"></div></div>' +
                (list.length ? '<table class="table"><thead><tr><th>Fecha</th><th>Nombre</th><th>Contacto</th><th>Motivo</th><th>Estado</th><th></th></tr></thead><tbody>' +
                    list.map(function (m) {
                        return '<tr><td>' + esc((m.date || '').slice(0, 16).replace('T', ' ')) + '</td><td>' + esc(m.name) + '<br><span style="color:var(--ivory-faint);font-size:.78rem">' + esc((m.message || '').slice(0, 70)) + '…</span></td>' +
                            '<td style="font-size:.78rem">' + esc(m.email || '') + '<br>' + esc(m.whatsapp || '') + '</td><td>' + esc(m.reason || '') + '</td>' +
                            '<td><span class="badge ' + (m.status === 'nuevo' ? 'gold' : m.status === 'respondido' ? 'active' : 'hidden') + '">' + esc(m.status) + '</span></td>' +
                            '<td><div class="row-actions"><button class="btn btn--sm" data-resp="' + m.id + '">✓ Respondido</button><button class="btn btn--sm" data-arch="' + m.id + '">Archivar</button><button class="btn btn--sm btn--danger" data-mdel="' + m.id + '">✕</button></div></td></tr>';
                    }).join('') + '</tbody></table>' : '<p class="empty">No hay consultas. Las que lleguen del formulario aparecerán acá.</p>');
            $('#msg-f').onchange = function () { filter = $('#msg-f').value; draw(); };
            $$('[data-resp]', c).forEach(function (b) { b.onclick = function () { var m = AZ.find('messages', b.getAttribute('data-resp')); m.status = 'respondido'; AZ.upsert('messages', m); draw(); }; });
            $$('[data-arch]', c).forEach(function (b) { b.onclick = function () { var m = AZ.find('messages', b.getAttribute('data-arch')); m.status = 'archivado'; AZ.upsert('messages', m); draw(); }; });
            $$('[data-mdel]', c).forEach(function (b) { b.onclick = function () { AZ.remove('messages', b.getAttribute('data-mdel')); draw(); }; });
        }
        draw();
    };

    /* ---- USERS ---- */
    RENDER.users = function (c) {
        function draw() {
            var list = AZ.get('auth.users') || [];
            c.innerHTML = '<div class="toolbar"><button class="btn btn--gold" id="u-new">＋ Nuevo usuario</button><div class="spacer"></div></div>' +
                '<table class="table"><thead><tr><th>Nombre</th><th>Email</th><th>Rol</th><th></th></tr></thead><tbody>' +
                list.map(function (u) {
                    return '<tr><td>' + esc(u.name) + '</td><td>' + esc(u.email) + '</td><td><span class="badge gold">' + esc(roleLabel(u.role)) + '</span></td>' +
                        '<td><div class="row-actions"><button class="btn btn--sm" data-uedit="' + u.id + '">Editar</button>' + (list.length > 1 ? '<button class="btn btn--sm btn--danger" data-udel="' + u.id + '">✕</button>' : '') + '</div></td></tr>';
                }).join('') + '</tbody></table>' +
                (AZ._isSupabase
                    ? '<div class="panel" style="margin-top:22px;"><h3>Gestión de usuarios</h3><p style="color:var(--ivory-soft);font-size:.88rem;line-height:1.8;">Con Supabase activo, los usuarios se gestionan desde el dashboard.<br><b>Supabase Dashboard → Authentication → Users → Add user</b><br><br>Luego ejecutá en SQL Editor:<br><code style="color:var(--gold);font-size:.8rem">insert into admin_profiles(id,name,role) select id,\'Nombre\',\'super\' from auth.users where email=\'tu@email.com\'</code></p><a class="btn btn--sm" href="https://supabase.com/dashboard" target="_blank" style="margin-top:14px;display:inline-flex;">Abrir Supabase Dashboard ↗</a></div>'
                    : '<div class="panel" style="margin-top:22px;"><h3>Roles</h3><p style="color:var(--ivory-soft);font-size:.88rem;line-height:1.8;"><b>Super admin:</b> acceso total.<br><b>Editor:</b> productos, blog, categorías y medios.<br><b>Soporte:</b> consultas y datos de contacto.</p></div>');
            $('#u-new').onclick = function () { edit(null); };
            $$('[data-uedit]', c).forEach(function (b) { b.onclick = function () { edit(b.getAttribute('data-uedit')); }; });
            $$('[data-udel]', c).forEach(function (b) { b.onclick = function () {
                confirmModal('Eliminar usuario', '¿Quitar el acceso a este usuario?', 'Eliminar', function () {
                    var users = (AZ.get('auth.users') || []).filter(function (u) { return u.id !== b.getAttribute('data-udel'); });
                    AZ.set('auth.users', users); toast('Usuario eliminado'); draw();
                });
            }; });
        }
        function edit(id) {
            var users = AZ.get('auth.users') || [];
            var u = id ? JSON.parse(JSON.stringify(users.filter(function (x) { return x.id === id; })[0])) : { id: null, name: '', email: '', password: '', role: 'editor' };
            c.innerHTML = '<form id="uform"><div class="form-grid">' +
                fText('name', 'Nombre', u.name) +
                fSelect('role', 'Rol', u.role, [{ value: 'super', label: 'Super admin' }, { value: 'editor', label: 'Editor' }, { value: 'soporte', label: 'Soporte' }]) +
                fText('email', 'Email', u.email, { type: 'email', full: true }) +
                fText('password', 'Contraseña', u.password, { full: true, help: id ? 'Dejá el valor para mantenerla' : '' }) +
                '</div><div class="form-foot"><button class="btn btn--gold" type="submit">Guardar</button><button class="btn btn--ghost" type="button" id="ucancel">Cancelar</button></div></form>';
            wireForm(c);
            $('#uform').onsubmit = function (e) {
                e.preventDefault(); var d = collectForm(c);
                if (!d.email || !d.password) { toast('Email y contraseña son obligatorios', true); return; }
                var list = AZ.get('auth.users') || [];
                if (id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) list[i] = { id: id, name: d.name, email: d.email, password: d.password, role: d.role }; }
                else list.push({ id: 'u_' + AZ.rid(), name: d.name, email: d.email, password: d.password, role: d.role });
                AZ.set('auth.users', list); toast('Usuario guardado'); draw();
            };
            $('#ucancel').onclick = draw;
        }
        draw();
    };

    /* ---- SETTINGS FORMS (path-based) ---- */
    function settingsForm(c, title, fieldsFn, note) {
        c.innerHTML = (note ? '<div class="panel" style="margin-bottom:20px;"><p style="color:var(--ivory-soft);font-size:.88rem;">' + note + '</p></div>' : '') +
            '<form id="sform"><div class="form-grid">' + fieldsFn() + '</div>' +
            '<div class="form-foot"><button class="btn btn--gold" type="submit">Guardar cambios</button><div class="spacer"></div><button class="btn btn--sm" type="button" id="s-view">Ver en la web ↗</button></div></form>';
        wireForm(c);
        $('#s-view').onclick = function () { window.open('../index.html', '_blank'); };
        return $('#sform');
    }
    function saveByPath(c, prefix) {
        var d = collectForm(c);
        Object.keys(d).forEach(function (k) { AZ.set(prefix + '.' + k, d[k]); });
        toast('Cambios guardados · se reflejan en la web');
    }

    RENDER.home = function (c) {
        var h = AZ.get('home'), t = AZ.get('settings.ticker');
        var f = settingsForm(c, 'Inicio', function () {
            return '<div class="section-title">Hero principal</div>' +
                fText('eyebrow', 'Texto superior pequeño', h.eyebrow, { full: true }) +
                fText('title', 'Título principal', h.title) +
                fText('subtitle', 'Subtítulo', h.subtitle) +
                fText('text', 'Texto descriptivo', h.text, { area: true, full: true }) +
                fText('btn1Text', 'Botón 1 · texto', h.btn1Text) +
                fText('btn1Link', 'Botón 1 · link', h.btn1Link) +
                fText('btn2Text', 'Botón 2 · texto', h.btn2Text) +
                fText('btn2Link', 'Botón 2 · link', h.btn2Link) +
                fImg('heroImage', 'Imagen del hero', h.heroImage) +
                '<div class="section-title">Ticker deslizante inferior</div>' +
                fText('tickerItems', 'Textos del ticker (uno por línea)', (t.items || []).join('\n'), { area: true, full: true, rows: 4 }) +
                fText('tickerSpeed', 'Velocidad (segundos por vuelta)', t.speed, { type: 'number', help: 'Más alto = más lento' });
        }, 'Editá los textos, botones e imagen de la portada. Los cambios impactan en <b>index.html</b>.');
        f.onsubmit = function (e) {
            e.preventDefault(); var d = collectForm(c);
            ['eyebrow', 'title', 'subtitle', 'text', 'btn1Text', 'btn1Link', 'btn2Text', 'btn2Link', 'heroImage'].forEach(function (k) { AZ.set('home.' + k, d[k]); });
            AZ.set('settings.ticker.items', (d.tickerItems || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean));
            AZ.set('settings.ticker.speed', Number(d.tickerSpeed) || 30);
            toast('Inicio actualizado · se refleja en la web');
        };
    };

    RENDER.banners = function (c) {
        var keys = Object.keys(AZ.get('banners'));
        var sel = keys[0];
        function draw() {
            var b = AZ.get('banners.' + sel);
            c.innerHTML = '<div class="toolbar"><select id="b-sel">' + keys.map(function (k) { return '<option value="' + k + '"' + (k === sel ? ' selected' : '') + '>' + k.charAt(0).toUpperCase() + k.slice(1) + '</option>'; }).join('') + '</select><div class="spacer"></div></div>' +
                '<form id="bform"><div class="form-grid">' +
                fText('label', 'Etiqueta superior', b.label, { full: true }) +
                fText('title', 'Título', b.title) +
                fText('overlay', 'Oscurecer fondo (%)', b.overlay, { type: 'number', help: '0–100' }) +
                fText('text', 'Subtítulo', b.text, { area: true, full: true, rows: 2 }) +
                fImg('image', 'Imagen de fondo', b.image) +
                fSwitch('active', 'Banner activo', b.active) +
                '</div><div class="form-foot"><button class="btn btn--gold" type="submit">Guardar banner</button></div></form>';
            wireForm(c);
            $('#b-sel').onchange = function () { sel = $('#b-sel').value; draw(); };
            $('#bform').onsubmit = function (e) {
                e.preventDefault(); var d = collectForm(c);
                Object.keys(d).forEach(function (k) { AZ.set('banners.' + sel + '.' + k, d[k]); });
                toast('Banner de “' + sel + '” guardado');
            };
        }
        draw();
    };

    RENDER.contact = function (c) {
        var ct = AZ.get('settings.contact');
        var f = settingsForm(c, 'Contacto', function () {
            return fText('whatsapp', 'WhatsApp (con código país, sin +)', ct.whatsapp, { help: 'Ej: 5491123456789' }) +
                fText('email', 'Email', ct.email, { type: 'email' }) +
                fText('instagram', 'Instagram (URL)', ct.instagram) +
                fText('facebook', 'Facebook (URL)', ct.facebook) +
                fText('tiktok', 'TikTok (URL)', ct.tiktok) +
                fText('address', 'Dirección', ct.address) +
                fText('hours', 'Horarios', ct.hours, { full: true });
        }, 'Estos datos alimentan el footer, la página de contacto y el botón flotante.');
        f.onsubmit = function (e) { e.preventDefault(); saveByPath(c, 'settings.contact'); };
    };

    RENDER.whatsapp = function (c) {
        var w = AZ.get('settings.whatsapp');
        var f = settingsForm(c, 'WhatsApp', function () {
            return fText('number', 'Número de WhatsApp', w.number, { help: 'Con código país, sin +. Ej: 5491123456789' }) +
                fText('floatText', 'Texto del botón flotante', w.floatText) +
                fText('autoMessage', 'Mensaje automático del pedido', w.autoMessage, { area: true, full: true, rows: 2 }) +
                fSwitch('cartEnabled', 'Carrito activo', w.cartEnabled) +
                fSwitch('consultEnabled', 'Botón “consultar por WhatsApp”', w.consultEnabled);
        }, 'El pedido se arma automáticamente con producto, cantidad, precio y total. El número acá configurado se usa en todo el sitio.');
        f.onsubmit = function (e) { e.preventDefault(); saveByPath(c, 'settings.whatsapp'); AZ.set('settings.contact.whatsapp', $('[data-k=number]', c).value); };
    };

    RENDER.visual = function (c) {
        var v = AZ.get('settings.visual'), b = AZ.get('settings.brand');
        c.innerHTML = '<form id="sform"><div class="form-grid">' +
            '<div class="section-title">Marca</div>' +
            fText('brandName', 'Nombre de marca', b.name) +
            fText('brandTagline', 'Frase de marca', b.tagline, { full: true }) +
            fText('brandQuote', 'Frase del footer', b.quote, { full: true }) +
            '<div class="section-title">Colores</div>' +
            fText('colorForest', 'Verde bosque', v.colorForest) +
            fText('colorMoss', 'Verde musgo', v.colorMoss) +
            fText('colorGold', 'Dorado', v.colorGold) +
            fText('colorIvory', 'Marfil', v.colorIvory) +
            fText('colorBeige', 'Beige', v.colorBeige) +
            '<div class="section-title">Tipografía y preloader</div>' +
            fSelect('fontHeading', 'Tipografía de títulos', v.fontHeading, ['Playfair Display', 'Cormorant Garamond', 'Bodoni Moda']) +
            fSelect('fontBody', 'Tipografía de texto', v.fontBody, ['Inter', 'Manrope']) +
            fText('preloaderText', 'Texto del preloader', v.preloaderText, { full: true }) +
            '</div><div class="form-foot"><button class="btn btn--gold" type="submit">Guardar</button></div></form>';
        wireForm(c);
        $('#sform').onsubmit = function (e) {
            e.preventDefault(); var d = collectForm(c);
            ['colorForest', 'colorMoss', 'colorGold', 'colorIvory', 'colorBeige', 'fontHeading', 'fontBody', 'preloaderText'].forEach(function (k) { AZ.set('settings.visual.' + k, d[k]); });
            AZ.set('settings.brand.name', d.brandName); AZ.set('settings.brand.tagline', d.brandTagline); AZ.set('settings.brand.quote', d.brandQuote);
            toast('Identidad visual guardada');
        };
    };

    RENDER.seo = function (c) {
        var s = AZ.get('settings.seo');
        var f = settingsForm(c, 'SEO', function () {
            return fText('title', 'Meta title', s.title, { full: true }) +
                fText('description', 'Meta description', s.description, { area: true, full: true, rows: 2 }) +
                fText('keywords', 'Keywords', s.keywords, { area: true, full: true, rows: 2 }) +
                fImg('ogImage', 'Imagen Open Graph (compartir)', s.ogImage);
        }, 'Datos básicos de posicionamiento que se aplican como valores por defecto del sitio.');
        f.onsubmit = function (e) { e.preventDefault(); saveByPath(c, 'settings.seo'); };
    };

    /* ====================================================================
       TOP-LEVEL WIRING
       ==================================================================== */
    // Login (async — compatible con Supabase Auth y fallback localStorage)
    $('#login-form').onsubmit = function (e) {
        e.preventDefault();
        var btn = this.querySelector('[type=submit]');
        var err = $('#login-error');
        btn.disabled = true; btn.textContent = 'Ingresando…';
        err.classList.remove('show');
        Promise.resolve(AZ.login($('#li-email').value.trim(), $('#li-pass').value))
            .then(function (s) {
                btn.disabled = false; btn.textContent = 'Ingresar';
                if (!s) { err.textContent = 'Email o contraseña incorrectos.'; err.classList.add('show'); return; }
                user = s; showApp();
            })
            .catch(function (ex) {
                btn.disabled = false; btn.textContent = 'Ingresar';
                err.textContent = 'Error de conexión: ' + (ex.message || ex); err.classList.add('show');
            });
    };
    $('#to-recover').onclick = function () { $('#login-view').style.display = 'none'; $('#recover-view').style.display = 'block'; };
    $('#to-login').onclick = function () { $('#recover-view').style.display = 'none'; $('#login-view').style.display = 'block'; };
    $('#recover-form').onsubmit = function (e) {
        e.preventDefault();
        var btn = this.querySelector('[type=submit]');
        var err = $('#recover-error');
        btn.disabled = true; btn.textContent = 'Enviando…';
        Promise.resolve(AZ.resetPassword($('#rec-email').value.trim()))
            .then(function (ok) {
                btn.disabled = false; btn.textContent = 'Restablecer contraseña';
                if (!ok) { err.textContent = 'No encontramos una cuenta con ese email.'; err.classList.add('show'); return; }
                err.classList.remove('show');
                toast(AZ._isSupabase
                    ? 'Revisá tu email para restablecer la contraseña.'
                    : 'Contraseña actualizada, ya podés ingresar.');
                $('#to-login').click();
                if (!AZ._isSupabase) $('#li-email').value = $('#rec-email').value;
            });
    };

    $('#logout').onclick = function () {
        Promise.resolve(AZ.logout()).then(function () { location.reload(); });
    };
    $('#view-site').onclick = function () { window.open('../index.html', '_blank'); };
    $('#menu-btn').onclick = function () { $('#sidebar').classList.toggle('open'); };

    // Publish / backup
    $('#publish').onclick = function () {
        confirmModal('Publicar / Backup', 'Tus cambios ya están activos en la web (mismo navegador). Para llevarlos a otra computadora o publicarlos en un hosting, descargá el archivo de contenido y subilo, o usá Importar.', 'Descargar JSON', function () {
            var blob = new Blob([AZ.exportJSON()], { type: 'application/json' });
            var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
            a.download = 'armonia-contenido-' + new Date().toISOString().slice(0, 10) + '.json'; a.click();
            toast('Backup descargado');
        });
    };

    // Sesión activa (async — espera a que AZ esté listo y la sesión resuelta)
    window.addEventListener('hashchange', function () { if (user) { var s = location.hash.replace('#', ''); if (s && s !== current) route(s); } });
    AZ.onReady(function () {
        Promise.resolve(AZ.session()).then(function (existing) {
            if (existing) { user = existing; showApp(); }
        });
    });
})();
