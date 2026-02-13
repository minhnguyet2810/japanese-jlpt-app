# Supabase Setup

## 1. Tạo project Supabase

- Vào [supabase.com](https://supabase.com) → New Project.
- Copy **Project URL** và **anon key** (Settings → API).

## 2. Cấu hình env

Tạo `.env.local` (copy từ `.env.example`):

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

## 3. Chạy schema

Trong Supabase Dashboard → **SQL Editor**, chạy lần lượt nội dung file `schema.sql`.

Sau khi bật **Authentication**, mở lại `schema.sql` và chạy phần tạo trigger cho `handle_new_user()` (uncomment block `create trigger on_auth_user_created`).

## 4. Seed dữ liệu bài học

Dữ liệu bài học hiện đang nằm trong `src/data/lessons/*.ts`. Để chuyển vào Database:

- Cách 1: Viết script (Node/TS) đọc từng file lesson, map sang object `{ slug, title, description, grammar_summary, content, quiz_vocab, quiz_grammar, quiz_builder, quiz_dialogue }` rồi `INSERT` vào bảng `lessons` (dùng Service Role key khi chạy ngoài trình duyệt).
- Cách 2: Tạo API route bảo vệ bằng secret (ví dụ `POST /api/admin/seed-lessons` với header `x-secret`) để import từng `lesson0` … `lesson12` và `upsert` vào `lessons`.

Sau khi seed xong, front-end có thể gọi `GET /api/lessons` và `GET /api/lessons/[slug]` để lấy dữ liệu từ DB thay vì import trực tiếp từ file.

## 5. Gán VIP (is_premium)

Trong SQL Editor:

```sql
update public.profiles
set is_premium = true, updated_at = now()
where email = 'user@example.com';
```

Hoặc dùng Dashboard → Table Editor → `profiles` → sửa cột `is_premium`.

## 6. Kiểm tra quyền truy cập bài premium

- `GET /api/lessons/lesson11` (và lesson12, ...) sẽ trả về **403** với body `{ error: "premium_required", message: "...", code: "UPGRADE_VIP" }` nếu:
  - User chưa đăng nhập, hoặc
  - User đã đăng nhập nhưng `profiles.is_premium` không phải `true`.

Front-end nên gọi API này (hoặc fetch nội dung bài từ API); khi nhận 403 thì hiển thị modal nâng cấp VIP.
