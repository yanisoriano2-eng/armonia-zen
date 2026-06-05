-- ============================================================
--  ARMONÍA ZEN · Datos iniciales (seed)
--  Ejecutar DESPUÉS de schema.sql si querés partir con contenido
-- ============================================================

-- ---- SETTINGS ----
insert into settings (key, value) values
('brand',    '{"name":"ARMONÍA ZEN","tagline":"Decoración consciente para espacios que transmiten calma.","quote":"La armonía comienza en los espacios que habitamos."}'),
('contact',  '{"whatsapp":"5491123456789","email":"hola@armoniazen.com","instagram":"#","facebook":"#","tiktok":"#","address":"Buenos Aires, Argentina","hours":"Lun a Vie · 10 a 19 h · Sáb · 10 a 14 h"}'),
('whatsapp', '{"number":"5491123456789","autoMessage":"Hola Armonía Zen, me gustaría encargar:","floatText":"WhatsApp","cartEnabled":true,"consultEnabled":true}'),
('visual',   '{"colorForest":"#0B2219","colorMoss":"#143328","colorIvory":"#F4EFE6","colorGold":"#CBB77C","colorBeige":"#D8CCB5","preloaderText":"ARMONÍA ZEN","fontHeading":"Playfair Display","fontBody":"Inter"}'),
('seo',      '{"title":"Armonía Zen — Decoración consciente","description":"Piezas inspiradas en la naturaleza, el bienestar y la armonía para crear hogares que invitan a respirar.","keywords":"decoración zen, piedras energéticas, plantas, lámparas de sal, feng shui","ogImage":""}'),
('ticker',   '{"speed":30,"items":["Piedras energéticas","Lámparas de sal","Fuentes de agua","Plantas","Budas","Feng Shui","Aromas","Bienestar","Decoración consciente"]}'),
('home',     '{"eyebrow":"Decoración consciente · Bienestar · Hogar","title":"ARMONÍA ZEN","subtitle":"Decoración consciente para espacios que transmiten calma.","text":"Creemos que cada objeto tiene el poder de transformar cómo se siente un espacio.","btn1Text":"Explorar Colección","btn1Link":"catalogo.html","btn2Text":"Descubrir Nuestra Filosofía","btn2Link":"#esencia","heroImage":"https://images.unsplash.com/photo-1512972972907-6d71529c5e92?w=2000&q=80&auto=format&fit=crop"}'),
('banners',  '{"catalogo":{"label":"La Colección","title":"Tienda","text":"Cada pieza, elegida por cómo transforma el aire de un espacio.","image":"https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=2000&q=80&auto=format&fit=crop","overlay":70,"active":true},"piedras":{"label":"Cristales · Energía · Intención","title":"Piedras","text":"Nacidas en el corazón de la tierra.","image":"https://images.unsplash.com/photo-1726946998938-68df123d4c94?w=2000&q=80&auto=format&fit=crop","overlay":70,"active":true},"plantas":{"label":"Naturaleza · Vida · Bienestar","title":"Plantas","text":"Más que decoración, son presencia viva.","image":"https://images.unsplash.com/photo-1764422097784-0eaa2340d0e1?w=2000&q=80&auto=format&fit=crop","overlay":70,"active":true},"blog":{"label":"Guías · Rituales · Bienestar","title":"Journal","text":"Lecturas para una vida más consciente.","image":"https://images.unsplash.com/photo-1568990416308-c998af4cf9ee?w=2000&q=80&auto=format&fit=crop","overlay":70,"active":true},"nosotros":{"label":"Naturaleza · Armonía · Propósito","title":"Filosofía","text":"No vendemos objetos. Ayudamos a transformar espacios.","image":"https://images.unsplash.com/photo-1650208532541-572697b3dd40?w=2000&q=80&auto=format&fit=crop","overlay":70,"active":true},"contacto":{"label":"Estamos para acompañarte","title":"Hablemos de tu espacio","text":"Contanos qué te gustaría transformar.","image":"https://images.unsplash.com/photo-1619166855707-bba87a7772a2?w=2000&q=80&auto=format&fit=crop","overlay":70,"active":true}}')
on conflict (key) do nothing;

-- ---- CATEGORIES ----
insert into categories (id, name, slug, active, sort_order) values
('luz',       'Lámparas de sal',     'luz',       true, 1),
('piedras',   'Piedras energéticas', 'piedras',   true, 2),
('agua',      'Fuentes de agua',     'agua',      true, 3),
('aroma',     'Aromas',              'aroma',     true, 4),
('plantas',   'Plantas',             'plantas',   true, 5),
('presencia', 'Budas',               'presencia', true, 6)
on conflict (id) do nothing;

