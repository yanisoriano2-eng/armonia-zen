/* ============================================================
   ARMONÍA ZEN · Supabase Store
   Reemplaza store.js. Misma API window.AZ, respaldada por Supabase.
   Si las credenciales no están configuradas, usa localStorage.
   ============================================================ */
(function () {
    'use strict';

    /* ---------- detectar si Supabase está configurado ---------- */
    var CONFIGURED = typeof SUPABASE_URL !== 'undefined'
        && typeof SUPABASE_ANON !== 'undefined'
        && !SUPABASE_URL.includes('PEGAR')
        && SUPABASE_URL.length > 10;

    var _sb = CONFIGURED
        ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON)
        : null;

    /* ---------- datos en memoria ---------- */
    var _data   = null;
    var _ready  = false;
    var _readyQ = [];
    var LSKEY   = 'az_content_v1';
    var SESSION = 'az_session_v1';

    /* ---------- modelo por defecto (seed) ---------- */
    var DEFAULTS = {
        settings: {
            brand:    { name: 'ARMONÍA ZEN', tagline: 'Decoración consciente para espacios que transmiten calma.', quote: 'La armonía comienza en los espacios que habitamos.' },
            contact:  { whatsapp: '5491123456789', email: 'hola@armoniazen.com', instagram: '#', facebook: '#', tiktok: '#', address: 'Buenos Aires, Argentina', hours: 'Lun a Vie · 10 a 19 h · Sáb · 10 a 14 h' },
            whatsapp: { number: '5491123456789', autoMessage: 'Hola Armonía Zen, me gustaría encargar:', floatText: 'WhatsApp', cartEnabled: true, consultEnabled: true },
            visual:   { colorForest: '#0B2219', colorMoss: '#143328', colorIvory: '#F4EFE6', colorGold: '#CBB77C', colorBeige: '#D8CCB5', preloaderText: 'ARMONÍA ZEN', fontHeading: 'Playfair Display', fontBody: 'Inter' },
            seo:      { title: 'Armonía Zen — Decoración consciente', description: 'Piezas inspiradas en la naturaleza, el bienestar y la armonía.', keywords: 'decoración zen, piedras, plantas, lámparas de sal', ogImage: '' },
            ticker:   { speed: 30, items: ['Piedras energéticas', 'Lámparas de sal', 'Fuentes de agua', 'Plantas', 'Budas', 'Feng Shui', 'Aromas', 'Bienestar', 'Decoración consciente'] }
        },
        home: {
            eyebrow: 'Decoración consciente · Bienestar · Hogar',
            title: 'ARMONÍA ZEN', subtitle: 'Decoración consciente para espacios que transmiten calma.',
            text: 'Creemos que cada objeto tiene el poder de transformar cómo se siente un espacio.',
            btn1Text: 'Explorar Colección', btn1Link: 'catalogo.html',
            btn2Text: 'Descubrir Nuestra Filosofía', btn2Link: '#esencia',
            heroImage: 'https://images.unsplash.com/photo-1512972972907-6d71529c5e92?w=2000&q=80&auto=format&fit=crop'
        },
        banners: {
            catalogo: { label: 'La Colección', title: 'Tienda', text: 'Cada pieza, elegida por cómo transforma el aire de un espacio.', image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            piedras:  { label: 'Cristales · Energía · Intención', title: 'Piedras', text: 'Nacidas en el corazón de la tierra.', image: 'https://images.unsplash.com/photo-1726946998938-68df123d4c94?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            plantas:  { label: 'Naturaleza · Vida · Bienestar', title: 'Plantas', text: 'Más que decoración, son presencia viva.', image: 'https://images.unsplash.com/photo-1764422097784-0eaa2340d0e1?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            blog:     { label: 'Guías · Rituales · Bienestar', title: 'Journal', text: 'Lecturas para una vida más consciente.', image: 'https://images.unsplash.com/photo-1568990416308-c998af4cf9ee?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            nosotros: { label: 'Naturaleza · Armonía · Propósito', title: 'Filosofía', text: 'No vendemos objetos.', image: 'https://images.unsplash.com/photo-1650208532541-572697b3dd40?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            contacto: { label: 'Estamos para acompañarte', title: 'Hablemos de tu espacio', text: 'Contanos qué te gustaría transformar.', image: 'https://images.unsplash.com/photo-1619166855707-bba87a7772a2?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true }
        },
        categories: [], intentions: [], products: [],
        blog: [], faqs: [], testimonials: [], media: [], messages: [],
        auth: { users: [{ id: 'u1', name: 'Administrador', email: 'admin@armoniazen.com', password: 'armonia2026', role: 'super' }] }
    };

    /* ---------- conversores DB (snake) ↔ JS (camel) ---------- */
    function fromProduct(r) {
        return {
            id: r.id, name: r.name, category: r.category || '', subcategory: r.subcategory || '',
            price: Number(r.price || 0), priceOld: Number(r.price_old || 0), stock: r.stock || 0,
            status: r.status || 'active', featured: !!r.featured, isNew: !!r.is_new, bestSeller: !!r.best_seller,
            image: r.image || '', gallery: r.gallery || [],
            descShort: r.desc_short || '', descLong: r.desc_long || '',
            benefits: r.benefits || '', meaning: r.meaning || '', howToUse: r.how_to_use || '',
            placement: r.placement || '', care: r.care || '', material: r.material || '',
            size: r.size || '', color: r.color || '', intention: r.intention || '', tags: r.tags || '',
            seoTitle: r.seo_title || '', seoDesc: r.seo_desc || '', editedAt: Date.parse(r.updated_at) || 0
        };
    }
    function toProduct(p) {
        return {
            id: p.id, name: p.name, category: p.category, subcategory: p.subcategory || '',
            price: p.price || 0, price_old: p.priceOld || 0, stock: p.stock || 0,
            status: p.status || 'active', featured: !!p.featured, is_new: !!p.isNew, best_seller: !!p.bestSeller,
            image: p.image || '', gallery: p.gallery || [],
            desc_short: p.descShort || '', desc_long: p.descLong || '',
            benefits: p.benefits || '', meaning: p.meaning || '', how_to_use: p.howToUse || '',
            placement: p.placement || '', care: p.care || '', material: p.material || '',
            size: p.size || '', color: p.color || '', intention: p.intention || '', tags: p.tags || '',
            seo_title: p.seoTitle || '', seo_desc: p.seoDesc || ''
        };
    }
    function fromBlog(r) {
        return { id: r.id, slug: r.slug, title: r.title || '', category: r.category || '', image: r.image || '', excerpt: r.excerpt || '', content: r.content || '', readTime: r.read_time || 5, author: r.author || 'Armonía Zen', date: r.date ? String(r.date) : '', status: r.status || 'draft', seoTitle: r.seo_title || '', seoDesc: r.seo_desc || '' };
    }
    function toBlog(p) {
        return { id: p.id, slug: p.slug, title: p.title, category: p.category, image: p.image, excerpt: p.excerpt || '', content: p.content || '', read_time: p.readTime || 5, author: p.author || 'Armonía Zen', date: p.date || null, status: p.status, seo_title: p.seoTitle || '', seo_desc: p.seoDesc || '' };
    }
    function fromMsg(r) {
        return { id: r.id, name: r.name || '', email: r.email || '', whatsapp: r.whatsapp || '', reason: r.reason || '', message: r.message || '', status: r.status || 'nuevo', date: r.created_at };
    }

    var TABLE = { products: 'products', categories: 'categories', intentions: 'intentions', blog: 'blog_posts', faqs: 'faqs', testimonials: 'testimonials', media: 'media', messages: 'messages' };
    var COLL_TO = { products: toProduct, blog: toBlog };
    var COLL_FROM = { products: fromProduct, blog: fromBlog, messages: fromMsg };

    /* ---------- helpers ---------- */
    function clone(x) { return JSON.parse(JSON.stringify(x)); }
    function isObj(x) { return x && typeof x === 'object' && !Array.isArray(x); }
    function merge(base, over) {
        var out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
        if (!isObj(over)) return out;
        for (var k in over) {
            if (isObj(base[k]) && isObj(over[k])) out[k] = merge(base[k], over[k]);
            else out[k] = over[k];
        }
        return out;
    }
    function rid() { return Math.random().toString(36).slice(2, 9); }
    function persist() {
        try { localStorage.setItem(LSKEY, JSON.stringify(_data)); } catch (e) {}
    }

    /* ---------- carga desde Supabase ---------- */
    async function loadFromSupabase() {
        var results = await Promise.all([
            _sb.from('settings').select('key,value'),
            _sb.from('products').select('*').order('sort_order'),
            _sb.from('categories').select('*').order('sort_order'),
            _sb.from('intentions').select('*').order('sort_order'),
            _sb.from('blog_posts').select('*').order('sort_order'),
            _sb.from('faqs').select('*').order('sort_order'),
            _sb.from('testimonials').select('*').order('sort_order'),
            _sb.from('media').select('*').order('created_at', { ascending: false }),
            _sb.from('messages').select('*').order('created_at', { ascending: false })
        ]);

        if (results[0].error) throw new Error('Supabase: ' + results[0].error.message);

        _data = clone(DEFAULTS);

        /* settings */
        (results[0].data || []).forEach(function (row) {
            if (row.key === 'home')    _data.home    = row.value;
            else if (row.key === 'banners') _data.banners = row.value;
            else if (_data.settings[row.key]) _data.settings[row.key] = row.value;
        });
        /* collections */
        if (results[1].data) _data.products    = results[1].data.map(fromProduct);
        if (results[2].data) _data.categories  = results[2].data;
        if (results[3].data) _data.intentions  = results[3].data;
        if (results[4].data) _data.blog        = results[4].data.map(fromBlog);
        if (results[5].data) _data.faqs        = results[5].data;
        if (results[6].data) _data.testimonials = results[6].data;
        if (results[7].data) _data.media       = results[7].data;
        if (results[8].data) _data.messages    = results[8].data.map(fromMsg);

        persist();
    }

    /* ---------- escritura asíncrona a Supabase ---------- */
    async function sbUpsert(coll, item) {
        if (!_sb || !TABLE[coll]) return;
        var row = COLL_TO[coll] ? COLL_TO[coll](item) : item;
        var { error } = await _sb.from(TABLE[coll]).upsert(row);
        if (error) console.warn('[AZ] Supabase upsert error:', error.message);
    }
    async function sbDelete(coll, id) {
        if (!_sb || !TABLE[coll]) return;
        var { error } = await _sb.from(TABLE[coll]).delete().eq('id', id);
        if (error) console.warn('[AZ] Supabase delete error:', error.message);
    }
    async function sbSyncSettings(key) {
        if (!_sb) return;
        var value = key === 'home' ? _data.home
            : key === 'banners' ? _data.banners
            : _data.settings[key];
        if (!value) return;
        var { error } = await _sb.from('settings').upsert({ key: key, value: value });
        if (error) console.warn('[AZ] Supabase settings error:', error.message);
    }
    async function sbReorder(coll, ids) {
        if (!_sb || !TABLE[coll]) return;
        var updates = ids.map(function (id, i) { return { id: id, sort_order: i }; });
        var { error } = await _sb.from(TABLE[coll]).upsert(updates, { onConflict: 'id' });
        if (error) console.warn('[AZ] Supabase reorder error:', error.message);
    }

    /* ---------- auth helpers ---------- */
    async function getAdminProfile(uid) {
        var { data } = await _sb.from('admin_profiles').select('name,role').eq('id', uid).single();
        return data;
    }

    /* ---------- init ---------- */
    async function init() {
        try {
            if (CONFIGURED) {
                await loadFromSupabase();
            } else {
                var saved = null;
                try { saved = JSON.parse(localStorage.getItem(LSKEY)); } catch (e) {}
                _data = saved ? merge(DEFAULTS, saved) : clone(DEFAULTS);
            }
        } catch (e) {
            console.warn('[AZ] Cayendo a localStorage:', e.message);
            var saved2 = null;
            try { saved2 = JSON.parse(localStorage.getItem(LSKEY)); } catch (e2) {}
            _data = saved2 ? merge(DEFAULTS, saved2) : clone(DEFAULTS);
        }
        _ready = true;
        _readyQ.forEach(function (cb) { cb(); });
        _readyQ = [];
    }

    /* ============================================================
       API PÚBLICA (window.AZ) — misma interfaz que store.js
       ============================================================ */
    window.AZ = {
        rid: rid,
        money: function (n) { return '$' + Number(n || 0).toLocaleString('es-AR'); },

        onReady: function (cb) { _ready ? cb() : _readyQ.push(cb); },

        all: function () { return _data; },
        get: function (path) {
            return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, _data);
        },
        set: function (path, value) {
            var keys = path.split('.'), o = _data;
            for (var i = 0; i < keys.length - 1; i++) { if (!o[keys[i]]) o[keys[i]] = {}; o = o[keys[i]]; }
            o[keys[keys.length - 1]] = value;
            persist();
            /* detectar qué clave de settings afecta y sincronizar */
            var settingsKey = path === 'home' || path.startsWith('home.') ? 'home'
                : path === 'banners' || path.startsWith('banners.') ? 'banners'
                : path.startsWith('settings.') ? path.split('.')[1]
                : null;
            if (settingsKey) sbSyncSettings(settingsKey);
            return true;
        },
        save: function () { persist(); return true; },

        list: function (coll) { return _data[coll] || []; },
        find: function (coll, id) { return (_data[coll] || []).filter(function (x) { return x.id === id; })[0]; },

        upsert: function (coll, item) {
            if (!_data[coll]) _data[coll] = [];
            if (!item.id) item.id = coll.charAt(0) + '_' + rid();
            var idx = (_data[coll]).map(function (x) { return x.id; }).indexOf(item.id);
            if (idx > -1) _data[coll][idx] = item; else _data[coll].push(item);
            persist();
            sbUpsert(coll, item);
            return item;
        },

        remove: function (coll, id) {
            _data[coll] = (_data[coll] || []).filter(function (x) { return x.id !== id; });
            persist();
            sbDelete(coll, id);
        },

        reorder: function (coll, ids) {
            var map = {};
            (_data[coll] || []).forEach(function (x) { map[x.id] = x; });
            _data[coll] = ids.map(function (id) { return map[id]; }).filter(Boolean);
            persist();
            sbReorder(coll, ids);
        },

        publicProducts: function () {
            return (_data.products || []).filter(function (p) { return p.status !== 'hidden'; });
        },

        exportJSON: function () { return JSON.stringify(_data, null, 2); },
        importJSON: function (str) {
            _data = merge(DEFAULTS, JSON.parse(str)); persist(); return true;
        },
        reset: function () { localStorage.removeItem(LSKEY); location.reload(); },

        /* ---- Auth (async cuando Supabase está activo) ---- */
        login: async function (email, password) {
            if (!CONFIGURED) {
                /* fallback localStorage */
                var u = (_data.auth.users || []).find(function (x) { return x.email.toLowerCase() === email.toLowerCase() && x.password === password; });
                if (!u) return null;
                var s = { id: u.id, name: u.name, email: u.email, role: u.role, t: Date.now() };
                try { localStorage.setItem(SESSION, JSON.stringify(s)); } catch (e) {}
                return s;
            }
            var auth = await _sb.auth.signInWithPassword({ email: email, password: password });
            if (auth.error) return null;
            var profile = await getAdminProfile(auth.data.user.id);
            var session = {
                id: auth.data.user.id,
                email: auth.data.user.email,
                name: profile ? profile.name : auth.data.user.email,
                role: profile ? profile.role : 'editor',
                t: Date.now()
            };
            return session;
        },

        session: async function () {
            if (!CONFIGURED) {
                try { return JSON.parse(localStorage.getItem(SESSION)); } catch (e) { return null; }
            }
            var resp = await _sb.auth.getSession();
            if (!resp.data.session) return null;
            var u = resp.data.session.user;
            var profile = await getAdminProfile(u.id);
            return {
                id: u.id, email: u.email,
                name: profile ? profile.name : u.email,
                role: profile ? profile.role : 'editor',
                t: Date.now()
            };
        },

        logout: async function () {
            if (!CONFIGURED) { localStorage.removeItem(SESSION); return; }
            await _sb.auth.signOut();
        },

        resetPassword: async function (email) {
            if (!CONFIGURED) {
                var u = (_data.auth.users || []).find(function (x) { return x.email.toLowerCase() === email.toLowerCase(); });
                return !!u;
            }
            var redirectUrl = window.location.origin + (window.location.pathname.includes('admin') ? '/admin/' : '/');
            var { error } = await _sb.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl });
            return !error;
        },

        /* ---- exponer Supabase client para usos avanzados ---- */
        _sb: function () { return _sb; },
        _isSupabase: CONFIGURED
    };

    init();
})();
