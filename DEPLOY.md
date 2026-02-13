# Hướng dẫn deploy lên web

## Đã sẵn sàng deploy

- **Build**: `npm run build` chạy thành công.
- **Script**: `build` và `start` đã có trong `package.json`.

## Biến môi trường cần cấu hình khi deploy

Trên nền tảng deploy (Vercel, Netlify, …) cần khai báo **ít nhất**:

| Biến | Bắt buộc | Ghi chú |
|------|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Có | URL project Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Có | Anon key (public) từ Supabase |

**Tùy chọn** (app vẫn chạy được nếu không có):

- `OPENAI_API_KEY` hoặc `GEMINI_API_KEY` — AI Chat (VIP) và chấm bài viết.
- `ADMIN_SECRET` — bảo vệ API `/api/admin/lessons`.
- `SUPABASE_SERVICE_ROLE_KEY` — chỉ khi dùng admin API cần quyền service role.

Xem đầy đủ trong `.env.example`.

## Deploy lên Vercel (gợi ý)

1. Đẩy code lên GitHub (hoặc GitLab/Bitbucket).
2. Vào [vercel.com](https://vercel.com) → **Add New Project** → import repo.
3. **Environment Variables**: thêm `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY` (và các biến tùy chọn nếu cần).
4. Deploy — Vercel tự nhận Next.js và chạy `next build` + `next start`.

## Supabase: cấu hình toàn bộ cho production

Làm lần lượt các bước dưới đây. Thiếu một bước có thể gây lỗi đăng ký/đăng nhập hoặc "Lỗi kết nối".

### Bước 1: Tạo project và lấy API keys

1. Vào [supabase.com](https://supabase.com) → **New Project** (đặt tên, chọn region, đặt mật khẩu DB).
2. Khi project đã chạy: sidebar trái → **Settings** (icon bánh răng) → **API**.
3. Copy hai giá trị:
   - **Project URL** → dùng làm `NEXT_PUBLIC_SUPABASE_URL`
   - **Project API keys** → **anon** **public** → dùng làm `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Khai báo vào Vercel: **Project → Settings → Environment Variables** thêm hai biến trên (và vào `.env.local` khi chạy local). Sau khi thêm/sửa env trên Vercel cần **Redeploy**.

### Bước 2: Chạy schema SQL (bảng + trigger)

1. Trong Supabase Dashboard: sidebar trái → **SQL Editor** → **New query**.
2. Mở file `supabase/schema.sql` trong repo (toàn bộ nội dung).
3. Dán vào ô SQL. Có thể chạy **Run** một lần cho toàn bộ; nếu báo lỗi (ví dụ trigger đã tồn tại), chạy từng block:
   - **Block 1**: từ `create table if not exists public.profiles` đến hết các policy và trigger `on_auth_user_created` (đến dòng `execute procedure public.handle_new_user();`). Block này **bắt buộc** để mỗi user đăng ký mới tự động có bản ghi trong `profiles` (app dùng để lưu is_premium, và các API đọc profile).
   - **Block 2**: bảng `lessons` + RLS.
   - **Block 3**: bảng `user_progress` + RLS + index.
   - **Block 4**: bảng `user_study_days` + RLS + index.
4. Kiểm tra: **Table Editor** → phải thấy các bảng `profiles`, `lessons`, `user_progress`, `user_study_days`.

### Bước 3: Bật Auth providers (Email + Google nếu dùng)

1. Sidebar → **Authentication** → **Providers**.
2. **Email**: mặc định đã bật. App dùng đăng ký/đăng nhập email + mật khẩu.
3. **Google** (tùy chọn): nếu muốn "Đăng ký/Đăng nhập bằng Google" → bật **Google**, điền Client ID và Client Secret từ [Google Cloud Console](https://console.cloud.google.com/) (tạo OAuth 2.0 credentials, thêm redirect URI dạng `https://<project-ref>.supabase.co/auth/v1/callback` theo hướng dẫn Supabase).

### Bước 4: URL Configuration (Site URL + Redirect URL)

1. Sidebar → **Authentication** → **URL Configuration**.
2. **Site URL**: đặt đúng domain production, ví dụ `https://japanese-jlpt-app.vercel.app` (không dấu `/` cuối).
3. **Redirect URLs**: trong ô "Redirect URLs" thêm từng dòng:
   - `https://japanese-jlpt-app.vercel.app/auth/callback`
   - Nếu có domain khác (vd custom domain) thêm tương tự: `https://your-domain.com/auth/callback`
   Không thêm dấu `/` thừa hoặc path sai — đăng ký/đăng nhập Google sẽ redirect về đúng URL này.

### Bước 5 (tùy chọn): Tắt xác thực email để đăng nhập ngay sau đăng ký

Mặc định Supabase gửi email "Confirm your signup"; user phải bấm link mới đăng nhập được. Nếu muốn **không** gửi email, đăng ký xong là đăng nhập luôn:

1. Sidebar → **Authentication** → **Providers** → **Email**.
2. Tắt **"Confirm email"** (Confirm email).
3. Lưu. Khi đó đăng ký bằng email/mật khẩu sẽ không gửi mail xác thực, user dùng được ngay.

---

Sau khi làm đủ các bước trên, luồng: user **đăng ký** (email hoặc Google) → **đăng nhập** → vào **dashboard / bài học**; tiến độ lưu trên Supabase (`user_progress`, `user_study_days`).

## Quyền micro (chấm điểm Speaking)

Phần **chấm điểm nói (Speaking)** dùng Web Speech API và cần **quyền micro**. Khi deploy lên web/PWA:

1. **Trên web (Chrome, Edge, Safari)**  
   Khi người dùng vào phần Speaking (bài học có “Luyện nói” hoặc Mock Test có “Nhấn để nói”), app hiện khối **“Bật micro để chấm điểm nói”**. Bấm nút → trình duyệt hiện dialog “Cho phép [trang] truy cập micro?” → chọn **Cho phép**.

2. **PWA (Progressive Web App)**  
   - Deploy qua **HTTPS** (bắt buộc cho micro).  
   - Không cần khai báo gì thêm trong manifest; quyền micro do trình duyệt xử lý khi user bấm “Bật micro”.

3. **App bọc native (Capacitor, Cordova, React Native WebView)**  
   - **Android**: trong `AndroidManifest.xml` thêm  
     `<uses-permission android:name="android.permission.RECORD_AUDIO" />`  
     và (nếu dùng)  
     `<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />`.  
   - **iOS**: trong `Info.plist` thêm key  
     `NSMicrophoneUsageDescription` (mô tả: “App cần micro để chấm điểm phần nói tiếng Nhật”).  
   - Trong app, vẫn cần gọi xin quyền (getUserMedia hoặc plugin) sau khi user tương tác; UI “Bật micro” trong web sẽ kích hoạt điều đó.

4. **Nếu user đã chặn micro**  
   App hiện hướng dẫn: vào Cài đặt trình duyệt (hoặc Cài đặt ứng dụng) → Quyền → Micro → bật lại, rồi tải lại trang.

## Còn thiếu gì không?

- **Không thiếu** phần code/build để deploy.
- **Cần làm**: làm đủ **Bước 1–5** trong mục **Supabase: cấu hình toàn bộ cho production** (tạo project, chạy schema + trigger, URL Configuration, tùy chọn tắt confirm email).