-- ---- INTENTIONS ----
insert into intentions (id, name, sort_order) values
('proteccion', 'Protección',          1),
('amor',       'Amor propio',         2),
('abundancia', 'Abundancia',          3),
('calma',      'Calma',               4),
('claridad',   'Claridad',            5),
('limpieza',   'Limpieza energética', 6),
('meditacion', 'Meditación',          7),
('armonia',    'Armonía familiar',    8)
on conflict (id) do nothing;

-- ---- PRODUCTS ----
insert into products (id, name, category, price, stock, status, featured, image, desc_short, intention, sort_order) values
('p1',  'Lámpara de Sal del Himalaya', 'luz',       45000, 25, 'active', true,  'https://images.unsplash.com/photo-1623241923490-5b2fd532828f?w=700&q=80&auto=format&fit=crop', 'Resplandor ámbar que purifica y entibia el ambiente.',  'calma',      1),
('p2',  'Vela de Intención',           'luz',       15000, 30, 'active', false, 'https://images.unsplash.com/photo-1561212856-44e9bae482aa?w=700&q=80&auto=format&fit=crop', 'Cera natural para encender momentos de calma.',          'calma',      2),
('p3',  'Amatista Natural',            'piedras',   22000, 20, 'active', true,  'https://images.unsplash.com/photo-1609216970378-ce61cd74a187?w=700&q=80&auto=format&fit=crop', 'Calma mental, intuición y protección.',                  'calma',      3),
('p4',  'Cuarzo Rosa',                 'piedras',   18000, 20, 'active', false, 'https://images.unsplash.com/photo-1593259213062-57b0ce5906cf?w=700&q=80&auto=format&fit=crop', 'Amor propio, suavidad y apertura emocional.',            'amor',       4),
('p5',  'Citrino Natural',             'piedras',   20000, 15, 'active', false, 'https://images.unsplash.com/photo-1614092872241-c9a193f2b4aa?w=700&q=80&auto=format&fit=crop', 'Abundancia, alegría y energía solar.',                   'abundancia', 5),
('p6',  'Drusa de Amatista',           'piedras',   32000, 10, 'active', false, 'https://images.unsplash.com/photo-1632980205460-e490e885e848?w=700&q=80&auto=format&fit=crop', 'Pieza de gran porte para anclar un espacio.',            'calma',      6),
('p7',  'Fuente de Bambú Zen',         'agua',      65000, 12, 'active', true,  'https://images.unsplash.com/photo-1564462369724-4003221599e2?w=700&q=80&auto=format&fit=crop', 'El murmullo del agua que trae fluidez.',                  'armonia',    7),
('p8',  'Fuente de Piedra',            'agua',      58000, 8,  'active', false, 'https://images.unsplash.com/photo-1553090298-50fc519730d2?w=700&q=80&auto=format&fit=crop', 'Movimiento sereno para espacios de descanso.',           'armonia',    8),
('p9',  'Buda Meditativo',             'presencia', 35000, 15, 'active', true,  'https://images.unsplash.com/photo-1596045571419-664297d8f502?w=700&q=80&auto=format&fit=crop', 'Presencia, serenidad y sabiduría interior.',             'meditacion', 9),
('p10', 'Buda de Jardín',              'presencia', 42000, 8,  'active', false, 'https://images.unsplash.com/photo-1671043121840-cf607dee6152?w=700&q=80&auto=format&fit=crop', 'Para rincones verdes y patios contemplativos.',          'armonia',    10),
('p11', 'Cuenco Tibetano',             'presencia', 38000, 10, 'active', false, 'https://images.unsplash.com/photo-1579291465308-fba6c5db2dfe?w=700&q=80&auto=format&fit=crop', 'Sonido que armoniza y reordena la energía.',             'meditacion', 11),
('p12', 'Monstera Deliciosa',          'plantas',   28000, 20, 'active', true,  'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=700&q=80&auto=format&fit=crop', 'Vida y frescura que oxigena el ambiente.',                'armonia',    12),
('p13', 'Espada de San Jorge',         'plantas',   24000, 20, 'active', false, 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=700&q=80&auto=format&fit=crop', 'Protección y poder, casi sin cuidados.',                  'proteccion', 13),
('p14', 'Incienso de Sándalo',         'aroma',     12000, 40, 'active', false, 'https://images.unsplash.com/photo-1626937526107-ca0be0eecccd?w=700&q=80&auto=format&fit=crop', 'Aroma profundo para meditación y limpieza.',             'limpieza',   14),
('p15', 'Sahumerio de Palo Santo',     'aroma',     14000, 35, 'active', false, 'https://images.unsplash.com/photo-1639390167093-9c62311fe84d?w=700&q=80&auto=format&fit=crop', 'Humo sagrado que despeja y renueva.',                    'limpieza',   15)
on conflict (id) do nothing;

-- ---- FAQS ----
insert into faqs (id, question, answer, category, active, sort_order) values
('f1', '¿Las piedras son naturales y auténticas?',        'Sí. Trabajamos únicamente con cristales naturales, sin teñidos ni imitaciones. Cada piedra es única.',                                                  'Piedras',  true, 1),
('f2', '¿Hacen envíos a todo el país?',                   'Realizamos envíos a toda la Argentina. Coordinamos método y costo por WhatsApp según tu ubicación.',                                                    'Envíos',   true, 2),
('f3', '¿Cómo elijo qué piedra o planta me conviene?',    'Podés guiarte por la intención que buscás o escribirnos: te armamos una recomendación personalizada sin cargo.',                                        'Compras',  true, 3),
('f4', '¿Las plantas vienen con instrucciones de cuidado?','Cada planta se entrega con una ficha de cuidado simple: luz, riego y consejos para que se adapte a tu casa.',                                          'Plantas',  true, 4),
('f5', '¿Puedo comprar para regalar?',                    'Por supuesto. Ofrecemos packaging especial para regalo y podemos incluir una tarjeta con tu mensaje.',                                                   'Compras',  true, 5),
('f6', '¿Cómo se realiza el pago?',                       'Coordinamos el pago por WhatsApp: aceptamos transferencia y los principales medios digitales.',                                                         'Compras',  true, 6)
on conflict (id) do nothing;

-- ---- TESTIMONIALS ----
insert into testimonials (id, name, text, rating, product, active, sort_order) values
('t1', 'Camila R.', 'Transformaron por completo mi living. La amatista que me recomendaron es hermosa y la energía del espacio cambió.', 5, 'Amatista Natural',            true, 1),
('t2', 'Martín G.', 'La lámpara de sal es justo lo que buscaba para el dormitorio. Atención impecable y envío cuidado.',                  5, 'Lámpara de Sal del Himalaya', true, 2),
('t3', 'Lucía P.',  'Me asesoraron para armar un rincón de meditación. Cada detalle pensado con muchísimo gusto.',                        5, '',                            true, 3)
on conflict (id) do nothing;

-- ---- BLOG POSTS ----
insert into blog_posts (id, slug, title, category, read_time, status, sort_order, image) values
('b_feng-shui',         'feng-shui',         'Feng Shui: el arte de dejar fluir la energía del hogar', 'Decoración',    10, 'published', 1, 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=1100&q=80&auto=format&fit=crop'),
('b_lampara-sal',       'lampara-sal',       '¿Para qué sirve una lámpara de sal?',                    'Productos',      5, 'published', 2, 'https://images.unsplash.com/photo-1623241923490-5b2fd532828f?w=1100&q=80&auto=format&fit=crop'),
('b_piedras-significado','piedras-significado','El significado de las piedras energéticas',              'Guía',           8, 'published', 3, 'https://images.unsplash.com/photo-1609216970378-ce61cd74a187?w=1100&q=80&auto=format&fit=crop'),
('b_buda-hogar',        'buda-hogar',        'Qué representa tener un Buda en el hogar',               'Espiritualidad', 6, 'published', 4, 'https://images.unsplash.com/photo-1596045571419-664297d8f502?w=1100&q=80&auto=format&fit=crop'),
('b_limpiar-cristales', 'limpiar-cristales', 'Cómo limpiar energéticamente tus cristales',             'Ritual',         5, 'published', 5, 'https://images.unsplash.com/photo-1597336465111-a392afd218bc?w=1100&q=80&auto=format&fit=crop'),
('b_rincon-meditacion', 'rincon-meditacion', 'Cómo crear un rincón de meditación en casa',             'Espacios',       9, 'published', 6, 'https://images.unsplash.com/photo-1619166855707-bba87a7772a2?w=1100&q=80&auto=format&fit=crop')
on conflict (id) do nothing;
