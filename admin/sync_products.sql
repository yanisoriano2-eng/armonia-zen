-- Sincroniza la tabla products de Supabase con el catalogo real del sitio (59 productos)
-- Ejecutar en Supabase Dashboard -> SQL Editor -> New query

-- 1) Borra productos viejos/de ejemplo que ya no existen en el catalogo real
delete from products where id not in ('anillo-labradorita-pirita', 'anillo-alpaca-liso', 'anillo-alpaca-turquesa', 'anillo-alpaca-labradorita-pirita', 'anillo-alpaca-amatista-regulable', 'anillo-alpaca-cuarzo-rosa', 'anillo-ojo-turco-acero', 'anillo-ojo-tigre-acero', 'aros-amatista-acero', 'aros-aventurina-acero', 'aros-piedra-natural-acero', 'aros-piedra-luna-acero', 'aros-jade-acero', 'aros-ojo-tigre-acero', 'cadena-amatista-pirita-acero', 'cadena-luna-estrella-labradorita', 'cadena-cruz-strass-acero', 'cadena-diamantina-acero', 'cadena-citrino-plata-acero', 'cadena-citrino-bruto-acero', 'cadena-turquesa-acero', 'cadena-labradorita-pirita-dije', 'cadena-corazon-amatista-acero', 'cadena-corazon-cuarzo-rosa-acero', 'cadena-corazon-obsidiana-acero', 'cadena-ojo-turco-acero', 'cadena-triqueta-celta-acero', 'cadena-triqueta-ojo-tigre', 'cadena-triqueta-obsidiana', 'amuleto-nudo-bruja-piedra', 'nudo-bruja-labradorita-chico', 'cadena-nudo-bruja-acero-set', 'pendulo-ojo-tigre', 'pulsera-7-chakras-acero', 'pulsera-ojo-tigre-acero', 'pulsera-sanador-acero', 'pulsera-cobre', 'pulsera-calma-acero', 'pulsera-amatista-cuarzo-obsidiana', 'pulsera-amatista-piedras', 'pulsera-cuarzo-rosa-acero', 'juego-7-chakras-acero', 'fuente-doble-pajaro-real', 'fuente-agua-led-promo', 'cascada-agua-motor-led', 'buda-paz-ceramica', 'buda-sonadora-ceramica', 'trio-buda-sabio-ceramica', 'monje-meditando', 'trio-lechuzas-sabias-real', 'porta-sahumerio-buda-real', 'lampara-sal-himalaya-real', 'terrario-con-plantas', 'planta-monstera-deliciosa', 'planta-pothos', 'planta-bambu-de-la-suerte', 'planta-espada-de-san-jorge', 'planta-filodendro-corazon', 'planta-filodendro-brasil');

