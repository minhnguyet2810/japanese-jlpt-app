-- ============================================================
-- Supabase Schema: Japanese JLPT App
-- Chạy từng block trong SQL Editor của Supabase Dashboard
-- ============================================================

-- 1. Bảng profiles (mở rộng auth.users, quản lý is_premium)
-- Sau khi bật Supabase Auth, tạo bảng này và trigger cập nhật từ auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  is_premium boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS: user chỉ đọc/sửa profile của chính mình
alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Trigger: khi có user mới đăng ký, tạo profile tương ứng
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name, is_premium)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    false
  );
  return new;
end;
$$ language plpgsql security definer;

-- Gắn trigger với auth.users: mỗi khi có user đăng ký mới → tạo bản ghi profiles
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Bảng lessons (nội dung bài học từ data/lessons)
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  grammar_summary text,
  content jsonb not null default '{}',
  quiz_vocab jsonb default '[]',
  quiz_grammar jsonb default '[]',
  quiz_builder jsonb default '[]',
  quiz_dialogue jsonb default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS: lessons là public read
alter table public.lessons enable row level security;

create policy "Lessons are viewable by everyone"
  on public.lessons for select
  using (true);

-- 3. Bảng user_progress (tiến độ: bài đã hoàn thành, điểm game)
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  games_completed jsonb not null default '{"dialogue":false,"vocab":false,"grammar":false,"builder":false}',
  lesson_completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, lesson_slug)
);

alter table public.user_progress enable row level security;

create policy "Users can read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id);

-- Index cho truy vấn nhanh
create index if not exists idx_user_progress_user_id on public.user_progress(user_id);
create index if not exists idx_user_progress_lesson_slug on public.user_progress(lesson_slug);
create index if not exists idx_lessons_slug on public.lessons(slug);

-- 4. Bảng user_study_days (Streak: ngày nào user có học)
create table if not exists public.user_study_days (
  user_id uuid not null references auth.users(id) on delete cascade,
  study_date date not null,
  created_at timestamptz not null default now(),
  primary key (user_id, study_date)
);

alter table public.user_study_days enable row level security;

create policy "Users can read own study days"
  on public.user_study_days for select
  using (auth.uid() = user_id);

create policy "Users can insert own study days"
  on public.user_study_days for insert
  with check (auth.uid() = user_id);

create index if not exists idx_user_study_days_user_date on public.user_study_days(user_id, study_date);
