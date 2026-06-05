-- ============================================================
--  ARMONÍA ZEN · Esquema de base de datos
--  Ejecutar en: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- ---- SETTINGS (configuración general como clave/valor JSON) ----
create table if not exists settings (
    key         text primary key,
    value       jsonb not null default '{}'::jsonb,
    updated_at  timestamptz default now()
);

-- ---- PRODUCTS ----
create table if not exists products (
    id           text primary key,
    name         text not null default '',
    category     text default '',
    subcategory  text default '',
    price        numeric(12,2) default 0,
    price_old    numeric(12,2) default 0,
    stock        integer default 0,
    status       text default 'active',   -- active | hidden | out
    featured     boolean default false,
    is_new       boolean default false,
    best_seller  boolean default false,
    image        text default '',
    gallery      jsonb default '[]'::jsonb,
    desc_short   text default '',
    desc_long    text default '',
    benefits     text default '',
    meaning      text default '',
    how_to_use   text default '',
    placement    text default '',
    care         text default '',
    material     text default '',
    size         text default '',
    color        text default '',
    intention    text default '',
    tags         text default '',
    seo_title    text default '',
    seo_desc     text default '',
    sort_order   integer default 0,
    created_at   timestamptz default now(),
    updated_at   timestamptz default now()
);

-- ---- CATEGORIES ----
create table if not exists categories (
    id          text primary key,
    name        text not null default '',
    slug        text default '',
    active      boolean default true,
    sort_order  integer default 0
);

-- ---- INTENTIONS ----
create table if not exists intentions (
    id          text primary key,
    name        text not null default '',
    sort_order  integer default 0
);

-- ---- BLOG POSTS ----
create table if not exists blog_posts (
    id          text primary key,
    slug        text unique,
    title       text default '',
    category    text default '',
    image       text default '',
    excerpt     text default '',
    content     text default '',
    read_time   integer default 5,
    author      text default 'Armonía Zen',
    date        date default current_date,
    status      text default 'draft',     -- draft | published
    seo_title   text default '',
    seo_desc    text default '',
    sort_order  integer default 0,
    created_at  timestamptz default now(),
    updated_at  timestamptz default now()
);

-- ---- FAQS ----
create table if not exists faqs (
    id          text primary key,
    question    text default '',
    answer      text default '',
    category    text default 'General',
    active      boolean default true,
    sort_order  integer default 0
);

-- ---- TESTIMONIALS ----
create table if not exists testimonials (
    id          text primary key,
    name        text default '',
    photo       text default '',
    text        text default '',
    rating      integer default 5,
    product     text default '',
    active      boolean default true,
    sort_order  integer default 0,
    created_at  timestamptz default now()
);

-- ---- MEDIA LIBRARY ----
create table if not exists media (
    id          text primary key,
    name        text default '',
    folder      text default 'General',
    url         text default '',
    alt         text default '',
    created_at  timestamptz default now()
);

-- ---- CONTACT MESSAGES ----
create table if not exists messages (
    id          uuid primary key default gen_random_uuid(),
    name        text default '',
    email       text default '',
    whatsapp    text default '',
    reason      text default '',
    message     text default '',
    status      text default 'nuevo',     -- nuevo | respondido | archivado
    created_at  timestamptz default now()
);

-- ---- ADMIN PROFILES (extiende auth.users de Supabase) ----
create table if not exists admin_profiles (
    id          uuid primary key references auth.users(id) on delete cascade,
    name        text default '',
    role        text default 'editor',    -- super | editor | soporte
    created_at  timestamptz default now()
);

-- ============================================================
--  TRIGGER: actualiza updated_at automáticamente
-- ============================================================
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists trg_products_upd    on products;
drop trigger if exists trg_blog_upd        on blog_posts;
drop trigger if exists trg_settings_upd   on settings;

create trigger trg_products_upd  before update on products    for each row execute function update_updated_at();
create trigger trg_blog_upd      before update on blog_posts  for each row execute function update_updated_at();
create trigger trg_settings_upd  before update on settings    for each row execute function update_updated_at();

-- ============================================================
--  ROW LEVEL SECURITY
-- ============================================================
alter table settings      enable row level security;
alter table products      enable row level security;
alter table categories    enable row level security;
alter table intentions    enable row level security;
alter table blog_posts    enable row level security;
alter table faqs          enable row level security;
alter table testimonials  enable row level security;
alter table media         enable row level security;
alter table messages      enable row level security;
alter table admin_profiles enable row level security;

-- Drop existing policies if re-running
do $$ declare r record; begin
  for r in select policyname, tablename from pg_policies
    where tablename in ('settings','products','categories','intentions','blog_posts','faqs','testimonials','media','messages','admin_profiles')
  loop
    execute format('drop policy if exists %I on %I', r.policyname, r.tablename);
  end loop;
end $$;

-- Lectura pública (sitio web)
create policy "pub_read_settings"     on settings     for select using (true);
create policy "pub_read_products"     on products     for select using (status <> 'hidden');
create policy "pub_read_categories"   on categories   for select using (active = true);
create policy "pub_read_intentions"   on intentions   for select using (true);
create policy "pub_read_blog"         on blog_posts   for select using (status = 'published');
create policy "pub_read_faqs"         on faqs         for select using (active = true);
create policy "pub_read_testimonials" on testimonials for select using (active = true);
create policy "pub_read_media"        on media        for select using (true);

-- Insertar mensajes del formulario de contacto (anónimo)
create policy "pub_insert_messages" on messages for insert with check (true);

-- Admin: acceso total (usuarios autenticados con perfil en admin_profiles)
create policy "admin_all_settings"     on settings     for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_products"     on products     for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_categories"   on categories   for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_intentions"   on intentions   for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_blog"         on blog_posts   for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_faqs"         on faqs         for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_testimonials" on testimonials for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_all_media"        on media        for all using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_read_messages"    on messages     for select using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_update_messages"  on messages     for update using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_delete_messages"  on messages     for delete using (exists (select 1 from admin_profiles where id = auth.uid()));
create policy "admin_own_profile"      on admin_profiles for all using (auth.uid() = id);

-- ============================================================
--  ÍNDICES
-- ============================================================
create index if not exists idx_products_category   on products(category);
create index if not exists idx_products_status     on products(status);
create index if not exists idx_products_sort       on products(sort_order);
create index if not exists idx_blog_slug           on blog_posts(slug);
create index if not exists idx_blog_status         on blog_posts(status);
create index if not exists idx_messages_status     on messages(status);
create index if not exists idx_messages_created    on messages(created_at desc);

-- ============================================================
--  PRIMER ADMIN
--  Después de crear tu usuario en Auth → Authentication → Add user,
--  ejecutá estas líneas reemplazando el email:
-- ============================================================
-- insert into admin_profiles (id, name, role)
-- select id, 'Administrador', 'super'
-- from auth.users
-- where email = 'TU-EMAIL@ejemplo.com'
-- on conflict (id) do nothing;