-- 2) Inserta o actualiza los productos reales con sus datos e imagenes correctas
insert into products (id, name, category, subcategory, price, stock, status, image, desc_short, desc_long, benefits)
values
('anillo-labradorita-pirita', 'Anillo Labradorita + Pirita', 'joyeria', 'Anillos', 15000, 10, 'active', '/imagenes/catalogo/anillo-labradorita-pirita-real.jpg', 'Intuición y abundancia en una sola pieza. El dúo perfecto para quienes están construyendo algo grande.', '<p>Hay combinaciones que se complementan de manera perfecta — como la intuición y la acción, como el sueño y la voluntad de realizarlo. La labradorita aporta la visión: activa el tercer ojo, protege el aura y amplifica la percepción. La pirita aporta la energía: activa el plexo solar, despierta la confianza y atrae abundancia concreta.</p><p>Es una combinación pensada para quienes no se conforman con soñar — sino para quienes quieren construir con intención y claridad. Para emprendedores, para artistas, para quienes están en un momento de proyección y crecimiento.</p><p>Estéticamente, el contraste entre la labradorita iridiscente y el dorado metálico de la pirita crea una pieza de una belleza completamente original. Una joya que llama la atención por su aspecto antes de que alguien sepa lo que representa.</p>', 'Intuición activa
Abundancia concreta
Confianza y voluntad
Claridad de propósito
Crecimiento integral'),
('anillo-alpaca-liso', 'Anillo de Alpaca', 'joyeria', 'Anillos', 9000, 10, 'active', '/imagenes/catalogo/anillo-alpaca-liso.jpg', 'Anillo artesanal en alpaca de diseño simple y atemporal. Metal noble sudamericano con brillo plateado natural.', '<p>La alpaca —también llamada plata alemana o "nueva plata"— es una aleación de cobre, níquel y zinc que imita el brillo de la plata sin su costo ni su oxidación fácil. Desde hace generaciones, artesanos sudamericanos la trabajan a mano para crear piezas resistentes, livianas y de terminación plateada natural que no requiere baños ni tratamientos.</p><p>Este anillo de diseño liso es una base versátil: combina con cualquier look, se puede usar solo o junto a otros anillos con piedra, y es ideal tanto para el uso diario como para regalar.</p>', 'Resistente al uso diario
No requiere baño de plata
Diseño atemporal
Buena tolerancia en piel sensible'),
('anillo-alpaca-turquesa', 'Anillo de Alpaca con Turquesa', 'joyeria', 'Anillos', 8000, 10, 'active', '/imagenes/catalogo/anillo-alpaca-turquesa.jpg', 'Alpaca artesanal engarzada con turquesa natural. Protección y comunicación en una pieza de inspiración ancestral.', '<p>La turquesa es una de las piedras más antiguas usadas en joyería: egipcios, persas y pueblos originarios de América la consideraban un talismán de protección y buena fortuna, capaz de conectar el cielo con la tierra. Su azul verdoso inconfundible siempre fue sinónimo de viaje seguro y palabra sincera.</p><p>Montada en alpaca, mantiene ese espíritu artesanal: cada anillo tiene su propia veta y matiz, porque ninguna turquesa es igual a otra.</p>', 'Protección energética
Comunicación honesta
Conexión con tradiciones ancestrales
Pieza única por veta natural'),
('anillo-alpaca-labradorita-pirita', 'Anillo de Alpaca con Labradorita y Pirita', 'joyeria', 'Anillos', 15000, 10, 'active', '/imagenes/catalogo/anillo-alpaca-labradorita-pirita.jpg', 'Labradorita y pirita montadas en alpaca artesanal. Intuición y abundancia combinadas en una sola pieza de carácter.', '<p>La labradorita amplifica la intuición y protege el aura con sus destellos cambiantes; la pirita activa la confianza y la voluntad de acción sobre el plexo solar. Combinadas sobre una base de alpaca trabajada a mano, forman una pieza con fuerte identidad visual, ideal para quienes buscan una joya que acompañe procesos de crecimiento y proyección personal.</p>', 'Intuición y visión clara
Confianza y voluntad
Pieza artesanal única
Ideal para momentos de proyección'),
('anillo-alpaca-amatista-regulable', 'Anillo Regulable de Alpaca con Amatista', 'joyeria', 'Anillos', 10000, 10, 'active', '/imagenes/catalogo/anillo-alpaca-amatista-regulable.jpg', 'Amatista natural sobre base de alpaca ajustable. Calma mental y claridad que se adapta a cualquier dedo.', '<p>El diseño regulable de este anillo lo hace ideal para regalar sin preocuparte por el talle: se ajusta a la medida de cada mano conservando su forma. La amatista natural montada en su centro trabaja sobre el chakra corona aportando calma, claridad mental y una sensación de equilibrio que acompaña todo el día.</p>', 'Talla única, ajustable
Calma mental
Ideal para regalo
Elaboración artesanal'),
('anillo-alpaca-cuarzo-rosa', 'Anillo de Alpaca con Cuarzo Rosa', 'joyeria', 'Anillos', 8000, 10, 'active', '/imagenes/catalogo/anillo-alpaca-cuarzo-rosa.jpg', 'Cuarzo rosa natural en alpaca artesanal. La piedra del amor propio en una pieza delicada y accesible.', '<p>El cuarzo rosa es la piedra del amor en su forma más completa: el amor propio, la apertura emocional, los vínculos sanos. Montado sobre alpaca trabajada a mano, este anillo acerca esa energía suave y constante al uso cotidiano, sin perder calidez ni artesanía.</p>', 'Amor propio
Apertura emocional
Ideal para regalo
Pieza artesanal accesible'),
('anillo-ojo-turco-acero', 'Anillo Ojo Turco', 'joyeria', 'Anillos', 6000, 10, 'active', '/imagenes/catalogo/anillo-ojo-turco-acero.jpg', 'El símbolo protector más antiguo del Mediterráneo, ahora en anillo de acero quirúrgico.', '<p>El ojo turco —o nazar— es uno de los amuletos más usados del mundo desde hace más de tres mil años. Nacido en la región de Anatolia, se creía que su mirada azul devolvía cualquier energía negativa o "mal de ojo" a quien la enviaba, protegiendo a quien lo llevaba puesto.</p><p>En anillo de acero quirúrgico, mantiene ese significado ancestral en una pieza resistente, hipoalergénica y de uso diario.</p>', 'Protección energética
Resistente al agua y al uso diario
Hipoalergénico
Símbolo de tradición milenaria'),
('anillo-ojo-tigre-acero', 'Anillo de Acero con Ojo de Tigre', 'joyeria', 'Anillos', 8000, 10, 'active', '/imagenes/catalogo/anillo-ojo-tigre-acero.jpg', 'Ojo de tigre natural montado en acero quirúrgico. Confianza, coraje y poder personal en el dedo.', '<p>El ojo de tigre debe su nombre y su efecto visual —bandas doradas y marrones que parecen moverse con la luz, fenómeno llamado chatoyance— a la estructura fibrosa de su formación mineral. Desde la antigüedad se lo asoció con el coraje de los guerreros y la protección en los viajes.</p><p>Trabaja sobre el plexo solar y el chakra raíz, activando la confianza personal y el poder de decisión. Montado en acero quirúrgico, es una pieza resistente para el uso diario.</p>', 'Confianza y coraje
Poder personal
Protección en decisiones
Resistente y antialérgico'),
('aros-amatista-acero', 'Aros de Acero Quirúrgico con Amatista', 'joyeria', 'Aros', 8000, 10, 'active', '/imagenes/catalogo/aros-amatista-acero.jpg', 'Amatista natural en aros de acero quirúrgico. Calma y claridad mental cerca del rostro, todos los días.', '<p>La amatista es, desde hace milenios, la piedra de la mente clara y el espíritu sereno. En formato aros, su energía calmante queda cerca de la cabeza y los oídos durante toda la jornada, acompañando momentos de alta exigencia mental con una vibración de equilibrio.</p>', 'Calma mental
Claridad y enfoque
Livianos, uso diario
Hipoalergénicos'),
('aros-aventurina-acero', 'Aros de Acero Quirúrgico con Aventurina', 'joyeria', 'Aros', 5000, 10, 'active', '/imagenes/catalogo/aros-aventurina-acero.jpg', 'Aventurina verde natural, la piedra de la buena suerte, en aros livianos de acero quirúrgico.', '<p>La aventurina es conocida como la "piedra de la oportunidad": se cree que atrae la buena suerte, especialmente en lo relacionado al dinero y a los nuevos comienzos. Su verde moteado, con pequeños destellos internos, la hace también una piedra muy fotogénica.</p><p>Trabaja sobre el chakra del corazón aportando calma y optimismo frente a los cambios.</p>', 'Buena suerte y oportunidades
Calma frente al cambio
Piedra natural sin tratamientos
Livianos, uso diario'),
('aros-piedra-natural-acero', 'Aros de Acero Quirúrgico con Piedra Natural', 'joyeria', 'Aros', 5000, 10, 'active', '/imagenes/catalogo/aros-piedra-natural-acero.jpg', 'Piedra natural variable en cada par, montada en acero quirúrgico hipoalergénico. Sencillez y energía natural.', '<p>Estos aros combinan la resistencia del acero quirúrgico con una piedra natural cuya variedad depende del stock disponible en cada momento, por lo que cada par tiene su propia identidad. Consultanos por WhatsApp la piedra disponible actualmente.</p>', 'Livianos y resistentes
Hipoalergénicos
Pieza natural y única
Ideal para uso diario'),
('aros-piedra-luna-acero', 'Aros de Acero Quirúrgico con Piedra de la Luna', 'joyeria', 'Aros', 5000, 10, 'active', '/imagenes/catalogo/aros-piedra-luna-acero.jpg', 'Energía femenina e intuitiva en aros de acero quirúrgico. El resplandor único de la piedra de la luna.', '<p>La piedra de la luna captura la luz de un modo que ninguna otra piedra logra: un resplandor suave y flotante, llamado adularescencia, asociado en todas las tradiciones a lo femenino, lo cíclico y lo intuitivo. En aros, es una presencia sutil pero constante durante todo el día.</p>', 'Conexión con la intuición
Energía femenina
Livianos, uso diario
Hipoalergénicos'),
('aros-jade-acero', 'Aros de Acero Quirúrgico con Jade', 'joyeria', 'Aros', 5000, 10, 'active', '/imagenes/catalogo/aros-jade-acero.jpg', 'Jade natural en aros de acero quirúrgico. Cinco mil años de historia de equilibrio y prosperidad, en formato diario.', '<p>Durante milenios el jade fue la piedra más valiosa de China, usada en rituales sagrados y como símbolo de fortuna y protección. Su verde natural conserva esa elegancia atemporal en un par de aros livianos, pensados para el uso de todos los días.</p>', 'Abundancia y equilibrio
Protección energética
Livianos, uso diario
Hipoalergénicos'),
('aros-ojo-tigre-acero', 'Aros de Acero Quirúrgico con Ojo de Tigre', 'joyeria', 'Aros', 5000, 10, 'active', '/imagenes/catalogo/aros-ojo-tigre-acero.jpg', 'Ojo de tigre natural en aros de acero quirúrgico. Confianza y poder personal para el día a día.', '<p>Sus bandas doradas y marrones, que parecen moverse con la luz, hicieron del ojo de tigre un símbolo de coraje desde la antigüedad. En aros, su energía trabaja sobre el plexo solar activando la confianza personal en cada decisión del día.</p>', 'Confianza y coraje
Poder personal
Livianos, uso diario
Hipoalergénicos'),
('cadena-amatista-pirita-acero', 'Cadena Amatista y Pirita', 'joyeria', 'Cadenas', 10000, 10, 'active', '/imagenes/catalogo/cadena-amatista-pirita-acero.jpg', 'Amatista y pirita combinadas en cadena de acero quirúrgico. Calma mental y abundancia en una sola pieza.', '<p>La amatista aporta calma y claridad; la pirita, confianza y voluntad de acción. Juntas en una cadena de acero quirúrgico crean una pieza de uso diario resistente que equilibra la mente serena con la energía necesaria para avanzar.</p>', 'Calma y claridad mental
Confianza y voluntad
Resistente al agua y al uso diario
Hipoalergénica'),
('cadena-luna-estrella-labradorita', 'Cadena Luna y Estrella con Labradorita', 'joyeria', 'Cadenas', 15000, 10, 'active', '/imagenes/catalogo/cadena-luna-estrella-labradorita.jpg', 'Dije de luna y estrella con labradorita en cadena de acero. Un guiño celeste a la intuición y el misterio de la noche.', '<p>La luna y la estrella son símbolos celestiales presentes en casi todas las culturas: guía, misterio, ciclos y feminidad. Combinados con una labradorita natural —la piedra que guarda destellos de aurora en su interior— forman un dije con fuerte carga simbólica y visual.</p>', 'Intuición amplificada
Conexión con los ciclos
Protección del aura
Pieza con fuerte identidad visual'),
('cadena-cruz-strass-acero', 'Cadena Cruz con Strass', 'joyeria', 'Cadenas', 6000, 10, 'active', '/imagenes/catalogo/cadena-cruz-strass-acero.jpg', 'Dije de cruz con strass en cadena de acero quirúrgico. Fe y protección con un brillo delicado.', '<p>La cruz es uno de los símbolos de fe y protección más reconocidos, presente en la joyería de todas las épocas. Esta versión suma pequeños strass que capturan la luz, sumando un brillo sutil a un símbolo de siglos de tradición.</p>', 'Símbolo de fe y protección
Brillo delicado
Resistente al agua
Hipoalergénica'),
('cadena-diamantina-acero', 'Cadena Piedra Diamantina', 'joyeria', 'Cadenas', 10000, 10, 'active', '/imagenes/catalogo/cadena-diamantina-acero.jpg', 'Cuarzo diamantina en bruto sobre cadena de acero quirúrgico. Luz y alegría en su forma más natural.', '<p>La diamantina es un cuarzo natural cubierto de pequeñísimos cristales que reflejan la luz en todas direcciones, como si tuviera escarcha propia. Se la asocia con la alegría, la amplificación de energía y la claridad mental, y su forma en bruto conserva intacta la textura con la que la formó la tierra.</p>', 'Alegría y luminosidad
Amplifica energía positiva
Pieza única en bruto
Resistente al uso diario'),
('cadena-citrino-plata-acero', 'Cadena Citrino con Baño de Plata', 'joyeria', 'Cadenas', 12000, 10, 'active', '/imagenes/catalogo/cadena-citrino-plata-acero.jpg', 'Citrino natural con baño de plata sobre cadena de acero. Alegría y abundancia con terminación luminosa.', '<p>El citrino es la piedra del sol: captura la luz y la irradia como alegría y abundancia constante. Este dije suma un delicado baño de plata que realza su calidez dorada, montado sobre una cadena de acero quirúrgico resistente al uso diario.</p>', 'Alegría y abundancia
No acumula energías negativas
Terminación luminosa
Resistente al uso diario'),
('cadena-citrino-bruto-acero', 'Cadena Piedra de Citrino en Bruto', 'joyeria', 'Cadenas', 12000, 10, 'active', '/imagenes/catalogo/cadena-citrino-bruto-acero.jpg', 'Citrino en bruto, tal como lo entrega la tierra, sobre cadena de acero quirúrgico.', '<p>A diferencia de las piedras pulidas, el citrino en bruto conserva su forma y textura naturales, con toda la fuerza visual de un cristal recién extraído. Sigue trabajando sobre el plexo solar activando la alegría y la confianza, ahora en su versión más auténtica y menos intervenida.</p>', 'Alegría y confianza
Pieza natural sin intervenir
Cada piedra es única
Resistente al uso diario'),
('cadena-turquesa-acero', 'Dije de Acero con Piedra Turquesa', 'joyeria', 'Cadenas', 12000, 10, 'active', '/imagenes/catalogo/cadena-turquesa-acero.jpg', 'Turquesa natural en dije de acero quirúrgico. Protección y comunicación honesta, cerca de la garganta.', '<p>Egipcios, persas y pueblos originarios de América coincidieron en algo: la turquesa protege y facilita la palabra sincera. Llevada en cadena, descansa sobre el chakra de la garganta, favoreciendo una comunicación más clara y una sensación de resguardo durante todo el día.</p>', 'Protección energética
Comunicación honesta
Resistente al uso diario
Cada piedra es única'),
('cadena-labradorita-pirita-dije', 'Dije Labradorita y Pirita', 'joyeria', 'Cadenas', 20000, 10, 'active', '/imagenes/catalogo/cadena-labradorita-pirita-dije.jpg', 'Labradorita y pirita en un dije de mayor porte sobre cadena de acero. Intuición y abundancia en su versión más protagonista.', '<p>La versión en dije de esta combinación permite piezas de labradorita y pirita más grandes y expresivas que en un anillo, luciendo mejor tanto la labradorescencia iridiscente de una como el brillo metálico dorado de la otra. Una pieza pensada para quienes construyen algo grande y quieren llevarlo puesto.</p>', 'Intuición activa
Abundancia concreta
Pieza protagonista
Combinación única de piedras'),
('cadena-corazon-amatista-acero', 'Cadena Corazón Amatista (Acero Quirúrgico)', 'joyeria', 'Cadenas Corazón', 8000, 10, 'active', '/imagenes/catalogo/cadena-corazon-amatista-acero.jpg', 'El corazón de amatista natural, en su versión de acero quirúrgico resistente al uso diario.', '<p>Tallada en forma de corazón, la amatista suma a su energía de calma y claridad el significado universal del amor. Montada sobre cadena de acero quirúrgico, es una versión más accesible y resistente para llevar puesta todos los días sin cuidados especiales.</p>', 'Amor consciente
Calma mental
Resistente al agua y al uso diario
Ideal para regalo'),
('cadena-corazon-cuarzo-rosa-acero', 'Cadena Corazón Cuarzo Rosa (Acero Quirúrgico)', 'joyeria', 'Cadenas Corazón', 8000, 10, 'active', '/imagenes/catalogo/cadena-corazon-cuarzo-rosa-acero.jpg', 'El símbolo del amor tallado en cuarzo rosa natural, sobre cadena de acero quirúrgico.', '<p>No hay combinación más directa que el cuarzo rosa —la piedra del amor propio— tallado en forma de corazón. Sobre una cadena de acero quirúrgico, es una de las opciones de regalo más elegidas: accesible, resistente y con un significado que no necesita explicación.</p>', 'Amor propio
Apertura emocional
Resistente al uso diario
Regalo significativo'),
('cadena-corazon-obsidiana-acero', 'Cadena Corazón Obsidiana (Acero Quirúrgico)', 'joyeria', 'Cadenas Corazón', 8000, 10, 'active', '/imagenes/catalogo/cadena-corazon-obsidiana-acero.jpg', 'Un corazón de obsidiana volcánica en cadena de acero. Proteger el corazón desde la fuerza, no desde el miedo.', '<p>La obsidiana negra tallada en corazón es una paradoja hermosa: el símbolo del amor en la piedra de la protección. No cierra el corazón, lo fortalece — ideal para quienes están atravesando procesos de sanación emocional o aprendiendo a poner límites desde el amor propio.</p>', 'Protección emocional
Fuerza interior
Resistente al uso diario
Pieza de carácter'),
('cadena-ojo-turco-acero', 'Dije Ojo Turco con Cadena', 'joyeria', 'Amuletos', 6000, 10, 'active', '/imagenes/catalogo/cadena-ojo-turco-acero.jpg', 'El nazar mediterráneo en dije de acero quirúrgico. El amuleto de protección más usado del mundo.', '<p>Con más de tres mil años de historia, el ojo turco o nazar nació en Anatolia como escudo contra el "mal de ojo": la creencia de que una mirada envidiosa puede dañar sin intención. Llevado en cadena, descansa sobre el pecho como un recordatorio constante de protección.</p>', 'Protección energética
Símbolo de tradición milenaria
Resistente al uso diario
Ideal para regalo'),
('cadena-triqueta-celta-acero', 'Dije Triqueta Celta', 'joyeria', 'Amuletos', 15000, 10, 'active', '/imagenes/catalogo/cadena-triqueta-celta-acero.jpg', 'El nudo de la trinidad celta, símbolo de unión y protección, en dije de acero quirúrgico.', '<p>La triqueta —o nudo de la trinidad— es uno de los símbolos celtas más antiguos: tres líneas continuas, sin principio ni fin, que representan la unión de cuerpo, mente y espíritu, o de pasado, presente y futuro. Adoptada luego por la tradición cristiana como símbolo de la Santísima Trinidad, atravesó los siglos sin perder su fuerza como amuleto de protección y conexión.</p>', 'Protección y unión
Conexión cuerpo-mente-espíritu
Símbolo milenario
Resistente al uso diario'),
('cadena-triqueta-ojo-tigre', 'Triqueta Celta con Ojo de Tigre', 'joyeria', 'Amuletos', 15000, 10, 'active', '/imagenes/catalogo/cadena-triqueta-ojo-tigre.jpg', 'El símbolo celta de protección combinado con la fuerza del ojo de tigre en cadena de acero.', '<p>La triqueta aporta protección y unión; el ojo de tigre engarzado en su centro suma confianza y coraje personal. Una combinación pensada para quienes buscan un amuleto con carácter, capaz de acompañar tanto en lo espiritual como en lo cotidiano.</p>', 'Protección y coraje
Confianza personal
Símbolo celta milenario
Resistente al uso diario'),
('cadena-triqueta-obsidiana', 'Triqueta Celta con Obsidiana', 'joyeria', 'Amuletos', 15000, 10, 'active', '/imagenes/catalogo/cadena-triqueta-obsidiana.jpg', 'La triqueta celta y la obsidiana volcánica, dos símbolos de protección en una sola pieza.', '<p>La triqueta protege desde la unión; la obsidiana, desde la transformación y el arraigo. Juntas en un dije de acero quirúrgico, forman un amuleto de protección doble: simbólica y mineral, ideal para quienes atraviesan procesos de cambio importantes.</p>', 'Protección profunda
Arraigo y transformación
Símbolo celta milenario
Resistente al uso diario'),
('amuleto-nudo-bruja-piedra', 'Dije Nudo de Bruja con Piedra', 'joyeria', 'Amuletos', 10000, 10, 'active', '/imagenes/catalogo/amuleto-nudo-bruja-piedra.jpg', 'El nudo de bruja tejido a mano con una piedra natural. Protección ancestral en formato dije.', '<p>El nudo de bruja —o witch knot— es uno de los símbolos de protección más antiguos de la tradición europea: se lo encuentra grabado en piedras de la era vikinga y en amuletos medievales de Escocia e Irlanda. Su patrón sin principio ni fin no deja entrada a energías no deseadas. Esta versión suma una piedra natural en su centro, reforzando su función protectora.</p>', 'Protección energética
Campo áurico limpio
Pieza artesanal única
Tradición ancestral'),
('nudo-bruja-labradorita-chico', 'Dije Nudo de Bruja con Labradorita', 'joyeria', 'Amuletos', 9000, 10, 'active', '/imagenes/catalogo/nudo-bruja-labradorita-chico.jpg', 'Versión chica del nudo de bruja, con labradorita natural sobre cadena de acero.', '<p>La labradorita suma su labradorescencia iridiscente y su energía de protección del aura al nudo de bruja tejido a mano. Esta versión de menor porte es ideal para quienes buscan un amuleto discreto pero con todo el significado del símbolo original.</p>', 'Protección energética
Intuición amplificada
Formato discreto
Pieza artesanal'),
('cadena-nudo-bruja-acero-set', 'Dije Nudo de Bruja con Cadena de Acero (Grande)', 'joyeria', 'Amuletos', 15000, 10, 'active', '/imagenes/catalogo/cadena-nudo-bruja-acero-set.jpg', 'La versión de mayor porte del nudo de bruja, tejida a mano sobre cadena de acero quirúrgico.', '<p>Para quienes buscan que el símbolo se note, esta versión más grande del nudo de bruja mantiene el mismo tejido artesanal y el mismo propósito protector, con una presencia visual mucho más marcada sobre el pecho.</p>', 'Protección energética potente
Presencia visual marcada
Pieza artesanal única
Tradición ancestral'),
('pendulo-ojo-tigre', 'Péndulo de Ojo de Tigre', 'joyeria', 'Amuletos', 10000, 10, 'active', '/imagenes/catalogo/anillo-ojo-tigre-acero.jpg', 'Péndulo tallado en ojo de tigre natural, para rituales de radiestesia, meditación o simplemente como objeto de poder.', '<p>Los péndulos de piedra natural se usan hace siglos como herramienta de radiestesia y como objeto de meditación y conexión energética. Tallado en ojo de tigre, este péndulo suma la energía de confianza y coraje propia de la piedra a la práctica que elijas darle.</p>', 'Herramienta de conexión energética
Confianza y coraje
Pieza natural única
Objeto de poder personal'),
('pulsera-7-chakras-acero', 'Pulsera 7 Chakras (Acero Quirúrgico)', 'joyeria', 'Pulseras', 10000, 10, 'active', '/imagenes/catalogo/pulsera-7-chakras-acero.jpg', 'Siete piedras naturales, una por cada chakra, montadas en acero quirúrgico resistente.', '<p>Cada uno de los siete chakras principales del cuerpo tiene una piedra asociada: desde la turmalina o el granate en la raíz hasta la amatista en la corona. Esta pulsera reúne las siete en un solo diseño, pensado para acompañar un trabajo de equilibrio energético integral desde la muñeca, todos los días.</p>', 'Equilibrio energético integral
Resistente al agua y al uso diario
Hipoalergénica
Ideal para regalo'),
('pulsera-ojo-tigre-acero', 'Pulsera de Acero con Ojo de Tigre', 'joyeria', 'Pulseras', 5000, 10, 'active', '/imagenes/catalogo/pulsera-ojo-tigre-acero.jpg', 'Cuentas de ojo de tigre natural en pulsera elástica de acero quirúrgico. Confianza y coraje en la muñeca.', '<p>El ojo de tigre trabaja sobre el plexo solar y el chakra raíz, activando la confianza y el coraje frente a los desafíos cotidianos. En formato pulsera, su energía queda siempre cerca, lista para recordar el propio poder personal.</p>', 'Confianza y coraje
Poder personal
Resistente al uso diario
Hipoalergénica'),
('pulsera-sanador-acero', 'Pulsera "Sanador" de Acero Quirúrgico', 'joyeria', 'Pulseras', 10000, 10, 'active', '/imagenes/catalogo/pulsera-sanador-acero.jpg', 'Combinación de piedras naturales pensada para acompañar procesos de sanación energética.', '<p>Esta pulsera reúne una selección de piedras naturales elegidas específicamente por su efecto combinado sobre la sanación emocional y energética: cada una aporta una capa distinta de calma, protección o apertura, trabajando juntas como un pequeño sistema de apoyo diario.</p>', 'Apoyo en procesos de sanación
Calma y protección combinadas
Resistente al uso diario
Hipoalergénica'),
('pulsera-cobre', 'Pulsera de Cobre', 'joyeria', 'Pulseras', 10000, 10, 'active', '/imagenes/catalogo/pulsera-cobre.jpg', 'Pulsera artesanal en cobre macizo. Conductor natural de energía con un acabado que mejora con el tiempo.', '<p>El cobre fue uno de los primeros metales que la humanidad aprendió a trabajar, usado tanto en herramientas como en objetos sagrados por su capacidad de conducir energía. Esta pulsera artesanal desarrolla con el uso una pátina propia, volviéndose más singular con el paso del tiempo.</p>', 'Conductividad energética
Artesanía auténtica
Se ajusta a la muñeca
Mejora con el paso del tiempo'),
('pulsera-calma-acero', 'Pulsera Calma de Acero Quirúrgico', 'joyeria', 'Pulseras', 10000, 10, 'active', '/imagenes/catalogo/pulsera-calma-acero.jpg', 'Piedras naturales seleccionadas por su efecto calmante, montadas en acero quirúrgico.', '<p>Pensada para momentos de ansiedad, sobrecarga o simplemente para acompañar el día a día con más serenidad, esta pulsera combina piedras naturales de energía calmante en una base resistente al uso diario.</p>', 'Calma y serenidad
Reducción de la sobrecarga mental
Resistente al uso diario
Hipoalergénica'),
('pulsera-amatista-cuarzo-obsidiana', 'Pulsera Amatista, Cuarzo Rosa y Obsidiana', 'joyeria', 'Pulseras', 7000, 10, 'active', '/imagenes/catalogo/pulsera-amatista-cuarzo-obsidiana.jpg', 'Tres piedras, tres energías: calma, amor propio y protección, reunidas en una sola pulsera.', '<p>Amatista para la calma mental, cuarzo rosa para el amor propio y obsidiana para la protección: esta pulsera combina tres de las piedras más elegidas de la cristaloterapia en un diseño equilibrado que trabaja sobre la mente, el corazón y el campo energético a la vez.</p>', 'Calma mental
Amor propio
Protección energética
Equilibrio integral'),
('pulsera-amatista-piedras', 'Pulsera de Piedras Amatista', 'joyeria', 'Pulseras', 10000, 10, 'active', '/imagenes/catalogo/pulsera-amatista-piedras.jpg', 'Cuentas de amatista natural en pulsera elástica. Calma y claridad mental en la muñeca.', '<p>Cada cuenta de esta pulsera es amatista natural, sin teñidos ni imitaciones. Llevada cerca del pulso, mantiene su energía calmante y clarificadora en contacto constante con el cuerpo durante toda la jornada.</p>', 'Calma mental profunda
Claridad y enfoque
Pieza 100% natural
Resistente al uso diario'),
('pulsera-cuarzo-rosa-acero', 'Pulsera de Acero y Cuarzo Rosa', 'joyeria', 'Pulseras', 7000, 10, 'active', '/imagenes/catalogo/pulsera-cuarzo-rosa-acero.jpg', 'Cuarzo rosa natural en pulsera de acero quirúrgico. Amor propio en su versión más accesible y resistente.', '<p>El cuarzo rosa es la piedra del amor en todas sus formas, especialmente el amor propio. Esta pulsera combina cuentas naturales con detalles de acero quirúrgico, para una pieza resistente que puede usarse sin cuidados especiales.</p>', 'Amor propio
Apertura emocional
Resistente al uso diario
Ideal para regalo'),
('juego-7-chakras-acero', 'Juego Cadena + Pulsera 7 Chakras', 'joyeria', 'Pulseras', 14900, 10, 'active', '/imagenes/catalogo/juego-7-chakras-acero.jpg', 'El juego completo: cadena y pulsera 7 chakras, en acero quirúrgico, a juego.', '<p>Para quienes quieren el equilibrio de los siete chakras en dos piezas a juego: esta combinación de cadena y pulsera, ambas con las siete piedras correspondientes a cada centro energético, es una de las opciones de regalo más elegidas de la colección.</p>', 'Equilibrio energético integral
Set completo a juego
Ideal para regalo
Resistente al uso diario'),
('fuente-doble-pajaro-real', 'Fuente Doble con Pájaros, Motor y Luces LED', 'fuentes', 'Decorativas', 70000, 10, 'active', '/imagenes/catalogo/fuente-doble-pajaro-real.jpg', 'Fuente de cerámica de dos niveles con pájaros, motor silencioso, luces LED y piedras decorativas.', '<p>En el Feng Shui, el agua en movimiento representa la abundancia y la buena energía circulando libremente por el hogar. Esta fuente de cerámica combina el sonido relajante del agua con pájaros decorativos, luces LED que iluminan el flujo por la noche y piedras naturales que completan la composición.</p>', 'Sonido relajante de agua
Ilumina con luces LED
Favorece el flujo de energía positiva
Pieza decorativa destacada'),
('fuente-agua-led-promo', 'Fuente de Agua con Luces LED y Pájaro', 'fuentes', 'Decorativas', 38900, 10, 'active', '/imagenes/catalogo/fuente-agua-led-promo.jpg', 'Fuente de cerámica de un nivel, con motor, luces LED y un pájaro decorativo. Versión más accesible.', '<p>La misma idea de la fuente de agua en movimiento —sonido, luz y flujo constante— en un formato más compacto y accesible. Incluye motor y luces LED, y suma un pájaro de cerámica que completa la escena decorativa.</p>', 'Sonido relajante de agua
Ilumina con luces LED
Formato compacto y accesible
Favorece el flujo de energía positiva'),
('cascada-agua-motor-led', 'Cascada de Agua con Motor y Luces LED', 'fuentes', 'Cascada', 39000, 10, 'active', '/imagenes/catalogo/cascada-agua-motor-led.jpg', 'Fuente tipo cascada, con motor y luces LED. El movimiento del agua deslizándose en varios niveles.', '<p>A diferencia de las fuentes de pileta, esta cascada recrea el agua deslizándose en distintos niveles, como una caída natural en miniatura. El motor mantiene el flujo constante y las luces LED lo realzan durante la noche, creando un punto focal relajante en cualquier ambiente.</p>', 'Sonido de agua en movimiento
Ilumina con luces LED
Favorece el flujo de energía positiva
Punto focal decorativo'),
('buda-paz-ceramica', 'Buda de la Paz', 'decoracion', 'Budas', 8000, 10, 'active', '/imagenes/catalogo/buda-paz-ceramica.jpg', 'Figura de cerámica del Buda de la paz. Serenidad y buena energía para cualquier rincón del hogar.', '<p>La figura del Buda no representa una religión sino un estado: la paz interior que se alcanza al soltar el apego y observar la vida con calma. Colocada en un living, un escritorio o la entrada de la casa, funciona como un recordatorio diario de bajar el ritmo y respirar.</p>', 'Serenidad y calma
Energía positiva en el hogar
Ideal para regalo
Pieza decorativa atemporal'),
('buda-sonadora-ceramica', 'Buda Soñador', 'decoracion', 'Budas', 24900, 10, 'active', '/imagenes/catalogo/buda-sonadora-ceramica.jpg', 'Buda recostado en actitud de descanso. Representa el soltar, el fluir y el permitirse simplemente ser.', '<p>A diferencia del Buda meditativo sentado, esta figura recostada representa el descanso consciente: el momento de soltar el control y confiar en el proceso. Es una pieza de mayor tamaño, pensada como punto focal decorativo en espacios de descanso.</p>', 'Descanso y soltar el control
Pieza decorativa de gran presencia
Ideal para regalo
Energía relajante'),
('trio-buda-sabio-ceramica', 'Trío Buda Sabio', 'decoracion', 'Budas', 9000, 10, 'active', '/imagenes/catalogo/trio-buda-sabio-ceramica.jpg', 'Tres budas en cerámica, cada uno con una postura distinta. Un set decorativo de armonía y sabiduría.', '<p>El set de tres figuras es un clásico de la decoración consciente: cada Buda ocupa una postura diferente, evocando la idea de cuerpo, palabra y mente en equilibrio. Juntos, funcionan como un pequeño altar decorativo para cualquier estantería o mesa.</p>', 'Armonía y sabiduría
Set decorativo completo
Ideal para regalo
Pieza atemporal'),
('monje-meditando', 'Monje Meditando', 'decoracion', 'Monjes', 9000, 10, 'active', '/imagenes/catalogo/monje-meditando.jpg', 'Figura de monje en postura de meditación. Un recordatorio diario de la práctica de la atención plena.', '<p>Más allá de cualquier tradición religiosa puntual, la figura del monje sentado en meditación representa una práctica universal: la de detenerse, respirar y observar la propia mente. Es una pieza ideal para un rincón de meditación, un escritorio o cualquier espacio donde se busque más calma.</p>', 'Calma y presencia
Recordatorio de mindfulness
Pieza decorativa versátil
Ideal para regalo'),
('trio-lechuzas-sabias-real', 'Trío de Lechuzas Sabias', 'decoracion', 'Lechuzas', 12000, 10, 'active', '/imagenes/catalogo/trio-lechuzas-sabias-real.jpg', 'Tres lechuzas de cerámica, símbolo de sabiduría y protección nocturna, en un set decorativo.', '<p>Desde la Grecia clásica —donde acompañaba a Atenea, diosa de la sabiduría— hasta las tradiciones andinas que la asocian con la protección nocturna y la visión más allá de lo evidente, la lechuza es un símbolo universal de conocimiento. Este set de tres figuras es una pieza decorativa que combina belleza y significado.</p>', 'Sabiduría y protección
Set decorativo completo
Ideal para regalo
Pieza de gran presencia visual'),
('porta-sahumerio-buda-real', 'Porta Sahumerio + Buda', 'decoracion', 'Porta Sahumarios', 4900, 10, 'active', '/imagenes/catalogo/porta-sahumerio-buda-real.jpg', 'Porta sahumerio de cerámica con figura de Buda. Práctico, decorativo y listo para tu ritual diario.', '<p>Un objeto funcional que también decora: este porta sahumerio recoge la ceniza mientras el humo del incienso limpia el ambiente, y suma la presencia serena del Buda al momento del ritual. Ideal para incorporar un hábito diario de meditación o simplemente perfumar la casa con intención.</p>', 'Práctico para uso diario
Recoge la ceniza
Suma presencia decorativa
Ideal para regalo'),
('lampara-sal-himalaya-real', 'Lámpara de Sal del Himalaya', 'lamparas', 'Clásica', 19000, 10, 'active', '/imagenes/catalogo/lampara-sal-himalaya-real.jpg', 'Bloque natural de sal del Himalaya con base de madera. Resplandor ámbar cálido y purificador.', '<p>Extraída de yacimientos milenarios en las faldas del Himalaya, la sal rosada se talla en bloques naturales que, iluminados desde adentro, emiten un resplandor ámbar cálido y relajante. Se le atribuye la capacidad de liberar iones negativos al calentarse, contrarrestando el exceso de iones positivos generados por dispositivos electrónicos.</p><p>Más allá de su efecto purificador, es una de las piezas de decoración más elegidas para dormitorios y salas de estar por la calidez que aporta a cualquier ambiente.</p>', 'Ambiente cálido y relajante
Purifica el aire del ambiente
Pieza 100% natural
Ideal para dormitorio o living'),
('terrario-con-plantas', 'Terrario con Plantas', 'terrarios', 'Mediano', 9000, 10, 'active', '/imagenes/catalogo/terrario-con-plantas.jpg', 'Terrario de vidrio armado a mano, con sus plantitas incluidas. Un pequeño ecosistema listo para tu casa.', '<p>Cada terrario se arma a mano combinando plantas de bajo mantenimiento, sustrato y elementos decorativos dentro de un recipiente de vidrio. El resultado es un pequeño ecosistema autocontenido que aporta vida y frescura a cualquier rincón, sin pedir demasiado a cambio.</p>', 'Vida y frescura para el espacio
Bajo mantenimiento
Pieza decorativa única
Ideal para regalo'),
('planta-monstera-deliciosa', 'Monstera Deliciosa', 'plantas', 'Interior', 28000, 10, 'active', 'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=1000&q=80&auto=format&fit=crop', 'La reina del interiorismo contemporáneo. Sus hojas perforadas dibujan sombras vivas y llenan un rincón vacío con elegancia tropical.', '<p>La reina del interiorismo contemporáneo. Sus hojas perforadas dibujan sombras vivas en la pared y llenan un rincón vacío con una elegancia tropical inconfundible. Resistente y agradecida.</p>', 'Purifica el aire
Bajo mantenimiento
Presencia decorativa fuerte'),
('planta-pothos', 'Pothos', 'plantas', 'Interior', 16000, 10, 'active', 'https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?w=1000&q=80&auto=format&fit=crop', 'La más indulgente de todas. Crece colgando o trepando, tolera el descuido y purifica el aire mientras lo hace.', '<p>La más indulgente de todas. Crece colgando o trepando, tolera el descuido y purifica el aire mientras lo hace. Perfecta para estantes altos donde su cascada verde puede caer libre.</p>', 'Muy fácil de cuidar
Purifica el aire
Ideal para colgar'),
('planta-bambu-de-la-suerte', 'Bambú de la Suerte', 'plantas', 'Interior', 19000, 10, 'active', 'https://images.unsplash.com/photo-1532920161727-344adb090f7f?w=1000&q=80&auto=format&fit=crop', 'Símbolo de prosperidad en el Feng Shui. Crece en agua o en tierra y aporta verticalidad, orden y buena fortuna.', '<p>Símbolo de prosperidad en el Feng Shui. Crece en agua o en tierra, casi sin pedir nada, y aporta verticalidad y orden. Tradicionalmente se ubica en el este del hogar para atraer la buena fortuna.</p>', 'Trae buena fortuna (Feng Shui)
Crece en agua, sin tierra
Bajo mantenimiento'),
('planta-espada-de-san-jorge', 'Espada de San Jorge', 'plantas', 'Interior', 24000, 10, 'active', 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=1000&q=80&auto=format&fit=crop', 'Indestructible y arquitectónica. Sus hojas erguidas purifican el aire incluso de noche y aguantan la sequía sin quejarse.', '<p>Indestructible y arquitectónica. Sus hojas erguidas como espadas purifican el aire incluso de noche, y aguantan la sequía sin quejarse. La planta perfecta para quien cree que no sabe cuidar plantas.</p>', 'Purifica el aire de noche
Resiste la sequía
Casi imposible de matar'),
('planta-filodendro-corazon', 'Filodendro Corazón', 'plantas', 'Interior', 17000, 10, 'active', 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=1000&q=80&auto=format&fit=crop', 'Hojas en forma de corazón que se enredan con suavidad. Crecimiento generoso y carácter dócil, ideal para colgar.', '<p>Hojas en forma de corazón que se enredan con suavidad por donde las dejes. De crecimiento generoso y carácter dócil, es ideal para colgar y dejar que el verde abrace una esquina del cuarto.</p>', 'Ideal para colgar
Crecimiento rápido
Hojas decorativas en forma de corazón'),
('planta-filodendro-brasil', 'Filodendro Brasil', 'plantas', 'Interior', 18000, 10, 'active', 'https://images.unsplash.com/photo-1641977563529-7b617571393d?w=1000&q=80&auto=format&fit=crop', 'La versión luminosa del filodendro: sus hojas combinan dos verdes que parecen pintados a mano.', '<p>La versión luminosa del filodendro corazón: sus hojas combinan dos verdes que parecen pintados a mano. Trae movimiento y un toque vibrante a los rincones que piden un poco más de vida.</p>', 'Follaje bicolor llamativo
Fácil de cuidar
Ideal para colgar')
on conflict (id) do update set
  name = excluded.name,
  category = excluded.category,
  subcategory = excluded.subcategory,
  price = excluded.price,
  stock = excluded.stock,
  status = excluded.status,
  image = excluded.image,
  desc_short = excluded.desc_short,
  desc_long = excluded.desc_long,
  benefits = excluded.benefits,
  updated_at = now();
