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
        { id: 'joyeria',      name: 'Joyería',        subs: ['Anillos','Cadenas','Cadenas Corazón','Pulseras','Amuletos'] },
        { id: 'plantas',      name: 'Plantas',         subs: ['Interior','Frutales','Decorativas'] },
        { id: 'fuentes',      name: 'Fuentes',         subs: ['Decorativas','Ganesha','Cascada'] },
        { id: 'cascadas',     name: 'Cascadas',        subs: ['Zen','Flor de Loto','Japonesa','Escalera','Piedra'] },
        { id: 'decoracion',   name: 'Decoración',      subs: ['Budas','Lechuzas','Llamas','Porta Sahumarios'] },
        { id: 'lamparas',     name: 'Lámparas de Sal', subs: ['Buda','Elefante','Ángel'] },
        { id: 'aromaterapia', name: 'Aromaterapia',    subs: ['Sahumerios','Palo Santo','Aceites','Hornito'] },
        { id: 'terrarios',    name: 'Terrarios',       subs: ['Mediano','Grande'] }
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
            descLong: '<p>Los griegos la llamaban <em>amethystos</em> — "el que no se embriaga" — y la portaban como talismán para mantener la mente clara y el espíritu sereno. Los obispos medievales la elegían como símbolo de pureza espiritual. Desde hace milenios, la amatista es la piedra de la calma, la claridad y la conexión con algo más grande que uno mismo.</p><p>Su color violeta profundo no es uniforme: cada pieza tiene sus propias vetas, degradados e inclusiones. Eso la hace irrepetible. El anillo que te llegará es único en el mundo, porque ninguna amatista se forma igual a otra.</p><p>Usarla en el dedo es llevar esa energía calmante en contacto directo con el cuerpo durante toda la jornada. Muchas personas la eligen para momentos de alta exigencia mental: decisiones importantes, jornadas largas, procesos de meditación. Su vibración actúa como un ancla de serenidad.</p><p>En la tradición de la cristaloterapia trabaja sobre el chakra corona y el tercer ojo, favoreciendo la intuición, la claridad y el equilibrio emocional. Una alianza entre belleza natural e intención consciente.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural sin teñidos' }, { l: 'Elaboración', v: 'Artesanal, pieza única' }, { l: 'Chakra', v: 'Corona y Tercer Ojo' }, { l: 'Uso', v: 'Diario y ceremonial' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Calma mental profunda', 'Claridad y enfoque', 'Conexión espiritual', 'Equilibrio emocional', 'Protección energética'],
            energy: { name: 'AMATISTA', chakra: 'Corona · Tercer Ojo', element: 'Aire', intention: 'Calma, claridad y conexión espiritual' },
            faq: [{ q: '¿La piedra es 100% natural?', a: 'Sí. Trabajamos únicamente con amatista natural, sin teñidos ni imitaciones en vidrio o resina.' }, { q: '¿Cómo la cuido?', a: 'Retirá el anillo antes de ducharte o lavarte las manos. Limpiar con paño seco. Evitá exposición prolongada al sol directo.' }, { q: '¿Tiene talle?', a: 'Consultanos el talle por WhatsApp antes de comprar. Te guiamos para medir tu dedo en casa.' }]
        },
        {
            id: 'anillo-cuarzo-rosa', name: 'Anillo de Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'rose',
            descShort: 'La piedra del amor y la armonía. Acompaña procesos de autoestima, amor propio y vínculos saludables.',
            descLong: '<p>El cuarzo rosa es, en todos los sentidos, la piedra del amor. No del amor romántico solamente, sino del amor en su forma más completa: el amor propio, el amor que sana, el amor que abre. En la antigua Roma lo asociaban a Venus. En China, a la armonía del hogar. En todas las culturas, siempre el mismo mensaje: el corazón.</p><p>Su color rosado suave y su energía envolvente lo convirtieron en la elección de quienes están transitando procesos de apertura emocional, autoestima o vínculos más conscientes. No hace nada de forma brusca — trabaja de manera gradual, constante y amorosa.</p><p>Llevarlo en un anillo mantiene su energía cerca del cuerpo durante todo el día. Muchas personas notan que con el cuarzo rosa cerca responden desde un lugar más calmado y compasivo, tanto hacia los demás como hacia sí mismas.</p><p>Es también uno de los regalos más elegidos de nuestra colección — porque el cuarzo rosa siempre llega exactamente cuando tiene que llegar.</p>',
            features: [{ l: 'Piedra', v: 'Cuarzo rosa natural' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Packaging', v: 'Caja regalo incluida' }, { l: 'Ideal para', v: 'Regalo y uso personal' }],
            benefits: ['Amor propio', 'Apertura emocional', 'Armonía afectiva', 'Autoestima', 'Energía calmante y suave'],
            energy: { name: 'CUARZO ROSA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio, apertura y bienestar emocional' },
            faq: [{ q: '¿La piedra es natural?', a: 'Sí, cuarzo rosa natural sin tratamientos de color.' }, { q: '¿Se puede usar a diario?', a: 'Sí. Evitá el contacto prolongado con agua y productos químicos.' }, { q: '¿Es buen regalo?', a: 'Es de los más elegidos. Viene con packaging especial y podemos agregar una tarjeta personalizada.' }]
        },
        {
            id: 'anillo-jade', name: 'Anillo de Jade',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Asociado a la abundancia, prosperidad y buena fortuna. Una piedra que transmite equilibrio y serenidad profunda.',
            descLong: '<p>Durante más de cinco mil años, el jade fue la piedra más valiosa de China — más preciada incluso que el oro. Los emperadores lo portaban en rituales sagrados. Los guerreros lo llevaban en batalla. Las novias lo recibían como promesa de prosperidad. No existe ninguna otra cultura que haya venerado una piedra durante tanto tiempo con tanta intensidad.</p><p>Su energía es única: combina una profunda calma con una presencia poderosa. No es una piedra frenética ni ruidosa. El jade trabaja desde la base, como la tierra que sostiene todo lo que crece sobre ella. Equilibra, protege, y abre caminos.</p><p>En el plano decorativo, su verde natural tiene una elegancia atemporal que combina con cualquier estilo. En el plano energético, trabaja sobre el chakra del corazón atrayendo prosperidad, protegiendo la salud y favoreciendo las relaciones auténticas.</p>',
            features: [{ l: 'Piedra', v: 'Jade natural' }, { l: 'Origen', v: 'Tradición milenaria china' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Abundancia y prosperidad', 'Equilibrio profundo', 'Protección energética', 'Sabiduría', 'Buena fortuna'],
            energy: { name: 'JADE', chakra: 'Corazón', element: 'Tierra', intention: 'Abundancia, protección y equilibrio armonioso' },
            faq: [{ q: '¿Es jade genuino?', a: 'Sí, trabajamos únicamente con jade natural.' }, { q: '¿Por qué el jade es tan valorado?', a: 'En la cultura china, el jade representa las cinco virtudes: bondad, sabiduría, coraje, justicia y pureza. Es un mineral con cinco milenios de historia sagrada.' }]
        },
        {
            id: 'anillo-obsidiana', name: 'Anillo de Obsidiana',
            cat: 'joyeria', subcat: 'Anillos', price: 8000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Poderosa piedra protectora de origen volcánico. Absorbe energías densas y favorece el crecimiento personal.',
            descLong: '<p>La obsidiana no nació en las profundidades de la tierra de a poco, como la mayoría de los minerales. Nació en segundos, en el choque violento entre la lava y el frío. Esa energía de transformación radical está grabada en su naturaleza: es la piedra del antes y el después, del soltar y el crecer.</p><p>Los aztecas la usaban en sus cuchillos ceremoniales. Los mayas la pulían como espejo para ver "lo que el ojo común no puede ver". En casi todas las culturas antiguas de América y Asia, la obsidiana era sinónimo de poder y protección verdadera.</p><p>Hoy, quienes trabajan con energía la eligen como la piedra protectora por excelencia. Absorbe las energías densas del entorno, crea un campo de claridad a tu alrededor y actúa como espejo que muestra lo que ya es tiempo de soltar. No es una piedra cómoda — es una piedra transformadora.</p><p>En negro profundo y brillante, es también una pieza estéticamente poderosa. Una joya que no pasa desapercibida.</p>',
            features: [{ l: 'Piedra', v: 'Obsidiana volcánica' }, { l: 'Origen', v: 'Vidrio volcánico natural' }, { l: 'Chakra', v: 'Raíz' }, { l: 'Energía', v: 'Protección y transformación' }, { l: 'Elaboración', v: 'Artesanal' }],
            benefits: ['Protección energética potente', 'Limpieza de energías densas', 'Crecimiento personal', 'Arraigo', 'Claridad transformadora'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Fuego · Tierra', intention: 'Protección, transformación y arraigo profundo' },
            faq: [{ q: '¿La obsidiana realmente protege?', a: 'En muchas tradiciones espirituales es considerada la piedra protectora más poderosa. Absorbe energías densas y ayuda a soltar lo que no es tuyo.' }, { q: '¿Es para cualquier persona?', a: 'Es especialmente útil para personas sensibles energéticamente o que trabajan en entornos de alta demanda emocional.' }]
        },
        {
            id: 'anillo-rodocrosita', name: 'Anillo Rodocrosita',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'rose',
            descShort: 'La piedra nacional argentina, la Rosa del Inca. Amor propio, sanación emocional y apertura del corazón.',
            descLong: '<p>La rodocrosita es nuestra piedra nacional y un orgullo genuinamente argentino. Las minas de Capillitas, en Catamarca, producen algunos de los ejemplares más hermosos del mundo. Sus bandas rosas y blancas — formadas durante millones de años de capas minerales — son inconfundibles y únicas en cada pieza.</p><p>Los incas la llamaban "rosa del Inca" y creían que era la sangre petrificada de sus ancestros. Esa conexión con lo sagrado, con la sangre y con el amor da a la rodocrosita una profundidad simbólica que pocas piedras tienen. Es la piedra del amor — pero del amor que empieza por uno mismo.</p><p>Su energía trabaja sobre el chakra del corazón con una suavidad y una profundidad particulares. Acompaña procesos de sanación emocional, ayuda a soltar relaciones que ya no nutren, y fortalece la autoestima desde adentro. Es ideal para momentos de transición, duelo o nuevos comienzos.</p>',
            features: [{ l: 'Piedra', v: 'Rodocrosita argentina (Rosa del Inca)' }, { l: 'Origen', v: 'Minas de Catamarca, Argentina' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Amor propio genuino', 'Sanación emocional', 'Apertura del corazón', 'Autoestima', 'Apoyo en transiciones'],
            energy: { name: 'RODOCROSITA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio, sanación y apertura emocional profunda' },
            faq: [{ q: '¿De dónde viene la rodocrosita?', a: 'La mayoría de nuestra colección proviene de minas argentinas, especialmente de Capillitas (Catamarca), que produce algunas de las mejores del mundo.' }, { q: '¿Por qué se la llama Rosa del Inca?', a: 'Los incas creían que la rodocrosita era la sangre petrificada de sus reyes ancestrales, convertida en piedra por el tiempo.' }]
        },
        {
            id: 'anillo-labradorita', name: 'Anillo Labradorita',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'La piedra de la transformación e intuición. Sus reflejos naturales generan un efecto visual único e hipnótico.',
            descLong: '<p>La labradorita guarda el universo en su interior. Cuando la luz la toca en el ángulo justo, explota en destellos de azul, verde, dorado y violeta — el fenómeno llamado labradorescencia, uno de los más impresionantes del reino mineral. No hay ninguna otra piedra que haga esto de la misma manera.</p><p>Los Inuit de Labrador, Canadá — quienes le dieron el nombre — creían que la aurora boreal había quedado atrapada dentro de estas piedras. En el plano energético, trabaja sobre el tercer ojo y la intuición: amplifica la percepción, protege el aura de influencias externas y acompaña procesos de transformación profunda.</p><p>Cada pieza es completamente diferente a la siguiente. Los ángulos y la cantidad de labradorescencia varían según la piedra específica — lo que la convierte en la joya ideal para quienes valoran la rareza y la autenticidad por encima de todo.</p>',
            features: [{ l: 'Piedra', v: 'Labradorita natural' }, { l: 'Efecto visual', v: 'Labradorescencia iridiscente' }, { l: 'Chakra', v: 'Tercer Ojo' }, { l: 'Elaboración', v: 'Artesanal, pieza única' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Intuición amplificada', 'Transformación personal', 'Protección del aura', 'Creatividad', 'Conexión espiritual'],
            energy: { name: 'LABRADORITA', chakra: 'Tercer Ojo', element: 'Agua · Aire', intention: 'Intuición, transformación y protección del aura' },
            faq: [{ q: '¿Por qué la labradorita tiene colores que cambian?', a: 'El efecto se llama labradorescencia y ocurre por la reflexión interna de la luz en capas de distintos minerales. Es 100% natural e irrepetible.' }, { q: '¿Cada pieza es diferente?', a: 'Sí. No existe ningún anillo de labradorita igual a otro. La cantidad y el color de los destellos varía en cada piedra.' }]
        },
        {
            id: 'anillo-malaquita', name: 'Anillo Malaquita',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Vetas verdes únicas. La piedra del cambio, la evolución y la apertura al crecimiento personal.',
            descLong: '<p>La malaquita lleva escrito el movimiento en sus propias vetas. Sus espirales y anillos verdes son como huellas del tiempo, del cambio constante y de la naturaleza que nunca se detiene. No existe ninguna otra piedra con ese patrón tan hipnótico y tan único en cada pieza.</p><p>En el antiguo Egipto, los faraones la usaban triturada como pigmento y en joyería de poder. Cleopatra se pintaba los ojos con malaquita. En la Grecia clásica, protegía a los niños. En la Rusia del siglo XIX, se usaba en los salones del Palacio de Invierno. Una historia de miles de años de belleza y significado.</p><p>Su energía trabaja sobre el chakra del corazón pero con una particularidad: amplifica todo. Lo que está bien lo potencia, y lo que necesita ser visto lo trae a la superficie. Por eso es la piedra ideal para momentos de transición, cuando se está listo para ver con claridad y dar el siguiente paso.</p>',
            features: [{ l: 'Piedra', v: 'Malaquita natural, vetas únicas' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Energía', v: 'Cambio y crecimiento' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Cada pieza', v: '100% única por su patrón' }],
            benefits: ['Acompañamiento en el cambio', 'Crecimiento personal', 'Claridad emocional', 'Evolución', 'Amplificación positiva'],
            energy: { name: 'MALAQUITA', chakra: 'Corazón', element: 'Tierra', intention: 'Cambio consciente, evolución y apertura al crecimiento' },
            faq: [{ q: '¿La malaquita es tóxica?', a: 'El mineral en bruto puede ser irritante si se ingiere o inhala polvo. En anillo pulido y engarzado es completamente seguro para uso diario.' }, { q: '¿Por qué cada malaquita es diferente?', a: 'Sus vetas se forman por capas sucesivas de mineral a lo largo de miles de años. Cada piedra tiene un patrón propio, irrepetible.' }]
        },
        {
            id: 'anillo-piedra-luna', name: 'Anillo Piedra de la Luna',
            cat: 'joyeria', subcat: 'Anillos', price: 10000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'Energía femenina, intuición y conexión con los ciclos naturales. Resplandor etéreo único.',
            descLong: '<p>La piedra de la luna captura la luz de una manera que ninguna otra piedra logra: ese resplandor suave y flotante — llamado adularescencia — parece venir desde adentro, como un moonlight atrapado en el mineral. Los romanos creían que era luz lunar solidificada. Los hindúes, que era un regalo de Chandra, el dios de la luna. En todas las tradiciones, siempre asociada a lo femenino, lo intuitivo, lo cíclico.</p><p>Su energía está profundamente ligada a los ritmos naturales: las fases de la luna, los ciclos menstruales, los procesos de creación y regeneración. Trabajar con ella es invitar a una mayor sensibilidad hacia los propios ritmos internos y una confianza más profunda en la intuición.</p><p>Es una joya para las personas que valoran lo sutil. Su brillo no es ruidoso — es etéreo. Su energía no es intensa — es constante. Una presencia suave y poderosa en el dedo.</p>',
            features: [{ l: 'Piedra', v: 'Piedra de la luna (adularia)' }, { l: 'Efecto visual', v: 'Adularescencia' }, { l: 'Chakra', v: 'Sacro · Corona' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Energía', v: 'Femenina, intuitiva, cíclica' }],
            benefits: ['Conexión con la intuición', 'Energía femenina', 'Equilibrio emocional', 'Ciclos naturales', 'Sensibilidad amplificada'],
            energy: { name: 'PIEDRA DE LA LUNA', chakra: 'Sacro · Corona', element: 'Agua', intention: 'Intuición, feminidad y ciclos naturales' },
            faq: [{ q: '¿La piedra de la luna realmente brilla?', a: 'Sí. El efecto se llama adularescencia: una luz que parece flotar dentro de la piedra, creando un resplandor azulado o blanco. Es 100% natural.' }, { q: '¿Tiene relación con la luna real?', a: 'Energéticamente, muchas personas trabajan con ella siguiendo las fases lunares: la cargan bajo la luna llena para potenciar su energía.' }]
        },
        {
            id: 'anillo-labradorita-pirita', name: 'Anillo Labradorita + Pirita',
            cat: 'joyeria', subcat: 'Anillos', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'Intuición y abundancia en una sola pieza. El dúo perfecto para quienes están construyendo algo grande.',
            descLong: '<p>Hay combinaciones que se complementan de manera perfecta — como la intuición y la acción, como el sueño y la voluntad de realizarlo. La labradorita aporta la visión: activa el tercer ojo, protege el aura y amplifica la percepción. La pirita aporta la energía: activa el plexo solar, despierta la confianza y atrae abundancia concreta.</p><p>Es una combinación pensada para quienes no se conforman con soñar — sino para quienes quieren construir con intención y claridad. Para emprendedores, para artistas, para quienes están en un momento de proyección y crecimiento.</p><p>Estéticamente, el contraste entre la labradorita iridiscente y el dorado metálico de la pirita crea una pieza de una belleza completamente original. Una joya que llama la atención por su aspecto antes de que alguien sepa lo que representa.</p>',
            features: [{ l: 'Piedras', v: 'Labradorita + Pirita natural' }, { l: 'Chakras', v: 'Tercer Ojo · Plexo Solar' }, { l: 'Elaboración', v: 'Artesanal, combinación única' }, { l: 'Energía', v: 'Intuición + Abundancia' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Intuición activa', 'Abundancia concreta', 'Confianza y voluntad', 'Claridad de propósito', 'Crecimiento integral'],
            energy: { name: 'LABRADORITA + PIRITA', chakra: 'Tercer Ojo · Plexo Solar', element: 'Aire · Fuego', intention: 'Intuición activa combinada con prosperidad y voluntad' },
            faq: [{ q: '¿Por qué combinar dos piedras?', a: 'La labradorita activa la intuición y la protección; la pirita aporta confianza y abundancia. Juntas crean un balance entre visión y acción.' }, { q: '¿Hay otras combinaciones disponibles?', a: 'Consultanos por WhatsApp. Tenemos diferentes combinaciones energéticas según tu intención.' }]
        },
        {
            id: 'anillo-cobre', name: 'Anillo de Cobre',
            cat: 'joyeria', subcat: 'Anillos', price: 20000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Pieza artesanal en cobre con diseño atemporal. Conductor natural de energía con presencia estética única.',
            descLong: '<p>El cobre es uno de los metales más antiguos de la historia humana. Antes del hierro, antes del bronce en su forma más avanzada, el cobre fue el primer metal que los seres humanos aprendieron a trabajar. Desde la antigua Mesopotamia hasta los pueblos originarios de América, el cobre fue usado tanto en herramientas como en objetos sagrados — porque se entendía que era un conductor de energía extraordinario.</p><p>Nuestros anillos de cobre son piezas artesanales elaboradas a mano. Cada uno tiene sus propias marcas, sus propias imperfecciones que son, en realidad, su identidad. No son producidos en serie: son trabajados por manos que conocen el metal y respetan su naturaleza.</p><p>El cobre tiene un acabado que cambia con el tiempo — desarrolla una pátina que lo hace más interesante a medida que se usa. Es una joya que envejece con elegancia, que cuenta la historia de quien la lleva.</p>',
            features: [{ l: 'Material', v: 'Cobre artesanal' }, { l: 'Elaboración', v: 'Hecho a mano, pieza única' }, { l: 'Acabado', v: 'Natural, envejece con elegancia' }, { l: 'Propiedad', v: 'Conductor de energía' }, { l: 'Personalización', v: 'Consultanos por grabados' }],
            benefits: ['Conductividad energética', 'Equilibrio físico', 'Estética atemporal', 'Artesanía auténtica', 'Pieza que crece con vos'],
            faq: [{ q: '¿El cobre tiñe la piel?', a: 'Puede dejar una leve marca verde en contacto con humedad o sudor. Es completamente inofensivo y se elimina con agua y jabón.' }, { q: '¿Se puede personalizar?', a: 'Sí. Consultanos por WhatsApp para versiones personalizadas o con grabados.' }]
        },
        {
            id: 'anillo-cobre-grueso', name: 'Anillo Grueso de Cobre',
            cat: 'joyeria', subcat: 'Anillos', price: 20000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Diseño robusto y protagonista. Para quienes buscan una pieza de carácter que no pase desapercibida.',
            descLong: '<p>El anillo grueso de cobre es una declaración. No es una joya discreta ni minimalista — es una pieza que ocupa espacio, que genera presencia, que invita a preguntas. Para quienes entienden el estilo como una forma de comunicar quiénes son sin decir una sola palabra.</p><p>Elaborado a mano en cobre macizo, su grosor lo convierte en un objeto con peso real, con textura real, con historia real. Cada uno tiene marcas de herramienta, ondulaciones sutiles, imperfecciones que son exactamente lo que lo hace auténtico. No se fabrica en serie. Se trabaja de a uno.</p><p>Con el tiempo desarrolla una pátina — un cambio de color natural que lo hace más profundo y más interesante. Es una joya para personas que valoran lo que mejora con el paso del tiempo.</p>',
            features: [{ l: 'Material', v: 'Cobre macizo artesanal' }, { l: 'Diseño', v: 'Ancho y robusto, alta presencia' }, { l: 'Elaboración', v: 'Hecho a mano, sin moldes' }, { l: 'Acabado', v: 'Natural, mejora con el tiempo' }, { l: 'Personalización', v: 'Consultanos por grabados' }],
            benefits: ['Presencia estética potente', 'Conductividad energética', 'Artesanía auténtica', 'Pieza única irrepetible', 'Estilo que define'],
            faq: [{ q: '¿El cobre tiñe la piel?', a: 'Puede dejar leve marca verde con humedad. Es inofensivo y se elimina con agua y jabón.' }, { q: '¿Se puede personalizar?', a: 'Sí, consultanos por WhatsApp para grabados o tamaños específicos.' }]
        },

        /* ---- JOYERÍA / CADENAS ---- */
        {
            id: 'cadena-amatista', name: 'Cadena Amatista',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'amethyst',
            descShort: 'Amatista natural en cadena delicada. Calma y claridad cerca del corazón todo el día.',
            descLong: '<p>Llevar amatista en una cadena significa tener esa energía calmante y clarificadora sobre el pecho, cerca del corazón y la garganta, durante toda la jornada. A diferencia de un anillo, el colgante descansa sobre el chakra del corazón y el chakra de la garganta — dos centros claves para la comunicación emocional y la claridad mental.</p><p>La piedra natural tiene su peso, su temperatura, su textura. Quien usa esta cadena con regularidad describe una sensación de mayor serenidad y de pensamientos más ordenados. No es inmediata ni dramática — es gradual, como el trabajo de las mejores cosas.</p><p>La combinación de la piedra violeta con una cadena fina crea una joya que es a la vez discreta y completamente significativa. Puede usarse sola o layered con otras cadenas. Se adapta a cualquier estilo y a cualquier momento del día.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural' }, { l: 'Cadena', v: 'Metal bañado fino' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Chakra', v: 'Corona · Garganta' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Calma mental constante', 'Claridad de expresión', 'Conexión espiritual', 'Equilibrio emocional', 'Protección suave'],
            energy: { name: 'AMATISTA', chakra: 'Corona · Tercer Ojo', element: 'Aire', intention: 'Calma, claridad y elevación espiritual' },
            faq: [{ q: '¿De qué material es la cadena?', a: 'Metal bañado de alta calidad. Consultanos por WhatsApp el acabado disponible en stock actual.' }, { q: '¿Se puede usar con otras cadenas?', a: 'Sí, el estilo layering con varias cadenas de distintas longitudes queda muy bien.' }]
        },
        {
            id: 'cadena-labradorita', name: 'Cadena Labradorita',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Los destellos únicos de la labradorita en colgante. Intuición y magia llevada con elegancia.',
            descLong: '<p>En formato colgante, la labradorescencia de esta piedra — ese fenómeno de luz iridiscente que la convierte en un universo en miniatura — es aún más visible y llamativa que en un anillo. Cada vez que la luz cambia de ángulo, la piedra responde con un nuevo destello.</p><p>Su energía trabaja sobre el tercer ojo, amplificando la intuición y protegiendo el campo energético de influencias externas. Es la cadena ideal para quienes trabajan de manera creativa, intuitiva o espiritual y necesitan mantener esa claridad durante todo el día.</p><p>Una pieza para personas que saben que lo más valioso no siempre se ve a primera vista — y que aprecian las cosas que cambian según cómo las mirás.</p>',
            features: [{ l: 'Piedra', v: 'Labradorita natural' }, { l: 'Efecto', v: 'Labradorescencia iridiscente' }, { l: 'Chakra', v: 'Tercer Ojo' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Intuición amplificada', 'Protección del aura', 'Creatividad', 'Transformación', 'Visión clara'],
            energy: { name: 'LABRADORITA', chakra: 'Tercer Ojo', element: 'Agua · Aire', intention: 'Intuición, protección y transformación' },
            faq: [{ q: '¿Por qué cada labradorita es diferente?', a: 'La labradorescencia varía según la composición interna de cada piedra. No hay dos iguales.' }]
        },
        {
            id: 'cadena-obsidiana', name: 'Cadena Obsidiana',
            cat: 'joyeria', subcat: 'Cadenas', price: 11000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'crystal',
            descShort: 'Escudo energético constante. La obsidiana volcánica más cerca del corazón.',
            descLong: '<p>Llevar obsidiana en una cadena es crear un escudo energético que descansa sobre el pecho durante toda la jornada. El chakra del corazón — uno de los más vulnerables a las influencias del entorno — queda protegido por la energía densa y ancladora de esta piedra volcánica.</p><p>Es la cadena más elegida por personas que trabajan en entornos de alta exposición emocional: terapeutas, docentes, trabajadores de la salud, personas que absorben fácilmente las emociones ajenas. La obsidiana actúa como filtro — deja pasar lo que nutre y bloquea lo que no sirve.</p><p>En negro profundo y brillante, tiene además una presencia estética poderosa. Simple, directa, sin ornamentos innecesarios. Una pieza que dice mucho sin decir nada.</p>',
            features: [{ l: 'Piedra', v: 'Obsidiana volcánica natural' }, { l: 'Chakra', v: 'Raíz' }, { l: 'Energía', v: 'Protección y limpieza' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Protección energética fuerte', 'Limpieza del campo áurico', 'Arraigo', 'Claridad', 'Escudo emocional'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Fuego · Tierra', intention: 'Protección y arraigo profundo' },
            faq: [{ q: '¿Para quiénes es la obsidiana?', a: 'Especialmente para personas sensibles o que trabajan en entornos de alta demanda emocional.' }]
        },
        {
            id: 'cadena-turmalina', name: 'Cadena Turmalina',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Turmalina negra para protección máxima. La más potente de las piedras protectoras en uso diario.',
            descLong: '<p>La turmalina negra es, para muchos, la piedra protectora más poderosa que existe. A diferencia de la obsidiana — que absorbe — la turmalina repele activamente las energías densas y negativas. Es un escudo activo, no solo una barrera pasiva.</p><p>Funciona como un campo electromagnético personal: devuelve al emisor las energías que no pertenecen al portador, mantiene el campo áurico limpio y fortalece la conexión con la tierra. Es la elección de quienes viven en entornos urbanos de alta densidad energética, o que se relacionan con muchas personas distintas a lo largo del día.</p><p>En cadena, su acción es constante. Una sola pieza puede transformar la forma en que uno transita los espacios públicos, las interacciones difíciles y los momentos de mayor exigencia.</p>',
            features: [{ l: 'Piedra', v: 'Turmalina negra natural' }, { l: 'Chakra', v: 'Raíz' }, { l: 'Propiedad', v: 'Protección máxima, repelente activo' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Protección activa potente', 'Repele energías negativas', 'Arraigo profundo', 'Equilibrio energético', 'Claridad en entornos densos'],
            energy: { name: 'TURMALINA NEGRA', chakra: 'Raíz', element: 'Tierra', intention: 'Protección activa, arraigo y campo áurico limpio' },
            faq: [{ q: '¿Cuál es la diferencia entre obsidiana y turmalina?', a: 'La obsidiana absorbe energías densas; la turmalina las repele. Ambas protegen, pero de formas distintas. Muchos las combinan.' }]
        },
        {
            id: 'cadena-rodocrosita', name: 'Cadena Rodocrosita',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'rose',
            descShort: 'La Rosa del Inca en formato cadena. Amor propio y sanación emocional con elegancia.',
            descLong: '<p>La rodocrosita argentina en su versión más elegante: una cadena que descansa sobre el corazón, enviando su energía directamente al chakra del amor. Sus bandas rosas y blancas, visibles incluso en el pequeño colgante, son inconfundiblemente bellas.</p><p>Es uno de los regalos más significativos de nuestra colección — no porque sea el más costoso, sino porque llega en los momentos más importantes: cuando alguien querido está transitando un proceso de sanación, cuando se celebra un logro personal, cuando se quiere decir "te veo, te acompaño, te quiero".</p><p>El amor propio no es un destino. Es una práctica diaria. Y a veces, un objeto bello que se lleva cerca del corazón es el recordatorio que alguien necesita para seguir cultivándolo.</p>',
            features: [{ l: 'Piedra', v: 'Rodocrosita argentina (Rosa del Inca)' }, { l: 'Origen', v: 'Catamarca, Argentina' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Amor propio', 'Sanación emocional', 'Apertura del corazón', 'Autoestima', 'Apoyo en procesos de crecimiento'],
            energy: { name: 'RODOCROSITA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio, sanación y apertura emocional' },
            faq: [{ q: '¿Es buen regalo?', a: 'Es uno de los más significativos. Viene con packaging especial y podemos agregar tarjeta personalizada.' }]
        },
        {
            id: 'cadena-malaquita', name: 'Cadena Malaquita',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Las espirales verdes de la malaquita como colgante. Transformación y crecimiento constante.',
            descLong: '<p>La malaquita en formato cadena es una declaración de que se está en movimiento — en un proceso de cambio consciente. Sus espirales verdes, visibles en el colgante, son el patrón más hipnótico de todo el reino mineral. Y como no hay dos iguales, cada pieza cuenta una historia única.</p><p>Llevada sobre el pecho, trabaja directamente sobre el chakra del corazón amplificando tanto lo que está bien como lo que pide atención. Es una piedra honesta: no esconde, revela. Por eso es ideal para quienes están listos para ver con claridad y dar el siguiente paso en su crecimiento.</p><p>Combina con prendas en tonos naturales — verdes, blancos, crudos — y también funciona como punto focal sobre tonos oscuros. Una pieza que no necesita competir con nada para ser protagonista.</p>',
            features: [{ l: 'Piedra', v: 'Malaquita natural, vetas únicas' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Energía', v: 'Cambio y crecimiento' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Acompañamiento en el cambio', 'Crecimiento personal', 'Claridad emocional', 'Pieza única irrepetible', 'Elegancia natural'],
            energy: { name: 'MALAQUITA', chakra: 'Corazón', element: 'Tierra', intention: 'Cambio consciente y apertura al crecimiento' },
            faq: [{ q: '¿Por qué cada malaquita es única?', a: 'Sus vetas se forman por capas sucesivas a lo largo de miles de años. Cada piedra tiene un patrón propio.' }]
        },
        {
            id: 'cadena-jade', name: 'Cadena Jade',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Jade natural para atraer prosperidad y equilibrio. Un clásico de cinco mil años en tu cuello.',
            descLong: '<p>Llevar jade en una cadena es una práctica con más de cinco mil años de historia. En la China imperial, el jade se usaba en collares ceremoniales que se transmitían de generación en generación. Se creía que quien lo portaba cerca del corazón recibía su protección durante toda la vida.</p><p>Hoy, su energía sigue siendo la misma: equilibrio, prosperidad, protección y sabiduría. Su verde natural tiene una elegancia que trasciende modas y tendencias. Es un mineral que nunca pasa de moda porque nunca estuvo de moda — siempre fue atemporal.</p><p>Una pieza para quienes valoran la profundidad por encima de la novedad. Una joya que puede durar toda una vida y seguir siendo exactamente lo que necesitás.</p>',
            features: [{ l: 'Piedra', v: 'Jade natural' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Tradición', v: '5000 años de historia' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Prosperidad y abundancia', 'Equilibrio profundo', 'Protección ancestral', 'Sabiduría', 'Atemporalidad'],
            energy: { name: 'JADE', chakra: 'Corazón', element: 'Tierra', intention: 'Abundancia, equilibrio y protección' },
            faq: [{ q: '¿El jade es genuino?', a: 'Sí, trabajamos únicamente con jade natural sin teñidos ni tratamientos.' }]
        },
        {
            id: 'cadena-pirita', name: 'Cadena Pirita',
            cat: 'joyeria', subcat: 'Cadenas', price: 14000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'El dorado de la abundancia. Pirita para activar la voluntad, la confianza y la prosperidad real.',
            descLong: '<p>La pirita fue llamada "el oro de los tontos" — pero los únicos que se equivocaron fueron quienes la descartaron. Su brillo metálico dorado, su peso real, su densidad mineral no tienen nada de falso. Y su energía tampoco: la pirita activa el plexo solar, el centro de la voluntad, la acción y la confianza.</p><p>Llevarla en una cadena es tener ese combustible encendido durante toda la jornada. Personas que la usan regularmente reportan mayor energía para iniciar proyectos, más confianza en sus decisiones y una apertura mayor hacia las oportunidades que se presentan. No es magia — es intención sostenida.</p><p>Estéticamente, su dorado metálico es llamativo sobre cualquier prenda. Va con todo: tejidos naturales, colores oscuros, estilos formales e informales. Es la cadena ideal para quienes combinan la espiritualidad con la ambición concreta.</p>',
            features: [{ l: 'Piedra', v: 'Pirita natural (sulfuro de hierro)' }, { l: 'Chakra', v: 'Plexo Solar' }, { l: 'Color', v: 'Dorado metálico' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Abundancia y prosperidad', 'Confianza y voluntad', 'Activación del plexo solar', 'Energía para la acción', 'Apertura a oportunidades'],
            energy: { name: 'PIRITA', chakra: 'Plexo Solar', element: 'Fuego', intention: 'Abundancia, voluntad y confianza en la acción' },
            faq: [{ q: '¿La pirita es oro?', a: 'No. Es sulfuro de hierro. Su brillo dorado la confundió históricamente con el oro, pero tiene propiedades y valor propios.' }]
        },
        {
            id: 'cadena-citrino', name: 'Cadena Citrino',
            cat: 'joyeria', subcat: 'Cadenas', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'La piedra del sol. Citrino para alegría permanente, abundancia y energía solar en el día a día.',
            descLong: '<p>El citrino captura la luz del sol en su interior y la irradia de forma constante. Su amarillo dorado — que va desde el más pálido hasta el naranja ámbar — tiene una calidez visual que se percibe incluso antes de conocer sus propiedades.</p><p>Es conocida como la piedra de la alegría y la abundancia por dos razones: primero, porque tiene la particularidad única entre los minerales de no acumular energías negativas sino transmutarlas. Segundo, porque trabaja sobre el plexo solar activando la confianza, la creatividad y la apertura hacia lo que viene. Una piedra que mira hacia adelante.</p><p>Llevarla en una cadena cerca del pecho convierte cada jornada en una práctica de liviandad y gratitud. Ideal para personas que tienden al pesimismo, la ansiedad o el agotamiento — el citrino recuerda que también existe la luz.</p>',
            features: [{ l: 'Piedra', v: 'Citrino natural' }, { l: 'Chakra', v: 'Plexo Solar' }, { l: 'Propiedad única', v: 'No acumula energías negativas' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Alegría y positividad', 'Abundancia', 'Transmutación de energías', 'Creatividad', 'Confianza y liviandad'],
            energy: { name: 'CITRINO', chakra: 'Plexo Solar', element: 'Fuego', intention: 'Alegría, abundancia y transmutación de lo denso' },
            faq: [{ q: '¿El citrino realmente no acumula energías negativas?', a: 'Es una de sus propiedades más conocidas en cristaloterapia. A diferencia de otras piedras, no necesita limpieza energética frecuente.' }]
        },
        {
            id: 'cadena-cuarzo-rosa', name: 'Cadena Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Cadenas', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'rose',
            descShort: 'El amor cerca del corazón. Cuarzo rosa para el amor propio y las relaciones conscientes.',
            descLong: '<p>La cadena de cuarzo rosa es de los regalos más elegidos de nuestra colección — y no es casualidad. Su energía amorosa y suave es universal: no hay edad, no hay momento de vida, no hay persona para quien el cuarzo rosa no sea exactamente lo que necesita.</p><p>Descansando sobre el pecho, trabaja directamente sobre el chakra del corazón: abre, suaviza, sana y expande. Es una presencia constante de amor — no el amor dramático o urgente, sino el amor calmo, seguro y profundo.</p><p>Viene con packaging especial para regalo. Podés agregar una tarjeta personalizada escrita a mano. Es la cadena para el cumpleaños de alguien importante, para decirle a alguien que importa, para regalarse a uno mismo en un momento de cuidado personal.</p>',
            features: [{ l: 'Piedra', v: 'Cuarzo rosa natural' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }, { l: 'Tarjeta', v: 'Personalizada disponible' }],
            benefits: ['Amor propio y self-love', 'Apertura emocional', 'Armonía en los vínculos', 'Autoestima', 'Regalo significativo'],
            energy: { name: 'CUARZO ROSA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio, apertura y armonía emocional' },
            faq: [{ q: '¿Tiene packaging para regalo?', a: 'Sí, incluye caja especial. Podés agregar tarjeta personalizada consultando por WhatsApp.' }]
        },
        {
            id: 'cadena-aguamarina', name: 'Cadena Aguamarina',
            cat: 'joyeria', subcat: 'Cadenas', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'El azul del océano en una piedra. Aguamarina para la comunicación honesta y la serenidad profunda.',
            descLong: '<p>La aguamarina captura el azul del mar en todas sus variaciones: desde el celeste más suave hasta el azul profundo del océano abierto. Su nombre mismo — agua marina — describe lo que es: un fragmento del mar cristalizado en piedra.</p><p>Los marineros griegos y romanos la llevaban como protección en el mar. Creían que era el tesoro de las sirenas y que calmar el océano. Hoy se la asocia a la comunicación: abre el chakra de la garganta, facilita la expresión honesta y clarifica el pensamiento antes de hablar.</p><p>Es la piedra ideal para quienes hablan en público, enseñan, negocian o simplemente quieren comunicar con más claridad y desde un lugar más tranquilo. Una voz que viene desde la serenidad llega siempre más lejos.</p>',
            features: [{ l: 'Piedra', v: 'Aguamarina natural' }, { l: 'Chakra', v: 'Garganta' }, { l: 'Color', v: 'Azul celeste natural' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Comunicación honesta', 'Serenidad mental', 'Claridad de expresión', 'Calma en situaciones difíciles', 'Conexión con lo intuitivo'],
            energy: { name: 'AGUAMARINA', chakra: 'Garganta', element: 'Agua', intention: 'Comunicación clara, serenidad y expresión auténtica' },
            faq: [{ q: '¿Para quién es la aguamarina?', a: 'Ideal para personas que hablan en público, maestros, terapeutas, comunicadores o quienes quieren mejorar su expresión emocional.' }]
        },
        {
            id: 'cadena-lapislazuli', name: 'Cadena Lapislázuli',
            cat: 'joyeria', subcat: 'Cadenas', price: 14000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'La piedra de los faraones. Lapislázuli para la sabiduría, intuición y comunicación espiritual elevada.',
            descLong: '<p>Durante tres mil años, el lapislázuli fue la piedra más valiosa del mundo — más que el oro y las esmeraldas. Los faraones egipcios la usaban en sus máscaras funerarias. Cleopatra la usaba triturada como sombra de ojos. Los reyes de Mesopotamia la grababan en sus sellos. Ninguna otra piedra tiene una historia de poder y espiritualidad tan extensa y documentada.</p><p>Su azul profundo tachonado de destellos dorados de pirita — que remedan un cielo estrellado — es inconfundible y de una belleza que no envejece. En el plano energético, activa simultáneamente el tercer ojo (intuición) y el chakra de la garganta (comunicación), creando un canal entre la percepción y la expresión.</p><p>Es la cadena para quienes buscan hablar desde la sabiduría — no desde la reacción. Para quienes enseñan, lideran, crean o simplemente quieren que sus palabras tengan peso y claridad.</p>',
            features: [{ l: 'Piedra', v: 'Lapislázuli natural con pirita' }, { l: 'Chakras', v: 'Tercer Ojo · Garganta' }, { l: 'Historia', v: '3000 años de uso sagrado' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Sabiduría profunda', 'Intuición elevada', 'Comunicación espiritual', 'Claridad de pensamiento', 'Conexión ancestral'],
            energy: { name: 'LAPISLÁZULI', chakra: 'Tercer Ojo · Garganta', element: 'Aire', intention: 'Sabiduría, intuición y comunicación elevada' },
            faq: [{ q: '¿Por qué el lapislázuli tiene puntos dorados?', a: 'Son inclusiones de pirita, un mineral de brillo metálico dorado. Son naturales y parte de la belleza única de cada piedra.' }]
        },

        /* ---- JOYERÍA / CADENAS CORAZÓN ---- */
        {
            id: 'cadena-corazon-amatista', name: 'Cadena Corazón Amatista',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'amethyst',
            descShort: 'El símbolo del amor tallado en amatista natural. Calma, amor y conexión espiritual en una sola pieza.',
            descLong: '<p>El corazón es el símbolo universal del amor — en todas las culturas, en todos los tiempos. Cuando se talla en amatista, esa forma adquiere una dimensión adicional: la de la calma, la claridad y la conexión con algo más profundo que la emoción inmediata. Es el amor sereno, el amor que piensa antes de hablar.</p><p>La piedra en forma de corazón descansa sobre el chakra del mismo nombre cuando se lleva en cadena. La combinación es poderosa: el símbolo y la energía de la piedra se potencian mutuamente, creando una pieza que trabaja en ambos planos — el simbólico y el energético.</p><p>Como regalo, es de los más significativos que existe. Dice exactamente lo que necesita decir sin necesitar ninguna explicación adicional.</p>',
            features: [{ l: 'Piedra', v: 'Amatista natural tallada en corazón' }, { l: 'Chakra', v: 'Corazón · Corona' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Amor consciente', 'Calma emocional', 'Conexión espiritual', 'Regalo significativo', 'Equilibrio corazón-mente'],
            energy: { name: 'AMATISTA', chakra: 'Corazón · Corona', element: 'Aire', intention: 'Amor sereno, calma y apertura espiritual' },
            faq: [{ q: '¿La forma corazón es tallada a mano?', a: 'Sí, cada colgante corazón está tallado y pulido artesanalmente en amatista natural.' }]
        },
        {
            id: 'cadena-corazon-citrino', name: 'Cadena Corazón Citrino',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 14000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'Citrino dorado en forma de corazón. Alegría, amor y abundancia como intención diaria.',
            descLong: '<p>El citrino amarillo dorado tallado en corazón es una pieza de una alegría visual inmediata. Su color cálido y su forma reconocible crean una joya que genera una sonrisa antes de que alguien sepa lo que es. Y eso, en sí mismo, ya dice algo sobre la energía del citrino: alegría inmediata, sin rodeos.</p><p>Combina la energía solar del citrino — que activa la confianza, la creatividad y la abundancia — con el símbolo del amor. El resultado es una intención hermosa: amar desde la alegría, desde la confianza, desde la abundancia. No desde el miedo ni desde la escasez.</p><p>Para regalarse o para regalar. Para los días que necesitan un poco más de luz.</p>',
            features: [{ l: 'Piedra', v: 'Citrino natural tallado en corazón' }, { l: 'Chakra', v: 'Plexo Solar · Corazón' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Alegría y amor', 'Abundancia', 'Positividad solar', 'Confianza', 'Regalo que ilumina'],
            energy: { name: 'CITRINO', chakra: 'Plexo Solar', element: 'Fuego', intention: 'Amor desde la alegría y la abundancia' },
            faq: [{ q: '¿Es natural el citrino?', a: 'Sí. Citrino natural sin tratamiento de calor.' }]
        },
        {
            id: 'cadena-corazon-jade', name: 'Cadena Corazón Jade',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Jade verde natural tallado en corazón. Amor, prosperidad y equilibrio en una sola pieza.',
            descLong: '<p>En la cultura china, el jade y el amor son inseparables. Se lo regalaban los amantes, lo usaban las novias, lo transmitían las madres a sus hijas. Esta tradición de miles de años tiene una razón energética simple: el jade trabaja sobre el chakra del corazón atrayendo amor genuino, prosperidad compartida y equilibrio en los vínculos.</p><p>Tallado en corazón, esa intención se vuelve explícita y visible. Una pieza que no necesita explicación: la forma habla, la piedra trabaja, el significado está ahí para quien quiera recibirlo.</p><p>Verde natural con sus variaciones propias de cada piedra. Elegancia sin ostentación. Una joya que dura toda la vida.</p>',
            features: [{ l: 'Piedra', v: 'Jade natural tallado en corazón' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Amor y vínculos genuinos', 'Prosperidad compartida', 'Equilibrio emocional', 'Protección', 'Elegancia atemporal'],
            energy: { name: 'JADE', chakra: 'Corazón', element: 'Tierra', intention: 'Amor genuino, prosperidad y equilibrio en los vínculos' },
            faq: [{ q: '¿Es jade real?', a: 'Sí, jade natural sin tratamientos.' }]
        },
        {
            id: 'cadena-corazon-obsidiana', name: 'Cadena Corazón Obsidiana',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'crystal',
            descShort: 'Obsidiana volcánica en corazón. Proteger el corazón desde la fuerza, no desde el miedo.',
            descLong: '<p>Un corazón de obsidiana negra es una paradoja hermosa: el símbolo del amor tallado en la piedra de la protección. Pero en realidad, tiene sentido perfecto. La obsidiana protege el corazón — no cerrándolo, sino fortaleciéndolo. No es el corazón blindado que no deja entrar nada. Es el corazón que sabe cuándo abrir y cuándo cuidarse.</p><p>En negro brillante, la forma de corazón adquiere una elegancia oscura y sofisticada. No es una joya delicada ni romántica en el sentido convencional — es una pieza de carácter, para quienes aman desde la fuerza y el autoconocimiento.</p><p>Ideal para quienes están atravesando procesos de sanación emocional o aprendiendo a poner límites desde el amor.</p>',
            features: [{ l: 'Piedra', v: 'Obsidiana volcánica tallada en corazón' }, { l: 'Chakra', v: 'Raíz · Corazón' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Corazón protegido', 'Fuerza emocional', 'Límites desde el amor', 'Sanación', 'Elegancia oscura'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Tierra · Fuego', intention: 'Proteger y fortalecer el corazón' },
            faq: [{ q: '¿Por qué un corazón de piedra protectora?', a: 'La obsidiana no cierra el corazón — lo fortalece para que pueda abrirse desde un lugar más seguro y consciente.' }]
        },
        {
            id: 'cadena-corazon-lapislazuli', name: 'Cadena Corazón Lapislázuli',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 15000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'El azul real de los faraones en forma de corazón. Amor, sabiduría y comunicación espiritual.',
            descLong: '<p>El lapislázuli tiene el azul más profundo y real del reino mineral. Tallado en corazón, esa profundidad se vuelve íntima y cercana. Es un corazón que piensa, que percibe, que comunica desde la sabiduría. El amor del lapislázuli no es impulsivo — es maduro, consciente y elevado.</p><p>Sus destellos dorados de pirita sobre el azul noche son visibles incluso en el pequeño colgante, creando una pieza de una belleza completamente única. Combina el símbolo universal del amor con la energía más elevada del reino mineral.</p><p>Para quienes buscan amar y ser amados con consciencia. Para quienes entienden que el amor más profundo también implica verdad, sabiduría y una comunicación honesta.</p>',
            features: [{ l: 'Piedra', v: 'Lapislázuli con pirita, tallado en corazón' }, { l: 'Chakras', v: 'Corazón · Tercer Ojo · Garganta' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Amor sabio y consciente', 'Comunicación honesta', 'Intuición en los vínculos', 'Belleza única', 'Pieza premium'],
            energy: { name: 'LAPISLÁZULI', chakra: 'Corazón · Tercer Ojo', element: 'Aire', intention: 'Amor sabio, comunicación y sabiduría espiritual' },
            faq: [{ q: '¿Los puntitos dorados son naturales?', a: 'Sí, son inclusiones de pirita que se forman naturalmente dentro del lapislázuli.' }]
        },
        {
            id: 'cadena-corazon-ojo-tigre', name: 'Cadena Corazón Ojo de Tigre',
            cat: 'joyeria', subcat: 'Cadenas Corazón', price: 13000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Ojo de tigre en corazón. El amor desde la confianza, el poder personal y la claridad mental.',
            descLong: '<p>El ojo de tigre tiene un efecto visual hipnótico: sus bandas doradas y marrones parecen moverse cuando la luz cambia de ángulo — el fenómeno llamado chatoyance, o ojo de gato. Tallado en corazón, ese movimiento de luz se convierte en algo casi vivo, casi mágico.</p><p>Su energía trabaja sobre el plexo solar y el chakra raíz, activando la confianza, el poder personal y el coraje. Es el amor desde la fortaleza: no el amor que se achica y se adapta, sino el amor que se mantiene en pie, que sabe lo que vale y lo que merece.</p><p>Para quienes están aprendiendo a amarse desde un lugar de más poder propio. Para quienes quieren amar sin perder su centro.</p>',
            features: [{ l: 'Piedra', v: 'Ojo de tigre tallado en corazón' }, { l: 'Efecto', v: 'Chatoyance (iridiscencia)' }, { l: 'Chakras', v: 'Plexo Solar · Raíz' }, { l: 'Largo', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Amor desde la fortaleza', 'Confianza y poder personal', 'Coraje', 'Arraigo', 'Claridad de propósito'],
            energy: { name: 'OJO DE TIGRE', chakra: 'Plexo Solar · Raíz', element: 'Fuego · Tierra', intention: 'Amor consciente desde el poder personal y la fortaleza' },
            faq: [{ q: '¿Qué es el chatoyance?', a: 'Es el efecto visual de bandas de luz que parecen moverse dentro de la piedra, como el ojo de un gato o un tigre. Es 100% natural.' }]
        },

        /* ---- JOYERÍA / AMULETOS ---- */
        {
            id: 'nudo-de-bruja', name: 'Amuleto Nudo de Bruja',
            cat: 'joyeria', subcat: 'Amuletos', price: 11000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Protección' }],
            img: 'crystal',
            descShort: 'Símbolo ancestral de protección y magia femenina. Un amuleto tejido a mano con intención.',
            descLong: '<p>El nudo de bruja — también conocido como nudo de la bruja o witch knot — es uno de los símbolos de protección más antiguos de la tradición europea. Se encuentran grabados en piedras de la era vikinga, en amuletos medievales, en los umbrales de las casas de campo de Escocia e Irlanda. Un símbolo que atravesó milenios porque funciona: su patrón sin principio ni fin no tiene entrada para energías no deseadas.</p><p>Este amuleto está confeccionado a mano. Cada nudo tiene su intención: proteger quien lo lleva, mantener su campo energético limpio y crear un escudo de poder personal. No es decoración — es práctica espiritual llevada puesta.</p><p>Para quienes se conectan con la tradición de las mujeres sabias, con la magia de lo ancestral y con el poder de los símbolos que trascienden el tiempo.</p>',
            features: [{ l: 'Material', v: 'Metal con acabado envejecido' }, { l: 'Elaboración', v: 'Artesanal' }, { l: 'Tradición', v: 'Europea ancestral (vikinga/celta)' }, { l: 'Largo cadena', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Protección ancestral', 'Escudo energético', 'Conexión con lo femenino sagrado', 'Tradición viva', 'Magia cotidiana'],
            faq: [{ q: '¿De dónde viene el nudo de bruja?', a: 'Sus orígenes se encuentran en la tradición vikinga y celta. Era un símbolo de protección tallado en piedra y grabado en amuletos desde hace más de mil años.' }, { q: '¿Para quién es?', a: 'Para cualquier persona que se conecte con la tradición de la magia ancestral y la protección espiritual.' }]
        },
        {
            id: 'trisquel-celta', name: 'Amuleto Trisquel Celta',
            cat: 'joyeria', subcat: 'Amuletos', price: 11000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'El espiral triple celta. Símbolo del movimiento eterno: vida, muerte y renacimiento.',
            descLong: '<p>El trisquel — tres espirales unidas en un solo centro — es uno de los símbolos más poderosos de la tradición celta. Aparece grabado en la piedra de Newgrange, Irlanda, construida hace más de cinco mil años — antes de Stonehenge, antes de las pirámides. Es uno de los símbolos más antiguos creados por seres humanos.</p><p>Su significado es múltiple y profundo: representa los tres mundos (tierra, mar, cielo), las tres etapas de la vida (nacimiento, vida, muerte), las tres fases de la luna (creciente, llena, menguante) y el movimiento eterno del tiempo. Cada espiral fluye hacia el centro y desde el centro, en un ciclo sin fin.</p><p>Llevarlo es conectarse con esa energía de movimiento y renovación permanente. Un recordatorio de que nada se detiene, de que cada final es el principio de algo nuevo, de que estamos siempre en tránsito hacia algo mejor.</p>',
            features: [{ l: 'Símbolo', v: 'Trisquel celta (triple espiral)' }, { l: 'Material', v: 'Metal con acabado envejecido' }, { l: 'Origen', v: 'Tradición celta, más de 5000 años' }, { l: 'Largo cadena', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Movimiento y renovación', 'Conexión con los ciclos', 'Transición consciente', 'Tradición ancestral', 'Símbolo de eternidad'],
            faq: [{ q: '¿Qué significa el trisquel?', a: 'Representa los tres mundos celtas, las tres etapas de la vida y el movimiento eterno. Es uno de los símbolos humanos más antiguos que se conocen.' }]
        },
        {
            id: 'metatron', name: 'Amuleto Cubo de Metatrón',
            cat: 'joyeria', subcat: 'Amuletos', price: 13000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Espiritual' }],
            img: 'crystal',
            descShort: 'Geometría sagrada que contiene todas las formas del universo. El símbolo más completo de la creación.',
            descLong: '<p>El Cubo de Metatrón es uno de los símbolos más complejos y poderosos de la geometría sagrada. Dentro de su estructura están contenidas todas las figuras geométricas fundamentales del universo: el tetraedro, el cubo, el octaedro, el dodecaedro y el icosaedro — los llamados sólidos platónicos, que según Platón son las formas básicas de toda la materia.</p><p>En la tradición judía y cristiana, Metatrón es el ángel del universo, el guardián de los registros akáshicos, el mensajero entre lo divino y lo humano. Su cubo representa el equilibrio absoluto entre todos los elementos y fuerzas de la creación.</p><p>Llevarlo es recordar que existe un orden perfecto detrás del aparente caos. Es un ancla de equilibrio, una conexión con la inteligencia del universo y un símbolo de protección y armonía en todos los planos de la existencia.</p>',
            features: [{ l: 'Símbolo', v: 'Cubo de Metatrón (geometría sagrada)' }, { l: 'Material', v: 'Metal grabado con detalle' }, { l: 'Tradición', v: 'Cábala, geometría sagrada' }, { l: 'Largo cadena', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Equilibrio universal', 'Protección en todos los planos', 'Conexión espiritual elevada', 'Armonía interior', 'Símbolo de completitud'],
            energy: { name: 'METATRÓN', chakra: 'Todos', element: 'Todos', intention: 'Equilibrio universal, protección y armonía en todos los planos' },
            faq: [{ q: '¿Qué es la geometría sagrada?', a: 'Es el estudio de los patrones geométricos que aparecen en la naturaleza y se consideran la base matemática de la creación. El Cubo de Metatrón los contiene todos.' }]
        },
        {
            id: 'camafeo-cornalina', name: 'Camafeo Cornalina',
            cat: 'joyeria', subcat: 'Amuletos', price: 12000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'rose',
            descShort: 'Cornalina naranja en formato camafeo vintage. Vitalidad, creatividad y coraje en una pieza con historia.',
            descLong: '<p>El camafeo es una de las formas de joyería más antiguas del mundo — los griegos y los romanos los tallaban en ágata y cornalina para los anillos de los emperadores. Esta versión en cornalina naranja rescata esa estética vintage con una energía completamente contemporánea.</p><p>La cornalina es la piedra de la vitalidad y el coraje. Su naranja intenso — que va desde el melocotón hasta el rojo ladrillo — irradia una energía cálida y activadora. Trabaja sobre el chakra sacro, despertando la creatividad, la pasión y la energía vital. Es la piedra de los artistas, los emprendedores y quienes necesitan reavivar su fuego interior.</p><p>Como amuleto en formato camafeo, tiene además esa elegancia de lo antiguo que lo hace completamente especial y único en una colección de joyería.</p>',
            features: [{ l: 'Piedra', v: 'Cornalina natural' }, { l: 'Formato', v: 'Camafeo estilo vintage' }, { l: 'Chakra', v: 'Sacro' }, { l: 'Largo cadena', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo incluida' }],
            benefits: ['Vitalidad y energía', 'Creatividad despertada', 'Coraje y acción', 'Pasión', 'Estética única vintage'],
            energy: { name: 'CORNALINA', chakra: 'Sacro', element: 'Fuego', intention: 'Vitalidad, creatividad y coraje para la acción' },
            faq: [{ q: '¿Qué es un camafeo?', a: 'Es un colgante con una figura tallada en relieve sobre una piedra o concha. Es una de las formas de joyería más antiguas de la historia.' }]
        },
        {
            id: 'medalla-pirita-labradorita', name: 'Medalla Pirita · Labradorita',
            cat: 'joyeria', subcat: 'Amuletos', price: 16000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'stone',
            descShort: 'El dúo más poderoso: intuición y abundancia en una sola medalla artesanal.',
            descLong: '<p>Esta medalla reúne dos de las piedras más buscadas de nuestra colección en una sola pieza: la labradorita, con su labradorescencia hipnótica, y la pirita, con su dorado metálico de abundancia. El resultado es una medalla que combina lo visual y lo energético de manera completamente original.</p><p>La labradorita aporta visión, intuición y protección del aura. La pirita aporta confianza, voluntad y apertura a la prosperidad. Juntas, son el amuleto perfecto para quienes están construyendo algo con intención: un proyecto, una carrera, una vida más alineada con sus valores.</p><p>Elaborada artesanalmente, cada medalla es única. El engaste, el tamaño de las piedras y la distribución del dorado y el iridiscente varía en cada pieza. Lo que nunca varía es la potencia de la combinación.</p>',
            features: [{ l: 'Piedras', v: 'Labradorita + Pirita natural' }, { l: 'Formato', v: 'Medalla artesanal' }, { l: 'Chakras', v: 'Tercer Ojo · Plexo Solar' }, { l: 'Largo cadena', v: 'Ajustable' }, { l: 'Packaging', v: 'Caja regalo especial' }],
            benefits: ['Intuición activa', 'Abundancia y prosperidad', 'Confianza en la acción', 'Protección del aura', 'Pieza única irrepetible'],
            energy: { name: 'LABRADORITA + PIRITA', chakra: 'Tercer Ojo · Plexo Solar', element: 'Aire · Fuego', intention: 'Intuición activa combinada con prosperidad y voluntad concreta' },
            faq: [{ q: '¿Cada medalla es diferente?', a: 'Sí. Por ser artesanal y usar piedras naturales, cada pieza tiene su propia distribución y sus propios destellos. Irrepetible.' }]
        },

        /* ---- JOYERÍA / PULSERAS ---- */
        {
            id: 'pulsera-obsidiana', name: 'Pulsera Obsidiana',
            cat: 'joyeria', subcat: 'Pulseras', price: 7500,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Esferas de obsidiana volcánica para protección energética constante. La más elegida de la colección.',
            descLong: '<p>La pulsera de obsidiana es, por lejos, la más elegida de todo nuestro catálogo de joyería — y hay una razón para eso. Sus esferas de vidrio volcánico negro crean un campo de protección constante alrededor de quien la lleva. No es sutil ni discreta en su energía: trabaja de manera activa y directa.</p><p>En la muñeca izquierda —considerada receptiva— absorbe energías densas del entorno. En la muñeca derecha —considerada activa— crea un escudo ante lo que se proyecta hacia afuera. Muchas personas la usan en la muñeca izquierda para protegerse durante el día y la limpian regularmente dejándola bajo agua corriente o bajo la luna.</p><p>Sus esferas negras brillantes tienen además una estética fuerte y contemporánea. Combina con cualquier estilo — y se lleva sola o apilada con otras pulseras.</p>',
            features: [{ l: 'Material', v: 'Obsidiana volcánica' }, { l: 'Formato', v: 'Esferas elástica apilable' }, { l: 'Chakra', v: 'Raíz' }, { l: 'Cuidado', v: 'Limpiar bajo agua o luna llena' }, { l: 'Uso', v: 'Muñeca izquierda (receptiva)' }],
            benefits: ['Protección energética potente', 'Limpieza del aura', 'Arraigo', 'Fuerza y claridad', 'Escudo ante influencias externas'],
            energy: { name: 'OBSIDIANA', chakra: 'Raíz', element: 'Tierra · Fuego', intention: 'Protección constante y arraigo profundo' },
            faq: [{ q: '¿En qué muñeca se usa?', a: 'En la muñeca izquierda para recibir protección. En la derecha para proyectar energía. Muchos la usan en la izquierda por defecto.' }, { q: '¿Cómo se limpia energéticamente?', a: 'Bajo agua corriente, al sol unos minutos, o dejándola bajo la luna llena una noche.' }]
        },
        {
            id: 'pulsera-cuarzo-rosa', name: 'Pulsera Cuarzo Rosa',
            cat: 'joyeria', subcat: 'Pulseras', price: 7500,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'rose',
            descShort: 'Esferas de cuarzo rosa. La pulsera del amor propio. Un regalo siempre acertado para cualquier ocasión.',
            descLong: '<p>La pulsera de cuarzo rosa tiene algo que pocas joyas tienen: una energía que se percibe incluso antes de saber lo que es. Su rosado suave y sus esferas perfectas generan una sensación de calma y ternura inmediata. Es pura energía amorosa en la muñeca.</p><p>Es la pulsera ideal para personas que están trabajando en el amor propio, la autoestima o la apertura emocional. También es perfecta para regalar — en cumpleaños, en momentos de apoyo, como gesto de cariño. El cuarzo rosa siempre llega en el momento indicado porque la energía del amor nunca está de más.</p><p>Viene con packaging especial. Se puede apilar con otras pulseras de piedras para crear combinaciones energéticas personalizadas.</p>',
            features: [{ l: 'Material', v: 'Cuarzo rosa natural' }, { l: 'Formato', v: 'Esferas elástica apilable' }, { l: 'Chakra', v: 'Corazón' }, { l: 'Packaging', v: 'Caja regalo incluida' }, { l: 'Combinación', v: 'Ideal con amatista o cristal' }],
            benefits: ['Amor propio y self-love', 'Ternura y apertura', 'Armonía en los vínculos', 'Autoestima', 'Regalo significativo'],
            energy: { name: 'CUARZO ROSA', chakra: 'Corazón', element: 'Agua', intention: 'Amor propio, apertura y ternura constante' },
            faq: [{ q: '¿Es buen regalo?', a: 'Es uno de los más elegidos. Viene con packaging especial. Podés agregar tarjeta personalizada.' }]
        },
        {
            id: 'pulsera-amatista', name: 'Pulsera Amatista',
            cat: 'joyeria', subcat: 'Pulseras', price: 7500,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'amethyst',
            descShort: 'Esferas de amatista para calmar la mente y sostener el equilibrio emocional durante todo el día.',
            descLong: '<p>La pulsera de amatista es la aliada de los momentos de alta exigencia mental. Sus esferas violetas actúan como un ancla de serenidad durante la jornada — en la oficina, en los exámenes, en las conversaciones difíciles, en los momentos donde la mente tiende a acelerarse.</p><p>La amatista trabaja sobre los chakras de la corona y el tercer ojo, facilitando la claridad mental, la intuición y el equilibrio emocional. En formato pulsera, esa energía está en contacto directo con los meridianos de energía de la muñeca durante todo el tiempo que se lleva puesta.</p><p>Se combina perfectamente con la pulsera de cuarzo rosa (amor + calma) o con la pulsera de cristal (amplificación de la energía calmante). Una inversión en bienestar diario.</p>',
            features: [{ l: 'Material', v: 'Amatista natural' }, { l: 'Formato', v: 'Esferas elástica apilable' }, { l: 'Chakra', v: 'Corona · Tercer Ojo' }, { l: 'Ideal', v: 'Trabajo, estudio, meditación' }],
            benefits: ['Calma mental profunda', 'Intuición activa', 'Equilibrio emocional', 'Claridad de pensamiento', 'Anti-estrés natural'],
            energy: { name: 'AMATISTA', chakra: 'Corona · Tercer Ojo', element: 'Aire', intention: 'Calma, claridad y equilibrio mental constante' },
            faq: [{ q: '¿Cuándo es mejor usarla?', a: 'Durante la jornada laboral, el estudio o la meditación. También muy útil antes de dormir para calmar la mente activa.' }]
        },
        {
            id: 'pulsera-cristal', name: 'Pulsera Cristal',
            cat: 'joyeria', subcat: 'Pulseras', price: 7000,
            badges: [{ cls: 'natural', label: 'Piedra Natural' }],
            img: 'stone',
            descShort: 'Cuarzo cristal transparente. El amplificador universal que potencia cualquier piedra que lo acompañe.',
            descLong: '<p>El cuarzo cristal transparente es conocido como el "maestro sanador" en la tradición de la cristaloterapia — no porque cure todo, sino porque amplifica la energía de lo que lo rodea. Usado solo, actúa como un limpiador y clarificador del campo energético. Usado junto con otras piedras, potencia sus propiedades.</p><p>En formato pulsera de esferas transparentes, tiene una elegancia minimalista que combina con absolutamente todo. No llama la atención visualmente — trabaja en silencio. Pero su efecto es constante y profundo.</p><p>Es la pulsera ideal para combinar en stack con otras de la colección: potencia la protección de la obsidiana, amplifica el amor del cuarzo rosa, refuerza la calma de la amatista. Un multiplicador energético discreto y poderoso.</p>',
            features: [{ l: 'Material', v: 'Cuarzo cristal natural transparente' }, { l: 'Formato', v: 'Esferas elástica apilable' }, { l: 'Chakra', v: 'Todos' }, { l: 'Función', v: 'Amplificador universal' }],
            benefits: ['Amplificación de toda energía', 'Limpieza energética', 'Claridad mental', 'Potenciador de otras piedras', 'Minimalismo elegante'],
            energy: { name: 'CUARZO CRISTAL', chakra: 'Todos', element: 'Todos', intention: 'Amplificar, limpiar y clarificar en todos los planos' },
            faq: [{ q: '¿Con qué piedras combina mejor?', a: 'Con todas. El cuarzo cristal amplifica la energía de cualquier piedra con la que se combine. Es el complemento ideal de cualquier pulsera.' }]
        },
        {
            id: 'pulsera-7-chakras', name: 'Pulsera 7 Chakras',
            cat: 'joyeria', subcat: 'Pulseras', price: 9500,
            badges: [{ cls: 'wellness', label: 'Bienestar' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'crystal',
            descShort: 'Siete piedras naturales, una por chakra. Equilibrio energético completo en una sola pulsera.',
            descLong: '<p>Los siete chakras son los siete centros de energía del cuerpo según la tradición yóguica de la India. Cada uno corresponde a un plano de la existencia — físico, emocional, creativo, amoroso, comunicativo, intuitivo y espiritual. Cuando todos están en equilibrio, la vida fluye. Cuando alguno está bloqueado, algo no fluye.</p><p>Esta pulsera reúne siete piedras naturales — una por cada chakra — para invitar a ese equilibrio durante todo el día. Las piedras varían según disponibilidad pero siempre representan: granate o ágata roja (raíz), cornalina (sacro), citrino (plexo solar), aventurina o cuarzo rosa (corazón), aquamarina o sodalita (garganta), lapislázuli o amatista (tercer ojo), cuarzo cristal o amatista clara (corona).</p><p>Es la pulsera más completa de nuestra colección — un recordatorio diario de la integración y el equilibrio en todos los planos de la vida.</p>',
            features: [{ l: 'Piedras', v: '7 naturales, una por chakra' }, { l: 'Chakras', v: 'Los 7 centros energéticos' }, { l: 'Formato', v: 'Esferas elástica' }, { l: 'Tradición', v: 'Yóguica india' }],
            benefits: ['Equilibrio energético total', 'Armonía en todos los planos', 'Bienestar integral', 'Alineación chakral', 'Recordatorio de integración'],
            energy: { name: '7 CHAKRAS', chakra: 'Todos (raíz a corona)', element: 'Todos', intention: 'Equilibrio y armonía en todos los planos de la existencia' },
            faq: [{ q: '¿Cuáles son las 7 piedras exactas?', a: 'Varían según la selección disponible, siempre representando los 7 chakras. Consultanos por WhatsApp para ver el stock actual.' }, { q: '¿Sirve para alinear chakras?', a: 'En cristaloterapia, se usa con esa intención. Muchos la usan durante meditación o yoga para potenciar la práctica.' }]
        },
        {
            id: 'pulsera-calma', name: 'Pulsera Calma',
            cat: 'joyeria', subcat: 'Pulseras', price: 9000,
            badges: [{ cls: 'wellness', label: 'Bienestar' }],
            img: 'stone',
            descShort: 'Curaduría especial para el estrés y la ansiedad. Tres piedras seleccionadas para sostener la serenidad.',
            descLong: '<p>La pulsera Calma es nuestra curaduría más pensada. Tres piedras seleccionadas específicamente por sus propiedades calmantes, combinadas en una sola pulsera: amatista (calma mental), aguamarina (serenidad de expresión) y selenita o cuarzo blanco (limpieza y paz).</p><p>El resultado es una pulsera que trabaja en simultáneo sobre la mente, las emociones y el campo energético, creando una sensación de serenidad sostenida. No es una solución instantánea — es un apoyo constante, como tener un recordatorio físico de que la calma es siempre posible.</p><p>Ideal para momentos de estrés laboral, ansiedad, insomnio o cualquier período de alta exigencia emocional. Para usarla antes de una situación difícil, durante la meditación o simplemente como compañía diaria.</p>',
            features: [{ l: 'Piedras', v: 'Curaduría: amatista + aguamarina + selenita' }, { l: 'Formato', v: 'Esferas elástica apilable' }, { l: 'Chakras', v: 'Corona · Garganta · Corazón' }, { l: 'Ideal para', v: 'Estrés, ansiedad, insomnio' }],
            benefits: ['Calma mental profunda', 'Anti-estrés', 'Serenidad sostenida', 'Limpieza energética', 'Descanso y paz'],
            energy: { name: 'CURADURÍA CALMA', chakra: 'Corona · Garganta · Corazón', element: 'Agua · Aire', intention: 'Serenidad, descanso y calma en todos los niveles' },
            faq: [{ q: '¿Las piedras varían según el stock?', a: 'La curaduría puede variar levemente, siempre dentro de piedras de energía calmante. Consultanos si necesitás especificaciones.' }]
        },
        {
            id: 'pulsera-cobre-india', name: 'Pulsera Cobre India',
            cat: 'joyeria', subcat: 'Pulseras', price: 8500,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Diseño inspirado en la tradición espiritual india. Cobre artesanal con grabados únicos y energía ancestral.',
            descLong: '<p>La India tiene una de las tradiciones de joyería en cobre más ricas del mundo. El cobre no es solo un metal — en la tradición ayurvédica y espiritual india, es un conductor de prana (energía vital) que equilibra los tres doshas y fortalece el sistema inmune. Por eso los yoguis y los saddhus de la India lo han llevado durante siglos.</p><p>Esta pulsera rescata esa tradición con un diseño contemporáneo: grabados inspirados en motivos de la cultura india, elaborados artesanalmente. Cada una tiene su propio patrón — ningún grabado es idéntico al anterior.</p><p>El cobre desarrolla con el tiempo una pátina que lo hace más rico visualmente. Es una pulsera que mejora con el uso, que cuenta la historia de quien la lleva. Para personas que valoran la artesanía, la tradición y los objetos con alma.</p>',
            features: [{ l: 'Material', v: 'Cobre artesanal con grabados' }, { l: 'Diseño', v: 'Inspiración india, motivos únicos' }, { l: 'Elaboración', v: 'Artesanal, cada pieza diferente' }, { l: 'Propiedad', v: 'Conductor de energía vital (prana)' }],
            benefits: ['Conductividad de energía vital', 'Equilibrio físico', 'Tradición espiritual india', 'Artesanía auténtica', 'Pieza que mejora con el tiempo'],
            faq: [{ q: '¿El cobre equilibra el cuerpo?', a: 'En la medicina ayurvédica, el cobre tiene propiedades equilibrantes reconocidas. También puede dejar una leve marca en la piel — inofensiva.' }]
        },

        /* ---- PLANTAS ---- */
        {
            id: 'potus-matizado', name: 'Potus Matizado',
            cat: 'plantas', subcat: 'Interior', price: 4500,
            badges: [{ cls: 'wellness', label: 'Interior' }],
            img: 'plant',
            descShort: 'La planta de interior más resiliente y decorativa. Hojas matizadas únicas y virtualmente indestructible.',
            descLong: '<p>El potus matizado es, sin duda, una de las plantas de interior más extraordinarias que existen. No por su rareza — sino exactamente por lo contrario: es extraordinariamente accesible. Tolera la falta de luz, el olvido del riego, el calor excesivo y el frío moderado con una elegancia que ninguna otra planta tiene. Y a cambio de todo eso, da hojas únicas.</p><p>Sus hojas verdes con matices amarillos o claros son el resultado de variaciones naturales en la cantidad de clorofila. Ninguna es exactamente igual a la anterior. La planta que recibís crece, se ramifica, genera tallos colgantes que pueden llegar a metros de longitud si se los deja libres.</p><p>Purifica el aire — la NASA la incluye en su lista de plantas que filtran tóxicos del ambiente — y no pide casi nada a cambio. Para dormitorios, baños con algo de luz, oficinas, estudios: en cualquier espacio con un poco de luz indirecta, el potus prospera.</p>',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Luz', v: 'Indirecta (tolera muy poca)' }, { l: 'Riego', v: 'Cada 7-10 días (dejar secar entre riegos)' }, { l: 'Temperatura', v: '15-30°C, no heladas' }, { l: 'Cuidado', v: 'Muy fácil, ideal principiantes' }, { l: 'Purificación', v: 'Lista NASA de plantas purificadoras' }],
            benefits: ['Virtualmente indestructible', 'Purifica el aire', 'Tolera poca luz', 'Crecimiento colgante decorativo', 'Bajo mantenimiento'],
            faq: [{ q: '¿Cada cuánto se riega?', a: 'Cada 7-10 días en verano, cada 12-15 días en invierno. Siempre dejar que la tierra seque entre riegos.' }, { q: '¿Tolera los ambientes con aire acondicionado?', a: 'Sí, con moderación. Evitar que el chorro de aire directamente sobre las hojas.' }]
        },
        {
            id: 'potus-joy', name: 'Potus Joy',
            cat: 'plantas', subcat: 'Interior', price: 4500,
            badges: [{ cls: 'wellness', label: 'Interior' }],
            img: 'plant',
            descShort: 'Hojas luminosas y crecimiento vigoroso. La variedad más alegre del potus para espacios oscuros.',
            descLong: '<p>El Potus Joy se distingue del matizado por sus hojas más claras, casi amarillo limón en las zonas de mayor luz. Esa luminosidad es especialmente valiosa en espacios donde la luz natural es escasa: pasillos, baños interiores, escritorios lejos de las ventanas. La planta literalmente ilumina el espacio con su color.</p><p>Tiene un crecimiento más vigoroso que el potus estándar, lo que lo hace ideal para ese efecto de planta colgante que cae en cascada desde una repisa o macetero colgante. Con el tiempo, sus tallos pueden alcanzar el metro y medio o más de longitud.</p><p>Tan fácil de cuidar como cualquier potus — riego moderado, sin sol directo — pero con una presencia visual más llamativa e intensa. Para espacios que necesitan vida y color sin complicaciones de mantenimiento.</p>',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Color', v: 'Verde claro luminoso' }, { l: 'Luz', v: 'Poca a media (tolera mucho la sombra)' }, { l: 'Riego', v: 'Cada 7-10 días' }, { l: 'Crecimiento', v: 'Vigoroso, ideal colgante' }],
            benefits: ['Luminosidad en espacios oscuros', 'Crecimiento colgante vigoroso', 'Purificación del aire', 'Fácil cuidado', 'Alta adaptabilidad'],
            faq: [{ q: '¿Se puede usar en baños sin ventana?', a: 'Sí, es una de las pocas plantas que puede sobrevivir con muy poca luz. Aunque con algo de luz crecerá mejor.' }]
        },
        {
            id: 'potus-variegado', name: 'Potus Variegado',
            cat: 'plantas', subcat: 'Interior', price: 6500,
            badges: [{ cls: 'artisan', label: 'Colección especial' }],
            img: 'plant',
            descShort: 'La variedad más buscada. Hojas mitad verde, mitad blanco cremoso — una rareza genética real.',
            descLong: '<p>El potus variegado es el objeto de deseo de todos los amantes de las plantas de interior. Sus hojas — mitad verde oscuro profundo, mitad blanco cremoso puro — no son el resultado de ningún tratamiento ni proceso artificial. Son el resultado de una mutación genética que elimina la clorofila de parte de la célula vegetal. Cada hoja que emerge es un acto de naturaleza caprichosa: nunca saber exactamente cómo será la siguiente.</p><p>Por esa razón, crece más lento que el potus estándar: las zonas blancas no fotosintestizan, lo que ralentiza el crecimiento general. Eso también la hace más valiosa — se necesita más tiempo para producir cada planta de tamaño.</p><p>En decoración, es la planta que hace que cualquier espacio parezca curado y sofisticado. No es un accidente que aparezca en las páginas de las mejores revistas de interiorismo del mundo. Requiere algo más de luz que el potus común para mantener su variegación.</p>',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Variegación', v: 'Natural (mutación genética)' }, { l: 'Luz', v: 'Media a buena (para mantener blanco)' }, { l: 'Riego', v: 'Cada 7-10 días' }, { l: 'Crecimiento', v: 'Lento (por la variegación)' }],
            benefits: ['Rareza genética única', 'Estética premium irrepetible', 'Decoración de interiorismo', 'Cada hoja diferente', 'Pieza de colección'],
            faq: [{ q: '¿Por qué es más cara?', a: 'Crece más lento por su variegación (las zonas blancas no fotosintesizan). Cada planta requiere más tiempo de cultivo.' }, { q: '¿El blanco se puede perder?', a: 'Con poca luz, la planta puede "revertir" a verde para compensar. Necesita más luz que el potus común para mantener su variegación.' }]
        },
        {
            id: 'espada-san-jorge', name: 'Espada de San Jorge',
            cat: 'plantas', subcat: 'Interior', price: 5500,
            badges: [{ cls: 'wellness', label: 'Protección' }, { cls: 'hot', label: 'Más Vendida' }],
            img: 'plant',
            descShort: 'La planta protectora por excelencia. Purifica el aire, requiere mínimo cuidado y protege el hogar.',
            descLong: '<p>La Sansevieria trifasciata — espada de San Jorge o lengua de suegra — es, sin exagerar, una de las plantas más extraordinarias del mundo. Puede sobrevivir semanas sin agua. Tolera la oscuridad casi total. Resiste las heladas leves. Es prácticamente indestructible. Y a cambio de todo ese estoicismo, purifica el aire de manera excepcional.</p><p>La NASA la incluyó en su estudio sobre plantas purificadoras como una de las más efectivas para filtrar formaldehído, benceno y tricloroetileno del aire interior. También tiene la particularidad única de producir oxígeno y absorber CO2 durante la noche — a la inversa del resto de las plantas. Ideal en dormitorios.</p><p>En el plano espiritual y de las tradiciones populares de Brasil, África y el Caribe, la espada de San Jorge es la planta protectora del hogar por excelencia. Se coloca en la entrada para absorber las energías negativas que intentan ingresar. Su forma de espada no es solo estética — es simbólica.</p>',
            features: [{ l: 'Tipo', v: 'Interior / Exterior protegido' }, { l: 'Luz', v: 'Cualquiera (del sol directo a oscuridad casi total)' }, { l: 'Riego', v: 'Muy escaso (cada 15-20 días)' }, { l: 'Temperatura', v: 'Alta tolerancia' }, { l: 'Purificación', v: 'Lista NASA, oxígena de noche' }, { l: 'Energía', v: 'Protección del hogar' }],
            benefits: ['Protección ancestral del hogar', 'Purificación de aire NASA', 'Virtualmente indestructible', 'Oxígena de noche', 'Mínimo mantenimiento'],
            faq: [{ q: '¿Por qué se dice que protege?', a: 'En muchas tradiciones latinoamericanas, africanas y caribeñas se usa para absorber energías densas en la entrada del hogar. Su forma de espada tiene un poder simbólico de corte.' }, { q: '¿Cada cuánto se riega?', a: 'Muy poco: cada 15-20 días en verano, hasta una vez al mes en invierno. El exceso de agua la mata.' }]
        },
        {
            id: 'violeta-alpes', name: 'Violeta de los Alpes',
            cat: 'plantas', subcat: 'Interior', price: 4000,
            badges: [{ cls: 'wellness', label: 'Interior' }],
            img: 'plant',
            descShort: 'Floración intensa y duradera. Rosas, malvas y blancos que alegran cualquier espacio con luz.',
            descLong: '<p>La Cyclamen — violeta de los Alpes — tiene algo que pocas plantas de interior tienen: flores. Muchas plantas se eligen por sus hojas, pero la violeta de los Alpes ofrece una floración abundante y prolongada en una paleta de colores que va desde el blanco más puro hasta el rosa oscuro y el malva intenso.</p><p>Florece principalmente en otoño, invierno y primavera — los meses en que más falta hace color en el hogar. Y cuando florece, no lo hace a medias: se cubre de flores simultáneamente, creando una explosión de color que transforma cualquier ventana, escritorio o mesa de living.</p><p>Requiere algo más de atención que el potus — riego regular sin exceso, buena luz sin sol directo intenso, temperatura fresca. Pero esa atención se recompensa con meses de floración que pocas otras plantas de interior pueden igualar.</p>',
            features: [{ l: 'Tipo', v: 'Interior' }, { l: 'Floración', v: 'Otoño-primavera, larga duración' }, { l: 'Luz', v: 'Buena, indirecta' }, { l: 'Riego', v: 'Regular, sin exceso' }, { l: 'Temperatura', v: 'Fresca (15-20°C ideal)' }],
            benefits: ['Floración intensa y prolongada', 'Color en el hogar', 'Alegría visual', 'Decoración estacional', 'Variedades de color'],
            faq: [{ q: '¿Cómo hago que siga floreciendo?', a: 'Remover las flores secas desde la base. Fertilizar cada 15 días durante la floración. Mantener fresca, sin sol directo.' }, { q: '¿Florece todo el año?', a: 'No, principalmente en otoño e invierno. En verano entra en dormancia — hojas reducidas, sin flores. Es normal.' }]
        },
        {
            id: 'costilla-adan', name: 'Costilla de Adán',
            cat: 'plantas', subcat: 'Decorativas', price: 8500,
            badges: [{ cls: 'hot', label: 'Más Vendida' }],
            img: 'plant',
            descShort: 'La Monstera más icónica del mundo. Hojas fenestradas que transforman radicalmente cualquier espacio.',
            descLong: '<p>La Monstera deliciosa — costilla de Adán — es la planta más fotografiada del mundo de las plantas de interior. Y no es moda pasajera: lleva décadas siendo la referencia del interiorismo con plantas porque su impacto visual es genuinamente difícil de igualar. Esas hojas verdes profundas, grandes como platos, con sus perforaciones características, crean una silueta que es inmediatamente reconocible y completamente fascinante.</p><p>Las perforaciones — llamadas fenestras — no son un accidente ni una enfermedad. Son una adaptación evolutiva: en su hábitat natural, en los bosques tropicales de México y América Central, las fenestras permiten que la lluvia y el viento pasen a través de las hojas sin dañarlas. La naturaleza como diseñadora perfecta.</p><p>En el hogar, una Monstera bien cuidada puede alcanzar hojas de más de medio metro. Requiere buena luz indirecta, riego moderado y una maceta con espacio para crecer. A cambio, transforma cualquier rincón en un espacio que parece pensado por un diseñador de interiores.</p>',
            features: [{ l: 'Tipo', v: 'Interior, presencia grande' }, { l: 'Luz', v: 'Buena indirecta' }, { l: 'Riego', v: 'Cada 7-10 días' }, { l: 'Hojas', v: 'Fenestradas (perforadas) en madurez' }, { l: 'Tamaño eventual', v: 'Puede ser muy grande con los años' }],
            benefits: ['Impacto visual incomparable', 'Purificación del aire', 'Atemporalidad decorativa', 'Presencia fotogénica', 'Crecimiento gratificante'],
            faq: [{ q: '¿Por qué las hojas tienen agujeros?', a: 'Aparecen en hojas maduras como adaptación natural. Las plantas jóvenes tienen hojas enteras.' }, { q: '¿Puedo ponerla en mi dormitorio?', a: 'Sí. Purifica el aire y su tamaño puede ser un punto focal hermoso. Necesita algo de espacio y luz indirecta.' }]
        },
        {
            id: 'costilla-adan-tupida', name: 'Costilla de Adán Tupida',
            cat: 'plantas', subcat: 'Decorativas', price: 12000,
            badges: [{ cls: 'hot', label: 'Destacada' }],
            img: 'plant',
            descShort: 'La Monstera en versión voluminosa y exuberante. Múltiples tallos para una presencia de selva.',
            descLong: '<p>La Costilla de Adán Tupida es la versión más exuberante de la Monstera deliciosa. Mientras la versión estándar tiene uno o dos tallos principales, la tupida tiene múltiples brotes que crecen juntos creando una masa densa de hojas fenestradas que se superponen y crean una profundidad visual asombrosa.</p><p>Si la Monstera estándar es elegante, la tupida es opulenta. Es la planta que convierte un rincón vacío en algo que parece sacado de una revista de interiorismo de lujo tropical. Cada hoja en una posición diferente, a distinta altura, capturando la luz de maneras distintas.</p><p>Requiere el mismo cuidado que la Monstera estándar — quizás algo más de fertilización por la cantidad de follaje — pero el resultado visual justifica completamente el esfuerzo extra. Una inversión en verde que se percibe desde la puerta.</p>',
            features: [{ l: 'Tipo', v: 'Interior, presencia voluminosa' }, { l: 'Tallos', v: 'Múltiples (versión tupida)' }, { l: 'Luz', v: 'Buena indirecta' }, { l: 'Riego', v: 'Cada 7-10 días' }, { l: 'Fertilización', v: 'Mensual en temporada de crecimiento' }],
            benefits: ['Presencia voluminosa y exuberante', 'Efecto selva interior', 'Impacto decorativo máximo', 'Purificación potente', 'Punto focal dominante'],
            faq: [{ q: '¿En qué se diferencia de la estándar?', a: 'En la cantidad de tallos y hojas. La tupida tiene múltiples brotes para una presencia más voluminosa y densa.' }]
        },
        {
            id: 'limon-4-estaciones', name: 'Limón 4 Estaciones',
            cat: 'plantas', subcat: 'Frutales', price: 9500,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'Limones todo el año en maceta. Aroma cítrico incomparable y frutos frescos en tu balcón o terraza.',
            descLong: '<p>Hay pocas experiencias en jardinería tan satisfactorias como cosechar un limón de tu propio árbol. El limón 4 estaciones hace eso posible incluso en departamento: crece en maceta grande y fructifica de manera continua durante todo el año, sin importar la estación.</p><p>El aroma al florecer — esas flores blancas pequeñas y perfumadas que preceden a cada camada de frutos — es uno de los aromas más limpios y cítricos que existen. Llena el balcón o la terraza durante días cada vez que florece. Un privilegio sensorial que no tiene precio.</p><p>Necesita mucho sol directo (mínimo 6 horas), riego regular y fertilización cada 30-45 días con fertilizante para cítricos. Con esos cuidados, puede dar frutos durante décadas. Un árbol frutal en maceta es un proyecto de largo plazo que mejora con el tiempo.</p>',
            features: [{ l: 'Tipo', v: 'Frutal en maceta' }, { l: 'Fructificación', v: 'Continua, todo el año' }, { l: 'Luz', v: 'Sol directo mínimo 6hs' }, { l: 'Riego', v: 'Regular, no encharcado' }, { l: 'Fertilización', v: 'Cada 30-45 días, fertilizante cítricos' }],
            benefits: ['Frutos frescos todo el año', 'Aroma cítrico al florecer', 'Decorativo y productivo', 'Proyecto de largo plazo', 'Satisfacción de cosechar propio'],
            faq: [{ q: '¿Da limones todo el año?', a: 'Sí, con luz solar suficiente y fertilización regular. La variedad 4 estaciones no tiene temporada definida.' }, { q: '¿En qué maceta va?', a: 'Maceta grande, mínimo 40cm de diámetro, con buen drenaje.' }]
        },
        {
            id: 'mandarina-4-estaciones', name: 'Mandarina 4 Estaciones',
            cat: 'plantas', subcat: 'Frutales', price: 9500,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'Mandarinas dulces en maceta durante todo el año. Aroma floral intenso y frutos de color vibrante.',
            descLong: '<p>El mandarine es el cítrico más alegre. Sus frutos naranjas brillantes son visualmente exuberantes — un árbol cargado de mandarinas en una terraza es una imagen de abundancia pura. Y el aroma de sus flores, más dulce e intenso que el limón, es verdaderamente embriagante.</p><p>La variedad 4 estaciones asegura producción continua: no hay que esperar el otoño para tener frutos. El árbol va dando en oleadas a lo largo de todo el año, con períodos de floración que preceden cada camada. Perfecto para balcones y terrazas con buena exposición solar.</p><p>Requiere los mismos cuidados que cualquier cítrico: mucho sol, riego regular sin exceso de agua, fertilización cada mes y medio. La inversión de tiempo es mínima comparada con el placer de cosechar mandarinas propias.</p>',
            features: [{ l: 'Tipo', v: 'Frutal en maceta' }, { l: 'Fructificación', v: 'Continua, 4 estaciones' }, { l: 'Luz', v: 'Sol directo, mínimo 6hs' }, { l: 'Flor', v: 'Aroma dulce e intenso' }, { l: 'Fruto', v: 'Dulce, color naranja brillante' }],
            benefits: ['Mandarinas frescas propias', 'Aroma floral intenso', 'Color vibrante todo el año', 'Decorativo y productivo', 'Abundancia visual'],
            faq: [{ q: '¿Las mandarinas son dulces?', a: 'Sí. La variedad 4 estaciones es conocida por sus frutos dulces y jugosos.' }]
        },
        {
            id: 'naranjo-4-estaciones', name: 'Naranjo 4 Estaciones',
            cat: 'plantas', subcat: 'Frutales', price: 9500,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'El naranjo compacto para maceta. Azahar perfumado y naranjas propias en balcón o patio.',
            descLong: '<p>El azahar — la flor del naranjo — tiene uno de los aromas más codiciados del mundo. Es el perfume de los jardines mediterráneos, de las bodas tradicionales, de los atardeceres de Andalucía y el Magreb. Tener un naranjo en flor en el balcón es tener ese privilegio al alcance de la mano.</p><p>El naranjo 4 estaciones es compacto y perfectamente adaptado para maceta. Fructifica de manera continua, dando oleadas de frutos naranjas brillantes a lo largo del año. Cada fruto que se cosecha es una pequeña satisfacción que se acumula en placer cotidiano.</p><p>Como árbol decorativo, su follaje verde oscuro brillante y sus frutos coloridos lo convierten en uno de los elementos más elegantes para terrazas y patios. Un árbol de naranjos bien cuidado embellece cualquier espacio exterior.</p>',
            features: [{ l: 'Tipo', v: 'Frutal compacto para maceta' }, { l: 'Flor', v: 'Azahar (perfume intenso)' }, { l: 'Fructificación', v: 'Continua, 4 estaciones' }, { l: 'Luz', v: 'Sol directo' }],
            benefits: ['Aroma a azahar excepcional', 'Frutos naranjas propios', 'Decoración de terraza premium', 'Producción continua', 'Elegancia mediterránea'],
            faq: [{ q: '¿Cuándo florece?', a: 'La variedad 4 estaciones florece en varias oleadas a lo largo del año. Cada floración dura unas semanas con aroma intenso.' }]
        },
        {
            id: 'ciruelo', name: 'Ciruelo',
            cat: 'plantas', subcat: 'Frutales', price: 10000,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'Ciruelo para jardín o maceta grande. Flores primaverales espectaculares y ciruelas dulces en verano.',
            descLong: '<p>El ciruelo tiene dos momentos cumbre en el año que justifican completamente su lugar en cualquier jardín o terraza grande. El primero es la floración primaveral: antes incluso de que salgan las hojas, el árbol se cubre de flores rosas o blancas que son un espectáculo visual único. El segundo es la fructificación estival: ciruelas dulces, jugosas, que se cosechan directamente del árbol.</p><p>Requiere más espacio que los cítricos — es ideal para jardín o maceta muy grande en terraza amplia. A cambio, ofrece esa doble fiesta visual de flores y frutos que pocos árboles pueden dar. También es uno de los árboles frutales más resistentes para el clima del Río de la Plata.</p>',
            features: [{ l: 'Tipo', v: 'Frutal para jardín / maceta grande' }, { l: 'Floración', v: 'Primavera (muy vistosa)' }, { l: 'Fructificación', v: 'Verano' }, { l: 'Luz', v: 'Sol directo' }],
            benefits: ['Floración espectacular', 'Ciruelas dulces propias', 'Árbol de estaciones', 'Decorativo e imponente'],
            faq: [{ q: '¿Da ciruelas todos los años?', a: 'Sí, desde los 2-3 años de plantado. La cantidad aumenta con la madurez del árbol.' }]
        },
        {
            id: 'duraznero', name: 'Duraznero',
            cat: 'plantas', subcat: 'Frutales', price: 10000,
            badges: [{ cls: 'wellness', label: 'Frutal' }],
            img: 'plant',
            descShort: 'Duraznos frescos y floración rosa intensa. Un árbol que transforma cualquier jardín en verano.',
            descLong: '<p>El duraznero florece en primavera con una explosión de rosa intenso que es genuinamente espectacular. Sus flores pequeñas y densas cubren todas las ramas antes de que aparezcan las hojas, creando una imagen que se graba en la memoria. Y luego, en verano, llegan los duraznos.</p><p>Hay algo completamente particular en comer un durazno cosechado directamente del árbol, maduro por el sol real, sin cadena de frío ni viaje largo. Un durazno propio en plena madurez es una de las experiencias más simples y perfectas del verano.</p><p>Requiere jardín o maceta muy grande. Necesita sol pleno y buen drenaje. Es uno de los árboles frutales más agradecidos para el clima templado de Argentina.</p>',
            features: [{ l: 'Tipo', v: 'Frutal para jardín / maceta grande' }, { l: 'Floración', v: 'Primavera (rosa intenso)' }, { l: 'Fructificación', v: 'Verano' }, { l: 'Luz', v: 'Sol pleno' }],
            benefits: ['Floración rosa espectacular', 'Duraznos frescos propios', 'Satisfacción de cosechar', 'Árbol de estaciones marcadas'],
            faq: [{ q: '¿Funciona en maceta?', a: 'Sí, en maceta de mínimo 60cm de diámetro. Dar fertilizante específico para frutales.' }]
        },
        {
            id: 'parra-uva', name: 'Parra de Uva',
            cat: 'plantas', subcat: 'Frutales', price: 11000,
            badges: [{ cls: 'artisan', label: 'Especial' }],
            img: 'plant',
            descShort: 'La parra como elemento de jardín. Sombra natural, uvas propias y una estética completamente única.',
            descLong: '<p>La parra de uva es mucho más que un frutal: es un elemento arquitectónico de jardín. Sus ramas trepadoras pueden cubrir pérgolas, muros y estructuras creando una sombra natural y viva que cambia según la estación. En verano, sus hojas grandes y densas crean espacios frescos. En otoño, se tiñen de rojos y amarillos antes de caer.</p><p>Y después están las uvas. Cosechar un racimo de tu propia parra — ya sean uvas de mesa para comer o variedades para elaborar vino casero — es una experiencia que conecta con miles de años de cultura humana alrededor de la vid.</p><p>Requiere estructura para trepar, suelo bien drenado y poda anual. Es un proyecto de varios años donde el resultado mejora cada temporada.</p>',
            features: [{ l: 'Tipo', v: 'Trepadora frutal para jardín' }, { l: 'Uso', v: 'Uvas de mesa o vinificación' }, { l: 'Estructura', v: 'Necesita soporte para trepar' }, { l: 'Caída', v: 'Pierde las hojas en invierno' }],
            benefits: ['Sombra natural y viva', 'Uvas propias', 'Elemento arquitectónico de jardín', 'Estaciones marcadas', 'Conexión con tradición vinícola'],
            faq: [{ q: '¿Da uvas el primer año?', a: 'Generalmente a partir del 2do o 3er año. El primer año se concentra en establecer raíces.' }]
        },
        {
            id: 'quinoto', name: 'Quinoto',
            cat: 'plantas', subcat: 'Frutales', price: 9000,
            badges: [{ cls: 'wellness', label: 'Frutal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'plant',
            descShort: 'El cítrico más decorativo. Frutos naranjas diminutos que se comen enteros, piel incluida.',
            descLong: '<p>El quinoto es el más insólito de todos los cítricos: sus frutos miniatura, de apenas 3-4 cm, se comen enteros — la piel dulce, la pulpa ácida. Una combinación de sabores que sorprende y genera adicción. Y como árbol decorativo es simplemente exquisito: sus frutos pequeños y perfectos colgando entre el follaje verde oscuro crean una imagen de una elegancia difícil de igualar.</p><p>Es también uno de los cítricos más compactos y mejor adaptados para maceta interior o exterior. Puede vivir en una maceta mediana durante años sin perder su frondosidad ni su capacidad de dar frutos. Un árbol que se puede tener en un balcón pequeño y que igualmente impresiona.</p><p>Como regalo es uno de los más originales: pocas personas reciben un árbol frutal, y el quinoto tiene una particularidad tan especial que genera siempre una reacción de genuina sorpresa y placer.</p>',
            features: [{ l: 'Tipo', v: 'Frutal compacto para maceta' }, { l: 'Fruto', v: 'Miniatura (3-4cm), se come entero' }, { l: 'Fructificación', v: 'Invierno principalmente' }, { l: 'Tamaño árbol', v: 'Compacto, ideal maceta' }],
            benefits: ['Fruto único que se come entero', 'Decorativo y sorprendente', 'Compacto para espacios pequeños', 'Regalo original', 'Conversación garantizada'],
            faq: [{ q: '¿Realmente se come la cáscara?', a: 'Sí, esa es la particularidad del quinoto. La piel es dulce y la pulpa ácida. Se come el fruto completo.' }]
        },
        {
            id: 'palta', name: 'Árbol de Palta',
            cat: 'plantas', subcat: 'Frutales', price: 12000,
            badges: [{ cls: 'artisan', label: 'Especial' }],
            img: 'plant',
            descShort: 'El árbol de aguacate para jardín o patio. Un proyecto verde de largo plazo con recompensas únicas.',
            descLong: '<p>El árbol de palta — aguacate — es un proyecto de compromiso. No fructifica a los seis meses: puede tomar varios años, dependiendo de las condiciones. Pero ese largo plazo tiene su propia magia. Ver crecer un árbol de palta, ver aparecer las primeras flores, esperar los primeros frutos, es un vínculo que se desarrolla con el tiempo.</p><p>Sus hojas grandes, de un verde profundo y brillante, tienen un aroma propio cuando se las toca — herbáceo y fresco. Es un árbol con presencia imponente incluso antes de dar frutos. Y cuando llegan las paltas propias, la satisfacción es genuinamente difícil de describir.</p><p>Requiere jardín o maceta muy grande, buenas temperaturas y paciencia. Es la planta para las personas que piensan en años, no en semanas.</p>',
            features: [{ l: 'Tipo', v: 'Frutal para jardín' }, { l: 'Fructificación', v: 'Años (proyecto largo plazo)' }, { l: 'Luz', v: 'Sol directo' }, { l: 'Espacio', v: 'Jardín o maceta muy grande' }],
            benefits: ['Paltas propias', 'Presencia imponente', 'Hojas aromáticas', 'Proyecto de largo plazo gratificante'],
            faq: [{ q: '¿Cuándo da paltas?', a: 'Depende de las condiciones. Puede tomar 3-7 años. Los árboles injertados (que vendemos) fructifican antes que los de semilla.' }]
        },

        /* ---- FUENTES DE AGUA ---- */
        {
            id: 'fuente-doble-pajaro', name: 'Fuente Doble Pájaro',
            cat: 'fuentes', subcat: 'Decorativas', price: 69000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Destacada' }],
            img: 'water',
            descShort: 'Dos pájaros, agua en movimiento, serenidad constante. Una de las piezas más especiales de la colección.',
            descLong: '<p>El sonido del agua no es decorativo — es terapéutico. La ciencia lo confirma: el sonido del agua fluyendo activa el sistema nervioso parasimpático, reduce el cortisol y lleva al cerebro a un estado de relajación activa. Es por eso que el sonido de la lluvia, los arroyos y las cascadas ha acompañado la meditación humana desde tiempos inmemoriales.</p><p>La Fuente Doble Pájaro trae ese regalo al interior del hogar. Su diseño con dos pájaros sobre la fuente crea una imagen de naturaleza y quietud — como encontrarse con un rincón de jardín dentro de la casa. El agua circula de manera continua, silenciosa, constante.</p><p>En términos de feng shui, el agua en movimiento activa el chi (energía vital) del espacio, atrae abundancia y mejora el flujo energético de cualquier ambiente. Ubicada en la sala de estar, el estudio o el dormitorio, transforma la calidad del espacio de manera inmediata y permanente.</p><p>Incluye bomba silenciosa de bajo consumo. El depósito requiere recarga semanal según la evaporación. Una inversión en bienestar que se amortiza en los primeros días de uso.</p>',
            features: [{ l: 'Material', v: 'Resina premium pintada' }, { l: 'Bomba', v: 'Silenciosa de bajo consumo, incluida' }, { l: 'Uso', v: 'Interior' }, { l: 'Cable', v: 'USB / 220V' }, { l: 'Recarga', v: 'Agua c/7-10 días según evaporación' }, { l: 'Feng shui', v: 'Activa abundancia y fluidez' }],
            benefits: ['Relajación auditiva profunda', 'Reducción de estrés', 'Decoración premium', 'Feng shui activo', 'Humedad ambiental natural', 'Transformación del espacio'],
            faq: [{ q: '¿Cuánta agua necesita?', a: 'El depósito se llena c/7-10 días según la evaporación del ambiente. Siempre revisar que la bomba esté cubierta.' }, { q: '¿La bomba hace ruido?', a: 'La bomba es silenciosa. Solo se escucha el sonido suave y relajante del agua.' }, { q: '¿Dónde la coloco?', a: 'Sala de estar, escritorio, dormitorio o entrada. Según feng shui, al norte o al este para activar abundancia.' }]
        },
        {
            id: 'fuente-triple-cascada', name: 'Fuente Triple Cascada',
            cat: 'fuentes', subcat: 'Cascada', price: 38000, priceOrig: 46900,
            badges: [{ cls: 'sale', label: 'Oferta' }],
            img: 'water',
            descShort: 'Tres niveles de cascada para un sonido envolvente y relajante. Naturaleza en tu living.',
            descLong: '<p>El agua cayendo en cascada tiene algo que el agua estática no tiene: movimiento, ritmo, vitalidad. La Fuente Triple Cascada reproduce ese sonido en tres niveles sucesivos — cada escalón amplifica el efecto relajante del anterior, creando una experiencia sonora que se percibe incluso sin buscarla conscientemente.</p><p>En feng shui, las fuentes con cascadas generan un flujo de energía especialmente activo para la abundancia y la prosperidad. El agua en movimiento descendente hacia una pileta central es uno de los arreglos más favorables que existe para el hogar y la oficina.</p><p>Su diseño es compacto pero con presencia visual. Se puede instalar sobre una mesa, una repisa o el suelo según el tamaño del espacio. Incluye bomba silenciosa y llega lista para enchufar y usar.</p>',
            features: [{ l: 'Niveles', v: '3 cascadas sucesivas' }, { l: 'Bomba', v: 'Silenciosa incluida' }, { l: 'Uso', v: 'Interior' }, { l: 'Instalación', v: 'Lista para usar' }, { l: 'Feng shui', v: 'Activa abundancia' }],
            benefits: ['Sonido relajante en 3 niveles', 'Anti-estrés natural', 'Decoración con movimiento', 'Feng shui de abundancia', 'Mejora del ambiente'],
            faq: [{ q: '¿El sonido del agua molesta?', a: 'El sonido es suave y continuo — la mayoría de las personas lo describe como relajante. La bomba es completamente silenciosa.' }, { q: '¿Con qué frecuencia recargo el agua?', a: 'Cada 7-10 días aproximadamente. Siempre mantener la bomba cubierta de agua.' }]
        },
        {
            id: 'fuente-ganesha', name: 'Fuente Ganesha',
            cat: 'fuentes', subcat: 'Ganesha', price: 33000, priceOrig: 40000,
            badges: [{ cls: 'sale', label: 'Oferta' }, { cls: 'wellness', label: 'Espiritual' }],
            img: 'buddha',
            descShort: 'Ganesha — el removedor de obstáculos — y el fluir constante del agua. Abundancia en movimiento.',
            descLong: '<p>Ganesha es el Señor de los Comienzos en la tradición hindú. El removedor de obstáculos, el abridor de caminos, el dios al que se invoca antes de cualquier empresa importante. Su imagen en el hogar es considerada una invitación permanente a que los caminos se abran, que los bloqueos se disuelvan, que lo nuevo llegue.</p><p>Combinada con el fluir constante del agua — símbolo universal de abundancia, fluidez y vida — esta fuente crea una doble energía de apertura y movimiento. El agua circula alrededor de Ganesha de manera continua, como una ofrenda permanente y un recordatorio de que la vida siempre fluye.</p><p>Como pieza decorativa, su acabado detallado y su tamaño generan una presencia real en el espacio. No es una figurita pequeña — es una pieza que se convierte en el foco de cualquier rincón donde se ubique. Acompañada del sonido suave del agua, transforma cualquier ambiente en un espacio de intención y serenidad.</p>',
            features: [{ l: 'Figura', v: 'Ganesha (removedor de obstáculos)' }, { l: 'Material', v: 'Resina pintada con detalle' }, { l: 'Bomba', v: 'Silenciosa incluida' }, { l: 'Tradición', v: 'Hindú (apertura de caminos)' }, { l: 'Feng shui', v: 'Abundancia y fluidez' }],
            benefits: ['Apertura de caminos', 'Abundancia energética', 'Fluidez en los proyectos', 'Meditación y serenidad', 'Decoración espiritual premium'],
            energy: { name: 'GANESHA', chakra: 'Raíz · Plexo Solar', element: 'Tierra · Agua', intention: 'Remover obstáculos, abrir caminos y atraer abundancia' },
            faq: [{ q: '¿Quién es Ganesha?', a: 'Ganesha es el dios hindú con cabeza de elefante. Se lo invoca al comienzo de cualquier empresa para remover obstáculos y asegurar el buen comienzo.' }, { q: '¿Dónde se ubica para feng shui?', a: 'En la entrada del hogar o la oficina para abrir caminos, o en el sector de la riqueza (esquina noreste del espacio).' }]
        },

        /* ---- CASCADAS DE HUMO ---- */
        {
            id: 'cascada-zen', name: 'Cascada de Humo Zen',
            cat: 'cascadas', subcat: 'Zen', price: 18000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Meditación' }],
            img: 'smoke',
            descShort: 'El humo del incienso cae como cascada. Un efecto visual hipnótico que transforma cualquier espacio.',
            descLong: '<p>Las cascadas de humo son una de las experiencias visuales más hipnóticas que existen en el mundo de la decoración meditativa. El principio es simple y al mismo tiempo completamente mágico: un cono de incienso de flujo inverso, colocado en la cavidad superior, emite humo más denso que el aire. Ese humo cae hacia abajo en lugar de subir — creando una cascada etérea que fluye hacia el suelo como agua en cámara lenta.</p><p>El efecto visual es imposible de describir del todo. Hay que verlo. El humo forma volutas, espirales, corrientes que cambian a cada segundo, nunca exactamente iguales. Es meditativo de una manera completamente distinta al incienso tradicional: el ojo sigue el humo y la mente se calma.</p><p>La cascada Zen tiene un diseño limpio y minimalista. Se adapta a cualquier espacio y cualquier estética — desde la decoración japonesa más austera hasta los interiores contemporáneos. Incluye un set de conos de inicio para comenzar a usarla desde el primer momento.</p>',
            features: [{ l: 'Material', v: 'Cerámica / resina artesanal' }, { l: 'Incienso', v: 'Set de conos de flujo inverso incluido' }, { l: 'Efecto', v: 'Cascada de humo descendente' }, { l: 'Uso', v: 'Interior, meditación y decoración' }, { l: 'Cuidado', v: 'Limpiar depósito con paño seco' }],
            benefits: ['Meditación visual profunda', 'Aromaterapia envolvente', 'Decoración única irrepetible', 'Efecto hipnótico y relajante', 'Transformación del ambiente'],
            faq: [{ q: '¿Qué conos usa?', a: 'Conos de flujo inverso (backflow cones), especialmente diseñados para crear el efecto cascada. Incluímos un set de inicio.' }, { q: '¿Cualquier incienso sirve?', a: 'No. Solo funcionan con conos de flujo inverso, que tienen un agujero en la base. El incienso de palito convencional no crea el efecto.' }, { q: '¿Dónde se consiguen los conos?', a: 'En Armonía Zen tenemos conos disponibles. Consultanos por WhatsApp por stock actual.' }]
        },
        {
            id: 'cascada-flor-loto', name: 'Cascada Flor de Loto',
            cat: 'cascadas', subcat: 'Flor de Loto', price: 20000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Destacada' }],
            img: 'smoke',
            descShort: 'El símbolo del renacimiento como cascada de humo. Pureza espiritual hecha objeto.',
            descLong: '<p>La flor de loto es uno de los símbolos espirituales más poderosos del mundo. Crece en el barro, a través del agua turbia, y emerge perfecta e impecable a la superficie. En el budismo, representa la pureza del espíritu que trasciende las circunstancias. En el hinduismo, es el asiento de los dioses. En el yoga, es el símbolo del chakra corona — la conexión máxima.</p><p>Esta cascada de humo en forma de flor de loto convierte ese simbolismo en una experiencia sensorial cotidiana. El humo emerge del centro de la flor y cae por sus pétalos como agua, creando una imagen que tiene algo de sagrado y algo de completamente hipnótico al mismo tiempo.</p><p>Es la cascada más elegida de nuestra colección — y también la más fotografiada. Una pieza que genera conversación, que invita a preguntas, que transforma el ambiente donde descansa.</p>',
            features: [{ l: 'Diseño', v: 'Flor de Loto completa' }, { l: 'Material', v: 'Cerámica artesanal' }, { l: 'Incienso', v: 'Set de conos incluido' }, { l: 'Símbolo', v: 'Pureza, renacimiento y elevación' }],
            benefits: ['Efecto visual único', 'Simbolismo espiritual profundo', 'Purificación del espacio', 'Meditación visual', 'Pieza protagonista'],
            energy: { name: 'LOTO', chakra: 'Corona', element: 'Agua · Aire', intention: 'Pureza, renacimiento y elevación espiritual constante' },
            faq: [{ q: '¿Es la más vendida?', a: 'Es nuestra cascada de humo más elegida, por su diseño y su simbolismo. Siempre genera conversación.' }, { q: '¿Qué conos usa?', a: 'Conos de flujo inverso (backflow). Incluímos set de inicio.' }]
        },
        {
            id: 'cascada-japonesa', name: 'Cascada Japonesa',
            cat: 'cascadas', subcat: 'Japonesa', price: 22000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'zen',
            descShort: 'Estética wabi-sabi japonesa: simplicidad, intención y humo en perfecta armonía.',
            descLong: '<p>El wabi-sabi es la estética japonesa de la belleza en la imperfección y la impermanencia. Un plato con una grieta. Un jardín donde la hierba crece entre las piedras. Una noche de niebla. Esta cascada de humo captura esa filosofía en cada línea: formas simples, deliberadas, sin ornamento innecesario.</p><p>La tradición japonesa del incienso — el kōdō — es tan refinada como la ceremonia del té. No se trata solo de un aroma: es una práctica de atención plena, de presencia en el momento. Esta cascada transforma el encendido de un cono en un ritual.</p><p>El humo que desciende por sus formas crea un efecto visual que encaja perfectamente con la estética japonesa: dinámico pero sereno, vivo pero quieto. Una contradicción que solo el humo puede resolver.</p>',
            features: [{ l: 'Estética', v: 'Wabi-sabi japonesa' }, { l: 'Material', v: 'Cerámica artesanal' }, { l: 'Diseño', v: 'Minimalismo intencional' }, { l: 'Incienso', v: 'Set de conos incluido' }],
            benefits: ['Minimalismo significativo', 'Meditación visual', 'Estética zen depurada', 'Serenidad', 'Ritual consciente'],
            faq: [{ q: '¿Qué es el wabi-sabi?', a: 'Es la estética japonesa que celebra la belleza en lo imperfecto, lo incompleto y lo impermanente. La cascada japonesa encarna esa filosofía.' }]
        },
        {
            id: 'cascada-escalera', name: 'Cascada Triple Escalera',
            cat: 'cascadas', subcat: 'Escalera', price: 19000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'smoke',
            descShort: 'El humo desciende escalonado en tres niveles. Un efecto visual arquitectónico y meditativo.',
            descLong: '<p>La Cascada Triple Escalera tiene algo de arquitectura sagrada: sus tres niveles descendentes evocan los templos mayas, las pirámides escalonadas, los ziggurat de Mesopotamia. La idea de que lo sagrado se alcanza subiendo — y que la purificación viene al descender — está presente en todas las culturas del mundo.</p><p>El humo cae de escalón en escalón con un ritmo hipnótico: primero el primer nivel, luego el segundo, luego el tercero. El movimiento es escalonado, medido, casi musical. Creado específicamente para quienes quieren una cascada de humo con más estructura visual que las versiones orgánicas.</p><p>Funciona perfectamente sobre una mesa, una repisa o un altar. Su silueta es reconocible incluso cuando no está en uso — una pieza decorativa de presencia independiente de si hay o no incienso encendido.</p>',
            features: [{ l: 'Diseño', v: 'Triple escalera descendente' }, { l: 'Efecto', v: 'Descenso escalonado del humo' }, { l: 'Material', v: 'Cerámica/resina' }, { l: 'Incienso', v: 'Set de conos incluido' }],
            benefits: ['Efecto visual arquitectónico', 'Meditación rítmica', 'Decoración con carácter', 'Aromaterapia', 'Pieza protagonista'],
            faq: [{ q: '¿Por qué el humo baja en escalones?', a: 'Porque la forma canaliza el flujo del humo a través de cada nivel. El diseño está pensado para guiar el movimiento paso a paso.' }]
        },
        {
            id: 'cascada-piedra', name: 'Cascada de Piedra Natural',
            cat: 'cascadas', subcat: 'Piedra', price: 21000,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'artisan', label: 'Artesanal' }],
            img: 'stone',
            descShort: 'Base de piedra natural real y humo etéreo. Los elementos tierra y aire en un solo objeto.',
            descLong: '<p>Esta cascada tiene algo que las demás no tienen: es parcialmente natural. Su base no es resina ni cerámica — es piedra real, con toda la textura, el peso y la energía que eso implica. El resultado es una pieza que une los dos extremos del espectro material: lo sólido y permanente de la roca, y lo etéreo e impermanente del humo.</p><p>El contraste es visualmente poderoso: la piedra gris o beige natural, densa y quieta, y el humo blanco que fluye sobre ella como si la piedra misma respirara. En términos de elementos, es la unión de la tierra y el aire — dos energías complementarias que se potencian mutuamente.</p><p>Como objeto decorativo funciona incluso sin incienso: la piedra natural tiene suficiente presencia y belleza para justificarse sola. Y cuando el humo corre sobre ella, la pieza alcanza un nivel de sofisticación visual difícil de igualar.</p>',
            features: [{ l: 'Base', v: 'Piedra natural real' }, { l: 'Efecto', v: 'Cascada de humo sobre piedra' }, { l: 'Elementos', v: 'Tierra (piedra) + Aire (humo)' }, { l: 'Incienso', v: 'Set de conos incluido' }],
            benefits: ['Natural y auténtico', 'Contraste visual único', 'Meditación tierra-aire', 'Decorativo siempre', 'Pieza irrepetible por su piedra'],
            faq: [{ q: '¿La piedra es siempre igual?', a: 'No. Cada piedra natural tiene su propia textura, color y forma. Tu cascada será única.' }]
        },

        /* ---- DECORACIÓN ---- */
        {
            id: 'buda-meditativo', name: 'Buda Meditativo',
            cat: 'decoracion', subcat: 'Budas', price: 25000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Espiritual' }],
            img: 'buddha',
            descShort: 'Presencia, serenidad y sabiduría. Una figura que transforma la energía del espacio donde descansa.',
            descLong: '<p>El Buda no es solo una figura decorativa — es un recordatorio constante de que la quietud interior es posible en cualquier momento. Siddhartha Gautama, el Buda histórico, encontró la iluminación no en la acción sino en la inmovilidad perfecta: sentado bajo el árbol Bodhi, inmóvil pero completamente presente. Esa energía es la que lleva consigo esta figura.</p><p>En cualquier espacio donde se ubique, el Buda meditativo genera un campo de calma. No es algo que pueda medirse en un laboratorio, pero cualquier persona sensible lo percibe: hay espacios donde entrar y respirar diferente. El Buda ayuda a crear ese espacio.</p><p>Elaborado en resina de alta calidad con acabado detallado, tiene el peso y la presencia de una pieza pensada para durar. No es una figurita frágil — es una pieza de decoración consciente diseñada para acompañar un espacio durante muchos años.</p>',
            features: [{ l: 'Material', v: 'Resina premium pintada a mano' }, { l: 'Tamaño', v: 'Mediano (aprox. 20-25 cm)' }, { l: 'Acabado', v: 'Detallado, artesanal' }, { l: 'Ideal para', v: 'Sala, meditación, escritorio' }],
            benefits: ['Serenidad en el espacio', 'Energía meditativa', 'Decoración con significado', 'Presencia calmante', 'Pieza atemporal'],
            energy: { name: 'BUDA', chakra: 'Todos', element: 'Todos', intention: 'Quietud, sabiduría y paz interior permanente' },
            faq: [{ q: '¿Dónde ubico el Buda?', a: 'En sala de estar, escritorio, espacio de meditación o entrada. Nunca en el piso ni en el baño.' }, { q: '¿Importa la posición en que mira?', a: 'Según el feng shui, que mire hacia la puerta de entrada atrae prosperidad. Que mire hacia el interior genera recogimiento.' }]
        },
        {
            id: 'buda-paz', name: 'Buda de la Paz',
            cat: 'decoracion', subcat: 'Budas', price: 22000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'buddha',
            descShort: 'El Buda con las manos levantadas en gesto de paz. Protección, armonía y serenidad para el hogar.',
            descLong: '<p>El Buda de la Paz presenta las manos levantadas con las palmas hacia afuera — el mudra (gesto sagrado) del abhaya, que significa "no temas". Es una figura que irradia protección activa: no la que cierra y bloquea, sino la que abre y calma. Un guardián gentil del espacio.</p><p>En la tradición budista, este gesto simboliza la protección, la benevolencia y la disipación del miedo. Colocado en la entrada del hogar o en la sala, transmite a quienes ingresan una sensación inmediata de bienvenida y seguridad.</p><p>Como regalo es perfecto para hogares nuevos, mudanzas, inauguraciones de oficinas o cualquier momento donde alguien esté comenzando algo nuevo y quiera llenarlo de buena energía desde el principio.</p>',
            features: [{ l: 'Material', v: 'Resina premium pintada' }, { l: 'Gesto', v: 'Abhaya mudra (manos en paz)' }, { l: 'Significado', v: 'Protección y ausencia de miedo' }, { l: 'Ideal para', v: 'Entrada, sala, regalo' }],
            benefits: ['Protección del hogar', 'Serenidad ambiental', 'Bienvenida positiva', 'Ausencia de miedo', 'Regalo para nuevos comienzos'],
            energy: { name: 'BUDA DE LA PAZ', chakra: 'Corazón', element: 'Aire', intention: 'Protección, calma y apertura sin miedo' },
            faq: [{ q: '¿Dónde se coloca el Buda de la Paz?', a: 'En la entrada del hogar para recibir con buena energía, o en la sala para generar un ambiente de armonía y protección.' }]
        },
        {
            id: 'buda-fortuna', name: 'Buda de la Fortuna',
            cat: 'decoracion', subcat: 'Budas', price: 23000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Prosperidad' }],
            img: 'buddha',
            descShort: 'El Hotei, el Buda de la buena suerte y la abundancia. Risa, fortuna y prosperidad en el hogar.',
            descLong: '<p>El Buda de la Fortuna — conocido en China como Hotei o Budai — es el más reconocible de todos: regordete, sonriente, con la panza expuesta y los brazos abiertos. No es el Buda histórico sino un monje chino del siglo X que se convirtió en símbolo de la alegría, la abundancia y la buena fortuna.</p><p>Según la tradición, si se frota su panza, trae suerte. Si se ubica mirando hacia la puerta de entrada, atrae la prosperidad que llega desde afuera. Si mira hacia el interior del hogar, la retiene y la distribuye por todo el espacio.</p><p>Su risa amplia es contagiosa — es imposible no sonreír al verlo. Es una pieza que genera alegría simplemente por su presencia, y eso ya es un tipo de abundancia que vale mucho.</p>',
            features: [{ l: 'Material', v: 'Resina pintada' }, { l: 'Figura', v: 'Hotei (Buda de la fortuna)' }, { l: 'Tradición', v: 'China, siglo X' }, { l: 'Ideal para', v: 'Entrada, sala, caja registradora' }],
            benefits: ['Buena fortuna', 'Prosperidad', 'Alegría contagiosa', 'Abundancia', 'Energía positiva permanente'],
            energy: { name: 'HOTEI', chakra: 'Plexo Solar', element: 'Tierra', intention: 'Abundancia, fortuna y alegría permanente' },
            faq: [{ q: '¿Dónde se coloca para atraer fortuna?', a: 'Mirando hacia la puerta de entrada para atraer la prosperidad que llega desde afuera. También efectivo en el área de trabajo o caja registradora.' }]
        },
        {
            id: 'buda-sonadora', name: 'Buda Soñadora',
            cat: 'decoracion', subcat: 'Budas', price: 18000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'buddha',
            descShort: 'La Buda reclinada con la mejilla apoyada en la mano. Contemplación, sueños y descanso interior.',
            descLong: '<p>La Buda Soñadora tiene una energía diferente a todos los demás Budas de la colección: no está sentada en meditación ni de pie en postura de poder — está reclinada, con la mejilla suavemente apoyada en la mano, con una sonrisa apenas esbozada. Parece estar a punto de dormirse o de despertar de un sueño hermoso.</p><p>Su energía es la del descanso consciente, la contemplación y la sabiduría que no necesita hacer nada para existir. Un recordatorio de que también hay valor en parar, en descansar, en soñar. En una cultura que premia la productividad constante, la Buda Soñadora es casi un acto político.</p><p>Es una de nuestras figuras más elegidas para dormitorios, cuartos de lectura y espacios de descanso. También es uno de los regalos más acertados — porque todos, en algún momento, necesitan que alguien les recuerde que está bien parar.</p>',
            features: [{ l: 'Material', v: 'Resina pintada artesanal' }, { l: 'Postura', v: 'Reclinada (descanso y contemplación)' }, { l: 'Ideal para', v: 'Dormitorio, rincón de lectura' }, { l: 'Tamaño', v: 'Mediano horizontal' }],
            benefits: ['Energía de descanso', 'Contemplación', 'Sueño reparador', 'Recordatorio de la calma', 'Regalo significativo'],
            energy: { name: 'BUDA SOÑADORA', chakra: 'Corona', element: 'Aire', intention: 'Descanso consciente, contemplación y sabiduría tranquila' },
            faq: [{ q: '¿Dónde se ubica mejor?', a: 'En el dormitorio sobre la mesa de luz, en un estante de lectura o en cualquier rincón destinado al descanso y la contemplación.' }]
        },
        {
            id: 'trio-budas-sabios', name: 'Trío Budas Sabios',
            cat: 'decoracion', subcat: 'Budas', price: 32000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'hot', label: 'Destacado' }],
            img: 'buddha',
            descShort: 'Los tres monos sabios: no ver, no escuchar, no decir. Sabiduría ancestral en tres figuras.',
            descLong: '<p>Los tres monos sabios son uno de los símbolos más reconocidos y más malinterpretados del mundo. Mizaru (que se tapa los ojos), Kikazaru (que se tapa los oídos) y Iwazaru (que se tapa la boca) no representan la ignorancia deliberada — representan tres formas de sabiduría: no mirar lo que daña al alma, no escuchar lo que envenena la mente, no hablar cuando las palabras no suman.</p><p>Originarios del santuario sintoísta de Nikkō, Japón, su imagen se remonta al siglo XVII aunque el concepto es mucho más antiguo, presente en la filosofía confuciana. En el mundo contemporáneo, son un recordatorio de que la sabiduría también implica selectividad — elegir conscientemente qué se recibe y qué se emite.</p><p>Como trío decorativo, tienen una presencia visual poderosa. Pueden disponerse en línea horizontal o en escalera. Son una pieza de conversación garantizada en cualquier espacio.</p>',
            features: [{ l: 'Material', v: 'Resina pintada artesanal' }, { l: 'Figuras', v: '3 monos sabios' }, { l: 'Origen', v: 'Tradición japonesa / confuciana' }, { l: 'Ideal para', v: 'Sala, escritorio, biblioteca' }],
            benefits: ['Sabiduría ancestral', 'Decoración con historia', 'Pieza de conversación', 'Energía de discernimiento', 'Símbolo universal'],
            faq: [{ q: '¿Qué significan los tres monos?', a: 'No ver el mal, no escuchar el mal, no hablar el mal — como formas activas de sabiduría y selectividad consciente.' }]
        },
        {
            id: 'lechuza-decorativa', name: 'Lechuza Decorativa',
            cat: 'decoracion', subcat: 'Lechuzas', price: 18000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'buddha',
            descShort: 'La lechuza: sabiduría, intuición y capacidad de ver lo invisible. Un símbolo atemporal.',
            descLong: '<p>La lechuza ha sido símbolo de sabiduría en casi todas las culturas del mundo. En la antigua Grecia, era el ave de Atenea, diosa de la sabiduría. En la Roma antigua, predecía el futuro. En la cultura celta, era mensajera entre el mundo de los vivos y el de los muertos. En la tradición mesoamericana, guardiana de los secretos de la noche.</p><p>Su poder simbólico se debe a una característica física real: puede girar la cabeza 270 grados y ver en la oscuridad total. Es la criatura que ve lo que otros no pueden ver. Por eso, como símbolo, representa la intuición, el conocimiento profundo y la capacidad de discernir la verdad cuando los demás solo ven confusión.</p><p>Como pieza decorativa, tiene una presencia elegante y atemporal. Funciona en cualquier estilo de interior — desde lo más clásico hasta lo más contemporáneo.</p>',
            features: [{ l: 'Material', v: 'Cerámica / resina artesanal' }, { l: 'Acabado', v: 'Pintado a mano' }, { l: 'Símbolo', v: 'Sabiduría e intuición' }, { l: 'Ideal para', v: 'Biblioteca, escritorio, sala' }],
            benefits: ['Sabiduría e intuición', 'Protección nocturna', 'Decoración atemporal', 'Simbolismo universal', 'Conversación garantizada'],
            faq: [{ q: '¿Por qué la lechuza simboliza sabiduría?', a: 'Por su capacidad de ver en la oscuridad y girar la cabeza casi completamente — metáforas de ver lo que otros no pueden.' }]
        },
        {
            id: 'trio-lechuzas-sabias', name: 'Trío Lechuzas Sabias',
            cat: 'decoracion', subcat: 'Lechuzas', price: 28000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'buddha',
            descShort: 'Tres lechuzas de distintos tamaños. La familia de la sabiduría para espacios que valoran el conocimiento.',
            descLong: '<p>El trío de lechuzas sabias es una de las composiciones decorativas más elegantes de la colección. Tres figuras de tamaños diferentes — mayor, mediana y pequeña — crean una familia de sabiduría que funciona como punto focal en cualquier estante, mesa o repisa.</p><p>La variación de tamaños genera una composición visual natural y equilibrada — como si las tres existieran juntas por razones propias, no por diseño. Es ese tipo de decoración que parece fácil pero que tiene detrás un criterio cuidadoso.</p><p>Como regalo para personas que aman el conocimiento, la lectura, la filosofía o el arte, es de los más acertados. Dice: "valoro lo que sabés, lo que pensás, lo que ves donde otros no ven."</p>',
            features: [{ l: 'Material', v: 'Cerámica / resina artesanal' }, { l: 'Figuras', v: '3 lechuzas (tamaños graduados)' }, { l: 'Acabado', v: 'Pintado a mano' }, { l: 'Ideal para', v: 'Biblioteca, sala, regalo' }],
            benefits: ['Composición visual elegante', 'Simbolismo de sabiduría', 'Decoración familiar', 'Regalo intelectual', 'Presencia atemporal'],
            faq: [{ q: '¿Se pueden separar las tres?', a: 'Sí. Cada lechuza funciona de forma independiente, aunque juntas forman la composición más equilibrada.' }]
        },
        {
            id: 'llama-cactus', name: 'Llama con Cactus',
            cat: 'decoracion', subcat: 'Llamas', price: 16000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'nature',
            descShort: 'Llama andina con cactus integrado. Artesanía pintada a mano con carácter y energía de altura.',
            descLong: '<p>La llama es el animal más representativo de los Andes sudamericanos. Durante siglos fue el principal medio de transporte en las alturas de la Puna, la guardiana de los rebaños, el símbolo de la resistencia y la adaptación en condiciones extremas. Hoy es también un ícono cultural que combina lo ancestral con lo contemporáneo de una manera completamente natural.</p><p>Esta versión incluye un pequeño cactus integrado en su lomo — el cactus, símbolo de la resistencia en el desierto, de la belleza que crece donde parece imposible. La combinación no es casual: llama y cactus son dos símbolos de adaptación, de vida en lugares difíciles, de belleza que no pide condiciones perfectas para florecer.</p><p>Pintada a mano con colores vibrantes inspirados en los textiles andinos. Cada una tiene diferencias únicas — en el trazo, en la distribución del color, en el detalle. Artesanía genuina.</p>',
            features: [{ l: 'Material', v: 'Cerámica artesanal' }, { l: 'Detalle', v: 'Cactus integrado en el lomo' }, { l: 'Pintado', v: 'A mano, colores únicos' }, { l: 'Inspiración', v: 'Textiles andinos' }],
            benefits: ['Artesanía auténtica', 'Energía andina', 'Color y vitalidad', 'Pieza única', 'Decoración con carácter'],
            faq: [{ q: '¿El cactus es real o decorativo?', a: 'Es decorativo, integrado en la figura de cerámica. No requiere agua ni cuidados.' }]
        },
        {
            id: 'llama-suculenta', name: 'Llama con Suculenta',
            cat: 'decoracion', subcat: 'Llamas', price: 18000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Natural' }],
            img: 'nature',
            descShort: 'Llama andina con suculenta viva. La combinación perfecta de artesanía y naturaleza real.',
            descLong: '<p>La llama con suculenta lleva el concepto de la llama decorativa a otro nivel: en lugar de un cactus de cerámica, lleva una suculenta viva en su lomo. Es una pieza que es simultáneamente artesanía pintada a mano y planta de interior — una escultura viva que cambia y crece con el tiempo.</p><p>Las suculentas son las plantas más fáciles del mundo de cuidar: requieren riego cada dos semanas, toleran el olvido con elegancia y tienen una belleza geométrica y silenciosa que complementa perfectamente la energía colorida de la llama andina.</p><p>Con el tiempo, la suculenta crece y la pieza evoluciona. Es una decoración que tiene vida propia — que no se congela en el momento en que se compra sino que continúa cambiando, como todo lo que es realmente vivo.</p>',
            features: [{ l: 'Material base', v: 'Cerámica artesanal pintada' }, { l: 'Planta', v: 'Suculenta viva' }, { l: 'Riego', v: 'Cada 2 semanas' }, { l: 'Luz', v: 'Indirecta o semi-directa' }],
            benefits: ['Arte vivo que crece', 'Artesanía + naturaleza', 'Fácil de cuidar', 'Evoluciona con el tiempo', 'Unicidad garantizada'],
            faq: [{ q: '¿Cómo cuido la suculenta?', a: 'Riego cada 2 semanas, luz indirecta o semi-directa. Es de las plantas más resistentes que existen.' }]
        },
        {
            id: 'llama-pequena', name: 'Llama Pequeña',
            cat: 'decoracion', subcat: 'Llamas', price: 9000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'nature',
            descShort: 'La llama más pequeña de la colección. Para escritorios, estantes y corazones que aman los Andes.',
            descLong: '<p>Pequeña en tamaño, grande en carácter. La llama pequeña es la versión compacta de nuestro ícono andino — perfecta para escritorios, mesas de luz, estantes con poco espacio o cualquier rincón que pida un poco de color y personalidad sin que ocupe demasiado lugar.</p><p>Pintada a mano con los mismos colores vibrantes y el mismo detalle que sus versiones más grandes. Cada una es diferente — las variaciones del trazo, los colores específicos y los pequeños detalles hacen que no existan dos llamas pequeñas exactamente iguales.</p><p>Es también uno de nuestros regalos más accesibles y más acertados: una llama andina nunca falla porque siempre genera una sonrisa. Para cumpleaños, souvenirs significativos o simplemente como detalle de afecto.</p>',
            features: [{ l: 'Material', v: 'Cerámica artesanal' }, { l: 'Tamaño', v: 'Pequeño (aprox. 8-10 cm)' }, { l: 'Pintado', v: 'A mano, única' }, { l: 'Ideal para', v: 'Escritorio, mesa de luz, regalo' }],
            benefits: ['Tamaño versátil', 'Color y alegría', 'Artesanía genuina', 'Pieza única', 'Regalo accesible y significativo'],
            faq: [{ q: '¿Es buen regalo?', a: 'Es uno de los más elegidos por su precio accesible y el carácter que tiene. Viene con packaging cuidado.' }]
        },

        /* ---- DECORACIÓN / PORTA SAHUMARIOS ---- */
        {
            id: 'porta-sahumerio-mano-fatima', name: 'Porta Sahumerio Mano de Fátima',
            cat: 'decoracion', subcat: 'Porta Sahumarios', price: 8500,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Protección' }],
            img: 'zen',
            descShort: 'La Hamsa (Mano de Fátima) como porta sahumerios. Protección, prosperidad y bendición del hogar.',
            descLong: '<p>La Hamsa — también conocida como Mano de Fátima en el mundo árabe y Mano de Miriam en la tradición judía — es uno de los símbolos de protección más extendidos del mundo. Presente en el norte de África, el Medio Oriente y la Europa mediterránea desde hace miles de años, protege contra el mal de ojo y atrae la buena fortuna.</p><p>Su forma de mano abierta con el ojo en el centro es inmediatamente reconocible. En este porta sahumerios, esa forma sostiene el palo de incienso y recoge la ceniza, convirtiéndose en un objeto funcional y sagrado al mismo tiempo. Mientras el incienso arde, la Hamsa trabaja: protege el espacio, bendice el ambiente, atrae lo positivo.</p><p>Como objeto decorativo funciona incluso sin incienso — la Hamsa sola ya es una pieza con presencia y significado. Un detalle elegante y lleno de historia para cualquier rincón del hogar.</p>',
            features: [{ l: 'Material', v: 'Cerámica / resina artesanal' }, { l: 'Símbolo', v: 'Hamsa (Mano de Fátima / Miriam)' }, { l: 'Función', v: 'Porta sahumerios y decorativo' }, { l: 'Tradición', v: 'Mediterránea / Medio Oriente' }],
            benefits: ['Protección del mal de ojo', 'Bendición del hogar', 'Atrae buena fortuna', 'Funcional y simbólico', 'Historia milenaria'],
            faq: [{ q: '¿Sirve para todos los tipos de incienso?', a: 'Sí, para palos de incienso estándar. Para conos de cascada, ver nuestras cascadas de humo.' }]
        },
        {
            id: 'porta-sahumerio-buda', name: 'Porta Sahumerio Buda',
            cat: 'decoracion', subcat: 'Porta Sahumarios', price: 8500,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Meditación' }],
            img: 'buddha',
            descShort: 'El Buda como soporte del incienso. Meditación, aroma y presencia espiritual en un solo objeto.',
            descLong: '<p>En la tradición budista, el incienso no es decorativo ni aromático en primer lugar — es una ofrenda. El humo que sube lleva los pensamientos y las intenciones hacia lo más elevado. Este porta sahumerios une esa práctica con la figura del Buda, creando un objeto que es simultáneamente funcional, decorativo y profundamente espiritual.</p><p>El Buda sostiene el palo de incienso mientras el humo asciende a su alrededor. La imagen tiene una quietud particular: la figura meditativa, el movimiento del humo, el aroma llenando el espacio. Es un ritual diario que puede ser tan simple como encender un palo de incienso o tan profundo como una práctica de meditación.</p><p>Como objeto decorativo permanece hermoso incluso entre uso y uso. La figura del Buda sobre su base de cerámica o resina es una presencia en sí misma.</p>',
            features: [{ l: 'Material', v: 'Cerámica / resina pintada' }, { l: 'Figura', v: 'Buda meditativo' }, { l: 'Función', v: 'Porta sahumerios y decorativo' }, { l: 'Tradición', v: 'Budista' }],
            benefits: ['Práctica meditativa diaria', 'Espacio sagrado en el hogar', 'Aromaterapia intencional', 'Decoración espiritual', 'Objeto de ofrenda'],
            faq: [{ q: '¿Funciona con cualquier incienso?', a: 'Sí, con palos de incienso estándar. La base recoge la ceniza.' }]
        },
        {
            id: 'porta-sahumerio-loto', name: 'Porta Sahumerio Flor de Loto',
            cat: 'decoracion', subcat: 'Porta Sahumarios', price: 9000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }, { cls: 'wellness', label: 'Espiritual' }],
            img: 'zen',
            descShort: 'La flor de loto sostiene el incienso. Pureza, renacimiento y aroma en un solo gesto sagrado.',
            descLong: '<p>La flor de loto es el símbolo de la pureza espiritual por excelencia — la flor que crece en el barro y emerge perfecta, impoluta, hacia la luz. En este porta sahumerios, esa flor sostiene el incienso: el objeto más puro sosteniendo la ofrenda más etérea.</p><p>La imagen de un palo de incienso ardiendo sobre una flor de loto tiene una belleza casi poética. El humo asciende desde los pétalos como si la flor misma respirara y emanara su esencia. Es un objeto que convierte el acto cotidiano de encender incienso en una imagen de meditación y belleza.</p><p>La base de loto recoge la ceniza del incienso mientras mantiene su forma abierta y receptiva. Funcional, hermosa y llena de significado — exactamente como debería ser todo lo que elegimos para nuestros espacios.</p>',
            features: [{ l: 'Material', v: 'Cerámica artesanal' }, { l: 'Diseño', v: 'Flor de loto en pétalos' }, { l: 'Función', v: 'Porta sahumerios y base decorativa' }, { l: 'Símbolo', v: 'Pureza y renacimiento' }],
            benefits: ['Pureza en el ritual', 'Renacimiento consciente', 'Aromaterapia bella', 'Meditación visual', 'Objeto funcional y sagrado'],
            faq: [{ q: '¿Hay que limpiar la base?', a: 'Sí, retirar la ceniza acumulada periódicamente con un paño seco o soplando suavemente.' }]
        },

        /* ---- LÁMPARAS DE SAL ---- */
        {
            id: 'lampara-buda-sonadora', name: 'Lámpara Buda Soñadora',
            cat: 'lamparas', subcat: 'Buda', price: 42000,
            badges: [{ cls: 'hot', label: 'Más Vendida' }, { cls: 'wellness', label: 'Bienestar' }],
            img: 'salt',
            descShort: 'La más especial de la colección. El Buda soñador en sal del Himalaya que purifica, entibia y armoniza.',
            descLong: '<p>La sal del Himalaya tiene 250 millones de años. Se formó en los mares primordiales que existían antes de que las montañas existieran, y quedó atrapada cuando la tierra se elevó. Es un mineral con una historia geológica que pone en perspectiva cualquier preocupación cotidiana.</p><p>Cuando se calienta con la bombilla, la sal emite iones negativos — el mismo fenómeno que ocurre en la orilla del mar, en las cascadas y después de la lluvia. Los iones negativos se asocian científicamente con la mejora del estado de ánimo, la reducción del estrés y la mejora de la calidad del aire. También, su luz ámbar cálida reduce la producción de cortisol y facilita la relajación profunda.</p><p>La figura del Buda Soñadora — reclinada, serena, con esa sonrisa apenas esbozada — convierte esta lámpara en algo más que una fuente de luz. Es una presencia. Una compañía silenciosa que transforma el espacio donde descansa en un refugio de calma y calidez.</p><p>Puede estar encendida las 24 horas — de hecho, funciona mejor así: la sal necesita calor sostenido para liberar sus beneficios de manera constante. Es una inversión en bienestar que se percibe desde la primera noche.</p>',
            features: [{ l: 'Material', v: 'Sal del Himalaya natural (250M años)' }, { l: 'Figura', v: 'Buda soñadora tallada' }, { l: 'Bombilla', v: 'Incluida (bajo consumo)' }, { l: 'Cable', v: '220V con interruptor' }, { l: 'Uso', v: 'Continuo recomendado (24hs)' }, { l: 'Iones', v: 'Negativos — mejoran calidad del aire' }],
            benefits: ['Purificación del aire por iones negativos', 'Luz ámbar relajante anti-cortisol', 'Mejora del sueño', 'Decoración espiritual premium', 'Calidez ambiental', 'Energía meditativa constante'],
            faq: [{ q: '¿La sal del Himalaya purifica el aire?', a: 'Emite iones negativos al calentarse, asociados a mejora del estado de ánimo y aire más limpio. Es especialmente útil en espacios cerrados.' }, { q: '¿Cuántas horas puede estar encendida?', a: 'Puede estar encendida las 24hs. La sal necesita calor continuo para liberar sus beneficios al máximo.' }, { q: '¿La sal se gasta?', a: 'No. La sal del Himalaya no se consume. Puede durar décadas si se cuida correctamente.' }]
        },
        {
            id: 'lampara-buda-guerrero', name: 'Lámpara Buda Guerrero',
            cat: 'lamparas', subcat: 'Buda', price: 42000,
            badges: [{ cls: 'wellness', label: 'Bienestar' }],
            img: 'salt',
            descShort: 'El guerrero espiritual en sal del Himalaya. Fuerza, protección y luz cálida para el hogar.',
            descLong: '<p>El Buda guerrero no es el Buda de la quietud pasiva — es el Buda de la determinación activa. Representa la fuerza espiritual necesaria para enfrentar los obstáculos internos: los miedos, las dudas, los hábitos que frenan el crecimiento. Es la energía del que avanza con consciencia y sin violencia.</p><p>En sal del Himalaya, esa energía de fuerza y determinación se combina con los beneficios de ionización y purificación del mineral. El resultado es una lámpara que no solo ilumina y calienta — sino que sostiene la energía del espacio con una vibración de claridad y poder interior.</p><p>Ideal para estudios, oficinas en el hogar, espacios de entrenamiento o cualquier ambiente donde se trabaje hacia objetivos concretos. Una presencia que recuerda que la fuerza más importante no viene de afuera.</p>',
            features: [{ l: 'Material', v: 'Sal del Himalaya natural' }, { l: 'Figura', v: 'Buda guerrero' }, { l: 'Bombilla', v: 'Incluida' }, { l: 'Cable', v: '220V con interruptor' }, { l: 'Ideal para', v: 'Estudio, oficina, espacio de trabajo' }],
            benefits: ['Energía de fuerza y determinación', 'Purificación por iones negativos', 'Luz ámbar cálida', 'Claridad mental', 'Protección del espacio'],
            faq: [{ q: '¿Es diferente del Buda Soñadora?', a: 'La figura es diferente — el Guerrero proyecta energía activa y determinada; la Soñadora proyecta descanso y contemplación. Los beneficios de la sal son idénticos.' }]
        },
        {
            id: 'lampara-elefante', name: 'Lámpara Elefante',
            cat: 'lamparas', subcat: 'Elefante', price: 40000,
            badges: [{ cls: 'wellness', label: 'Prosperidad' }],
            img: 'salt',
            descShort: 'El elefante con la trompa levantada — símbolo universal de buena suerte — en sal del Himalaya.',
            descLong: '<p>En casi todas las culturas asiáticas, el elefante con la trompa levantada es el símbolo más poderoso de prosperidad, buena suerte y sabiduría. En India, el elefante es la manifestación de Ganesha. En Tailandia, es el animal sagrado del rey. En el feng shui chino, atrae la riqueza y el buen chi cuando se coloca en la entrada del hogar.</p><p>Esta lámpara combina ese simbolismo milenario con los beneficios reales de la sal del Himalaya: ionización negativa del aire, luz cálida que reduce el cortisol y una presencia térmica suave que calienta el ambiente en los meses fríos.</p><p>La figura del elefante tallada en la sal rosa crea una silueta cálida y reconocible. Encendida, la luz ámbar que emana por las vetas naturales de la sal es completamente única — nunca exactamente igual en dos piezas.</p>',
            features: [{ l: 'Material', v: 'Sal del Himalaya natural' }, { l: 'Figura', v: 'Elefante con trompa levantada' }, { l: 'Bombilla', v: 'Incluida' }, { l: 'Cable', v: '220V con interruptor' }, { l: 'Feng shui', v: 'Entrada para atraer prosperidad' }],
            benefits: ['Prosperidad y buena suerte', 'Iones negativos', 'Luz ámbar única', 'Calidez ambiental', 'Simbolismo universal'],
            energy: { name: 'ELEFANTE', chakra: 'Raíz · Plexo Solar', element: 'Tierra', intention: 'Prosperidad, sabiduría y buena fortuna' },
            faq: [{ q: '¿Por qué la trompa levantada?', a: 'Según la tradición, la trompa levantada significa que el elefante está activo y derramando buena suerte. La trompa baja retiene la energía interior.' }]
        },
        {
            id: 'lampara-angelito', name: 'Lámpara Angelito',
            cat: 'lamparas', subcat: 'Ángel', price: 38000,
            badges: [{ cls: 'gift', label: 'Ideal Regalo' }],
            img: 'salt',
            descShort: 'Un ángel en sal del Himalaya. Protección, paz y luz suave para dormitorios y espacios de descanso.',
            descLong: '<p>El ángel es el símbolo de la protección y la guía en casi todas las tradiciones espirituales del mundo. Esta lámpara de sal con figura de ángel lleva esa energía de protección al espacio cotidiano de la manera más hermosa posible: con luz.</p><p>La luz ámbar suave que emite la sal del Himalaya es la más cercana a la luz de vela que existe en iluminación eléctrica. No excita la retina, no interfiere con la producción de melatonina, no estimula el sistema nervioso. Es la luz ideal para las horas previas al sueño — cuando el cuerpo necesita señales de calma, no de activación.</p><p>Es uno de los regalos más elegidos de toda la colección — para dormitorios, para cuartos de bebé, para personas mayores, para cualquier espacio donde la paz y la protección sean más que decorativas. Una lámpara que puede estar encendida toda la noche sin problema, cumpliendo su función de guardia silenciosa del descanso.</p>',
            features: [{ l: 'Material', v: 'Sal del Himalaya natural' }, { l: 'Figura', v: 'Ángel protector' }, { l: 'Bombilla', v: 'Incluida (luz cálida)' }, { l: 'Ideal para', v: 'Dormitorio, cuarto bebé, descanso' }, { l: 'Uso nocturno', v: 'Segura toda la noche' }],
            benefits: ['Protección espiritual', 'Luz suave para el sueño', 'Iones negativos purificadores', 'Calidez y paz', 'Regalo de bienestar'],
            faq: [{ q: '¿Se puede dejar encendida toda la noche?', a: 'Sí, completamente segura. La bombilla de bajo consumo no genera riesgo y la sal no se calienta en exceso.' }, { q: '¿Es buen regalo para bebés?', a: 'Sí, es uno de los más elegidos para cuartos de bebé. La luz suave y los iones negativos son beneficiosos y completamente seguros.' }]
        },

        /* ---- AROMATERAPIA ---- */
        {
            id: 'sahumerio-lavanda', name: 'Sahumerio Lavanda',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1200,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'wellness', label: 'Relajación' }],
            img: 'aroma',
            descShort: 'El aroma más relajante del mundo. Lavanda para calmar el sistema nervioso y preparar el sueño.',
            descLong: '<p>La lavanda es la planta más estudiada científicamente en términos de efectos sobre el sistema nervioso. Decenas de estudios confirman lo que las tradiciones mediterráneas sabían desde hace siglos: su aroma reduce el cortisol, disminuye la frecuencia cardíaca y lleva al sistema nervioso a un estado de calma activa. No es folklore — es fisiología.</p><p>El sahumerio de lavanda lleva ese aroma al espacio de una manera lenta y sostenida. A diferencia del difusor eléctrico, el sahumerio crea una experiencia ritual: encenderlo, ver el humo, percibir cómo el aroma llena el ambiente gradualmente. Ese proceso en sí mismo es un momento de pausa.</p><p>Ideal para la hora antes de dormir, para los momentos de meditación o yoga, para cualquier instante donde la mente necesite bajar de velocidad. El aroma de lavanda en un espacio crea un condicionamiento ambiental: el cerebro empieza a asociarlo con la calma y el descanso.</p>',
            features: [{ l: 'Aroma', v: 'Lavanda (Lavandula angustifolia)' }, { l: 'Efecto', v: 'Relajante, anti-estrés, hipnótico suave' }, { l: 'Uso', v: 'Meditación, antes de dormir, yoga' }, { l: 'Duración', v: 'Aprox. 45 minutos por palo' }],
            benefits: ['Relajación del sistema nervioso', 'Mejora del sueño', 'Anti-estrés comprobado', 'Calma sostenida', 'Ritual de pausa'],
            faq: [{ q: '¿Cuánto dura un sahumerio?', a: 'Aproximadamente 45 minutos por palo. Depende del grosor y la temperatura del ambiente.' }, { q: '¿Es seguro para niños?', a: 'Sí. El aroma de lavanda es suave y beneficioso. Usar en ambientes ventilados.' }]
        },
        {
            id: 'sahumerio-romero', name: 'Sahumerio Romero',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1200,
            badges: [{ cls: 'natural', label: 'Natural' }],
            img: 'aroma',
            descShort: 'Activador mental y purificante de espacios. El romero despierta la mente y limpia la energía.',
            descLong: '<p>El romero tiene una energía completamente diferente a la lavanda: no relaja sino que activa. Su aroma vigoroso, fresco y ligeramente mentolado es estimulante para el sistema nervioso y se ha demostrado que mejora la memoria y la concentración a corto plazo. Es el incienso del trabajo intelectual.</p><p>En la tradición medieval europea, el romero era la hierba de la memoria — se colocaba en los libros de estudio, se llevaba en la ropa durante los exámenes, se quemaba en los estudios de los alquimistas y los filósofos. Esa reputación tiene fundamento botánico real: el 1,8-cineol del romero mejora la función cognitiva de manera medible.</p><p>Como purificante energético de espacios, el romero limpia lo estancado y activa el flujo de energía. Ideal para usar al comenzar la semana laboral, al abrir un espacio que estuvo cerrado, al iniciar un proyecto nuevo.</p>',
            features: [{ l: 'Aroma', v: 'Romero (Rosmarinus officinalis)' }, { l: 'Efecto', v: 'Activador, purificante, estimulante mental' }, { l: 'Uso', v: 'Trabajo, estudio, inicio de ciclos' }, { l: 'Duración', v: 'Aprox. 45 minutos por palo' }],
            benefits: ['Mejora de concentración', 'Activación mental', 'Limpieza energética de espacios', 'Purificación', 'Inicio de ciclos'],
            faq: [{ q: '¿El romero mejora la memoria?', a: 'Estudios científicos indican que su aroma mejora la memoria y la concentración. Es el incienso del trabajo intelectual.' }]
        },
        {
            id: 'sahumerio-madre-tierra', name: 'Sahumerio Madre Tierra',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1500,
            badges: [{ cls: 'natural', label: 'Natural' }],
            img: 'aroma',
            descShort: 'Tierra, hierbas y raíces. Para conectar con lo ancestral, el arraigo y los ciclos de la naturaleza.',
            descLong: '<p>El Sahumerio Madre Tierra tiene un aroma que lleva directo a la tierra: profundo, húmedo, herbáceo, con notas de raíces y plantas silvestres. Es el aroma más telúrico de la colección — el que más conecta con el elemento tierra, con el arraigo, con la sensación de pertenecer a algo más grande y más antiguo que uno mismo.</p><p>En muchas tradiciones ancestrales latinoamericanas, quemar hierbas de la tierra forma parte de los rituales de arraigo, de gratitud a la Pachamama y de limpieza de espacios. El humo no solo purifica el ambiente — crea un puente entre el espacio cotidiano y la dimensión sagrada de la naturaleza.</p><p>Ideal para rituales de inicio de ciclos, para espacios de meditación profunda, para momentos donde se necesita bajar y conectar con el cuerpo y la tierra después de mucho tiempo "en la cabeza".</p>',
            features: [{ l: 'Aroma', v: 'Tierra, hierbas silvestres y raíces' }, { l: 'Efecto', v: 'Arraigo, limpieza, conexión ancestral' }, { l: 'Uso', v: 'Ritual, meditación, inicio de ciclos' }],
            benefits: ['Arraigo profundo', 'Limpieza energética', 'Conexión con la tierra', 'Ritual ancestral', 'Gratitud y pertenencia'],
            faq: [{ q: '¿Para qué momentos es ideal?', a: 'Para rituales de luna nueva, inicio de ciclos, espacios de meditación profunda o para volver al cuerpo después de días de mucha actividad mental.' }]
        },
        {
            id: 'sahumerio-sagrada-madre', name: 'Sahumerio Sagrada Madre',
            cat: 'aromaterapia', subcat: 'Sahumerios', price: 1500,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'wellness', label: 'Ritual' }],
            img: 'aroma',
            descShort: 'Mezcla de hierbas sagradas para limpieza espiritual profunda y conexión con lo elevado.',
            descLong: '<p>La Sagrada Madre es nuestra mezcla más especial: una combinación de hierbas con historia de uso ritual en distintas tradiciones espirituales de América Latina. No existe una fórmula única para este tipo de mezclas — cada casa, cada curandera, cada tradición tiene la suya. La nuestra está pensada para la limpieza espiritual profunda y la apertura a lo nuevo.</p><p>Su aroma es complejo: hay notas dulces y notas amargas, lo floral y lo resinoso, lo suave y lo poderoso. Es un aroma que no se parece a nada más, que cuando lo percibís por primera vez genera una sensación difícil de describir: como si el espacio se abriera, como si el aire se volviera más ligero.</p><p>Se usa en momentos de transición importante: mudanzas, divorcios, finales de relaciones, comienzos de proyectos, duelos, celebraciones. Cualquier momento donde un ciclo termina y otro comienza.</p>',
            features: [{ l: 'Mezcla', v: 'Hierbas sagradas seleccionadas' }, { l: 'Efecto', v: 'Limpieza espiritual, apertura de ciclos' }, { l: 'Uso', v: 'Ritual, transiciones, momentos de cierre/apertura' }],
            benefits: ['Limpieza espiritual profunda', 'Apertura de nuevos ciclos', 'Elevación de la vibración', 'Ritual de transición', 'Aroma único'],
            faq: [{ q: '¿Cuándo usarlo?', a: 'En mudanzas, finales de relaciones, comienzos de proyectos importantes o cualquier momento de transición significativa.' }]
        },
        {
            id: 'palo-santo', name: 'Palo Santo',
            cat: 'aromaterapia', subcat: 'Palo Santo', price: 3500,
            badges: [{ cls: 'natural', label: 'Natural' }, { cls: 'hot', label: 'Más Vendido' }],
            img: 'aroma',
            descShort: 'El árbol sagrado de Sudamérica. Limpieza, protección y elevación espiritual con un aroma único e inconfundible.',
            descLong: '<p>El Bursera graveolens — palo santo — es un árbol que crece en la costa del Pacífico de América del Sur. Su nombre en español lo dice todo: madera sagrada. Fue usado por los incas en rituales de purificación y por los chamanes andinos en ceremonias de curación. Hoy, su popularidad se ha extendido por todo el mundo — y con razón.</p><p>Lo que hace único al palo santo no es solo su aroma — aunque ese aroma es completamente particular, una mezcla de madera, cítrico y menta que no se parece a nada más. Lo que lo hace único es que solo los árboles que murieron de manera natural y reposaron en el suelo durante años desarrollan su resina aromática. No se puede fabricar artificialmente ni acelerar el proceso. Cada palo que llega a nuestras manos tiene décadas de historia.</p><p>Su humo limpia el espacio de energías densas, protege el campo energético y eleva la vibración. Es el ritual de limpieza más accesible y más poderoso que existe: un fósforo, una intención, un momento.</p>',
            features: [{ l: 'Material', v: 'Madera de palo santo (Bursera graveolens)' }, { l: 'Origen', v: 'Costa Pacífica de Sudamérica' }, { l: 'Proceso', v: 'Solo madera muerta de manera natural (años de reposo)' }, { l: 'Aroma', v: 'Único: madera + cítrico + menta suave' }, { l: 'Uso', v: 'Limpieza, protección, meditación' }],
            benefits: ['Limpieza energética profunda', 'Protección espiritual', 'Elevación de la vibración', 'Aroma sagrado e inconfundible', 'Ritual simple y poderoso'],
            faq: [{ q: '¿Cómo se usa?', a: 'Encendé la punta, dejala arder unos segundos y soplá para apagar la llama. El humo que queda limpia y purifica. Recorrés el espacio o lo dejás descansar en el porta sahumerios.' }, { q: '¿Es sustentable?', a: 'El palo santo legítimo solo usa árboles que murieron de manera natural. Nunca se talan árboles vivos. Nuestra fuente sigue prácticas responsables.' }]
        },
        {
            id: 'aceites-esenciales', name: 'Aceites Esenciales',
            cat: 'aromaterapia', subcat: 'Aceites', price: 8500,
            badges: [{ cls: 'natural', label: 'Natural' }],
            img: 'aroma',
            descShort: 'Aceites esenciales 100% puros para difusor, masajes y aromaterapia terapéutica.',
            descLong: '<p>La aromaterapia no es nueva age — es química. Los aceites esenciales son concentrados de los compuestos volátiles de plantas: lavanda, eucalipto, árbol del té, naranja, menta, pino, ylang ylang. Cada uno tiene una composición química específica con efectos medibles sobre el sistema nervioso, el estado de ánimo y la respuesta inmune.</p><p>Nuestros aceites esenciales son 100% puros y naturales, sin diluciones, sin sintéticos, sin rellenos. Eso hace que la cantidad necesaria para el efecto sea menor — unas pocas gotas en el difusor son suficientes para transformar el ambiente de una habitación.</p><p>Se pueden usar en difusor eléctrico (la forma más efectiva para aromatizar el espacio), en la bañera (5-6 gotas con sales de baño), en el hornito de esencias con vela, en masajes corporales diluidos en aceite base, o en la almohada para el sueño. Una herramienta de bienestar completamente versátil.</p>',
            features: [{ l: 'Pureza', v: '100% natural, sin sintéticos' }, { l: 'Uso', v: 'Difusor, masaje, baño, hornito' }, { l: 'Concentración', v: 'Alta — pocas gotas alcanzan' }, { l: 'Variedades', v: 'Lavanda, eucalipto, naranja, árbol del té y más' }],
            benefits: ['Aromaterapia terapéutica real', 'Bienestar físico y emocional', 'Versatilidad de uso', '100% natural', 'Efecto científicamente respaldado'],
            faq: [{ q: '¿Qué aceites tienen disponibles?', a: 'Consultanos por WhatsApp para el stock actual. Tenemos lavanda, eucalipto, árbol del té, naranja dulce, pino, romero, ylang ylang y más.' }, { q: '¿Se pueden usar en la piel directamente?', a: 'No recomendamos aplicarlos sin diluir. Mezclar 3-5 gotas en 30ml de aceite base (almendras, jojoba) antes del uso en piel.' }]
        },
        {
            id: 'hornito-esencias', name: 'Hornito de Esencias',
            cat: 'aromaterapia', subcat: 'Hornito', price: 12000,
            badges: [{ cls: 'artisan', label: 'Artesanal' }],
            img: 'candle',
            descShort: 'El ritual de la vela y el aroma. Hornito artesanal para aceites esenciales con luz de vela cálida.',
            descLong: '<p>El hornito de esencias es la forma más antigua y más poética de la aromaterapia: una pequeña vela calienta suavemente el agua con aceite esencial en la cazoleta superior, liberando el aroma de manera gradual y envolvente. No es rápido como el difusor eléctrico — es lento, intencional, ritual.</p><p>Encender una vela, agregar unas gotas de aceite esencial, esperar a que el aroma llene el espacio: son gestos simples que se convierten en un momento de pausa. En una vida que corre, el hornito de esencias invita a detenerse, a estar presente, a percibir.</p><p>La luz de vela que emana por debajo mientras el aroma se difunde crea un ambiente de calidez y recogimiento incomparable. Es también una pieza decorativa hermosa cuando no está en uso — su forma artesanal tiene una presencia elegante en cualquier espacio.</p><p>Compatible con todos nuestros aceites esenciales y con cualquier aceite natural. Incluye instrucciones de uso y recomendaciones de aromas por intención.</p>',
            features: [{ l: 'Material', v: 'Cerámica artesanal' }, { l: 'Cazoleta', v: 'Para agua + aceite esencial' }, { l: 'Calor', v: 'Vela tipo tealight (incluida)' }, { l: 'Compatible', v: 'Todos los aceites esenciales' }, { l: 'Tamaño', v: 'Mediano, para mesa o repisa' }],
            benefits: ['Aromaterapia por calor suave', 'Ritual consciente diario', 'Luz de vela relajante', 'Decorativo y funcional', 'Sin consumo eléctrico'],
            faq: [{ q: '¿Qué aceites se usan?', a: 'Cualquier aceite esencial. Agregar 5-10 gotas en agua en la cazoleta y encender la vela debajo.' }, { q: '¿Qué velas se usan?', a: 'Velas tipo tealight estándar. La primera está incluida. Cualquier tealight de supermercado funciona.' }, { q: '¿Cuánto dura el aroma?', a: 'Unas 2-3 horas por carga de agua y aceite, dependiendo de la temperatura y el aceite usado.' }]
        },

        /* ---- TERRARIOS ---- */
        {
            id: 'terrario-mediano', name: 'Terrario Mediano',
            cat: 'terrarios', subcat: 'Mediano', price: 22000,
            badges: [{ cls: 'artisan', label: 'Armado a mano' }],
            img: 'plant',
            descShort: 'Un ecosistema completo en miniatura. El jardín que se cuida prácticamente solo.',
            descLong: '<p>Un terrario cerrado es una maravilla de la biología aplicada a la decoración. Las plantas transpiran agua, esa agua se condensa en las paredes del vidrio, baja de nuevo al sustrato y las plantas la absorben. Un ciclo cerrado, completo, autónomo. El primer terrario cerrado que se conoce en la historia estuvo sellado durante 53 años sin ningún riego adicional.</p><p>Nuestros terrarios medianos están armados a mano con una selección de plantas de interior que prosperan en ambientes húmedos y cerrados: musgos, helechos miniatura, selaginelas. El sustrato es multicapa — carbón activo para evitar malos olores, turba especial para retener humedad, tierra liviana para las raíces. Todo pensado para que el sistema funcione de manera autónoma.</p><p>Como regalo es, por muchos motivos, el más especial de la colección. No se puede comprar en cualquier lugar. No se puede fabricar sin conocimiento. Y produce una reacción de asombro genuino cada vez que alguien lo ve: ¿cómo puede existir algo tan pequeño, tan perfecto y tan vivo?</p>',
            features: [{ l: 'Recipiente', v: 'Vidrio con tapa hermética' }, { l: 'Sistema', v: 'Ciclo cerrado autosustentable' }, { l: 'Plantas', v: 'Musgos y helechos seleccionados' }, { l: 'Sustrato', v: 'Multicapa con carbón activo' }, { l: 'Riego', v: 'Mínimo (nebulización ocasional)' }, { l: 'Armado', v: 'A mano, pieza única' }],
            benefits: ['Autosustentable (mínimo riego)', 'Arte vivo e irrepetible', 'Decoración premium', 'Regalo extraordinario', 'Maravilla botánica'],
            faq: [{ q: '¿Realmente no necesita riego?', a: 'El ciclo cerrado lo hace casi autosuficiente. Si las paredes se ven siempre empañadas, tiene demasiada agua. Si están siempre secas, nebulizar suavemente.' }, { q: '¿Cuánta luz necesita?', a: 'Luz indirecta buena. Nunca sol directo — genera calor excesivo dentro del vidrio.' }, { q: '¿Cuánto dura?', a: 'Con los cuidados correctos, años. El sistema se estabiliza y se vuelve cada vez más equilibrado.' }]
        },
        {
            id: 'terrario-grande', name: 'Terrario Grande',
            cat: 'terrarios', subcat: 'Grande', price: 35000,
            badges: [{ cls: 'artisan', label: 'Armado a mano' }, { cls: 'gift', label: 'Ideal Regalo' }],
            img: 'plant',
            descShort: 'Una obra de arte viva de gran formato. El regalo más extraordinario para cualquier ocasión.',
            descLong: '<p>El terrario grande es nuestra pieza más impactante y más ambiciosa. En un recipiente de vidrio de gran formato, con múltiples plantas, piedras decorativas, musgo vivo, pequeñas figuras y sustrato multicapa cuidadosamente dispuesto, cada terrario grande es una composición artística que también es un ecosistema funcional.</p><p>El proceso de armado toma horas. Cada elemento se coloca con intención: las plantas en las posiciones donde van a prosperar, las piedras creando contraste de texturas, el musgo cubriendo los espacios para dar unidad al conjunto. El resultado es diferente en cada pieza — no existe ningún terrario grande igual a otro.</p><p>Como elemento decorativo, tiene la capacidad de ser el foco visual de cualquier espacio: una mesa de centro, una repisa amplia, un escritorio grande. Una ventana de naturaleza viva dentro de cualquier ambiente. Como regalo, no tiene equivalente: es original, es único, es vivo, es bello, es duradero. Todo lo que un buen regalo debería ser.</p>',
            features: [{ l: 'Recipiente', v: 'Vidrio gran formato con tapa' }, { l: 'Composición', v: 'Plantas, musgo, piedras, figuras' }, { l: 'Sistema', v: 'Ciclo cerrado autosustentable' }, { l: 'Armado', v: 'A mano, horas de trabajo' }, { l: 'Entrega', v: 'Cada pieza única, no replicable' }],
            benefits: ['Obra de arte viva', 'Pieza absolutamente única', 'Mínimo mantenimiento', 'Impacto decorativo máximo', 'Regalo extraordinario e irrepetible'],
            faq: [{ q: '¿Es un buen regalo?', a: 'Es el regalo más especial de la colección. No se puede comprar en un supermercado ni en cualquier florería. Es una pieza artesanal única.' }, { q: '¿Cuánto pesa?', a: 'El terrario grande tiene peso considerable por el vidrio y el sustrato. Consultar antes para coordinar la entrega.' }]
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
