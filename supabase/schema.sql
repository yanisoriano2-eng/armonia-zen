-- =============================================================================
-- ARMONÍA ZEN — Supabase schema para página de producto premium
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- =============================================================================

-- Extensión para UUID
create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- PRODUCTS (datos principales — complementa catalogo-armonia.js)
-- -----------------------------------------------------------------------------
create table if not exists products (
    id              text primary key,           -- mismo id que en catalogo-armonia.js
    name            text not null,
    category        text not null,
    subcategory     text,
    price           numeric(10,2) not null,
    price_orig      numeric(10,2),
    description_short text,
    description_long  text,
    image_key       text default 'crystal',
    stock           integer default 99,
    active          boolean default true,
    sort_order      integer default 0,
    created_at      timestamptz default now(),
    updated_at      timestamptz default now()
);

-- -----------------------------------------------------------------------------
-- PRODUCT_IMAGES
-- -----------------------------------------------------------------------------
create table if not exists product_images (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    url         text not null,
    alt         text,
    type        text default 'image',   -- 'image' | 'video' | '360'
    sort_order  integer default 0
);

-- -----------------------------------------------------------------------------
-- PRODUCT_BENEFITS
-- -----------------------------------------------------------------------------
create table if not exists product_benefits (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    label       text not null,
    icon        text,
    sort_order  integer default 0
);

-- -----------------------------------------------------------------------------
-- PRODUCT_SPECS (ficha técnica)
-- -----------------------------------------------------------------------------
create table if not exists product_specs (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    label       text not null,
    value       text not null,
    sort_order  integer default 0
);

-- -----------------------------------------------------------------------------
-- PRODUCT_STORIES (storytelling / descripción editorial)
-- -----------------------------------------------------------------------------
create table if not exists product_stories (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    title       text,
    body        text not null,
    image_url   text
);

-- -----------------------------------------------------------------------------
-- PRODUCT_FAQS
-- -----------------------------------------------------------------------------
create table if not exists product_faqs (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    question    text not null,
    answer      text not null,
    sort_order  integer default 0
);

-- -----------------------------------------------------------------------------
-- PRODUCT_REVIEWS
-- -----------------------------------------------------------------------------
create table if not exists product_reviews (
    id              uuid primary key default gen_random_uuid(),
    product_id      text references products(id) on delete cascade,
    reviewer_name   text not null,
    city            text,
    rating          integer default 5 check (rating between 1 and 5),
    text            text not null,
    photo_url       text,
    approved        boolean default false,
    created_at      timestamptz default now()
);

-- -----------------------------------------------------------------------------
-- RELATED_PRODUCTS
-- -----------------------------------------------------------------------------
create table if not exists related_products (
    id                  uuid primary key default gen_random_uuid(),
    product_id          text references products(id) on delete cascade,
    related_product_id  text not null,
    reason              text,
    sort_order          integer default 0
);

-- -----------------------------------------------------------------------------
-- PRODUCT_GALLERIES (masonry)
-- -----------------------------------------------------------------------------
create table if not exists product_galleries (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    image_url   text not null,
    alt         text,
    sort_order  integer default 0
);

-- -----------------------------------------------------------------------------
-- RITUALS
-- -----------------------------------------------------------------------------
create table if not exists rituals (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    step_number integer not null,
    title       text not null,
    description text not null
);

-- -----------------------------------------------------------------------------
-- EDUCATIONAL_CONTENT
-- -----------------------------------------------------------------------------
create table if not exists educational_content (
    id          uuid primary key default gen_random_uuid(),
    product_id  text references products(id) on delete cascade,
    title       text not null,
    body        text not null,
    heading     text,
    image_url   text,
    sort_order  integer default 0
);

-- -----------------------------------------------------------------------------
-- PRODUCT_VIDEOS
-- -----------------------------------------------------------------------------
create table if not exists product_videos (
    id              uuid primary key default gen_random_uuid(),
    product_id      text references products(id) on delete cascade,
    url             text not null,
    thumbnail_url   text,
    type            text default 'product',   -- 'product' | 'tutorial' | 'lifestyle'
    sort_order      integer default 0
);

-- =============================================================================
-- ÍNDICES
-- =============================================================================
create index if not exists idx_product_images_product    on product_images(product_id, sort_order);
create index if not exists idx_product_benefits_product  on product_benefits(product_id, sort_order);
create index if not exists idx_product_specs_product     on product_specs(product_id, sort_order);
create index if not exists idx_product_faqs_product      on product_faqs(product_id, sort_order);
create index if not exists idx_product_reviews_product   on product_reviews(product_id) where approved = true;
create index if not exists idx_product_galleries_product on product_galleries(product_id, sort_order);
create index if not exists idx_rituals_product           on rituals(product_id, step_number);
create index if not exists idx_educational_product       on educational_content(product_id, sort_order);

-- =============================================================================
-- ROW LEVEL SECURITY
-- =============================================================================
alter table products             enable row level security;
alter table product_images       enable row level security;
alter table product_benefits     enable row level security;
alter table product_specs        enable row level security;
alter table product_stories      enable row level security;
alter table product_faqs         enable row level security;
alter table product_reviews      enable row level security;
alter table related_products     enable row level security;
alter table product_galleries    enable row level security;
alter table rituals              enable row level security;
alter table educational_content  enable row level security;
alter table product_videos       enable row level security;

-- Lectura pública para productos activos
create policy "Productos públicos" on products          for select using (active = true);
create policy "Imágenes públicas"  on product_images    for select using (true);
create policy "Beneficios públicos" on product_benefits for select using (true);
create policy "Specs públicas"     on product_specs     for select using (true);
create policy "Stories públicas"   on product_stories   for select using (true);
create policy "FAQs públicas"      on product_faqs      for select using (true);
create policy "Reviews aprobadas"  on product_reviews   for select using (approved = true);
create policy "Relacionados públicos" on related_products for select using (true);
create policy "Galería pública"    on product_galleries for select using (true);
create policy "Rituales públicos"  on rituals           for select using (true);
create policy "Educativo público"  on educational_content for select using (true);
create policy "Videos públicos"    on product_videos    for select using (true);

-- Insertar reviews: cualquier usuario autenticado o anónimo (moderated)
create policy "Crear review" on product_reviews
    for insert with check (true);

-- =============================================================================
-- FUNCIÓN updated_at automático
-- =============================================================================
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

create trigger products_updated_at
    before update on products
    for each row execute procedure set_updated_at();

-- =============================================================================
-- VISTA: producto completo (útil para el admin)
-- =============================================================================
create or replace view product_full as
select
    p.*,
    (select json_agg(pi order by pi.sort_order) from product_images    pi where pi.product_id = p.id) as images,
    (select json_agg(pb order by pb.sort_order) from product_benefits  pb where pb.product_id = p.id) as benefits,
    (select json_agg(ps order by ps.sort_order) from product_specs     ps where ps.product_id = p.id) as specs,
    (select row_to_json(st)                     from product_stories   st where st.product_id = p.id limit 1) as story,
    (select json_agg(pf order by pf.sort_order) from product_faqs     pf where pf.product_id = p.id) as faqs,
    (select json_agg(pr) from product_reviews   pr where pr.product_id = p.id and pr.approved) as reviews,
    (select json_agg(pg order by pg.sort_order) from product_galleries pg where pg.product_id = p.id) as gallery,
    (select json_agg(r  order by r.step_number) from rituals           r  where r.product_id  = p.id) as ritual,
    (select json_agg(ec order by ec.sort_order) from educational_content ec where ec.product_id = p.id) as educational
from products p;
