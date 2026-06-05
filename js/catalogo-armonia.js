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
        { id: 'all',       name: 'Todo' },
        { id: 'joyeria',   name: 'Joyería',     subs: ['Anillos','Pulseras','Cadenas','Amuletos'] },
        { id: 'plantas',   name: 'Plantas',      subs: ['Interior','Frutales','Suculentas','Decorativas'] },
        { id: 'fuentes',   name: 'Fuentes',      subs: ['Decorativas','Ganesha','Cascada'] },
        { id: 'cascadas',  name: 'Cascadas',     subs: ['Zen','Flor de Loto','Japonesa','Escalera','Piedra'] },
        { id: 'decoracion',name: 'Decoración',   subs: ['Budas','Lechuzas','Llamas','Figuras'] },
        { id: 'lamparas',  name: 'Lámparas de Sal', subs: ['Buda','Elefante','Ángel'] },
        { id: 'aromaterapia', name: 'Aromaterapia', subs: ['Aceites','Sahumerios','Palo Santo'] },
        { id: 'terrarios', name: 'Terrarios',    subs: ['Mediano','Grande'] }
    ];

    /* ------------------------------------------------------------------ */
    /* PRODUCTOS                                                            */
    /* ------------------------------------------------------------------ */

    var PRODUCTS = [

        /* ---- JOYERÍA / ANILLOS ---- */
        {
            id: 'anillo-amatista', name: 'Anillo de Amatista',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'amethyst',
            descShort: 'Una pieza elegante con amatista natural. Calma mental, intuición y equilibrio emocional en cada uso.',
            descLong: 'No es solamente un anillo. Es una alianza entre la belleza mineral y la intención de quien lo lleva. La amatista, con su color violeta profundo, ha sido apreciada durante siglos por su capacidad de aquietar la mente activa y abrir espacios de claridad interior. Cada pieza es única — sus vetas e inclusiones son parte de su belleza natural.',
            features: [{ l: 'Material', v: 'Amatista natural' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Uso', v: 'Diario · Ceremonial' }, { l: 'Autenticidad', v: 'Sin teñidos' }],
            benefits: ['Calma emocional', 'Claridad mental', 'Conexión espiritual', 'Relajación'],
            energy: { name: 'AMATISTA', chakra: 'Corona', element: 'Aire', intention: 'Calma, claridad y conexión espiritual' },
            faq: [{ q: '¿La piedra es natural?', a: 'Sí, trabajamos exclusivamente con amatista natural, sin teñidos ni imitaciones.' }, { q: '¿Cómo cuido el anillo?', a: 'Evitá el contacto con agua y productos químicos. Usá un paño seco para limpiar.' }]
        },
        {
            id: 'anillo-cuarzo-rosa', name: 'Anillo de Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'rose',
            descShort: 'La piedra del amor y la armonía. Acompaña procesos de autoestima, amor propio y vínculos saludables.',
            descLong: 'El cuarzo rosa es la piedra del amor en su forma más pura. Su energía suave y constante acompaña procesos de apertura emocional, self-love y vínculos más conscientes. Una joya para recordarte todos los días quién sos.',
            features: [{ l: 'Material', v: 'Cuarzo rosa natural' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Energía', v: 'Amor · Armonía' }],
            benefits: ['Amor propio', 'Armonía emocional', 'Energía suave', 'Equilibrio afectivo'],
            energy: { name: 'CUARZO ROSA', chakra: 'Corazón', element: 'Agua', intention: 'Amor, apertura y bienestar emocional' },
            faq: [{ q: '¿La piedra es natural?', a: 'Sí, cuarzo rosa natural sin tratamientos de color.' }, { q: '¿Se puede usar a diario?', a: 'Sí. Evitá el contacto prolongado con agua.' }]
        },
        {
            id: 'anillo-jade', name: 'Anillo de Jade',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Asociado a la abundancia, prosperidad y buena fortuna. Una piedra que transmite equilibrio y serenidad.',
            descLong: 'En la tradición milenaria china, el jade es la piedra de la buena fortuna y la sabiduría. Su energía calmante protege, equilibra y atrae prosperidad. Llevarlo es llevar siglos de historia y significado.',
            features: [{ l: 'Material', v: 'Jade natural' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Tradición', v: 'Cultura china milenaria' }],
            benefits: ['Abundancia', 'Prosperidad', 'Equilibrio', 'Protección'],
            energy: { name: 'JADE', chakra: 'Corazón', element: 'Tierra', intention: 'Abundancia, protección y equilibrio' },
            faq: [{ q: '¿Es jade genuino?', a: 'Sí, trabajamos únicamente con jade natural.' }]
        },
        {
            id: 'anillo-obsidiana', name: 'Anillo de Obsidiana',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Poderosa piedra protectora. Absorbe energías densas y favorece el crecimiento personal desde tiempos ancestrales.',
            descLong: 'La obsidiana negra es el escudo mineral por excelencia. De origen volcánico, es la piedra de la transformación y la protección. Usarla es crear un campo energético limpio a tu alrededor y un espejo que refleja lo que es tiempo de soltar.',
            features: [{ l: 'Material', v: 'Obsidiana volcánica' }, { l: 'Origen', v: 'Vidrio volcánico natural' }, { l: 'Energía', v: 'Protección · Limpieza' }],
            benefits: ['Protección', 'Crecimiento personal', 'Limpieza energética', 'Transformación'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Fuego/Tierra', intention: 'Protección, transformación y arraigo' },
            faq: [{ q: '¿La obsidiana protege de verdad?', a: 'Muchas tradiciones la consideran la piedra protectora más poderosa. Absorbe energías densas y ayuda a soltar lo que no es tuyo.' }]
        },
        {
            id: 'anillo-rodocrosita', name: 'Anillo Rodocrosita',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'rose',
            descShort: 'La piedra nacional argentina. Vinculada al amor propio, la sanación emocional y la apertura del corazón.',
            descLong: 'La rodocrosita es nuestra piedra nacional y un orgullo argentino. Sus bandas rosas y blancas representan el amor en sus distintas formas: el amor propio, el amor romántico y el amor incondicional. Perfecta para quienes están en procesos de sanación emocional.',
            features: [{ l: 'Material', v: 'Rodocrosita argentina' }, { l: 'Origen', v: 'Argentina' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Amor propio', 'Sanación emocional', 'Apertura del corazón', 'Autoestima'],
            energy: { name: 'RODOCROSITA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio, sanación y apertura emocional' },
            faq: [{ q: '¿De dónde viene la rodocrosita?', a: 'La mayoría de nuestra colección proviene de minas argentinas, por eso se la llama "rosa del Inca".' }]
        },
        {
            id: 'anillo-labradorita', name: 'Anillo Labradorita',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'La piedra de la transformación e intuición. Sus reflejos naturales generan un efecto visual único e hipnótico.',
            descLong: 'La labradorita guarda el universo en su interior. Sus destellos azules, verdes y dorados — el fenómeno llamado labradorescencia — hacen que cada pieza sea irrepetible. Su energía activa la intuición, protege el aura y acompaña transformaciones profundas.',
            features: [{ l: 'Material', v: 'Labradorita natural' }, { l: 'Efecto', v: 'Labradorescencia' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Intuición', 'Transformación', 'Protección del aura', 'Creatividad'],
            energy: { name: 'LABRADORITA', chakra: 'Tercer ojo', element: 'Agua/Aire', intention: 'Intuición, transformación y protección' },
            faq: [{ q: '¿Por qué la labradorita tiene colores que cambian?', a: 'El efecto se llama labradorescencia y ocurre por la reflexión interna de la luz en las capas del mineral. Es 100% natural.' }]
        },
        {
            id: 'anillo-malaquita', name: 'Anillo Malaquita',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Conocida por acompañar procesos de cambio, evolución y crecimiento personal.',
            descLong: 'La malaquita, con sus vetas verdes en espiral, es la piedra del cambio y la transformación. Amplifica tanto las emociones positivas como lo que necesita ser visto y sanado. Es ideal para momentos de transición en la vida.',
            features: [{ l: 'Material', v: 'Malaquita natural' }, { l: 'Patrón', v: 'Vetas únicas' }, { l: 'Energía', v: 'Cambio · Crecimiento' }],
            benefits: ['Cambio', 'Crecimiento personal', 'Evolución', 'Claridad'],
            energy: { name: 'MALAQUITA', chakra: 'Corazón', element: 'Tierra', intention: 'Cambio, evolución y apertura al crecimiento' },
            faq: [{ q: '¿La malaquita es tóxica?', a: 'El mineral en bruto puede ser irritante si se ingiere o inhala polvo. En anillo pulido y engarzado es completamente seguro para uso.' }]
        },
        {
            id: 'anillo-piedra-luna', name: 'Anillo Piedra de la Luna',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'Representa la energía femenina, la intuición y la conexión con los ciclos naturales.',
            descLong: 'La piedra de la luna captura la luz de una manera etérea y mágica. Su energía está profundamente ligada a los ciclos femeninos, la intuición y la sensibilidad. Una pieza para quienes buscan conectar con su ritmo natural.',
            features: [{ l: 'Material', v: 'Piedra de la luna' }, { l: 'Efecto', v: 'Adularescencia' }, { l: 'Energía', v: 'Femenina · Ciclos' }],
            benefits: ['Energía femenina', 'Intuición', 'Equilibrio emocional', 'Conexión natural'],
            energy: { name: 'PIEDRA DE LA LUNA', chakra: 'Sacro', element: 'Agua', intention: 'Intuición, feminidad y ciclos naturales' },
            faq: [{ q: '¿La piedra de la luna realmente brilla?', a: 'Sí, el efecto se llama adularescencia. Es la luz que se refleja en su interior, creando un resplandor azulado o blanco.' }]
        },
        {
            id: 'anillo-labradorita-pirita', name: 'Anillo Labradorita + Pirita',
            cat: 'joyeria', subcat: 'Anillos', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'Intuición y abundancia en una sola pieza. Ideal para crecimiento personal y prosperidad.',
            descLong: 'Una combinación energética poderosa: la labradorita activa la intuición y protege el aura, mientras la pirita atrae abundancia y activa la voluntad. Juntas, son un impulso para quienes están construyendo algo grande.',
            features: [{ l: 'Material', v: 'Labradorita + Pirita' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Energía combinada', v: 'Intuición + Abundancia' }],
            benefits: ['Intuición', 'Abundancia', 'Crecimiento', 'Prosperidad'],
            energy: { name: 'LABRADORITA + PIRITA', chakra: 'Tercer ojo · Plexo solar', element: 'Aire · Fuego', intention: 'Intuición activa y prosperidad concreta' },
            faq: [{ q: '¿Por qué combinar dos piedras?', a: 'Cada piedra aporta su energía específica. Esta combinación une intuición (labradorita) con acción y abundancia (pirita).' }]
        },
        {
            id: 'anillo-cobre', name: 'Anillo de Cobre',
            cat: 'joyeria', subcat: 'Anillos', price: 20000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Pieza artesanal elaborada en cobre con diseño atemporal y fuerte presencia estética.',
            descLong: 'El cobre tiene historia: es uno de los metales más utilizados por civilizaciones ancestrales por sus propiedades conductoras de energía. Nuestros anillos artesanales en cobre están diseñados para ser piezas protagonistas que combinan fuerza estética con significado.',
            features: [{ l: 'Material', v: 'Cobre artesanal' }, { l: 'Elaboración', v: 'Hecho a mano' }, { l: 'Acabado', v: 'Natural' }],
            benefits: ['Conductividad energética', 'Equilibrio', 'Estética atemporal', 'Artesanía'],
            faq: [{ q: '¿El cobre tiñe la piel?', a: 'Puede dejar una leve marca verde en contacto con humedad. Es inofensivo y se elimina con agua y jabón.' }]
        },
        {
            id: 'anillo-cobre-grueso', name: 'Anillo Grueso de Cobre',
            cat: 'joyeria', subcat: 'Anillos', price: 20000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Diseño robusto para quienes buscan una pieza protagonista con presencia y carácter.',
            descLong: 'El anillo grueso de cobre es para quienes no pasan desapercibidos. Su diseño sólido y poderoso convierte la muñeca en un statement de estilo consciente. Cada uno es único, trabajado a mano por nuestros artesanos.',
            features: [{ l: 'Material', v: 'Cobre artesanal' }, { l: 'Diseño', v: 'Ancho · Robusto' }, { l: 'Elaboración', v: 'Hecho a mano' }],
            benefits: ['Presencia', 'Conductividad', 'Estilo único', 'Artesanía'],
            faq: [{ q: '¿Se puede personalizar?', a: 'Consultanos por WhatsApp para versiones personalizadas o grabados.' }]
        },

        /* ---- JOYERÍA / CADENAS ---- */
        {
            id: 'cadena-amatista', name: 'Cadena Amatista',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'amethyst',
            descShort: 'Amatista natural en cadena delicada. Para llevar la calma y la claridad cerca del corazón.',
            descLong: 'Una cadena diseñada para llevar la energía de la amatista cerca del chakra del corazón y la garganta. La combinación de la piedra natural con una cadena fina crea una pieza que es a la vez discreta y significativa.',
            features: [{ l: 'Piedra', v: 'Amatista natural' }, { l: 'Cadena', v: 'Metal fino' }, { l: 'Largo', v: 'Ajustable' }],
            benefits: ['Calma', 'Claridad', 'Conexión espiritual', 'Protección'],
            energy: { name: 'AMATISTA', chakra: 'Corona', element: 'Aire', intention: 'Calma y claridad mental' },
            faq: [{ q: '¿De qué material es la cadena?', a: 'Nuestras cadenas son de metal bañado. Consultanos el material exacto disponible.' }]
        },
        {
            id: 'cadena-labradorita', name: 'Cadena Labradorita',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Los destellos únicos de la labradorita en colgante. Intuición y magia llevada con elegancia.',
            descLong: 'Cada labradorita es un universo en miniatura. En formato colgante, sus destellos azules y verdes son aún más visibles y llamativos. Una pieza para las personas que transforman todo lo que tocan.',
            features: [{ l: 'Piedra', v: 'Labradorita natural' }, { l: 'Efecto', v: 'Labradorescencia' }],
            benefits: ['Intuición', 'Transformación', 'Protección', 'Creatividad'],
            energy: { name: 'LABRADORITA', chakra: 'Tercer ojo', element: 'Agua', intention: 'Intuición y protección del aura' },
            faq: [{ q: '¿Por qué cada labradorita es diferente?', a: 'La labradorescencia varía según el ángulo y la pieza específica. Es lo que la hace única.' }]
        },
        {
            id: 'cadena-obsidiana', name: 'Cadena Obsidiana',
            cat: 'joyeria', subcat: 'Cadenas', price: 11000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'crystal',
            descShort: 'Protección constante. La obsidiana como escudo energético que se lleva cerca del corazón.',
            descLong: 'Llevar obsidiana cerca del corazón es crear un campo de protección constante. Esta cadena es para quienes necesitan escudarse de energías externas y mantenerse en su centro.',
            features: [{ l: 'Piedra', v: 'Obsidiana volcánica' }, { l: 'Energía', v: 'Protección · Limpieza' }],
            benefits: ['Protección', 'Arraigo', 'Limpieza', 'Claridad'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Fuego/Tierra', intention: 'Protección y arraigo' },
            faq: [{ q: '¿Para quiénes es la obsidiana?', a: 'Especialmente para personas sensibles energéticamente o que trabajan en entornos de alta demanda emocional.' }]
        },
        {
            id: 'cadena-turmalina', name: 'Cadena Turmalina',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'La turmalina negra, piedra de protección máxima, en una cadena para uso diario.',
            descLong: 'La turmalina negra es considerada la piedra protectora por excelencia en muchas tradiciones espirituales. Repele energías negativas, protege el campo energético y favorece la conexión con la tierra. En cadena, su protección es constante.',
            features: [{ l: 'Piedra', v: 'Turmalina negra' }, { l: 'Propiedad', v: 'Protección máxima' }],
            benefits: ['Protección', 'Arraigo', 'Anti-energías negativas', 'Equilibrio'],
            energy: { name: 'TURMALINA NEGRA', chakra: 'Raíz', element: 'Tierra', intention: 'Protección y arraigo' },
            faq: []
        },
        {
            id: 'cadena-rodocrosita', name: 'Cadena Rodocrosita',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'rose',
            descShort: 'La rosa del Inca en formato cadena. Amor propio y sanación emocional llevados con elegancia.',
            descLong: 'La rodocrosita argentina en su versión más elegante. Una cadena que recuerda que el amor propio es el comienzo de todo. Ideal como regalo para alguien en un proceso de sanación o crecimiento personal.',
            features: [{ l: 'Piedra', v: 'Rodocrosita argentina' }],
            benefits: ['Amor propio', 'Sanación', 'Apertura', 'Autoestima'],
            energy: { name: 'RODOCROSITA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio y sanación emocional' },
            faq: [{ q: '¿Es un buen regalo?', a: 'Es uno de nuestros regalos más significativos. Puede acompañar una tarjeta personalizada.' }]
        },
        {
            id: 'cadena-malaquita', name: 'Cadena Malaquita',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Las espirales verdes de la malaquita colgando del cuello. Transformación y crecimiento constante.',
            descLong: 'La malaquita en formato cadena es una declaración de que estás en movimiento, en proceso de cambio. Sus vetas verdes únicas hacen que cada pieza sea irrepetible — como cada etapa de crecimiento.',
            features: [{ l: 'Piedra', v: 'Malaquita natural' }],
            benefits: ['Cambio', 'Crecimiento', 'Transformación', 'Claridad'],
            energy: { name: 'MALAQUITA', chakra: 'Corazón', element: 'Tierra', intention: 'Cambio y evolución' },
            faq: []
        },
        {
            id: 'cadena-jade', name: 'Cadena Jade',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Jade natural para atraer prosperidad y equilibrio. Un clásico de la joyería espiritual.',
            descLong: 'En China, el jade es símbolo de nobleza, sabiduría y buena fortuna. Llevarlo en cadena es una práctica de miles de años. Nuestra versión respeta esa tradición con una pieza natural y de calidad.',
            features: [{ l: 'Piedra', v: 'Jade natural' }],
            benefits: ['Prosperidad', 'Equilibrio', 'Protección', 'Sabiduría'],
            energy: { name: 'JADE', chakra: 'Corazón', element: 'Tierra', intention: 'Abundancia y equilibrio' },
            faq: []
        },
        {
            id: 'cadena-pirita', name: 'Cadena Pirita',
            cat: 'joyeria', subcat: 'Cadenas', price: 14000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'El oro de los tontos que en realidad es abundancia real. Pirita para atraer prosperidad y acción.',
            descLong: 'Llamada "el oro de los tontos", la pirita es cualquier cosa menos tonta. Su energía densa y dorada activa el plexo solar, despierta la voluntad y atrae abundancia. En cadena, su efecto visual es poderoso.',
            features: [{ l: 'Piedra', v: 'Pirita natural' }, { l: 'Color', v: 'Dorado metálico' }],
            benefits: ['Abundancia', 'Voluntad', 'Prosperidad', 'Confianza'],
            energy: { name: 'PIRITA', chakra: 'Plexo solar', element: 'Fuego', intention: 'Abundancia y activación de la voluntad' },
            faq: []
        },
        {
            id: 'cadena-citrino', name: 'Cadena Citrino',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'La piedra del sol. Citrino para alegría, abundancia y energía solar permanente.',
            descLong: 'El citrino es la piedra de la alegría y la energía solar. A diferencia de otras piedras, no acumula energías negativas — las transmuta. En cadena, es un recordatorio diario de liviandad y gratitud.',
            features: [{ l: 'Piedra', v: 'Citrino natural' }],
            benefits: ['Alegría', 'Abundancia', 'Energía solar', 'Transmutación'],
            energy: { name: 'CITRINO', chakra: 'Plexo solar', element: 'Fuego', intention: 'Alegría, abundancia y transmutación' },
            faq: []
        },
        {
            id: 'cadena-cuarzo-rosa', name: 'Cadena Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'rose',
            descShort: 'El amor en formato colgante. Cuarzo rosa para el amor propio y las relaciones conscientes.',
            descLong: 'La cadena de cuarzo rosa es uno de nuestros regalos más elegidos. Su energía amorosa y suave es perfecta para cualquier edad y momento de vida. Incluímos packaging especial para regalo.',
            features: [{ l: 'Piedra', v: 'Cuarzo rosa natural' }],
            benefits: ['Amor', 'Ternura', 'Autoestima', 'Vínculos saludables'],
            energy: { name: 'CUARZO ROSA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio y apertura emocional' },
            faq: [{ q: '¿Tiene packaging para regalo?', a: 'Sí, todas nuestras cadenas incluyen packaging cuidado. Podés agregar una tarjeta personalizada.' }]
        },
        {
            id: 'cadena-aguamarina', name: 'Cadena Aguamarina',
            cat: 'joyeria', subcat: 'Cadenas', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Aguamarina para la comunicación, la claridad y la serenidad. El azul del océano en una piedra.',
            descLong: 'La aguamarina captura el color y la energía del mar. Su vibración favorece la comunicación honesta, la serenidad mental y la claridad de expresión. Una piedra para voces que tienen algo importante que decir.',
            features: [{ l: 'Piedra', v: 'Aguamarina natural' }],
            benefits: ['Comunicación', 'Claridad', 'Serenidad', 'Expresión'],
            energy: { name: 'AGUAMARINA', chakra: 'Garganta', element: 'Agua', intention: 'Comunicación y serenidad' },
            faq: []
        },
        {
            id: 'cadena-lapislazuli', name: 'Cadena Lapislázuli',
            cat: 'joyeria', subcat: 'Cadenas', price: 14000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'La piedra de los faraones. Lapislázuli para la sabiduría, la intuición y la conexión espiritual elevada.',
            descLong: 'El lapislázuli fue la piedra más valorada en el antiguo Egipto, usada por reyes y sacerdotes. Su azul profundo con destellos dorados de pirita es inconfundible. Activa el tercer ojo y la comunicación espiritual.',
            features: [{ l: 'Piedra', v: 'Lapislázuli natural' }, { l: 'Detalle', v: 'Inclusiones de pirita' }],
            benefits: ['Sabiduría', 'Intuición', 'Comunicación espiritual', 'Claridad'],
            energy: { name: 'LAPISLÁZULI', chakra: 'Tercer ojo · Garganta', element: 'Aire', intention: 'Sabiduría e intuición elevada' },
            faq: []
        },

        /* ---- JOYERÍA / PULSERAS ---- */
        {
            id: 'pulsera-obsidiana', name: 'Pulsera Obsidiana',
            cat: 'joyeria', subcat: 'Pulseras', price: 7500,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Esferas de obsidiana natural para protección energética constante en la muñeca.',
            descLong: 'La pulsera de obsidiana es nuestra más elegida para protección diaria. Las esferas volcánicas absorben las energías densas del entorno y crean un escudo alrededor de quien la usa.',
            features: [{ l: 'Material', v: 'Obsidiana volcánica' }, { l: 'Formato', v: 'Esferas elástica' }],
            benefits: ['Protección', 'Arraigo', 'Limpieza energética', 'Fuerza'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Tierra/Fuego', intention: 'Protección y arraigo' },
            faq: []
        },
        {
            id: 'pulsera-cuarzo-rosa', name: 'Pulsera Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Pulseras', price: 7500,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'rose',
            descShort: 'Esferas de cuarzo rosa. La pulsera del amor propio y la ternura. Un regalo siempre acertado.',
            descLong: 'La pulsera de cuarzo rosa es pura energía amorosa en la muñeca. Sus esferas rosadas suaves son elegantes y poderosas al mismo tiempo. Perfecta para regalar o para regalarse.',
            features: [{ l: 'Material', v: 'Cuarzo rosa natural' }, { l: 'Formato', v: 'Esferas elástica' }],
            benefits: ['Amor', 'Autoestima', 'Ternura', 'Armonía'],
            energy: { name: 'CUARZO ROSA', chakra: 'Corazón', element: 'Agua', intention: 'Amor y autoestima' },
            faq: []
        },
        {
            id: 'pulsera-amatista', name: 'Pulsera Amatista',
            cat: 'joyeria', subcat: 'Pulseras', price: 7500,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'amethyst',
            descShort: 'Esferas de amatista para calmar la mente, activar la intuición y sostener el equilibrio emocional.',
            descLong: 'La pulsera de amatista es ideal para quienes necesitan bajar la intensidad mental y conectar con su centro. Usarla durante el trabajo o la meditación potencia la claridad y la serenidad.',
            features: [{ l: 'Material', v: 'Amatista natural' }],
            benefits: ['Calma', 'Intuición', 'Equilibrio', 'Claridad'],
            energy: { name: 'AMATISTA', chakra: 'Corona', element: 'Aire', intention: 'Calma y claridad mental' },
            faq: []
        },
        {
            id: 'pulsera-cristal', name: 'Pulsera Cristal',
            cat: 'joyeria', subcat: 'Pulseras', price: 7000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Cuarzo cristal transparente para amplificar energías y limpiar el espacio a tu alrededor.',
            descLong: 'El cuarzo cristal es el amplificador universal. Potencia la intención de cualquier otra piedra que uses junto con él y actúa como un limpiador energético permanente. Puro y poderoso en su simplicidad.',
            features: [{ l: 'Material', v: 'Cuarzo cristal natural' }],
            benefits: ['Amplificación', 'Limpieza', 'Claridad', 'Amplificador de intenciones'],
            energy: { name: 'CUARZO CRISTAL', chakra: 'Todos', element: 'Todos', intention: 'Amplificación y claridad' },
            faq: []
        },
        {
            id: 'pulsera-7-chakras', name: 'Pulsera 7 Chakras',
            cat: 'joyeria', subcat: 'Pulseras', price: 9500,
            badges: [{ cls: 'wellness', label: 'Bienestar' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Siete piedras naturales, una por cada chakra. Equilibrio energético completo en la muñeca.',
            descLong: 'La pulsera de 7 chakras reúne las siete piedras que corresponden a cada centro energético del cuerpo. Usarla es invitar al equilibrio y la armonía en todos los planos de la vida.',
            features: [{ l: 'Piedras', v: '7 naturales' }, { l: 'Chakras', v: 'Los 7 principales' }],
            benefits: ['Equilibrio total', 'Armonía energética', 'Bienestar integral', 'Balance'],
            energy: { name: '7 CHAKRAS', chakra: 'Todos', element: 'Todos', intention: 'Equilibrio y armonía en todos los planos' },
            faq: [{ q: '¿Cuáles son las 7 piedras?', a: 'Varían según la selección disponible, pero incluyen representantes de cada chakra: raíz, sacro, plexo solar, corazón, garganta, tercer ojo y corona.' }]
        },
        {
            id: 'pulsera-calma', name: 'Pulsera Calma',
            cat: 'joyeria', subcat: 'Pulseras', price: 9000,
            badges: [{ cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'Curada específicamente para quienes necesitan bajar el ritmo. Una pulsera para el descanso y la serenidad.',
            descLong: 'La pulsera Calma es nuestra curaduría especial para momentos de estrés o ansiedad. Combinamos piedras de energía calmante — amatista, aguamarina y selenita — para crear un efecto armonizador constante.',
            features: [{ l: 'Curaduría', v: 'Especial calma' }, { l: 'Piedras', v: 'Selección armonizante' }],
            benefits: ['Calma', 'Anti-estrés', 'Serenidad', 'Descanso'],
            energy: { name: 'CURADURÍA CALMA', chakra: 'Corazón · Corona', element: 'Agua · Aire', intention: 'Serenidad y descanso' },
            faq: []
        },
        {
            id: 'pulsera-cobre-india', name: 'Pulsera Cobre India',
            cat: 'joyeria', subcat: 'Pulseras', price: 8500,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Diseño inspirado en la tradición india, elaborada en cobre artesanal con grabados únicos.',
            descLong: 'La pulsera de cobre india trae la estética y la energía de las tradiciones espirituales de la India. Cada una tiene grabados únicos y está elaborada artesanalmente. El cobre conduce energía y equilibra el cuerpo.',
            features: [{ l: 'Material', v: 'Cobre artesanal' }, { l: 'Diseño', v: 'Tradición india' }, { l: 'Grabados', v: 'Únicos' }],
            benefits: ['Conductividad', 'Equilibrio', 'Tradición', 'Artesanía'],
            faq: []
        },

        /* ---- PLANTAS ---- */
        {
            id: 'potus-matizado', name: 'Potus Matizado',
            cat: 'plantas', subcat: 'Interior', price: 4500,
            badges: [{ cls: 'wellness', label: 'Interior' }],
            img: 'plant',
            descShort: 'Una de las plantas de interior más resilientes y decorativas. Hojas verdes con matices únicos.',
            descLong: 'El potus matizado es ideal para principiantes y expertos por igual. Requiere pocos cuidados y agradece cualquier espacio con su presencia viva y dinámica. Sus hojas bicolores son únicas en cada planta.',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Riego', v: 'Moderado' }, { l: 'Luz', v: 'Indirecta' }, { l: 'Cuidado', v: 'Fácil' }],
            benefits: ['Purificación del aire', 'Decoración natural', 'Poca luz necesaria', 'Muy resistente'],
            faq: [{ q: '¿Cada cuánto se riega?', a: 'Una vez por semana en verano, cada 10-15 días en invierno. Dejá que la tierra seque entre riegos.' }]
        },
        {
            id: 'potus-joy', name: 'Potus Joy',
            cat: 'plantas', subcat: 'Interior', price: 4500,
            badges: [{ cls: 'wellness', label: 'Interior' }],
            img: 'plant',
            descShort: 'Variedad de potus con hojas más claras y crecimiento vigoroso. Energía y vitalidad en cada hoja.',
            descLong: 'El Potus Joy tiene hojas más claras y luminosas que el potus tradicional, lo que lo hace ideal para dar luminosidad a espacios con poca luz natural. Su crecimiento vigoroso crea un efecto colgante muy decorativo.',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Riego', v: 'Moderado' }, { l: 'Luz', v: 'Muy poca' }, { l: 'Crecimiento', v: 'Vigoroso' }],
            benefits: ['Purificación', 'Luminosidad', 'Crecimiento colgante', 'Adaptable'],
            faq: []
        },
        {
            id: 'potus-variegado', name: 'Potus Variegado',
            cat: 'plantas', subcat: 'Interior', price: 6500,
            badges: [{ cls: 'artisan', label: 'Edición limitada' }],
            img: 'plant',
            descShort: 'El potus variegado es una rareza decorativa con hojas mitad verde, mitad blanco. Muy buscado.',
            descLong: 'El potus variegado es uno de los más buscados por los amantes de las plantas. Sus hojas bicolores — mitad verde oscuro, mitad blanco cremoso — son el resultado de una variación genética única. Cada hoja es diferente.',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Rareza', v: 'Alta' }, { l: 'Luz', v: 'Media-alta' }],
            benefits: ['Decoración única', 'Rareza', 'Conversación', 'Estética premium'],
            faq: [{ q: '¿Por qué es más cara?', a: 'La variegación es una rareza genética. Cada hoja es única y la planta crece más despacio, lo que la hace más valiosa.' }]
        },
        {
            id: 'espada-san-jorge', name: 'Espada de San Jorge',
            cat: 'plantas', subcat: 'Interior', price: 5500,
            badges: [{ cls: 'wellness', label: 'Protección' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'plant',
            descShort: 'La planta de la protección y la buena energía. Resistente, poderosa y con significado ancestral.',
            descLong: 'La espada de San Jorge es la reina de las plantas protectoras. En muchas tradiciones se coloca en la entrada del hogar para repeler energías negativas. Y como bonus: purifica el aire y resiste el abandono con elegancia.',
            features: [{ l: 'Tipo', v: 'Interior/Exterior' }, { l: 'Riego', v: 'Escaso' }, { l: 'Luz', v: 'Cualquiera' }, { l: 'Energía', v: 'Protección' }],
            benefits: ['Protección', 'Purificación del aire', 'Muy resistente', 'Poca agua'],
            faq: [{ q: '¿Por qué se dice que protege?', a: 'En muchas tradiciones latinoamericanas y africanas se usa para limpiar y proteger espacios de energías no deseadas.' }]
        },
        {
            id: 'violeta-alpes', name: 'Violeta de los Alpes',
            cat: 'plantas', subcat: 'Interior', price: 4000,
            badges: [{ cls: 'wellness', label: 'Interior' }],
            img: 'plant',
            descShort: 'Floración abundante y colores vibrantes para espacios que necesitan alegría y color.',
            descLong: 'La violeta de los Alpes florece durante meses con colores intensos — rosas, malvas y blancos. Es ideal para dar vida y color a ventanas, balcones y escritorios. Requiere algo de atención pero recompensa con mucha belleza.',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Floración', v: 'Larga temporada' }, { l: 'Riego', v: 'Regular' }],
            benefits: ['Color', 'Alegría', 'Floración', 'Decoración vibrante'],
            faq: [{ q: '¿Cómo la cuido para que siga floreciendo?', a: 'Remové las flores secas y fertilizá cada 15 días en época de floración. Necesita mucha luz indirecta.' }]
        },
        {
            id: 'costilla-adan', name: 'Costilla de Adán',
            cat: 'plantas', subcat: 'Decorativas', price: 8500,
            badges: [{ cls: 'hot', label: 'Más Vendida' }],
            img: 'plant',
            descShort: 'La Monstera más icónica. Hojas fenestradas únicas que transforman cualquier espacio.',
            descLong: 'La Monstera deliciosa — costilla de Adán — es la planta de interior más fotogénica del mundo. Sus hojas perforadas son únicas en la naturaleza y su presencia cambia radicalmente cualquier espacio.',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Tamaño', v: 'Grande' }, { l: 'Riego', v: 'Cada 7-10 días' }],
            benefits: ['Decorativa', 'Presencia', 'Purificación', 'Tendencia'],
            faq: [{ q: '¿Por qué las hojas tienen agujeros?', a: 'Las fenestras aparecen en hojas maduras. Se cree que ayudan a la planta a resistir vientos fuertes y lluvias tropicales.' }]
        },
        {
            id: 'limon-4-estaciones', name: 'Limón 4 Estaciones',
            cat: 'plantas', subcat: 'Frutales', price: 9500,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'Frutal en maceta que da limones todo el año. Aroma cítrico y frutos frescos en tu balcón o patio.',
            descLong: 'El limón 4 estaciones fructifica durante todo el año en maceta. Su aroma al florecer es incomparable y la satisfacción de cosechar tus propios limones no tiene precio. Ideal para balcones con sol.',
            features: [{ l: 'Tipo', v: 'Frutal en maceta' }, { l: 'Fructificación', v: 'Todo el año' }, { l: 'Luz', v: 'Sol directo' }],
            benefits: ['Frutos frescos', 'Aroma', 'Decorativo', 'Productivo'],
            faq: [{ q: '¿Da limones todo el año?', a: 'Sí, la variedad 4 estaciones fructifica continuamente si tiene luz solar suficiente y fertilización regular.' }]
        },
        {
            id: 'mandarina-4-estaciones', name: 'Mandarina 4 Estaciones',
            cat: 'plantas', subcat: 'Frutales', price: 9500,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'Mandarinas dulces en maceta, todo el año. El regalo más dulce para un balcón soleado.',
            descLong: 'Las mandarinas en maceta son una alegría constante: florecen con aroma embriagante y luego se llenan de frutos coloridos. La variedad 4 estaciones garantiza producción continua.',
            features: [{ l: 'Tipo', v: 'Frutal en maceta' }, { l: 'Fructificación', v: 'Todo el año' }],
            benefits: ['Frutos dulces', 'Aroma floral', 'Color naranja', 'Decorativo'],
            faq: []
        },
        {
            id: 'naranjo-4-estaciones', name: 'Naranjo 4 Estaciones',
            cat: 'plantas', subcat: 'Frutales', price: 9500,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'El naranjo más compacto para maceta. Color, aroma y frutos en tu espacio verde.',
            descLong: 'Nuestro naranjo 4 estaciones es perfecto para maceta grande o jardín. Sus flores blancas de azahar tienen un perfume inigualable y sus frutos alegran el espacio con su color intenso.',
            features: [{ l: 'Tipo', v: 'Frutal en maceta' }, { l: 'Flor', v: 'Azahar perfumado' }],
            benefits: ['Aroma a azahar', 'Frutos naranjas', 'Color', 'Productivo'],
            faq: []
        },
        {
            id: 'palta', name: 'Árbol de Palta',
            cat: 'plantas', subcat: 'Frutales', price: 12000,
            badges: [{ cls: 'artisan', label: 'Especial' }],
            img: 'plant',
            descShort: 'El árbol del aguacate adaptado para patio o jardín. Un proyecto verde de largo plazo.',
            descLong: 'El árbol de palta es un proyecto de largo aliento. En maceta grande o jardín, se desarrolla lentamente pero con presencia imponente. Sus hojas grandes y aromáticas son excelentes para aromatizar preparaciones.',
            features: [{ l: 'Tipo', v: 'Frutal' }, { l: 'Crecimiento', v: 'Lento' }, { l: 'Espacio', v: 'Jardín / Maceta grande' }],
            benefits: ['Decorativo', 'Hojas aromáticas', 'Frutos propios', 'Proyecto largo'],
            faq: []
        },

        /* ---- FUENTES DE AGUA ---- */
        {
            id: 'fuente-doble-pajaro', name: 'Fuente Doble Pájaro',
            cat: 'fuentes', subcat: 'Decorativas', price: 69000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Destacada' }],
            img: 'water',
            descShort: 'El movimiento relajante del agua combinado con la belleza de la naturaleza. Una pieza decorativa y meditativa.',
            descLong: 'La fuente doble pájaro es una de nuestras piezas más especiales. El sonido suave del agua fluyendo transforma el ambiente, mientras el diseño con pájaros crea una atmósfera de naturaleza y quietud. Incluye bomba silenciosa.',
            features: [{ l: 'Material', v: 'Resina premium' }, { l: 'Bomba', v: 'Silenciosa incluida' }, { l: 'Uso', v: 'Interior' }, { l: 'Cable', v: 'USB/220V' }],
            benefits: ['Relajación', 'Sonido natural', 'Decorativo', 'Humedad ambiental'],
            faq: [{ q: '¿Cuánta agua necesita?', a: 'El depósito se llena semanalmente según uso. La bomba es silenciosa y de bajo consumo.' }, { q: '¿Es para interior?', a: 'Sí, está diseñada para uso interior.' }]
        },
        {
            id: 'fuente-triple-cascada', name: 'Fuente Triple Cascada',
            cat: 'fuentes', subcat: 'Cascada', price: 38000, priceOrig: 46900,
            badges: [{ cls: 'sale', label: 'Oferta' }],
            img: 'water',
            descShort: 'Tres niveles de agua en cascada generan una atmósfera de tranquilidad ideal para el hogar.',
            descLong: 'El sonido del agua cayendo en tres niveles es profundamente relajante. Esta fuente compacta trae el sonido de la naturaleza a cualquier espacio. En oferta especial por tiempo limitado.',
            features: [{ l: 'Niveles', v: '3 cascadas' }, { l: 'Bomba', v: 'Silenciosa incluida' }, { l: 'Uso', v: 'Interior' }],
            benefits: ['Relajación', 'Anti-estrés', 'Decorativo', 'Sonido natural'],
            faq: [{ q: '¿Hace ruido?', a: 'El sonido del agua es suave y relajante. La bomba es completamente silenciosa.' }]
        },
        {
            id: 'fuente-ganesha', name: 'Fuente Ganesha',
            cat: 'fuentes', subcat: 'Ganesha', price: 33000, priceOrig: 40000,
            badges: [{ cls: 'sale', label: 'Oferta' }, { cls: 'wellness', label: 'Espiritual' }],
            img: 'buddha',
            descShort: 'Ganesha, símbolo de sabiduría y apertura de caminos, combinado con el fluir del agua.',
            descLong: 'Ganesha es el removedor de obstáculos, el que abre caminos. Esta fuente combina su poderosa energía con el movimiento constante del agua — símbolo de fluidez y abundancia. Una pieza de meditación y decoración.',
            features: [{ l: 'Figura', v: 'Ganesha' }, { l: 'Material', v: 'Resina pintada' }, { l: 'Bomba', v: 'Incluida' }],
            benefits: ['Apertura de caminos', 'Abundancia', 'Fluidez', 'Meditación'],
            energy: { name: 'GANESHA', chakra: 'Raíz · Plexo solar', element: 'Tierra · Agua', intention: 'Remover obstáculos y atraer abundancia' },
            faq: []
        },

        /* ---- CASCADAS DE HUMO ---- */
        {
            id: 'cascada-zen', name: 'Cascada de Humo Zen',
            cat: 'cascadas', subcat: 'Zen', price: 18000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Meditación' }],
            img: 'smoke',
            descShort: 'El humo del incienso cae en cascada creando un efecto visual hipnótico y meditativo.',
            descLong: 'Las cascadas de humo son piezas que transforman el acto de quemar incienso en una experiencia visual. El humo denso del cono cae en espiral hacia abajo, creando una cascada etérea. Ideal para meditación y ambientación.',
            features: [{ l: 'Material', v: 'Cerámica/Resina' }, { l: 'Incienso', v: 'Conos incluidos' }, { l: 'Efecto', v: 'Cascada de humo' }],
            benefits: ['Meditación', 'Visual relajante', 'Aromaterapia', 'Decoración única'],
            faq: [{ q: '¿Qué conos de incienso usa?', a: 'Conos de flujo inverso, que están diseñados para crear el efecto cascada. Incluímos un set de inicio.' }]
        },
        {
            id: 'cascada-flor-loto', name: 'Cascada Flor de Loto',
            cat: 'cascadas', subcat: 'Flor de Loto', price: 20000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Destacada' }],
            img: 'smoke',
            descShort: 'La flor de loto como cascada de humo. Símbolo de pureza y renacimiento en tu espacio.',
            descLong: 'La flor de loto simboliza la pureza que emerge del barro — el espíritu que se eleva por encima de las circunstancias. Esta cascada de humo en forma de loto crea un efecto visual y espiritual incomparable.',
            features: [{ l: 'Diseño', v: 'Flor de Loto' }, { l: 'Material', v: 'Cerámica' }, { l: 'Incienso', v: 'Incluido' }],
            benefits: ['Purificación', 'Renacimiento', 'Meditación', 'Visual único'],
            energy: { name: 'LOTO', chakra: 'Corona', element: 'Agua · Aire', intention: 'Pureza, renacimiento y elevación espiritual' },
            faq: []
        },
        {
            id: 'cascada-japonesa', name: 'Cascada Japonesa',
            cat: 'cascadas', subcat: 'Japonesa', price: 22000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'zen',
            descShort: 'Diseño inspirado en la estética japonesa wabi-sabi. Minimalismo y humo en perfecta armonía.',
            descLong: 'El diseño japonés lleva siglos perfeccionando el arte de la simplicidad significativa. Esta cascada de humo de inspiración japonesa captura esa esencia: cada línea es intencional, cada forma tiene propósito.',
            features: [{ l: 'Estética', v: 'Wabi-sabi japonés' }, { l: 'Material', v: 'Cerámica' }],
            benefits: ['Minimalismo', 'Meditación', 'Estética zen', 'Serenidad'],
            faq: []
        },
        {
            id: 'cascada-escalera', name: 'Cascada Escalera',
            cat: 'cascadas', subcat: 'Escalera', price: 19000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'smoke',
            descShort: 'El humo desciende en escalones creando un efecto visual único y dinámico.',
            descLong: 'La cascada escalera es un diseño arquitectónico que convierte el incienso en performance visual. El humo cae paso a paso, creando un movimiento rítmico que hipnotiza.',
            features: [{ l: 'Diseño', v: 'Escalera' }, { l: 'Efecto', v: 'Descenso escalonado' }],
            benefits: ['Efecto visual único', 'Meditación', 'Decoración'], faq: []
        },
        {
            id: 'cascada-piedra', name: 'Cascada de Piedra',
            cat: 'cascadas', subcat: 'Piedra', price: 21000,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'Cascada de humo con base de piedra natural. Lo mineral y lo etéreo en una sola pieza.',
            descLong: 'La cascada de piedra combina lo sólido — la base mineral natural — con lo etéreo — el humo que desciende. Una pieza que une los elementos tierra y aire en un solo objeto de meditación.',
            features: [{ l: 'Base', v: 'Piedra natural' }, { l: 'Efecto', v: 'Cascada de humo' }],
            benefits: ['Natural', 'Meditación', 'Tierra + Aire', 'Decorativo'], faq: []
        },

        /* ---- DECORACIÓN ---- */
        {
            id: 'buda-meditativo', name: 'Buda Meditativo',
            cat: 'decoracion', subcat: 'Budas', price: 25000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Espiritual' }],
            img: 'buddha',
            descShort: 'Presencia, serenidad y sabiduría interior. Una figura que transforma el espacio donde descansa.',
            descLong: 'El Buda meditativo no es solo una figura decorativa. Es un recordatorio constante de la posibilidad de la quietud interior. Ubicado en el espacio adecuado, cambia por completo la energía de un ambiente.',
            features: [{ l: 'Material', v: 'Resina pintada' }, { l: 'Tamaño', v: 'Mediano' }, { l: 'Acabado', v: 'Premium' }],
            benefits: ['Serenidad', 'Meditación', 'Decoración consciente', 'Energía positiva'],
            energy: { name: 'BUDA', chakra: 'Todos', element: 'Todos', intention: 'Quietud, sabiduría y paz interior' },
            faq: [{ q: '¿Dónde ubico el Buda?', a: 'El Buda meditativo es ideal en espacios de trabajo, meditación o sala. Nunca en el piso o baño.' }]
        },
        {
            id: 'lechuza-decorativa', name: 'Lechuza Decorativa',
            cat: 'decoracion', subcat: 'Lechuzas', price: 18000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'buddha',
            descShort: 'La lechuza, símbolo de sabiduría y protección. Una pieza decorativa con significado.',
            descLong: 'En muchas culturas, la lechuza representa la sabiduría, la intuición y la capacidad de ver en la oscuridad. Como pieza decorativa, es un símbolo de conocimiento y discernimiento en el hogar.',
            features: [{ l: 'Material', v: 'Cerámica/Resina' }, { l: 'Acabado', v: 'Artesanal' }],
            benefits: ['Sabiduría', 'Protección', 'Decoración', 'Simbolismo'],
            faq: []
        },
        {
            id: 'llama-decorativa', name: 'Llama Decorativa',
            cat: 'decoracion', subcat: 'Llamas', price: 16000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'La llama, icono andino de fuerza y adaptación. Una figura que trae la energía de los Andes.',
            descLong: 'La llama es un animal símbolo de la resistencia, la adaptación y la fuerza serena de los Andes. Esta figura artesanal trae esa energía de altura a tu hogar.',
            features: [{ l: 'Material', v: 'Cerámica artesanal' }, { l: 'Inspiración', v: 'Andina' }],
            benefits: ['Fuerza', 'Adaptación', 'Energía andina', 'Decorativo'], faq: []
        },

        /* ---- LÁMPARAS DE SAL ---- */
        {
            id: 'lampara-buda-sonadora', name: 'Lámpara Buda Soñadora',
            cat: 'lamparas', subcat: 'Buda', price: 42000,
            badges: [{ cls: 'hot', label: 'Más Vendida' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'salt',
            descShort: 'La lámpara de sal del Himalaya más especial. El Buda soñador que purifica, entibia y armoniza.',
            descLong: 'No es solamente una lámpara de sal. Es una pieza diseñada para transformar cualquier espacio en un refugio de calma, armonía y bienestar. La sal del Himalaya emite una luz ámbar cálida e iones negativos que mejoran la calidad del aire.',
            features: [{ l: 'Material', v: 'Sal del Himalaya' }, { l: 'Figura', v: 'Buda soñador' }, { l: 'Bombilla', v: 'Incluida' }, { l: 'Cable', v: '220V' }],
            benefits: ['Purificación del aire', 'Luz ámbar relajante', 'Iones negativos', 'Decoración'],
            faq: [{ q: '¿La lámpara de sal purifica el aire?', a: 'La sal emite iones negativos que pueden mejorar la calidad del aire. Además, su luz ámbar reduce el cortisol y favorece la relajación.' }, { q: '¿Cuántas horas puede estar encendida?', a: 'Puede estar encendida las 24hs sin problema. De hecho, funciona mejor así.' }]
        },
        {
            id: 'lampara-buda-guerrero', name: 'Lámpara Buda Guerrero',
            cat: 'lamparas', subcat: 'Buda', price: 42000,
            badges: [{ cls: 'wellness', label: 'Bienestar' }],
            img: 'salt',
            descShort: 'La energía del guerrero espiritual en una lámpara de sal. Fuerza, protección y claridad.',
            descLong: 'El Buda guerrero representa la determinación espiritual y la fuerza interior. Esta lámpara combina su poderosa energía con la calidez y purificación de la sal del Himalaya.',
            features: [{ l: 'Material', v: 'Sal del Himalaya' }, { l: 'Figura', v: 'Buda guerrero' }, { l: 'Bombilla', v: 'Incluida' }],
            benefits: ['Fuerza', 'Protección', 'Luz cálida', 'Purificación'],
            faq: []
        },
        {
            id: 'lampara-elefante', name: 'Lámpara Elefante',
            cat: 'lamparas', subcat: 'Elefante', price: 40000,
            badges: [{ cls: 'wellness', label: 'Buena Suerte' }],
            img: 'salt',
            descShort: 'El elefante, símbolo de prosperidad y buena suerte, en una lámpara de sal de luz cálida.',
            descLong: 'En muchas tradiciones el elefante con la trompa levantada atrae prosperidad y buena energía. Esta lámpara de sal combina ese simbolismo poderoso con los beneficios de la sal del Himalaya.',
            features: [{ l: 'Material', v: 'Sal del Himalaya' }, { l: 'Figura', v: 'Elefante' }, { l: 'Bombilla', v: 'Incluida' }],
            benefits: ['Prosperidad', 'Buena suerte', 'Luz cálida', 'Purificación'],
            energy: { name: 'ELEFANTE', chakra: 'Raíz · Plexo solar', element: 'Tierra', intention: 'Prosperidad, fuerza y buena suerte' },
            faq: []
        },
        {
            id: 'lampara-angelito', name: 'Lámpara Angelito',
            cat: 'lamparas', subcat: 'Ángel', price: 38000,
            badges: [{ cls: 'gift', label: 'Ideal Regalo' }],
            img: 'salt',
            descShort: 'Una lámpara de sal con figura de ángel. Protección y luz cálida para habitaciones y dormitorios.',
            descLong: 'La lámpara angelito es ideal para dormitorios, cuartos de bebé y espacios de descanso. La luz ámbar suave crea un ambiente de paz y protección. Es uno de nuestros regalos más elegidos.',
            features: [{ l: 'Material', v: 'Sal del Himalaya' }, { l: 'Figura', v: 'Ángel' }, { l: 'Ideal para', v: 'Dormitorio' }],
            benefits: ['Protección', 'Paz', 'Luz suave para dormir', 'Regalo especial'],
            faq: []
        },

        /* ---- AROMATERAPIA ---- */
        {
            id: 'aceites-esenciales', name: 'Aceites Esenciales',
            cat: 'aromaterapia', subcat: 'Aceites', price: 8500,
            badges: [{ cls: 'natural', label: 'Natural' }],
            img: 'aroma',
            descShort: 'Aceites esenciales puros para difusor, masajes y aromaterapia. Bienestar a través del aroma.',
            descLong: 'Nuestros aceites esenciales son 100% puros y naturales, sin diluciones ni sintéticos. Cada aroma tiene propiedades específicas para el bienestar físico y emocional.',
            features: [{ l: 'Pureza', v: '100% natural' }, { l: 'Uso', v: 'Difusor · Masaje · Baño' }],
            benefits: ['Aromaterapia', 'Bienestar', 'Relajación', 'Natural'],
            faq: [{ q: '¿Qué aceites tienen disponibles?', a: 'Consultanos por WhatsApp para ver el stock actual. Tenemos lavanda, eucalipto, árbol del té, naranja, pino y más.' }]
        },
        {
            id: 'sahumerio-madre-tierra', name: 'Sahumerio Madre Tierra',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1500,
            badges: [{ cls: 'natural', label: 'Natural' }],
            img: 'aroma',
            descShort: 'Aroma a tierra, hierbas y raíces. Para conectar con lo ancestral y limpiar el espacio.',
            descLong: 'El sahumerio Madre Tierra tiene un aroma profundo a hierbas, raíces y tierra húmeda. Ideal para limpieza energética de espacios, rituales de arraigo y conexión con los ciclos naturales.',
            features: [{ l: 'Aroma', v: 'Tierra · Hierbas · Raíces' }, { l: 'Uso', v: 'Limpieza · Arraigo' }],
            benefits: ['Limpieza energética', 'Arraigo', 'Conexión natural', 'Ritual'],
            faq: []
        },
        {
            id: 'sahumerio-sagrada-madre', name: 'Sahumerio Sagrada Madre',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1500,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'wellness', label: 'Ritual' }],
            img: 'aroma',
            descShort: 'Una mezcla especial de hierbas sagradas para rituales de limpieza y conexión espiritual.',
            descLong: 'La Sagrada Madre combina hierbas de tradición ancestral para crear un aroma de limpieza y conexión espiritual profunda. Para momentos de transición, rituales de inicio o cierre de ciclos.',
            features: [{ l: 'Mezcla', v: 'Hierbas sagradas' }, { l: 'Uso', v: 'Ritual · Limpieza' }],
            benefits: ['Limpieza profunda', 'Ritual', 'Conexión espiritual', 'Transición'],
            faq: []
        },
        {
            id: 'sahumerio-lavanda', name: 'Sahumerio Lavanda',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1200,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'wellness', label: 'Relajación' }],
            img: 'aroma',
            descShort: 'El aroma clásico de la relajación. Lavanda para calmar, descansar y preparar el sueño.',
            descLong: 'La lavanda es la planta de la relajación por excelencia. Su aroma reduce el cortisol, calma el sistema nervioso y prepara el cuerpo y la mente para el descanso. Ideal antes de dormir.',
            features: [{ l: 'Aroma', v: 'Lavanda' }, { l: 'Efecto', v: 'Relajante' }],
            benefits: ['Relajación', 'Sueño', 'Anti-estrés', 'Calma'],
            faq: []
        },
        {
            id: 'sahumerio-romero', name: 'Sahumerio Romero',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1200,
            badges: [{ cls: 'natural', label: 'Natural' }],
            img: 'aroma',
            descShort: 'El romero activa la mente, mejora la concentración y limpia energéticamente cualquier espacio.',
            descLong: 'El romero tiene una energía activadora y purificante. Su aroma vigoroso despierta la mente, mejora la memoria y limpia el espacio de energías estancadas. Ideal para espacios de trabajo y estudio.',
            features: [{ l: 'Aroma', v: 'Romero' }, { l: 'Efecto', v: 'Activador · Purificante' }],
            benefits: ['Concentración', 'Memoria', 'Limpieza', 'Activación'],
            faq: []
        },
        {
            id: 'palo-santo', name: 'Palo Santo',
            cat: 'aromaterapia', subcat: 'Palo Santo', price: 3500,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'aroma',
            descShort: 'El palo santo sagrado de América del Sur. Limpieza, protección y elevación espiritual.',
            descLong: 'El palo santo — árbol sagrado — ha sido usado por chamanes y curanderos de América del Sur por siglos. Su humo limpia el espacio de energías negativas, protege y eleva la vibración. Aroma único, inconfundible.',
            features: [{ l: 'Material', v: 'Madera de palo santo' }, { l: 'Origen', v: 'Sudamérica' }, { l: 'Uso', v: 'Limpieza · Ritual' }],
            benefits: ['Limpieza energética', 'Protección', 'Elevación espiritual', 'Aroma sagrado'],
            faq: [{ q: '¿Cómo se usa el palo santo?', a: 'Encendé la punta, dejala arder unos segundos y soplá. El humo que queda limpia y purifica el espacio.' }]
        },

        /* ---- TERRARIOS ---- */
        {
            id: 'terrario-mediano', name: 'Terrario Mediano',
            cat: 'terrarios', subcat: 'Mediano', price: 22000,
            badges: [{ cls: 'artisan', label: 'Armado a mano' }],
            img: 'plant',
            descShort: 'Ecosistema en miniatura. Un jardín cerrado que cuida a sus plantas solo.',
            descLong: 'El terrario es un ecosistema autosustentable: las plantas crean su propio ciclo de agua. Nuestros terrarios medianos están armados a mano con plantas seleccionadas y sustrato especial. Un regalo único.',
            features: [{ l: 'Recipiente', v: 'Vidrio' }, { l: 'Plantas', v: 'Seleccionadas' }, { l: 'Sustrato', v: 'Especial' }],
            benefits: ['Decorativo', 'Auto-sustentable', 'Poco riego', 'Único'],
            faq: [{ q: '¿Realmente no necesita riego?', a: 'Los terrarios cerrados crean su propio ciclo hídrico. Solo necesitan luz y ocasionalmente una nebulización.' }]
        },
        {
            id: 'terrario-grande', name: 'Terrario Grande',
            cat: 'terrarios', subcat: 'Grande', price: 35000,
            badges: [{ cls: 'artisan', label: 'Armado a mano' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'plant',
            descShort: 'El terrario grande es una obra de arte viva. Un regalo excepcional para cualquier ocasión.',
            descLong: 'El terrario grande es una pieza protagonista en cualquier espacio. Armado a mano con una selección premium de plantas, piedras decorativas y musgo, es a la vez arte y naturaleza viva.',
            features: [{ l: 'Recipiente', v: 'Vidrio grande' }, { l: 'Plantas', v: 'Selección premium' }, { l: 'Extras', v: 'Piedras · Musgo' }],
            benefits: ['Pieza única', 'Arte vivo', 'Auto-sustentable', 'Regalo premium'],
            faq: []
        }
    ];

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
        return BASE + I[p.img || 'crystal'] + Q;
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
        var num = (window.AZ && AZ.get('whatsapp')) || '5491234567890';
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
                    '<button class="pcard__wa-quick" data-wa="' + p.id + '">Consultar por WhatsApp</button>' +
                '</div>' +
            '</div>' +
            '<div class="pcard__body">' +
                '<span class="pcard__sub">' + subLabel + '</span>' +
                '<h3 class="pcard__name">' + p.name + '</h3>' +
                '<p class="pcard__desc">' + p.descShort + '</p>' +
                '<div class="pcard__foot">' +
                    priceHtml(p) +
                    '<a href="producto.html?id=' + p.id + '" class="pcard__link" onclick="window.__azRecent(\'' + p.id + '\')">Ver detalle</a>' +
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

    /* Global para producto.html */
    window.__azRecent = addRecent;
    window.__azProducts = PRODUCTS;

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
    }

    /* Subcategorías */
    function renderSubs() {
        var cat = CATS.filter(function(c){ return c.id === state.cat; })[0];
        if (!subBar) return;
        if (!cat || !cat.subs || !cat.subs.length) { subBar.innerHTML = ''; return; }
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

    render();
    renderRecent();

})();
