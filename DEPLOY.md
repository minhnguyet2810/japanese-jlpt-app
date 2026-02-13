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

## Supabase: cấu hình cho production

- **Authentication → URL Configuration**: thêm **Site URL** = URL production (vd: `https://your-app.vercel.app`).
- **Authentication → Redirect URLs**: thêm `https://your-app.vercel.app/auth/callback` (và `https://your-app.vercel.app/**` nếu cần).

Sau khi cấu hình xong, đăng nhập/đăng ký sẽ hoạt động trên bản deploy.

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
- **Cần làm**: tạo project Supabase (nếu chưa), khai báo đủ 2 biến Supabase trên hosting, và cấu hình Site URL + Redirect URLs trong Supabase cho domain production.
