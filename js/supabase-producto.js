/* ==========================================================================
   ARMONÍA ZEN — Supabase product enrichment
   Enriquece el producto base (catalogo-armonia.js) con datos de Supabase:
   imágenes, reviews, ritual, galería, contenido educativo.
   Si Supabase no está disponible o falla, retorna {} y el render usa defaults.
   ========================================================================== */
(function () {
    'use strict';

    window.azEnrichProduct = function (baseProduct) {
        return new Promise(function (resolve) {
            /* Verificar que Supabase esté configurado */
            if (!window.SUPABASE_URL || !window.SUPABASE_ANON || !window.supabase) {
                return resolve({});
            }

            var sb;
            try {
                sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON);
            } catch (e) {
                return resolve({});
            }

            var id = baseProduct.id;

            /* Todas las consultas en paralelo */
            Promise.all([
                sb.from('product_images')      .select('url,alt,type,sort_order').eq('product_id', id).order('sort_order'),
                sb.from('product_benefits')    .select('label,icon,sort_order').eq('product_id', id).order('sort_order'),
                sb.from('product_specs')       .select('label,value,sort_order').eq('product_id', id).order('sort_order'),
                sb.from('product_reviews')     .select('reviewer_name,city,rating,text,photo_url').eq('product_id', id).eq('approved', true),
                sb.from('product_galleries')   .select('image_url,alt,sort_order').eq('product_id', id).order('sort_order'),
                sb.from('rituals')             .select('step_number,title,description').eq('product_id', id).order('step_number'),
                sb.from('educational_content') .select('title,heading,body,sort_order').eq('product_id', id).order('sort_order'),
                sb.from('product_stories')     .select('title,body,image_url').eq('product_id', id).limit(1)
            ]).then(function (results) {
                var images      = (results[0].data || []).map(function(r){ return r.url; });
                var benefits    = (results[1].data || []).map(function(r){ return r.label; });
                var specs       = (results[2].data || []).map(function(r){ return { l: r.label, v: r.value }; });
                var reviews     = results[3].data || [];
                var gallery     = (results[4].data || []).map(function(r){ return r.image_url; });
                var ritualRaw   = results[5].data || [];
                var eduRaw      = results[6].data || [];
                var storyRaw    = results[7].data || [];

                var ritual = ritualRaw.map(function(r){
                    return { title: r.title, desc: r.description };
                });

                var educational = null;
                if (eduRaw.length) {
                    educational = {
                        title: eduRaw[0].title,
                        blocks: eduRaw.map(function(r){ return { h: r.heading || r.title, p: r.body }; })
                    };
                }

                resolve({
                    images:      images.length      ? images      : null,
                    benefits:    benefits.length     ? benefits    : null,
                    specs:       specs.length        ? specs       : null,
                    reviews:     reviews.length      ? reviews     : null,
                    gallery:     gallery.length      ? gallery     : null,
                    ritual:      ritual.length       ? ritual      : null,
                    educational: educational,
                    story:       storyRaw.length     ? storyRaw[0] : null
                });
            }).catch(function () {
                resolve({});
            });
        });
    };

})();
