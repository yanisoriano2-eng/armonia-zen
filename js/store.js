/* ==========================================================================
   ARMONÍA ZEN — Data store (capa de datos compartida admin + web pública)
   Persistencia: localStorage. Modelo por defecto + overrides guardados.
   Expone window.AZ
   ========================================================================== */

(function () {
    'use strict';

    var KEY = 'az_content_v1';
    var SESSION = 'az_session_v1';

    // ---- Modelo por defecto (seed) ----------------------------------------
    var DEFAULTS = {
        version: 1,
        settings: {
            brand: {
                name: 'ARMONÍA ZEN',
                tagline: 'Decoración consciente para espacios que transmiten calma.',
                quote: 'La armonía comienza en los espacios que habitamos.'
            },
            contact: {
                whatsapp: '5491123456789',
                email: 'hola@armoniazen.com',
                instagram: '#',
                facebook: '#',
                tiktok: '#',
                address: 'Buenos Aires, Argentina',
                hours: 'Lun a Vie · 10 a 19 h · Sáb · 10 a 14 h'
            },
            whatsapp: {
                number: '5491123456789',
                autoMessage: 'Hola Armonía Zen, me gustaría encargar:',
                floatText: 'WhatsApp',
                cartEnabled: true,
                consultEnabled: true
            },
            visual: {
                colorForest: '#0B2219',
                colorMoss: '#143328',
                colorIvory: '#F4EFE6',
                colorGold: '#CBB77C',
                colorBeige: '#D8CCB5',
                preloaderText: 'ARMONÍA ZEN',
                tickerSpeed: 30,
                fontHeading: 'Playfair Display',
                fontBody: 'Inter'
            },
            seo: {
                title: 'Armonía Zen — Decoración consciente',
                description: 'Piezas inspiradas en la naturaleza, el bienestar y la armonía para crear hogares que invitan a respirar.',
                keywords: 'decoración zen, piedras energéticas, plantas, lámparas de sal, feng shui',
                ogImage: ''
            },
            ticker: {
                speed: 30,
                items: ['Piedras energéticas', 'Lámparas de sal', 'Fuentes de agua', 'Plantas', 'Budas', 'Feng Shui', 'Aromas', 'Bienestar', 'Decoración consciente']
            }
        },

        home: {
            eyebrow: 'Decoración consciente · Bienestar · Hogar',
            title: 'ARMONÍA ZEN',
            subtitle: 'Decoración consciente para espacios que transmiten calma.',
            text: 'Creemos que cada objeto tiene el poder de transformar cómo se siente un espacio. Seleccionamos piezas inspiradas en la naturaleza, el bienestar y la armonía para crear hogares que invitan a detenerse, respirar y reconectar.',
            btn1Text: 'Explorar Colección', btn1Link: 'catalogo.html',
            btn2Text: 'Descubrir Nuestra Filosofía', btn2Link: '#esencia',
            heroImage: 'https://images.unsplash.com/photo-1512972972907-6d71529c5e92?w=2000&q=80&auto=format&fit=crop'
        },

        banners: {
            catalogo:  { label: 'La Colección', title: 'Tienda', text: 'Cada pieza, elegida por cómo transforma el aire de un espacio.', image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            piedras:   { label: 'Cristales · Energía · Intención', title: 'Piedras', text: 'Nacidas en el corazón de la tierra, las piedras guardan una calma antigua.', image: 'https://images.unsplash.com/photo-1726946998938-68df123d4c94?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            plantas:   { label: 'Naturaleza · Vida · Bienestar', title: 'Plantas', text: 'Más que decoración, son presencia viva.', image: 'https://images.unsplash.com/photo-1764422097784-0eaa2340d0e1?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            blog:      { label: 'Guías · Rituales · Bienestar', title: 'Journal', text: 'Lecturas para una vida más consciente.', image: 'https://images.unsplash.com/photo-1568990416308-c998af4cf9ee?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            nosotros:  { label: 'Naturaleza · Armonía · Propósito', title: 'Filosofía', text: 'No vendemos objetos. Ayudamos a transformar espacios y estados emocionales.', image: 'https://images.unsplash.com/photo-1650208532541-572697b3dd40?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true },
            contacto:  { label: 'Estamos para acompañarte', title: 'Hablemos de tu espacio', text: 'Contanos qué te gustaría transformar y cómo querés que se sienta.', image: 'https://images.unsplash.com/photo-1619166855707-bba87a7772a2?w=2000&q=80&auto=format&fit=crop', overlay: 70, active: true }
        },

        categories: [
            { id: 'luz', name: 'Lámparas de sal', slug: 'luz', active: true },
            { id: 'piedras', name: 'Piedras energéticas', slug: 'piedras', active: true },
            { id: 'agua', name: 'Fuentes de agua', slug: 'agua', active: true },
            { id: 'aroma', name: 'Aromas', slug: 'aroma', active: true },
            { id: 'plantas', name: 'Plantas', slug: 'plantas', active: true },
            { id: 'presencia', name: 'Budas', slug: 'presencia', active: true }
        ],

        intentions: [
            { id: 'proteccion', name: 'Protección' }, { id: 'amor', name: 'Amor propio' },
            { id: 'abundancia', name: 'Abundancia' }, { id: 'calma', name: 'Calma' },
            { id: 'claridad', name: 'Claridad' }, { id: 'limpieza', name: 'Limpieza energética' },
            { id: 'meditacion', name: 'Meditación' }, { id: 'armonia', name: 'Armonía familiar' }
        ],

        products: [
            mkProd(1,  'Lámpara de Sal del Himalaya', 'luz',       45000, '1623241923490-5b2fd532828f', 'Resplandor ámbar que purifica y entibia el ambiente.', { featured: true }),
            mkProd(2,  'Vela de Intención',            'luz',       15000, '1561212856-44e9bae482aa',   'Cera natural para encender momentos de calma.'),
            mkProd(3,  'Amatista Natural',             'piedras',   22000, '1609216970378-ce61cd74a187', 'Calma mental, intuición y protección.', { featured: true, intention: 'calma' }),
            mkProd(4,  'Cuarzo Rosa',                  'piedras',   18000, '1593259213062-57b0ce5906cf', 'Amor propio, suavidad y apertura emocional.', { intention: 'amor' }),
            mkProd(5,  'Citrino Natural',              'piedras',   20000, '1614092872241-c9a193f2b4aa', 'Abundancia, alegría y energía solar.', { intention: 'abundancia' }),
            mkProd(6,  'Drusa de Amatista',            'piedras',   32000, '1632980205460-e490e885e848', 'Pieza de gran porte para anclar un espacio.'),
            mkProd(7,  'Fuente de Bambú Zen',          'agua',      65000, '1564462369724-4003221599e2', 'El murmullo del agua que trae fluidez.', { featured: true }),
            mkProd(8,  'Fuente de Piedra',             'agua',      58000, '1553090298-50fc519730d2',   'Movimiento sereno para espacios de descanso.'),
            mkProd(9,  'Buda Meditativo',              'presencia', 35000, '1596045571419-664297d8f502', 'Presencia, serenidad y sabiduría interior.', { featured: true }),
            mkProd(10, 'Buda de Jardín',               'presencia', 42000, '1671043121840-cf607dee6152', 'Para rincones verdes y patios contemplativos.'),
            mkProd(11, 'Cuenco Tibetano',              'presencia', 38000, '1579291465308-fba6c5db2dfe', 'Sonido que armoniza y reordena la energía.'),
            mkProd(12, 'Monstera Deliciosa',           'plantas',   28000, '1525498128493-380d1990a112', 'Vida y frescura que oxigena el ambiente.', { featured: true }),
            mkProd(13, 'Espada de San Jorge',          'plantas',   24000, '1593482892290-f54927ae1bb6', 'Protección y poder, casi sin cuidados.'),
            mkProd(14, 'Incienso de Sándalo',          'aroma',     12000, '1626937526107-ca0be0eecccd', 'Aroma profundo para meditación y limpieza.'),
            mkProd(15, 'Sahumerio de Palo Santo',      'aroma',     14000, '1639390167093-9c62311fe84d', 'Humo sagrado que despeja y renueva.')
        ],

        blog: [
            mkPost('feng-shui', 'Feng Shui: el arte de dejar fluir la energía del hogar', 'Decoración', '1606744837616-56c9a5c6a6eb', 10),
            mkPost('lampara-sal', '¿Para qué sirve una lámpara de sal?', 'Productos', '1623241923490-5b2fd532828f', 5),
            mkPost('piedras-significado', 'El significado de las piedras energéticas', 'Guía', '1609216970378-ce61cd74a187', 8),
            mkPost('buda-hogar', 'Qué representa tener un Buda en el hogar', 'Espiritualidad', '1596045571419-664297d8f502', 6),
            mkPost('limpiar-cristales', 'Cómo limpiar energéticamente tus cristales', 'Ritual', '1597336465111-a392afd218bc', 5),
            mkPost('rincon-meditacion', 'Cómo crear un rincón de meditación en casa', 'Espacios', '1619166855707-bba87a7772a2', 9)
        ],

        faqs: [
            mkFaq('¿Las piedras son naturales y auténticas?', 'Sí. Trabajamos únicamente con cristales naturales, sin teñidos ni imitaciones. Cada piedra es única.', 'Piedras'),
            mkFaq('¿Hacen envíos a todo el país?', 'Realizamos envíos a toda la Argentina. Coordinamos método y costo por WhatsApp según tu ubicación.', 'Envíos'),
            mkFaq('¿Cómo elijo qué piedra o planta me conviene?', 'Podés guiarte por la intención que buscás o escribirnos: te armamos una recomendación personalizada sin cargo.', 'Compras'),
            mkFaq('¿Las plantas vienen con instrucciones de cuidado?', 'Cada planta se entrega con una ficha de cuidado simple: luz, riego y consejos para que se adapte a tu casa.', 'Plantas'),
            mkFaq('¿Puedo comprar para regalar?', 'Por supuesto. Ofrecemos packaging especial para regalo y podemos incluir una tarjeta con tu mensaje.', 'Compras'),
            mkFaq('¿Cómo se realiza el pago?', 'Coordinamos el pago por WhatsApp: aceptamos transferencia y los principales medios digitales.', 'Compras')
        ],

        testimonials: [
            mkTesti('Camila R.', 'Transformaron por completo mi living. La amatista que me recomendaron es hermosa y la energía del espacio cambió.', 5, 'Amatista Natural'),
            mkTesti('Martín G.', 'La lámpara de sal es justo lo que buscaba para el dormitorio. Atención impecable y envío cuidado.', 5, 'Lámpara de Sal del Himalaya'),
            mkTesti('Lucía P.', 'Me asesoraron para armar un rincón de meditación. Cada detalle pensado con muchísimo gusto.', 5, '')
        ],

        media: [],
        messages: [],

        auth: {
            users: [
                { id: 'u1', name: 'Administrador', email: 'admin@armoniazen.com', password: 'armonia2026', role: 'super' }
            ]
        }
    };

    // ---- Helpers de seed ---------------------------------------------------
    function mkProd(id, name, cat, price, img, desc, extra) {
        var p = {
            id: 'p' + id, name: name, category: cat, subcategory: '',
            price: price, priceOld: 0, stock: 25,
            status: 'active', featured: false, isNew: false, bestSeller: false,
            image: 'https://images.unsplash.com/photo-' + img + '?w=700&q=80&auto=format&fit=crop',
            gallery: [],
            descShort: desc, descLong: '',
            benefits: '', meaning: '', howToUse: '', placement: '', care: '',
            material: '', size: '', color: '', intention: '',
            tags: '', seoTitle: '', seoDesc: ''
        };
        if (extra) for (var k in extra) p[k] = extra[k];
        return p;
    }
    function mkPost(slug, title, cat, img, readTime) {
        return {
            id: 'b_' + slug, slug: slug, title: title, category: cat,
            image: 'https://images.unsplash.com/photo-' + img + '?w=1100&q=80&auto=format&fit=crop',
            excerpt: '', content: '', readTime: readTime, author: 'Armonía Zen',
            date: '2026-01-01', status: 'published', seoTitle: '', seoDesc: ''
        };
    }
    function mkFaq(q, a, cat) { return { id: 'f_' + rid(), question: q, answer: a, category: cat, active: true }; }
    function mkTesti(name, text, rating, product) { return { id: 't_' + rid(), name: name, photo: '', text: text, rating: rating, product: product, active: true }; }
    function rid() { return Math.random().toString(36).slice(2, 9); }

    // ---- Deep merge (defaults <- saved) -----------------------------------
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

    // ---- Carga / guardado --------------------------------------------------
    var data;
    function load() {
        var saved = null;
        try { saved = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
        data = saved ? merge(DEFAULTS, saved) : clone(DEFAULTS);
    }
    function clone(x) { return JSON.parse(JSON.stringify(x)); }
    function persist() {
        try { localStorage.setItem(KEY, JSON.stringify(data)); return true; }
        catch (e) { console.error('No se pudo guardar (cuota?)', e); return false; }
    }

    load();

    // ---- API pública -------------------------------------------------------
    var AZ = {
        rid: rid,

        all: function () { return data; },
        get: function (path) {
            return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, data);
        },
        set: function (path, value) {
            var keys = path.split('.'), o = data;
            for (var i = 0; i < keys.length - 1; i++) { if (!o[keys[i]]) o[keys[i]] = {}; o = o[keys[i]]; }
            o[keys[keys.length - 1]] = value;
            return persist();
        },
        save: function () { return persist(); },

        // Colecciones genéricas
        list: function (coll) { return data[coll] || []; },
        find: function (coll, id) { return (data[coll] || []).filter(function (x) { return x.id === id; })[0]; },
        upsert: function (coll, item) {
            if (!data[coll]) data[coll] = [];
            if (!item.id) item.id = coll.charAt(0) + '_' + rid();
            var idx = data[coll].map(function (x) { return x.id; }).indexOf(item.id);
            if (idx > -1) data[coll][idx] = item; else data[coll].push(item);
            persist(); return item;
        },
        remove: function (coll, id) {
            data[coll] = (data[coll] || []).filter(function (x) { return x.id !== id; });
            persist();
        },
        reorder: function (coll, ids) {
            var map = {}; (data[coll] || []).forEach(function (x) { map[x.id] = x; });
            data[coll] = ids.map(function (id) { return map[id]; }).filter(Boolean);
            persist();
        },

        // Productos públicos (solo visibles)
        publicProducts: function () {
            return (data.products || []).filter(function (p) { return p.status !== 'hidden'; });
        },

        // Export / import (publicar / backup)
        exportJSON: function () { return JSON.stringify(data, null, 2); },
        importJSON: function (str) {
            var obj = JSON.parse(str);
            data = merge(DEFAULTS, obj); persist(); return true;
        },
        reset: function () { localStorage.removeItem(KEY); load(); },

        // ---- Auth (client-side; ver advertencia en README) ----
        login: function (email, password) {
            var u = (data.auth.users || []).filter(function (x) {
                return x.email.toLowerCase() === String(email).toLowerCase() && x.password === password;
            })[0];
            if (!u) return null;
            var session = { id: u.id, name: u.name, email: u.email, role: u.role, t: Date.now() };
            try { localStorage.setItem(SESSION, JSON.stringify(session)); } catch (e) {}
            return session;
        },
        session: function () {
            try { return JSON.parse(localStorage.getItem(SESSION)); } catch (e) { return null; }
        },
        logout: function () { localStorage.removeItem(SESSION); },
        resetPassword: function (email, newPass) {
            var u = (data.auth.users || []).filter(function (x) { return x.email.toLowerCase() === String(email).toLowerCase(); })[0];
            if (!u) return false;
            u.password = newPass; persist(); return true;
        },

        money: function (n) { return '$' + Number(n || 0).toLocaleString('es-AR'); }
    };

    window.AZ = AZ;
})();
