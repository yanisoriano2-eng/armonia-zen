/* ==========================================================================
   ARMONÍA ZEN — Catálogo premium v2
   ========================================================================== */

(function () {
    'use strict';

    var BASE = 'https://images.unsplash.com/photo-';
    var Q    = '?w=800&q=80&auto=format&fit=crop';

    /* Imágenes verificadas */
    var I = {
        crystal  : '1609216970378-ce61cd74a187',
        amethyst : '1632980205460-e490e885e848',
        rose     : '1593259213062-57b0ce5906cf',
        stone    : '1597336465111-a392afd218bc',
        water    : '1564462369724-4003221599e2',
        salt     : '1623241923490-5b2fd532828f',
        buddha   : '1596045571419-664297d8f502',
        aroma    : '1639390167093-9c62311fe84d',
        plant    : '1764422097784-0eaa2340d0e1',
        space    : '1619166855707-bba87a7772a2',
        candle   : '1609850280339-b85f1fd5d351',
        nature   : '1650208532541-572697b3dd40',
        zen      : '1606744837616-56c9a5c6a6eb',
        smoke    : '1568990416308-c998af4cf9ee'
    };

    function img(id) { return BASE + I[id] + Q; }

    /* ------------------------------------------------------------------ */
    /* CATEGORÍAS                                                           */
    /* ------------------------------------------------------------------ */

    var CATS = [
        { id: 'all',          name: 'Todo' },
        { id: 'joyeria',      name: 'Joyería',        subs: ['Anillos','Aros','Cadenas','Cadenas Corazón','Pulseras','Amuletos'] },
        { id: 'decoracion',   name: 'Decoración',      subs: ['Budas','Monjes','Lechuzas','Porta Sahumarios'] },
        { id: 'fuentes',      name: 'Fuentes',         subs: ['Decorativas','Cascada'] },
        { id: 'lamparas',     name: 'Lámparas de Sal', subs: ['Clásica'] },
        { id: 'terrarios',    name: 'Terrarios',       subs: ['Mediano'] },
        { id: 'plantas',      name: 'Plantas',         subs: ['Interior'] }
    ];

    /* ------------------------------------------------------------------ */
    /* PRODUCTOS                                                            */
    /* Catálogo de respaldo: se usa si Supabase todavía no tiene los       */
    /* productos reales cargados (ver admin/sync_products.sql), o si       */
    /* la conexión falla. Cuando Supabase tiene los datos correctos,       */
    /* se reemplaza automáticamente más abajo.                             */
    /* ------------------------------------------------------------------ */

    var FALLBACK_PRODUCTS = [
        /* ---- JOYERÍA / ANILLOS ---- */
        {
            id: 'anillo-labradorita-pirita', name: 'Anillo Labradorita + Pirita',
            cat: 'joyeria', subcat: 'Anillos', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/anillo-labradorita-pirita-real.jpg',
            descShort: 'Intuición y abundancia en una sola pieza. El dúo perfecto para quienes están construyendo algo grande.',
            descLong: '<p>Hay combinaciones que se complementan de manera perfecta — como la intuición y la acción, como el sueño y la voluntad de realizarlo. La labradorita aporta la visión: activa el tercer ojo, protege el aura y amplifica la percepción. La pirita aporta la energía: activa el plexo solar, despierta la confianza y atrae abundancia concreta.</p><p>Es una combinación pensada para quienes no se conforman con soñar — sino para quienes quieren construir con intención y claridad. Para emprendedores, para artistas, para quienes están en un momento de proyección y crecimiento.</p><p>Estéticamente, el contraste entre la labradorita iridiscente y el dorado metálico de la pirita crea una pieza de una belleza completamente original. Una joya que llama la atención por su aspecto antes de que alguien sepa lo que representa.</p>',
            features: [{ l: 'Piedras', v: 'Labradorita + Pirita natural' }, { l: 'Chakras', v: 'Tercer Ojo · Plexo Solar' }, { l: 'Elaboración', v: 'Artesanal, combinación única' }, { l: 'Energía', v: 'Intuición + Abundancia' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Intuición activa', 'Abundancia concreta', 'Confianza y voluntad', 'Claridad de propósito', 'Crecimiento integral'],
            energy: { name: 'LABRADORITA + PIRITA', chakra: 'Tercer Ojo · Plexo Solar', element: 'Aire · Fuego', intention: 'Intuición activa combinada con prosperidad y voluntad' },
            faq: [{ q: '¿Por qué combinar dos piedras?', a: 'La labradorita activa la intuición y la protección; la pirita aporta confianza y abundancia. Juntas crean un balance entre visión y acción.' }, { q: '¿Hay otras combinaciones disponibles?', a: 'Consultanos por WhatsApp. Tenemos diferentes combinaciones energéticas según tu intención.' }]
        },

        /* ---- JOYERÍA / ANILLOS DE ALPACA (fotos reales) ---- */
        {
            id: 'anillo-alpaca-liso', name: 'Anillo de Alpaca',
            cat: 'joyeria', subcat: 'Anillos', price: 9000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/anillo-alpaca-liso.jpg',
            descShort: 'Anillo artesanal en alpaca de diseño simple y atemporal. Metal noble sudamericano con brillo plateado natural.',
            descLong: '<p>La alpaca —también llamada plata alemana o "nueva plata"— es una aleación de cobre, níquel y zinc que imita el brillo de la plata sin su costo ni su oxidación fácil. Desde hace generaciones, artesanos sudamericanos la trabajan a mano para crear piezas resistentes, livianas y de terminación plateada natural que no requiere baños ni tratamientos.</p><p>Este anillo de diseño liso es una base versátil: combina con cualquier look, se puede usar solo o junto a otros anillos con piedra, y es ideal tanto para el uso diario como para regalar.</p>',
            features: [{ l: 'Material', v: 'Alpaca (metal plateado natural)' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Diseño', v: 'Liso, atemporal' }, { l: 'Uso', v: 'Diario' }],
            benefits: ['Resistente al uso diario', 'No requiere baño de plata', 'Diseño atemporal', 'Buena tolerancia en piel sensible']
        },
        {
            id: 'anillo-alpaca-turquesa', name: 'Anillo de Alpaca con Turquesa',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/anillo-alpaca-turquesa.jpg',
            descShort: 'Alpaca artesanal engarzada con turquesa natural. Protección y comunicación en una pieza de inspiración ancestral.',
            descLong: '<p>La turquesa es una de las piedras más antiguas usadas en joyería: egipcios, persas y pueblos originarios de América la consideraban un talismán de protección y buena fortuna, capaz de conectar el cielo con la tierra. Su azul verdoso inconfundible siempre fue sinónimo de viaje seguro y palabra sincera.</p><p>Montada en alpaca, mantiene ese espíritu artesanal: cada anillo tiene su propia veta y matiz, porque ninguna turquesa es igual a otra.</p>',
            features: [{ l: 'Piedra', v: 'Turquesa natural' }, { l: 'Material', v: 'Alpaca' }, { l: 'Chakra', v: 'Garganta' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Protección energética', 'Comunicación honesta', 'Conexión con tradiciones ancestrales', 'Pieza única por veta natural']
        },
        {
            id: 'anillo-alpaca-labradorita-pirita', name: 'Anillo de Alpaca con Labradorita y Pirita',
            cat: 'joyeria', subcat: 'Anillos', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/anillo-alpaca-labradorita-pirita.jpg',
            descShort: 'Labradorita y pirita montadas en alpaca artesanal. Intuición y abundancia combinadas en una sola pieza de carácter.',
            descLong: '<p>La labradorita amplifica la intuición y protege el aura con sus destellos cambiantes; la pirita activa la confianza y la voluntad de acción sobre el plexo solar. Combinadas sobre una base de alpaca trabajada a mano, forman una pieza con fuerte identidad visual, ideal para quienes buscan una joya que acompañe procesos de crecimiento y proyección personal.</p>',
            features: [{ l: 'Piedras', v: 'Labradorita + Pirita natural' }, { l: 'Material', v: 'Alpaca' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Chakras', v: 'Tercer Ojo · Plexo Solar' }],
            benefits: ['Intuición y visión clara', 'Confianza y voluntad', 'Pieza artesanal única', 'Ideal para momentos de proyección']
        },
        {
            id: 'anillo-alpaca-amatista-regulable', name: 'Anillo Regulable de Alpaca con Amatista',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/anillo-alpaca-amatista-regulable.jpg',
            descShort: 'Amatista natural sobre base de alpaca ajustable. Calma mental y claridad que se adapta a cualquier dedo.',
            descLong: '<p>El diseño regulable de este anillo lo hace ideal para regalar sin preocuparte por el talle: se ajusta a la medida de cada mano conservando su forma. La amatista natural montada en su centro trabaja sobre el chakra corona aportando calma, claridad mental y una sensación de equilibrio que acompaña todo el día.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural' }, { l: 'Material', v: 'Alpaca' }, { l: 'Ajuste', v: 'Regulable, talla única' }, { l: 'Chakra', v: 'Corona' }],
            benefits: ['Talla única, ajustable', 'Calma mental', 'Ideal para regalo', 'Elaboración artesanal']
        },
        {
            id: 'anillo-alpaca-cuarzo-rosa', name: 'Anillo de Alpaca con Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'imagenes/catalogo/anillo-alpaca-cuarzo-rosa.jpg',
            descShort: 'Cuarzo rosa natural en alpaca artesanal. La piedra del amor propio en una pieza delicada y accesible.',
            descLong: '<p>El cuarzo rosa es la piedra del amor en su forma más completa: el amor propio, la apertura emocional, los vínculos sanos. Montado sobre alpaca trabajada a mano, este anillo acerca esa energía suave y constante al uso cotidiano, sin perder calidez ni artesanía.</p>',
            features: [{ l: 'Piedra', v: 'Cuarzo rosa natural' }, { l: 'Material', v: 'Alpaca' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Amor propio', 'Apertura emocional', 'Ideal para regalo', 'Pieza artesanal accesible']
        },
        {
            id: 'anillo-ojo-turco-acero', name: 'Anillo Ojo Turco',
            cat: 'joyeria', subcat: 'Anillos', price: 6000,
            badges: [{ cls: 'wellness', label: 'Protección' }],
            img: 'imagenes/catalogo/anillo-ojo-turco-acero.jpg',
            descShort: 'El símbolo protector más antiguo del Mediterráneo, ahora en anillo de acero quirúrgico.',
            descLong: '<p>El ojo turco —o nazar— es uno de los amuletos más usados del mundo desde hace más de tres mil años. Nacido en la región de Anatolia, se creía que su mirada azul devolvía cualquier energía negativa o "mal de ojo" a quien la enviaba, protegiendo a quien lo llevaba puesto.</p><p>En anillo de acero quirúrgico, mantiene ese significado ancestral en una pieza resistente, hipoalergénica y de uso diario.</p>',
            features: [{ l: 'Material', v: 'Acero quirúrgico' }, { l: 'Símbolo', v: 'Ojo turco (nazar)' }, { l: 'Origen', v: 'Tradición mediterránea milenaria' }, { l: 'Uso', v: 'Diario, no se opaca' }],
            benefits: ['Protección energética', 'Resistente al agua y al uso diario', 'Hipoalergénico', 'Símbolo de tradición milenaria']
        },
        {
            id: 'anillo-ojo-tigre-acero', name: 'Anillo de Acero con Ojo de Tigre',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/anillo-ojo-tigre-acero.jpg',
            descShort: 'Ojo de tigre natural montado en acero quirúrgico. Confianza, coraje y poder personal en el dedo.',
            descLong: '<p>El ojo de tigre debe su nombre y su efecto visual —bandas doradas y marrones que parecen moverse con la luz, fenómeno llamado chatoyance— a la estructura fibrosa de su formación mineral. Desde la antigüedad se lo asoció con el coraje de los guerreros y la protección en los viajes.</p><p>Trabaja sobre el plexo solar y el chakra raíz, activando la confianza personal y el poder de decisión. Montado en acero quirúrgico, es una pieza resistente para el uso diario.</p>',
            features: [{ l: 'Piedra', v: 'Ojo de tigre natural' }, { l: 'Material', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Plexo Solar · Raíz' }, { l: 'Efecto', v: 'Chatoyance (bandas doradas móviles)' }],
            benefits: ['Confianza y coraje', 'Poder personal', 'Protección en decisiones', 'Resistente y antialérgico']
        },

        /* ---- JOYERÍA / AROS (fotos reales) ---- */
        {
            id: 'aros-amatista-acero', name: 'Aros de Acero Quirúrgico con Amatista',
            cat: 'joyeria', subcat: 'Aros', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/aros-amatista-acero.jpg',
            descShort: 'Amatista natural en aros de acero quirúrgico. Calma y claridad mental cerca del rostro, todos los días.',
            descLong: '<p>La amatista es, desde hace milenios, la piedra de la mente clara y el espíritu sereno. En formato aros, su energía calmante queda cerca de la cabeza y los oídos durante toda la jornada, acompañando momentos de alta exigencia mental con una vibración de equilibrio.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural' }, { l: 'Material', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Corona · Tercer Ojo' }, { l: 'Uso', v: 'Diario, hipoalergénico' }],
            benefits: ['Calma mental', 'Claridad y enfoque', 'Livianos, uso diario', 'Hipoalergénicos']
        },
        {
            id: 'aros-aventurina-acero', name: 'Aros de Acero Quirúrgico con Aventurina',
            cat: 'joyeria', subcat: 'Aros', price: 5000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/aros-aventurina-acero.jpg',
            descShort: 'Aventurina verde natural, la piedra de la buena suerte, en aros livianos de acero quirúrgico.',
            descLong: '<p>La aventurina es conocida como la "piedra de la oportunidad": se cree que atrae la buena suerte, especialmente en lo relacionado al dinero y a los nuevos comienzos. Su verde moteado, con pequeños destellos internos, la hace también una piedra muy fotogénica.</p><p>Trabaja sobre el chakra del corazón aportando calma y optimismo frente a los cambios.</p>',
            features: [{ l: 'Piedra', v: 'Aventurina natural' }, { l: 'Material', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Uso', v: 'Diario, hipoalergénico' }],
            benefits: ['Buena suerte y oportunidades', 'Calma frente al cambio', 'Piedra natural sin tratamientos', 'Livianos, uso diario']
        },
        {
            id: 'aros-piedra-natural-acero', name: 'Aros de Acero Quirúrgico con Piedra Natural',
            cat: 'joyeria', subcat: 'Aros', price: 5000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/aros-piedra-natural-acero.jpg',
            descShort: 'Piedra natural variable en cada par, montada en acero quirúrgico hipoalergénico. Sencillez y energía natural.',
            descLong: '<p>Estos aros combinan la resistencia del acero quirúrgico con una piedra natural cuya variedad depende del stock disponible en cada momento, por lo que cada par tiene su propia identidad. Consultanos por WhatsApp la piedra disponible actualmente.</p>',
            features: [{ l: 'Material', v: 'Acero quirúrgico' }, { l: 'Piedra', v: 'Natural (variable según stock)' }, { l: 'Uso', v: 'Diario, hipoalergénico' }],
            benefits: ['Livianos y resistentes', 'Hipoalergénicos', 'Pieza natural y única', 'Ideal para uso diario']
        },
        {
            id: 'aros-piedra-luna-acero', name: 'Aros de Acero Quirúrgico con Piedra de la Luna',
            cat: 'joyeria', subcat: 'Aros', price: 5000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'imagenes/catalogo/aros-piedra-luna-acero.jpg',
            descShort: 'Energía femenina e intuitiva en aros de acero quirúrgico. El resplandor único de la piedra de la luna.',
            descLong: '<p>La piedra de la luna captura la luz de un modo que ninguna otra piedra logra: un resplandor suave y flotante, llamado adularescencia, asociado en todas las tradiciones a lo femenino, lo cíclico y lo intuitivo. En aros, es una presencia sutil pero constante durante todo el día.</p>',
            features: [{ l: 'Piedra', v: 'Piedra de la luna (adularia)' }, { l: 'Material', v: 'Acero quirúrgico' }, { l: 'Efecto', v: 'Adularescencia' }, { l: 'Chakra', v: 'Sacro' }],
            benefits: ['Conexión con la intuición', 'Energía femenina', 'Livianos, uso diario', 'Hipoalergénicos']
        },
        {
            id: 'aros-jade-acero', name: 'Aros de Acero Quirúrgico con Jade',
            cat: 'joyeria', subcat: 'Aros', price: 5000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/aros-jade-acero.jpg',
            descShort: 'Jade natural en aros de acero quirúrgico. Cinco mil años de historia de equilibrio y prosperidad, en formato diario.',
            descLong: '<p>Durante milenios el jade fue la piedra más valiosa de China, usada en rituales sagrados y como símbolo de fortuna y protección. Su verde natural conserva esa elegancia atemporal en un par de aros livianos, pensados para el uso de todos los días.</p>',
            features: [{ l: 'Piedra', v: 'Jade natural' }, { l: 'Material', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Uso', v: 'Diario, hipoalergénico' }],
            benefits: ['Abundancia y equilibrio', 'Protección energética', 'Livianos, uso diario', 'Hipoalergénicos']
        },
        {
            id: 'aros-ojo-tigre-acero', name: 'Aros de Acero Quirúrgico con Ojo de Tigre',
            cat: 'joyeria', subcat: 'Aros', price: 5000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/aros-ojo-tigre-acero.jpg',
            descShort: 'Ojo de tigre natural en aros de acero quirúrgico. Confianza y poder personal para el día a día.',
            descLong: '<p>Sus bandas doradas y marrones, que parecen moverse con la luz, hicieron del ojo de tigre un símbolo de coraje desde la antigüedad. En aros, su energía trabaja sobre el plexo solar activando la confianza personal en cada decisión del día.</p>',
            features: [{ l: 'Piedra', v: 'Ojo de tigre natural' }, { l: 'Material', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Plexo Solar' }, { l: 'Uso', v: 'Diario, hipoalergénico' }],
            benefits: ['Confianza y coraje', 'Poder personal', 'Livianos, uso diario', 'Hipoalergénicos']
        },

        /* ---- JOYERÍA / CADENAS DE ACERO QUIRÚRGICO (fotos reales) ---- */
        {
            id: 'cadena-amatista-pirita-acero', name: 'Cadena Amatista y Pirita',
            cat: 'joyeria', subcat: 'Cadenas', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-amatista-pirita-acero.jpg',
            descShort: 'Amatista y pirita combinadas en cadena de acero quirúrgico. Calma mental y abundancia en una sola pieza.',
            descLong: '<p>La amatista aporta calma y claridad; la pirita, confianza y voluntad de acción. Juntas en una cadena de acero quirúrgico crean una pieza de uso diario resistente que equilibra la mente serena con la energía necesaria para avanzar.</p>',
            features: [{ l: 'Piedras', v: 'Amatista + Pirita natural' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakras', v: 'Corona · Plexo Solar' }, { l: 'Uso', v: 'Diario, no se opaca' }],
            benefits: ['Calma y claridad mental', 'Confianza y voluntad', 'Resistente al agua y al uso diario', 'Hipoalergénica']
        },
        {
            id: 'cadena-luna-estrella-labradorita', name: 'Cadena Luna y Estrella con Labradorita',
            cat: 'joyeria', subcat: 'Cadenas', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/cadena-luna-estrella-labradorita.jpg',
            descShort: 'Dije de luna y estrella con labradorita en cadena de acero. Un guiño celeste a la intuición y el misterio de la noche.',
            descLong: '<p>La luna y la estrella son símbolos celestiales presentes en casi todas las culturas: guía, misterio, ciclos y feminidad. Combinados con una labradorita natural —la piedra que guarda destellos de aurora en su interior— forman un dije con fuerte carga simbólica y visual.</p>',
            features: [{ l: 'Piedra', v: 'Labradorita natural' }, { l: 'Símbolo', v: 'Luna y estrella' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Tercer Ojo' }],
            benefits: ['Intuición amplificada', 'Conexión con los ciclos', 'Protección del aura', 'Pieza con fuerte identidad visual']
        },
        {
            id: 'cadena-cruz-strass-acero', name: 'Cadena Cruz con Strass',
            cat: 'joyeria', subcat: 'Cadenas', price: 6000,
            badges: [],
            img: 'imagenes/catalogo/cadena-cruz-strass-acero.jpg',
            descShort: 'Dije de cruz con strass en cadena de acero quirúrgico. Fe y protección con un brillo delicado.',
            descLong: '<p>La cruz es uno de los símbolos de fe y protección más reconocidos, presente en la joyería de todas las épocas. Esta versión suma pequeños strass que capturan la luz, sumando un brillo sutil a un símbolo de siglos de tradición.</p>',
            features: [{ l: 'Dije', v: 'Cruz con strass' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Uso', v: 'Diario, no se opaca' }],
            benefits: ['Símbolo de fe y protección', 'Brillo delicado', 'Resistente al agua', 'Hipoalergénica']
        },
        {
            id: 'cadena-diamantina-acero', name: 'Cadena Piedra Diamantina',
            cat: 'joyeria', subcat: 'Cadenas', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-diamantina-acero.jpg',
            descShort: 'Cuarzo diamantina en bruto sobre cadena de acero quirúrgico. Luz y alegría en su forma más natural.',
            descLong: '<p>La diamantina es un cuarzo natural cubierto de pequeñísimos cristales que reflejan la luz en todas direcciones, como si tuviera escarcha propia. Se la asocia con la alegría, la amplificación de energía y la claridad mental, y su forma en bruto conserva intacta la textura con la que la formó la tierra.</p>',
            features: [{ l: 'Piedra', v: 'Cuarzo diamantina en bruto' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Elaboración', v: 'Pieza natural, sin pulir' }],
            benefits: ['Alegría y luminosidad', 'Amplifica energía positiva', 'Pieza única en bruto', 'Resistente al uso diario']
        },
        {
            id: 'cadena-citrino-plata-acero', name: 'Cadena Citrino con Baño de Plata',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-citrino-plata-acero.jpg',
            descShort: 'Citrino natural con baño de plata sobre cadena de acero. Alegría y abundancia con terminación luminosa.',
            descLong: '<p>El citrino es la piedra del sol: captura la luz y la irradia como alegría y abundancia constante. Este dije suma un delicado baño de plata que realza su calidez dorada, montado sobre una cadena de acero quirúrgico resistente al uso diario.</p>',
            features: [{ l: 'Piedra', v: 'Citrino natural' }, { l: 'Terminación', v: 'Baño de plata' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Plexo Solar' }],
            benefits: ['Alegría y abundancia', 'No acumula energías negativas', 'Terminación luminosa', 'Resistente al uso diario']
        },
        {
            id: 'cadena-citrino-bruto-acero', name: 'Cadena Piedra de Citrino en Bruto',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-citrino-bruto-acero.jpg',
            descShort: 'Citrino en bruto, tal como lo entrega la tierra, sobre cadena de acero quirúrgico.',
            descLong: '<p>A diferencia de las piedras pulidas, el citrino en bruto conserva su forma y textura naturales, con toda la fuerza visual de un cristal recién extraído. Sigue trabajando sobre el plexo solar activando la alegría y la confianza, ahora en su versión más auténtica y menos intervenida.</p>',
            features: [{ l: 'Piedra', v: 'Citrino en bruto' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Elaboración', v: 'Pieza natural, sin pulir' }],
            benefits: ['Alegría y confianza', 'Pieza natural sin intervenir', 'Cada piedra es única', 'Resistente al uso diario']
        },
        {
            id: 'cadena-turquesa-acero', name: 'Dije de Acero con Piedra Turquesa',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-turquesa-acero.jpg',
            descShort: 'Turquesa natural en dije de acero quirúrgico. Protección y comunicación honesta, cerca de la garganta.',
            descLong: '<p>Egipcios, persas y pueblos originarios de América coincidieron en algo: la turquesa protege y facilita la palabra sincera. Llevada en cadena, descansa sobre el chakra de la garganta, favoreciendo una comunicación más clara y una sensación de resguardo durante todo el día.</p>',
            features: [{ l: 'Piedra', v: 'Turquesa natural' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Garganta' }],
            benefits: ['Protección energética', 'Comunicación honesta', 'Resistente al uso diario', 'Cada piedra es única']
        },
        {
            id: 'cadena-labradorita-pirita-dije', name: 'Dije Labradorita y Pirita',
            cat: 'joyeria', subcat: 'Cadenas', price: 20000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/cadena-labradorita-pirita-dije.jpg',
            descShort: 'Labradorita y pirita en un dije de mayor porte sobre cadena de acero. Intuición y abundancia en su versión más protagonista.',
            descLong: '<p>La versión en dije de esta combinación permite piezas de labradorita y pirita más grandes y expresivas que en un anillo, luciendo mejor tanto la labradorescencia iridiscente de una como el brillo metálico dorado de la otra. Una pieza pensada para quienes construyen algo grande y quieren llevarlo puesto.</p>',
            features: [{ l: 'Piedras', v: 'Labradorita + Pirita natural' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakras', v: 'Tercer Ojo · Plexo Solar' }, { l: 'Elaboración', v: 'Pieza de mayor porte' }],
            benefits: ['Intuición activa', 'Abundancia concreta', 'Pieza protagonista', 'Combinación única de piedras']
        },

        /* ---- JOYERÍA / CADENAS CORAZÓN DE ACERO QUIRÚRGICO (fotos reales) ---- */
        {
            id: 'cadena-corazon-amatista-acero', name: 'Cadena Corazón Amatista (Acero Quirúrgico)',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-corazon-amatista-acero.jpg',
            descShort: 'El corazón de amatista natural, en su versión de acero quirúrgico resistente al uso diario.',
            descLong: '<p>Tallada en forma de corazón, la amatista suma a su energía de calma y claridad el significado universal del amor. Montada sobre cadena de acero quirúrgico, es una versión más accesible y resistente para llevar puesta todos los días sin cuidados especiales.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural tallada en corazón' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Corazón · Corona' }],
            benefits: ['Amor consciente', 'Calma mental', 'Resistente al agua y al uso diario', 'Ideal para regalo']
        },
        {
            id: 'cadena-corazon-cuarzo-rosa-acero', name: 'Cadena Corazón Cuarzo Rosa (Acero Quirúrgico)',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'imagenes/catalogo/cadena-corazon-cuarzo-rosa-acero.jpg',
            descShort: 'El símbolo del amor tallado en cuarzo rosa natural, sobre cadena de acero quirúrgico.',
            descLong: '<p>No hay combinación más directa que el cuarzo rosa —la piedra del amor propio— tallado en forma de corazón. Sobre una cadena de acero quirúrgico, es una de las opciones de regalo más elegidas: accesible, resistente y con un significado que no necesita explicación.</p>',
            features: [{ l: 'Piedra', v: 'Cuarzo rosa natural tallado en corazón' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Corazón' }],
            benefits: ['Amor propio', 'Apertura emocional', 'Resistente al uso diario', 'Regalo significativo']
        },
        {
            id: 'cadena-corazon-obsidiana-acero', name: 'Cadena Corazón Obsidiana (Acero Quirúrgico)',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/cadena-corazon-obsidiana-acero.jpg',
            descShort: 'Un corazón de obsidiana volcánica en cadena de acero. Proteger el corazón desde la fuerza, no desde el miedo.',
            descLong: '<p>La obsidiana negra tallada en corazón es una paradoja hermosa: el símbolo del amor en la piedra de la protección. No cierra el corazón, lo fortalece — ideal para quienes están atravesando procesos de sanación emocional o aprendiendo a poner límites desde el amor propio.</p>',
            features: [{ l: 'Piedra', v: 'Obsidiana natural tallada en corazón' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Raíz' }],
            benefits: ['Protección emocional', 'Fuerza interior', 'Resistente al uso diario', 'Pieza de carácter']
        },

        /* ---- JOYERÍA / AMULETOS (fotos reales) ---- */
        {
            id: 'cadena-ojo-turco-acero', name: 'Dije Ojo Turco con Cadena',
            cat: 'joyeria', subcat: 'Amuletos', price: 6000,
            badges: [{ cls: 'wellness', label: 'Protección' }],
            img: 'imagenes/catalogo/cadena-ojo-turco-acero.jpg',
            descShort: 'El nazar mediterráneo en dije de acero quirúrgico. El amuleto de protección más usado del mundo.',
            descLong: '<p>Con más de tres mil años de historia, el ojo turco o nazar nació en Anatolia como escudo contra el "mal de ojo": la creencia de que una mirada envidiosa puede dañar sin intención. Llevado en cadena, descansa sobre el pecho como un recordatorio constante de protección.</p>',
            features: [{ l: 'Símbolo', v: 'Ojo turco (nazar)' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Origen', v: 'Tradición mediterránea milenaria' }],
            benefits: ['Protección energética', 'Símbolo de tradición milenaria', 'Resistente al uso diario', 'Ideal para regalo']
        },
        {
            id: 'cadena-triqueta-celta-acero', name: 'Dije Triqueta Celta',
            cat: 'joyeria', subcat: 'Amuletos', price: 15000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/cadena-triqueta-celta-acero.jpg',
            descShort: 'El nudo de la trinidad celta, símbolo de unión y protección, en dije de acero quirúrgico.',
            descLong: '<p>La triqueta —o nudo de la trinidad— es uno de los símbolos celtas más antiguos: tres líneas continuas, sin principio ni fin, que representan la unión de cuerpo, mente y espíritu, o de pasado, presente y futuro. Adoptada luego por la tradición cristiana como símbolo de la Santísima Trinidad, atravesó los siglos sin perder su fuerza como amuleto de protección y conexión.</p>',
            features: [{ l: 'Símbolo', v: 'Triqueta celta (nudo de la trinidad)' }, { l: 'Cadena', v: 'Acero quirúrgico' }, { l: 'Origen', v: 'Tradición celta' }],
            benefits: ['Protección y unión', 'Conexión cuerpo-mente-espíritu', 'Símbolo milenario', 'Resistente al uso diario']
        },
        {
            id: 'cadena-triqueta-ojo-tigre', name: 'Triqueta Celta con Ojo de Tigre',
            cat: 'joyeria', subcat: 'Amuletos', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/cadena-triqueta-ojo-tigre.jpg',
            descShort: 'El símbolo celta de protección combinado con la fuerza del ojo de tigre en cadena de acero.',
            descLong: '<p>La triqueta aporta protección y unión; el ojo de tigre engarzado en su centro suma confianza y coraje personal. Una combinación pensada para quienes buscan un amuleto con carácter, capaz de acompañar tanto en lo espiritual como en lo cotidiano.</p>',
            features: [{ l: 'Piedra', v: 'Ojo de tigre natural' }, { l: 'Símbolo', v: 'Triqueta celta' }, { l: 'Cadena', v: 'Acero quirúrgico' }],
            benefits: ['Protección y coraje', 'Confianza personal', 'Símbolo celta milenario', 'Resistente al uso diario']
        },
        {
            id: 'cadena-triqueta-obsidiana', name: 'Triqueta Celta con Obsidiana',
            cat: 'joyeria', subcat: 'Amuletos', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/cadena-triqueta-obsidiana.jpg',
            descShort: 'La triqueta celta y la obsidiana volcánica, dos símbolos de protección en una sola pieza.',
            descLong: '<p>La triqueta protege desde la unión; la obsidiana, desde la transformación y el arraigo. Juntas en un dije de acero quirúrgico, forman un amuleto de protección doble: simbólica y mineral, ideal para quienes atraviesan procesos de cambio importantes.</p>',
            features: [{ l: 'Piedra', v: 'Obsidiana natural' }, { l: 'Símbolo', v: 'Triqueta celta' }, { l: 'Cadena', v: 'Acero quirúrgico' }],
            benefits: ['Protección profunda', 'Arraigo y transformación', 'Símbolo celta milenario', 'Resistente al uso diario']
        },
        {
            id: 'amuleto-nudo-bruja-piedra', name: 'Dije Nudo de Bruja con Piedra',
            cat: 'joyeria', subcat: 'Amuletos', price: 10000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Protección' }],
            img: 'imagenes/catalogo/amuleto-nudo-bruja-piedra.jpg',
            descShort: 'El nudo de bruja tejido a mano con una piedra natural. Protección ancestral en formato dije.',
            descLong: '<p>El nudo de bruja —o witch knot— es uno de los símbolos de protección más antiguos de la tradición europea: se lo encuentra grabado en piedras de la era vikinga y en amuletos medievales de Escocia e Irlanda. Su patrón sin principio ni fin no deja entrada a energías no deseadas. Esta versión suma una piedra natural en su centro, reforzando su función protectora.</p>',
            features: [{ l: 'Símbolo', v: 'Nudo de bruja (witch knot)' }, { l: 'Elaboración', v: 'Tejido artesanal a mano' }, { l: 'Piedra', v: 'Natural' }],
            benefits: ['Protección energética', 'Campo áurico limpio', 'Pieza artesanal única', 'Tradición ancestral']
        },
        {
            id: 'nudo-bruja-labradorita-chico', name: 'Dije Nudo de Bruja con Labradorita',
            cat: 'joyeria', subcat: 'Amuletos', price: 9000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/nudo-bruja-labradorita-chico.jpg',
            descShort: 'Versión chica del nudo de bruja, con labradorita natural sobre cadena de acero.',
            descLong: '<p>La labradorita suma su labradorescencia iridiscente y su energía de protección del aura al nudo de bruja tejido a mano. Esta versión de menor porte es ideal para quienes buscan un amuleto discreto pero con todo el significado del símbolo original.</p>',
            features: [{ l: 'Símbolo', v: 'Nudo de bruja (witch knot)' }, { l: 'Piedra', v: 'Labradorita natural' }, { l: 'Cadena', v: 'Acero quirúrgico' }],
            benefits: ['Protección energética', 'Intuición amplificada', 'Formato discreto', 'Pieza artesanal']
        },
        {
            id: 'cadena-nudo-bruja-acero-set', name: 'Dije Nudo de Bruja con Cadena de Acero (Grande)',
            cat: 'joyeria', subcat: 'Amuletos', price: 15000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Protección' }],
            img: 'imagenes/catalogo/cadena-nudo-bruja-acero-set.jpg',
            descShort: 'La versión de mayor porte del nudo de bruja, tejida a mano sobre cadena de acero quirúrgico.',
            descLong: '<p>Para quienes buscan que el símbolo se note, esta versión más grande del nudo de bruja mantiene el mismo tejido artesanal y el mismo propósito protector, con una presencia visual mucho más marcada sobre el pecho.</p>',
            features: [{ l: 'Símbolo', v: 'Nudo de bruja (witch knot)' }, { l: 'Elaboración', v: 'Tejido artesanal, mayor porte' }, { l: 'Cadena', v: 'Acero quirúrgico' }],
            benefits: ['Protección energética potente', 'Presencia visual marcada', 'Pieza artesanal única', 'Tradición ancestral']
        },
        {
            id: 'pendulo-ojo-tigre', name: 'Péndulo de Ojo de Tigre',
            cat: 'joyeria', subcat: 'Amuletos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/anillo-ojo-tigre-acero.jpg',
            descShort: 'Péndulo tallado en ojo de tigre natural, para rituales de radiestesia, meditación o simplemente como objeto de poder.',
            descLong: '<p>Los péndulos de piedra natural se usan hace siglos como herramienta de radiestesia y como objeto de meditación y conexión energética. Tallado en ojo de tigre, este péndulo suma la energía de confianza y coraje propia de la piedra a la práctica que elijas darle.</p>',
            features: [{ l: 'Piedra', v: 'Ojo de tigre natural' }, { l: 'Uso', v: 'Radiestesia, meditación, decoración' }, { l: 'Elaboración', v: 'Tallado y pulido' }],
            benefits: ['Herramienta de conexión energética', 'Confianza y coraje', 'Pieza natural única', 'Objeto de poder personal']
        },

        /* ---- JOYERÍA / PULSERAS DE ACERO QUIRÚRGICO (fotos reales) ---- */
        {
            id: 'pulsera-7-chakras-acero', name: 'Pulsera 7 Chakras (Acero Quirúrgico)',
            cat: 'joyeria', subcat: 'Pulseras', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'imagenes/catalogo/pulsera-7-chakras-acero.jpg',
            descShort: 'Siete piedras naturales, una por cada chakra, montadas en acero quirúrgico resistente.',
            descLong: '<p>Cada uno de los siete chakras principales del cuerpo tiene una piedra asociada: desde la turmalina o el granate en la raíz hasta la amatista en la corona. Esta pulsera reúne las siete en un solo diseño, pensado para acompañar un trabajo de equilibrio energético integral desde la muñeca, todos los días.</p>',
            features: [{ l: 'Piedras', v: '7 piedras naturales (una por chakra)' }, { l: 'Base', v: 'Acero quirúrgico' }, { l: 'Uso', v: 'Diario, elástica' }],
            benefits: ['Equilibrio energético integral', 'Resistente al agua y al uso diario', 'Hipoalergénica', 'Ideal para regalo']
        },
        {
            id: 'pulsera-ojo-tigre-acero', name: 'Pulsera de Acero con Ojo de Tigre',
            cat: 'joyeria', subcat: 'Pulseras', price: 5000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/pulsera-ojo-tigre-acero.jpg',
            descShort: 'Cuentas de ojo de tigre natural en pulsera elástica de acero quirúrgico. Confianza y coraje en la muñeca.',
            descLong: '<p>El ojo de tigre trabaja sobre el plexo solar y el chakra raíz, activando la confianza y el coraje frente a los desafíos cotidianos. En formato pulsera, su energía queda siempre cerca, lista para recordar el propio poder personal.</p>',
            features: [{ l: 'Piedra', v: 'Ojo de tigre natural' }, { l: 'Base', v: 'Acero quirúrgico, elástica' }, { l: 'Chakra', v: 'Plexo Solar · Raíz' }],
            benefits: ['Confianza y coraje', 'Poder personal', 'Resistente al uso diario', 'Hipoalergénica']
        },
        {
            id: 'pulsera-sanador-acero', name: 'Pulsera "Sanador" de Acero Quirúrgico',
            cat: 'joyeria', subcat: 'Pulseras', price: 10000,
            badges: [{ cls: 'wellness', label: 'Bienestar' }, { cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/pulsera-sanador-acero.jpg',
            descShort: 'Combinación de piedras naturales pensada para acompañar procesos de sanación energética.',
            descLong: '<p>Esta pulsera reúne una selección de piedras naturales elegidas específicamente por su efecto combinado sobre la sanación emocional y energética: cada una aporta una capa distinta de calma, protección o apertura, trabajando juntas como un pequeño sistema de apoyo diario.</p>',
            features: [{ l: 'Piedras', v: 'Selección natural "sanador"' }, { l: 'Base', v: 'Acero quirúrgico' }, { l: 'Uso', v: 'Diario, elástica' }],
            benefits: ['Apoyo en procesos de sanación', 'Calma y protección combinadas', 'Resistente al uso diario', 'Hipoalergénica']
        },
        {
            id: 'pulsera-cobre', name: 'Pulsera de Cobre',
            cat: 'joyeria', subcat: 'Pulseras', price: 10000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/pulsera-cobre.jpg',
            descShort: 'Pulsera artesanal en cobre macizo. Conductor natural de energía con un acabado que mejora con el tiempo.',
            descLong: '<p>El cobre fue uno de los primeros metales que la humanidad aprendió a trabajar, usado tanto en herramientas como en objetos sagrados por su capacidad de conducir energía. Esta pulsera artesanal desarrolla con el uso una pátina propia, volviéndose más singular con el paso del tiempo.</p>',
            features: [{ l: 'Material', v: 'Cobre artesanal' }, { l: 'Elaboración', v: 'Hecha a mano' }, { l: 'Acabado', v: 'Natural, envejece con elegancia' }],
            benefits: ['Conductividad energética', 'Artesanía auténtica', 'Se ajusta a la muñeca', 'Mejora con el paso del tiempo']
        },
        {
            id: 'pulsera-calma-acero', name: 'Pulsera Calma de Acero Quirúrgico',
            cat: 'joyeria', subcat: 'Pulseras', price: 10000,
            badges: [{ cls: 'wellness', label: 'Bienestar' }, { cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/pulsera-calma-acero.jpg',
            descShort: 'Piedras naturales seleccionadas por su efecto calmante, montadas en acero quirúrgico.',
            descLong: '<p>Pensada para momentos de ansiedad, sobrecarga o simplemente para acompañar el día a día con más serenidad, esta pulsera combina piedras naturales de energía calmante en una base resistente al uso diario.</p>',
            features: [{ l: 'Piedras', v: 'Selección natural calmante' }, { l: 'Base', v: 'Acero quirúrgico' }, { l: 'Uso', v: 'Diario, elástica' }],
            benefits: ['Calma y serenidad', 'Reducción de la sobrecarga mental', 'Resistente al uso diario', 'Hipoalergénica']
        },
        {
            id: 'pulsera-amatista-cuarzo-obsidiana', name: 'Pulsera Amatista, Cuarzo Rosa y Obsidiana',
            cat: 'joyeria', subcat: 'Pulseras', price: 7000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/pulsera-amatista-cuarzo-obsidiana.jpg',
            descShort: 'Tres piedras, tres energías: calma, amor propio y protección, reunidas en una sola pulsera.',
            descLong: '<p>Amatista para la calma mental, cuarzo rosa para el amor propio y obsidiana para la protección: esta pulsera combina tres de las piedras más elegidas de la cristaloterapia en un diseño equilibrado que trabaja sobre la mente, el corazón y el campo energético a la vez.</p>',
            features: [{ l: 'Piedras', v: 'Amatista + Cuarzo rosa + Obsidiana' }, { l: 'Uso', v: 'Diario, elástica' }, { l: 'Chakras', v: 'Corona · Corazón · Raíz' }],
            benefits: ['Calma mental', 'Amor propio', 'Protección energética', 'Equilibrio integral']
        },
        {
            id: 'pulsera-amatista-piedras', name: 'Pulsera de Piedras Amatista',
            cat: 'joyeria', subcat: 'Pulseras', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'imagenes/catalogo/pulsera-amatista-piedras.jpg',
            descShort: 'Cuentas de amatista natural en pulsera elástica. Calma y claridad mental en la muñeca.',
            descLong: '<p>Cada cuenta de esta pulsera es amatista natural, sin teñidos ni imitaciones. Llevada cerca del pulso, mantiene su energía calmante y clarificadora en contacto constante con el cuerpo durante toda la jornada.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural' }, { l: 'Uso', v: 'Diario, elástica' }, { l: 'Chakra', v: 'Corona' }],
            benefits: ['Calma mental profunda', 'Claridad y enfoque', 'Pieza 100% natural', 'Resistente al uso diario']
        },
        {
            id: 'pulsera-cuarzo-rosa-acero', name: 'Pulsera de Acero y Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Pulseras', price: 7000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'imagenes/catalogo/pulsera-cuarzo-rosa-acero.jpg',
            descShort: 'Cuarzo rosa natural en pulsera de acero quirúrgico. Amor propio en su versión más accesible y resistente.',
            descLong: '<p>El cuarzo rosa es la piedra del amor en todas sus formas, especialmente el amor propio. Esta pulsera combina cuentas naturales con detalles de acero quirúrgico, para una pieza resistente que puede usarse sin cuidados especiales.</p>',
            features: [{ l: 'Piedra', v: 'Cuarzo rosa natural' }, { l: 'Base', v: 'Acero quirúrgico' }, { l: 'Chakra', v: 'Corazón' }],
            benefits: ['Amor propio', 'Apertura emocional', 'Resistente al uso diario', 'Ideal para regalo']
        },
        {
            id: 'juego-7-chakras-acero', name: 'Juego Cadena + Pulsera 7 Chakras',
            cat: 'joyeria', subcat: 'Pulseras', price: 14900,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'imagenes/catalogo/juego-7-chakras-acero.jpg',
            descShort: 'El juego completo: cadena y pulsera 7 chakras, en acero quirúrgico, a juego.',
            descLong: '<p>Para quienes quieren el equilibrio de los siete chakras en dos piezas a juego: esta combinación de cadena y pulsera, ambas con las siete piedras correspondientes a cada centro energético, es una de las opciones de regalo más elegidas de la colección.</p>',
            features: [{ l: 'Incluye', v: 'Cadena + Pulsera' }, { l: 'Piedras', v: '7 piedras naturales (una por chakra)' }, { l: 'Base', v: 'Acero quirúrgico' }],
            benefits: ['Equilibrio energético integral', 'Set completo a juego', 'Ideal para regalo', 'Resistente al uso diario']
        },

        /* ---- FUENTES DE AGUA (fotos reales) ---- */
        {
            id: 'fuente-doble-pajaro-real', name: 'Fuente Doble con Pájaros, Motor y Luces LED',
            cat: 'fuentes', subcat: 'Decorativas', price: 70000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Destacada' }],
            img: 'imagenes/catalogo/fuente-doble-pajaro-real.jpg',
            descShort: 'Fuente de cerámica de dos niveles con pájaros, motor silencioso, luces LED y piedras decorativas.',
            descLong: '<p>En el Feng Shui, el agua en movimiento representa la abundancia y la buena energía circulando libremente por el hogar. Esta fuente de cerámica combina el sonido relajante del agua con pájaros decorativos, luces LED que iluminan el flujo por la noche y piedras naturales que completan la composición.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Incluye', v: 'Motor, luces LED y piedras' }, { l: 'Función', v: 'Fuente de interior/exterior cubierto' }],
            benefits: ['Sonido relajante de agua', 'Ilumina con luces LED', 'Favorece el flujo de energía positiva', 'Pieza decorativa destacada']
        },
        {
            id: 'fuente-agua-led-promo', name: 'Fuente de Agua con Luces LED y Pájaro',
            cat: 'fuentes', subcat: 'Decorativas', price: 38900,
            badges: [{ cls: 'sale', label: 'Oferta' }],
            img: 'imagenes/catalogo/fuente-agua-led-promo.jpg',
            descShort: 'Fuente de cerámica de un nivel, con motor, luces LED y un pájaro decorativo. Versión más accesible.',
            descLong: '<p>La misma idea de la fuente de agua en movimiento —sonido, luz y flujo constante— en un formato más compacto y accesible. Incluye motor y luces LED, y suma un pájaro de cerámica que completa la escena decorativa.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Incluye', v: 'Motor y luces LED' }, { l: 'Función', v: 'Fuente de interior' }],
            benefits: ['Sonido relajante de agua', 'Ilumina con luces LED', 'Formato compacto y accesible', 'Favorece el flujo de energía positiva']
        },
        {
            id: 'cascada-agua-motor-led', name: 'Cascada de Agua con Motor y Luces LED',
            cat: 'fuentes', subcat: 'Cascada', price: 39000,
            badges: [],
            img: 'imagenes/catalogo/cascada-agua-motor-led.jpg',
            descShort: 'Fuente tipo cascada, con motor y luces LED. El movimiento del agua deslizándose en varios niveles.',
            descLong: '<p>A diferencia de las fuentes de pileta, esta cascada recrea el agua deslizándose en distintos niveles, como una caída natural en miniatura. El motor mantiene el flujo constante y las luces LED lo realzan durante la noche, creando un punto focal relajante en cualquier ambiente.</p>',
            features: [{ l: 'Función', v: 'Fuente tipo cascada' }, { l: 'Incluye', v: 'Motor y luces LED' }, { l: 'Uso', v: 'Interior' }],
            benefits: ['Sonido de agua en movimiento', 'Ilumina con luces LED', 'Favorece el flujo de energía positiva', 'Punto focal decorativo']
        },

        /* ---- DECORACIÓN / BUDAS Y FIGURAS (fotos reales) ---- */
        {
            id: 'buda-paz-ceramica', name: 'Buda de la Paz',
            cat: 'decoracion', subcat: 'Budas', price: 8000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/buda-paz-ceramica.jpg',
            descShort: 'Figura de cerámica del Buda de la paz. Serenidad y buena energía para cualquier rincón del hogar.',
            descLong: '<p>La figura del Buda no representa una religión sino un estado: la paz interior que se alcanza al soltar el apego y observar la vida con calma. Colocada en un living, un escritorio o la entrada de la casa, funciona como un recordatorio diario de bajar el ritmo y respirar.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Uso', v: 'Decoración de interior' }],
            benefits: ['Serenidad y calma', 'Energía positiva en el hogar', 'Ideal para regalo', 'Pieza decorativa atemporal']
        },
        {
            id: 'buda-sonadora-ceramica', name: 'Buda Soñador',
            cat: 'decoracion', subcat: 'Budas', price: 24900,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'imagenes/catalogo/buda-sonadora-ceramica.jpg',
            descShort: 'Buda recostado en actitud de descanso. Representa el soltar, el fluir y el permitirse simplemente ser.',
            descLong: '<p>A diferencia del Buda meditativo sentado, esta figura recostada representa el descanso consciente: el momento de soltar el control y confiar en el proceso. Es una pieza de mayor tamaño, pensada como punto focal decorativo en espacios de descanso.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Postura', v: 'Recostado, en descanso' }],
            benefits: ['Descanso y soltar el control', 'Pieza decorativa de gran presencia', 'Ideal para regalo', 'Energía relajante']
        },
        {
            id: 'trio-buda-sabio-ceramica', name: 'Trío Buda Sabio',
            cat: 'decoracion', subcat: 'Budas', price: 9000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/trio-buda-sabio-ceramica.jpg',
            descShort: 'Tres budas en cerámica, cada uno con una postura distinta. Un set decorativo de armonía y sabiduría.',
            descLong: '<p>El set de tres figuras es un clásico de la decoración consciente: cada Buda ocupa una postura diferente, evocando la idea de cuerpo, palabra y mente en equilibrio. Juntos, funcionan como un pequeño altar decorativo para cualquier estantería o mesa.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Incluye', v: '3 figuras' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Armonía y sabiduría', 'Set decorativo completo', 'Ideal para regalo', 'Pieza atemporal']
        },
        {
            id: 'monje-meditando', name: 'Monje Meditando',
            cat: 'decoracion', subcat: 'Monjes', price: 9000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Meditación' }],
            img: 'imagenes/catalogo/monje-meditando.jpg',
            descShort: 'Figura de monje en postura de meditación. Un recordatorio diario de la práctica de la atención plena.',
            descLong: '<p>Más allá de cualquier tradición religiosa puntual, la figura del monje sentado en meditación representa una práctica universal: la de detenerse, respirar y observar la propia mente. Es una pieza ideal para un rincón de meditación, un escritorio o cualquier espacio donde se busque más calma.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Postura', v: 'Meditación (loto)' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Calma y presencia', 'Recordatorio de mindfulness', 'Pieza decorativa versátil', 'Ideal para regalo']
        },
        {
            id: 'trio-lechuzas-sabias-real', name: 'Trío de Lechuzas Sabias',
            cat: 'decoracion', subcat: 'Lechuzas', price: 12000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'imagenes/catalogo/trio-lechuzas-sabias-real.jpg',
            descShort: 'Tres lechuzas de cerámica, símbolo de sabiduría y protección nocturna, en un set decorativo.',
            descLong: '<p>Desde la Grecia clásica —donde acompañaba a Atenea, diosa de la sabiduría— hasta las tradiciones andinas que la asocian con la protección nocturna y la visión más allá de lo evidente, la lechuza es un símbolo universal de conocimiento. Este set de tres figuras es una pieza decorativa que combina belleza y significado.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Incluye', v: '3 figuras' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Sabiduría y protección', 'Set decorativo completo', 'Ideal para regalo', 'Pieza de gran presencia visual']
        },

        /* ---- DECORACIÓN / PORTA SAHUMARIOS ---- */
        {
            id: 'porta-sahumerio-buda-real', name: 'Porta Sahumerio + Buda',
            cat: 'decoracion', subcat: 'Porta Sahumarios', price: 4900,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'imagenes/catalogo/porta-sahumerio-buda-real.jpg',
            descShort: 'Porta sahumerio de cerámica con figura de Buda. Práctico, decorativo y listo para tu ritual diario.',
            descLong: '<p>Un objeto funcional que también decora: este porta sahumerio recoge la ceniza mientras el humo del incienso limpia el ambiente, y suma la presencia serena del Buda al momento del ritual. Ideal para incorporar un hábito diario de meditación o simplemente perfumar la casa con intención.</p>',
            features: [{ l: 'Material', v: 'Cerámica' }, { l: 'Función', v: 'Porta sahumerio + decorativo' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Práctico para uso diario', 'Recoge la ceniza', 'Suma presencia decorativa', 'Ideal para regalo']
        },

        /* ---- LÁMPARAS DE SAL (fotos reales) ---- */
        {
            id: 'lampara-sal-himalaya-real', name: 'Lámpara de Sal del Himalaya',
            cat: 'lamparas', subcat: 'Clásica', price: 19000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'imagenes/catalogo/lampara-sal-himalaya-real.jpg',
            descShort: 'Bloque natural de sal del Himalaya con base de madera. Resplandor ámbar cálido y purificador.',
            descLong: '<p>Extraída de yacimientos milenarios en las faldas del Himalaya, la sal rosada se talla en bloques naturales que, iluminados desde adentro, emiten un resplandor ámbar cálido y relajante. Se le atribuye la capacidad de liberar iones negativos al calentarse, contrarrestando el exceso de iones positivos generados por dispositivos electrónicos.</p><p>Más allá de su efecto purificador, es una de las piezas de decoración más elegidas para dormitorios y salas de estar por la calidez que aporta a cualquier ambiente.</p>',
            features: [{ l: 'Material', v: 'Sal natural del Himalaya' }, { l: 'Base', v: 'Madera' }, { l: 'Efecto', v: 'Resplandor ámbar cálido' }],
            benefits: ['Ambiente cálido y relajante', 'Purifica el aire del ambiente', 'Pieza 100% natural', 'Ideal para dormitorio o living']
        },

        /* ---- TERRARIOS (fotos reales) ---- */
        {
            id: 'terrario-con-plantas', name: 'Terrario con Plantas',
            cat: 'terrarios', subcat: 'Mediano', price: 9000,
            badges: [{ cls: 'artisan', label: 'Armado a mano' }],
            img: 'imagenes/catalogo/terrario-con-plantas.jpg',
            descShort: 'Terrario de vidrio armado a mano, con sus plantitas incluidas. Un pequeño ecosistema listo para tu casa.',
            descLong: '<p>Cada terrario se arma a mano combinando plantas de bajo mantenimiento, sustrato y elementos decorativos dentro de un recipiente de vidrio. El resultado es un pequeño ecosistema autocontenido que aporta vida y frescura a cualquier rincón, sin pedir demasiado a cambio.</p>',
            features: [{ l: 'Incluye', v: 'Plantas ya plantadas' }, { l: 'Recipiente', v: 'Vidrio' }, { l: 'Armado', v: 'A mano' }, { l: 'Mantenimiento', v: 'Bajo' }],
            benefits: ['Vida y frescura para el espacio', 'Bajo mantenimiento', 'Pieza decorativa única', 'Ideal para regalo']
        },

        /* ---- PLANTAS ---- */
        {
            id: 'planta-monstera-deliciosa', name: 'Monstera Deliciosa',
            cat: 'plantas', subcat: 'Interior', price: 28000,
            badges: [{ cls: 'natural', label: 'Planta Viva' }],
            img: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=1000&q=80&auto=format&fit=crop',
            descShort: 'La reina del interiorismo contemporáneo. Sus hojas perforadas dibujan sombras vivas y llenan un rincón vacío con elegancia tropical.',
            descLong: '<p>La reina del interiorismo contemporáneo. Sus hojas perforadas dibujan sombras vivas en la pared y llenan un rincón vacío con una elegancia tropical inconfundible. Resistente y agradecida.</p>',
            features: [{ l: 'Luz', v: 'Indirecta' }, { l: 'Riego', v: 'Moderado' }, { l: 'Energía', v: 'Elegancia · Presencia · Frescura' }],
            benefits: ['Purifica el aire', 'Bajo mantenimiento', 'Presencia decorativa fuerte']
        },
        {
            id: 'planta-pothos', name: 'Pothos',
            cat: 'plantas', subcat: 'Interior', price: 16000,
            badges: [{ cls: 'natural', label: 'Planta Viva' }],
            img: 'https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?w=1000&q=80&auto=format&fit=crop',
            descShort: 'La más indulgente de todas. Crece colgando o trepando, tolera el descuido y purifica el aire mientras lo hace.',
            descLong: '<p>La más indulgente de todas. Crece colgando o trepando, tolera el descuido y purifica el aire mientras lo hace. Perfecta para estantes altos donde su cascada verde puede caer libre.</p>',
            features: [{ l: 'Luz', v: 'Baja a media' }, { l: 'Riego', v: 'Bajo' }, { l: 'Energía', v: 'Purificación · Adaptación · Generosidad' }],
            benefits: ['Muy fácil de cuidar', 'Purifica el aire', 'Ideal para colgar']
        },
        {
            id: 'planta-bambu-de-la-suerte', name: 'Bambú de la Suerte',
            cat: 'plantas', subcat: 'Interior', price: 19000,
            badges: [{ cls: 'natural', label: 'Planta Viva' }],
            img: 'https://images.unsplash.com/photo-1532920161727-344adb090f7f?w=1000&q=80&auto=format&fit=crop',
            descShort: 'Símbolo de prosperidad en el Feng Shui. Crece en agua o en tierra y aporta verticalidad, orden y buena fortuna.',
            descLong: '<p>Símbolo de prosperidad en el Feng Shui. Crece en agua o en tierra, casi sin pedir nada, y aporta verticalidad y orden. Tradicionalmente se ubica en el este del hogar para atraer la buena fortuna.</p>',
            features: [{ l: 'Luz', v: 'Indirecta' }, { l: 'Riego', v: 'En agua' }, { l: 'Energía', v: 'Abundancia · Protección · Flexibilidad' }],
            benefits: ['Trae buena fortuna (Feng Shui)', 'Crece en agua, sin tierra', 'Bajo mantenimiento']
        },
        {
            id: 'planta-espada-de-san-jorge', name: 'Espada de San Jorge',
            cat: 'plantas', subcat: 'Interior', price: 24000,
            badges: [{ cls: 'natural', label: 'Planta Viva' }],
            img: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=1000&q=80&auto=format&fit=crop',
            descShort: 'Indestructible y arquitectónica. Sus hojas erguidas purifican el aire incluso de noche y aguantan la sequía sin quejarse.',
            descLong: '<p>Indestructible y arquitectónica. Sus hojas erguidas como espadas purifican el aire incluso de noche, y aguantan la sequía sin quejarse. La planta perfecta para quien cree que no sabe cuidar plantas.</p>',
            features: [{ l: 'Luz', v: 'Cualquiera' }, { l: 'Riego', v: 'Mínimo' }, { l: 'Energía', v: 'Protección · Poder · Resiliencia' }],
            benefits: ['Purifica el aire de noche', 'Resiste la sequía', 'Casi imposible de matar']
        },
        {
            id: 'planta-filodendro-corazon', name: 'Filodendro Corazón',
            cat: 'plantas', subcat: 'Interior', price: 17000,
            badges: [{ cls: 'natural', label: 'Planta Viva' }],
            img: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=1000&q=80&auto=format&fit=crop',
            descShort: 'Hojas en forma de corazón que se enredan con suavidad. Crecimiento generoso y carácter dócil, ideal para colgar.',
            descLong: '<p>Hojas en forma de corazón que se enredan con suavidad por donde las dejes. De crecimiento generoso y carácter dócil, es ideal para colgar y dejar que el verde abrace una esquina del cuarto.</p>',
            features: [{ l: 'Luz', v: 'Media' }, { l: 'Riego', v: 'Moderado' }, { l: 'Energía', v: 'Creatividad · Crecimiento · Calidez' }],
            benefits: ['Ideal para colgar', 'Crecimiento rápido', 'Hojas decorativas en forma de corazón']
        },
        {
            id: 'planta-filodendro-brasil', name: 'Filodendro Brasil',
            cat: 'plantas', subcat: 'Interior', price: 18000,
            badges: [{ cls: 'natural', label: 'Planta Viva' }],
            img: 'https://images.unsplash.com/photo-1641977563529-7b617571393d?w=1000&q=80&auto=format&fit=crop',
            descShort: 'La versión luminosa del filodendro: sus hojas combinan dos verdes que parecen pintados a mano.',
            descLong: '<p>La versión luminosa del filodendro corazón: sus hojas combinan dos verdes que parecen pintados a mano. Trae movimiento y un toque vibrante a los rincones que piden un poco más de vida.</p>',
            features: [{ l: 'Luz', v: 'Media' }, { l: 'Riego', v: 'Moderado' }, { l: 'Energía', v: 'Energía · Color · Movimiento' }],
            benefits: ['Follaje bicolor llamativo', 'Fácil de cuidar', 'Ideal para colgar']
        }
    ];

    var PRODUCTS = FALLBACK_PRODUCTS;

    /* ------------------------------------------------------------------ */
    /* SUPABASE → catálogo (panel de admin)                                */
    /* Convierte los productos de la tabla "products" (editables desde el  */
    /* panel) al formato que usa el catálogo del sitio.                    */
    /* ------------------------------------------------------------------ */

    var BADGE_LABELS = {
        natural: 'Piedra Natural', artisan: 'Artesanal', hot: 'Destacado',
        sale: 'Oferta', gift: 'Ideal Regalo', wellness: 'Bienestar', importado: 'Importado'
    };

    function deriveBadges(p) {
        var classes = (p.tags || '').split(',').map(function(s) { return s.trim(); }).filter(Boolean);
        if (p.featured && classes.indexOf('hot') === -1) classes.unshift('hot');
        if (p.priceOld && p.priceOld > p.price && classes.indexOf('sale') === -1) classes.unshift('sale');
        return classes.map(function(c) { return { cls: c, label: BADGE_LABELS[c] || c }; });
    }

    function buildFeatures(p) {
        var rows = [];
        if (p.material)  rows.push({ l: 'Material', v: p.material });
        if (p.size)       rows.push({ l: 'Tamaño', v: p.size });
        if (p.color)      rows.push({ l: 'Color', v: p.color });
        if (p.placement)  rows.push({ l: 'Colocación', v: p.placement });
        if (p.care)       rows.push({ l: 'Cuidado', v: p.care });
        if (p.howToUse)   rows.push({ l: 'Cómo usar', v: p.howToUse });
        return rows;
    }

    function buildEnergy(p) {
        if (!p.meaning && !p.intention) return null;
        return { name: p.subcategory || p.category, intention: p.meaning || p.intention };
    }

    function mapFromAZ(p) {
        return {
            id: p.id, name: p.name,
            cat: p.category, subcat: p.subcategory,
            price: p.price,
            priceOrig: (p.priceOld && p.priceOld > p.price) ? p.priceOld : undefined,
            img: p.image,
            descShort: p.descShort, descLong: p.descLong,
            benefits: (p.benefits || '').split('\n').map(function(s) { return s.trim(); }).filter(Boolean),
            badges: deriveBadges(p),
            features: buildFeatures(p),
            energy: buildEnergy(p),
            gallery: p.gallery || []
        };
    }

    /* ------------------------------------------------------------------ */
    /* WISHLIST & RECENTLY VIEWED                                          */
    /* ------------------------------------------------------------------ */

    function getWishlist() {
        try { return JSON.parse(localStorage.getItem('az_wish') || '[]'); } catch(e) { return []; }
    }
    function setWishlist(arr) { localStorage.setItem('az_wish', JSON.stringify(arr)); }
    function toggleWish(id) {
        var w = getWishlist();
        var idx = w.indexOf(id);
        if (idx > -1) w.splice(idx, 1); else w.push(id);
        setWishlist(w);
        return idx === -1;
    }

    function getRecent() {
        try { return JSON.parse(localStorage.getItem('az_recent') || '[]'); } catch(e) { return []; }
    }
    function addRecent(id) {
        var r = getRecent().filter(function(x){ return x !== id; });
        r.unshift(id);
        if (r.length > 6) r = r.slice(0, 6);
        localStorage.setItem('az_recent', JSON.stringify(r));
    }

    /* ------------------------------------------------------------------ */
    /* HELPERS                                                              */
    /* ------------------------------------------------------------------ */

    function money(n) { return '$ ' + Number(n).toLocaleString('es-AR'); }

    function buildImg(p) {
        return p.img || (BASE + I.crystal + Q);
    }

    function badgeHtml(badges) {
        if (!badges || !badges.length) return '';
        return '<div class="pcard__badges">' +
            badges.map(function(b){ return '<span class="pbadge pbadge--' + b.cls + '">' + b.label + '</span>'; }).join('') +
            '</div>';
    }

    function priceHtml(p, cls) {
        var pc = cls || 'pcard__price';
        if (p.priceOrig) {
            return '<div class="' + pc + '">' +
                '<span class="' + pc + '-orig">' + money(p.priceOrig) + '</span>' +
                '<span class="' + pc + '-sale">' + money(p.price) + '</span>' +
                '</div>';
        }
        return '<div class="' + pc + '">' + money(p.price) + '</div>';
    }

    function waMsg(p) {
        var num = (window.AZ_WA) || (window.AZ && AZ.get('settings.whatsapp.number')) || '5491234567890';
        var msg = encodeURIComponent('Hola! Me interesa: ' + p.name + ' (' + money(p.price) + ')');
        return 'https://wa.me/' + num + '?text=' + msg;
    }

    /* ------------------------------------------------------------------ */
    /* RENDER TARJETA                                                       */
    /* ------------------------------------------------------------------ */

    function cardHtml(p) {
        var wish = getWishlist().indexOf(p.id) > -1;
        var subLabel = [p.cat, p.subcat].filter(Boolean).map(function(s){
            return CATS.filter(function(c){ return c.id === s; }).map(function(c){ return c.name; })[0] || s;
        }).join(' · ');
        return '<article class="pcard reveal" data-id="' + p.id + '">' +
            '<div class="pcard__img">' +
                '<img src="' + buildImg(p) + '" alt="' + p.name + '" loading="lazy">' +
                badgeHtml(p.badges) +
                '<button class="pcard__wish' + (wish ? ' liked' : '') + '" data-wish="' + p.id + '" aria-label="Guardar">♡</button>' +
                '<div class="pcard__overlay">' +
                    '<button class="pcard__qv-quick" data-qv="' + p.id + '">Vista Rápida</button>' +
                    '<button class="pcard__cart-quick" data-cart="' + p.id + '">Agregar al Carrito</button>' +
                '</div>' +
            '</div>' +
            '<div class="pcard__body">' +
                '<span class="pcard__sub">' + subLabel + '</span>' +
                '<h3 class="pcard__name">' + p.name + '</h3>' +
                '<p class="pcard__desc">' + p.descShort + '</p>' +
                '<div class="pcard__foot">' +
                    priceHtml(p) +
                    '<div class="pcard__foot-actions">' +
                        '<a href="producto.html?id=' + p.id + '" class="pcard__link" onclick="window.__azRecent(\'' + p.id + '\')">Ver detalle</a>' +
                        '<button class="pcard__add" data-cart="' + p.id + '" aria-label="Agregar ' + p.name + ' al carrito" title="Agregar al carrito">🛒</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</article>';
    }

    /* ------------------------------------------------------------------ */
    /* ESTADO Y FILTROS                                                     */
    /* ------------------------------------------------------------------ */

    var state = { cat: 'all', subcat: '', q: '', sort: 'default' };

    function filtered(list) {
        list = list || PRODUCTS;
        return list.filter(function(p) {
            var okCat = state.cat === 'all' || p.cat === state.cat;
            var okSub = !state.subcat || p.subcat === state.subcat;
            var q = (state.q || '').trim().toLowerCase();
            var okQ = !q || p.name.toLowerCase().indexOf(q) > -1 || p.descShort.toLowerCase().indexOf(q) > -1;
            return okCat && okSub && okQ;
        }).sort(function(a, b) {
            if (state.sort === 'price-asc')  return a.price - b.price;
            if (state.sort === 'price-desc') return b.price - a.price;
            if (state.sort === 'name')       return a.name.localeCompare(b.name);
            return 0;
        });
    }

    /* Siempre disponible para producto.html y cualquier otra página */
    window.__azRecent = addRecent;

    function boot() {
        /* Si Supabase (panel de admin) ya tiene el catálogo real cargado,
           se usa esa fuente en vez del respaldo fijo. Se valida con un id
           conocido para no romper el sitio si todavía no se corrió
           admin/sync_products.sql (quedarían los productos de ejemplo). */
        var azList = (window.AZ && AZ.publicProducts) ? AZ.publicProducts() : [];
        var looksReal = azList.some(function(x) { return x.id === 'anillo-labradorita-pirita'; });
        if (looksReal) PRODUCTS = azList.map(mapFromAZ);

        window.__azProducts = PRODUCTS;

        /* ------------------------------------------------------------------ */
        /* CATÁLOGO — inicialización                                           */
        /* ------------------------------------------------------------------ */

        if (!document.getElementById('catalog-grid')) return; // no estamos en catálogo

    var grid     = document.getElementById('catalog-grid');
    var countEl  = document.getElementById('cat-count');
    var subBar   = document.getElementById('cat-sub');
    var searchEl = document.getElementById('cat-search');
    var sortEl   = document.getElementById('cat-sort');
    var recentSec= document.getElementById('recently-section');
    var recentGrd= document.getElementById('recently-grid');

    function render() {
        var list = filtered();
        if (countEl) countEl.textContent = list.length + ' ' + (list.length === 1 ? 'pieza' : 'piezas');
        if (!grid) return;
        if (list.length === 0) {
            grid.innerHTML = '<div class="catalog-empty"><h3>Sin resultados</h3><p>Probá con otra búsqueda o categoría.</p></div>';
            return;
        }
        grid.innerHTML = list.map(cardHtml).join('');
        // Scroll reveal para cards recién inyectadas
        requestAnimationFrame(function() {
            grid.querySelectorAll('.reveal').forEach(function(el) {
                var io = new IntersectionObserver(function(entries) {
                    entries.forEach(function(e) {
                        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
                    });
                }, { threshold: 0.08 });
                io.observe(el);
            });
        });
        wireCards();
    }

    function wireCards() {
        grid.querySelectorAll('[data-wish]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault(); e.stopPropagation();
                var id = btn.getAttribute('data-wish');
                var liked = toggleWish(id);
                btn.classList.toggle('liked', liked);
                btn.textContent = liked ? '♥' : '♡';
            });
        });
        grid.querySelectorAll('[data-wa]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault(); e.stopPropagation();
                var p = PRODUCTS.filter(function(x){ return x.id === btn.getAttribute('data-wa'); })[0];
                if (p) window.open(waMsg(p), '_blank');
            });
        });
        grid.querySelectorAll('[data-cart]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault(); e.stopPropagation();
                var p = PRODUCTS.filter(function(x){ return x.id === btn.getAttribute('data-cart'); })[0];
                if (p && window.addToCart) addToCart(p.name, p.price);
            });
        });
        grid.querySelectorAll('[data-qv]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault(); e.stopPropagation();
                var p = PRODUCTS.filter(function(x){ return x.id === btn.getAttribute('data-qv'); })[0];
                if (p) openQuickView(p);
            });
        });
        /* Tocar cualquier parte de la tarjeta (imagen, texto, etc.) lleva al detalle,
           salvo que se haya tocado un botón/enlace con su propia acción. */
        grid.querySelectorAll('.pcard').forEach(function(card) {
            card.addEventListener('click', function(e) {
                if (e.target.closest('button, a')) return;
                var id = card.getAttribute('data-id');
                if (id) { window.__azRecent(id); window.location.href = 'producto.html?id=' + id; }
            });
        });
    }

    /* Subcategorías */
    function renderSubs() {
        var cat = CATS.filter(function(c){ return c.id === state.cat; })[0];
        if (!subBar) return;
        if (!cat || !cat.subs || !cat.subs.length) { subBar.innerHTML = ''; subBar.style.display = 'none'; return; }
        subBar.style.display = '';
        var html = '<button class="sub-pill active" data-sub="">Todo</button>';
        cat.subs.forEach(function(s) {
            html += '<button class="sub-pill" data-sub="' + s + '">' + s + '</button>';
        });
        subBar.innerHTML = html;
        subBar.querySelectorAll('.sub-pill').forEach(function(btn) {
            btn.addEventListener('click', function() {
                subBar.querySelectorAll('.sub-pill').forEach(function(x){ x.classList.remove('active'); });
                btn.classList.add('active');
                state.subcat = btn.getAttribute('data-sub');
                render();
            });
        });
    }

    /* Tabs de categoría */
    document.querySelectorAll('.cat-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.cat-tab').forEach(function(x){ x.classList.remove('active'); });
            tab.classList.add('active');
            state.cat = tab.getAttribute('data-cat');
            state.subcat = '';
            renderSubs();
            render();
        });
    });

    /* Búsqueda */
    if (searchEl) searchEl.addEventListener('input', function() { state.q = searchEl.value; render(); });

    /* Orden */
    if (sortEl) sortEl.addEventListener('change', function() { state.sort = sortEl.value; render(); });

    /* Vistos recientemente */
    function renderRecent() {
        var ids = getRecent();
        if (!ids.length || !recentSec || !recentGrd) return;
        var recs = ids.map(function(id){ return PRODUCTS.filter(function(p){ return p.id === id; })[0]; }).filter(Boolean);
        if (!recs.length) return;
        recentGrd.innerHTML = recs.map(function(p) {
            return '<a href="producto.html?id=' + p.id + '" class="recently-item">' +
                '<div class="recently-item__img"><img src="' + buildImg(p) + '" alt="' + p.name + '" loading="lazy"></div>' +
                '<div class="recently-item__name">' + p.name + '</div>' +
                '<div class="recently-item__price">' + money(p.price) + '</div>' +
            '</a>';
        }).join('');
        recentSec.style.display = '';
    }

    /* ------------------------------------------------------------------ */
    /* QUICK VIEW MODAL                                                   */
    /* ------------------------------------------------------------------ */
    var qvModal;
    function openQuickView(p) {
        if (!qvModal) {
            qvModal = document.createElement('div');
            qvModal.className = 'qv-modal';
            document.body.appendChild(qvModal);
        }
        var img = buildImg(p);
        qvModal.innerHTML = 
            '<div class="qv-modal__bg" onclick="closeQuickView()"></div>' +
            '<div class="qv-modal__content">' +
                '<button class="qv-modal__close" onclick="closeQuickView()">×</button>' +
                '<div class="qv-modal__img">' +
                    '<img src="' + img + '" alt="' + p.name + '">' +
                '</div>' +
                '<div class="qv-modal__info">' +
                    '<h3 class="pcard__name" style="font-size:2rem;margin-bottom:15px;">' + p.name + '</h3>' +
                    priceHtml(p, 'pcard__price') +
                    '<p style="color:var(--sage-faint);line-height:1.7;margin:20px 0;">' + p.descShort + '</p>' +
                    '<div style="display:flex;gap:10px;margin-top:auto;">' +
                        '<button class="btn btn--outline" onclick="window.addToCart && addToCart(\'' + p.name.replace(/'/g, "\\'") + '\', ' + p.price + ')" style="flex:1;justify-content:center;">Agregar</button>' +
                        '<a href="producto.html?id=' + p.id + '" class="btn btn--solid" style="flex:1;justify-content:center;">Ver Detalles</a>' +
                    '</div>' +
                '</div>' +
            '</div>';
        
        // Trigger reflow
        void qvModal.offsetWidth;
        qvModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    window.closeQuickView = function() {
        if (qvModal) {
            qvModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

        render();
        renderRecent();
    }

    if (window.AZ && AZ.onReady) AZ.onReady(boot); else boot();

})();
