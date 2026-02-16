# Hướng dẫn nhập liệu N4 (Minna no Nihongo Sơ cấp 2)

Để mình đọc được nội dung và tạo data N4 trong app, bạn cần **đưa nội dung sách vào project** dưới dạng file text (không dùng link Google Drive hay PDF trực tiếp).

---

## Bước 1: Chọn nơi đặt file

Tạo **một thư mục** trong project để chứa nội dung nhập liệu, ví dụ:

- **Đường dẫn:** `src/data/n4-input/`
- Trong đó bạn có thể đặt:
  - `bai-26.txt` hoặc `bai-26.md` (Bài 26)
  - `bai-27.txt`, `bai-28.txt`, ...
  - Hoặc gộp nhiều bài vào một file: `minna-n4-tu-bai-26.txt`

---

## Bước 2: Tạo file trong Cursor

### Cách A: Kéo thả file từ máy vào project

1. Mở **File Explorer** bên trái trong Cursor (sidebar có biểu tượng 2 tờ giấy).
2. Mở thư mục `src/data/` trong project.
3. **Tạo thư mục mới:** bấm chuột phải vào `data` → **New Folder** → đặt tên `n4-input`.
4. Nếu bạn đã có file **.txt** hoặc **.md** trên máy (đã copy nội dung từ sách vào):
   - Kéo file đó từ Finder/Explorer vào thư mục `n4-input` trong Cursor.
   - Hoặc copy file vào đúng đường dẫn project trên ổ cứng:
     - Mac: `.../npx create-next-app@latest . --typescript --tailwind --eslint/src/data/n4-input/`
     - Dán file vào đó, Cursor sẽ tự hiển thị.

### Cách B: Tạo file mới và dán nội dung (khuyên dùng)

1. Trong Cursor, bấm chuột phải vào `src/data` → **New File**.
2. Đặt tên file, ví dụ: `n4-input/bai-26.txt` (Cursor sẽ tự tạo thư mục `n4-input` nếu chưa có).
3. Mở sách (bản giấy hoặc PDF) Minna no Nihongo Sơ cấp 2, **Bài 26**.
4. Gõ hoặc copy nội dung vào file, ví dụ:

```text
## Bài 26

### Từ vựng
- つきます (tsukimasu) - đến (ga)
- おきます (okimasu) - thức dậy
- ねます (nemasu) - ngủ
...

### Ngữ pháp
- ～とき (khi ~): Khi làm gì thì ...
- ～ながら (vừa ~ vừa): Vừa V1 vừa V2
...

### Câu mẫu
- 日本に ついた とき、友だちが 迎えに 来ました。
  (Nihon ni tsuita toki, tomodachi ga mukae ni kimashita.)
  Khi tôi đến Nhật, bạn tôi đã đến đón.
...
```

5. **Lưu file:** Cmd+S (Mac) hoặc Ctrl+S (Windows).

---

## Bước 3: Định dạng nội dung (để dễ tạo data)

Càng rõ ràng càng tốt. Bạn có thể dùng dạng:

- **Từ vựng:** mỗi dòng: `tiếng Nhật / romaji / nghĩa tiếng Việt` hoặc danh sách có tiêu đề.
- **Ngữ pháp:** ghi rõ mẫu câu + giải thích ngắn.
- **Câu mẫu:** mỗi câu 3 dòng (Nhật, romaji, Việt) hoặc 1 dòng kèm romaji và nghĩa trong ngoặc.

**Lưu ý:** Chỉ cần file **.txt** hoặc **.md** (chữ thuần). File **PDF** trong project mình không đọc được nội dung bên trong; bạn cần chép hoặc copy chữ từ PDF sang file .txt/.md.

---

## Bước 4: Nhắn cho mình sau khi đã lưu file

Sau khi đã tạo và lưu file trong project, bạn gửi tin nhắn kiểu:

- *"Đọc file `src/data/n4-input/bai-26.txt` và tạo data N4 cho bài 26."*
- Hoặc: *"Đọc file trong `src/data/n4-input/` và tạo data N4 theo từng bài."*

Mình sẽ đọc file **trong workspace**, chuyển thành cấu trúc giống N5 (từ vựng, câu, ngữ pháp) và gợi ý code/data để đưa vào app.

---

## Tóm tắt nhanh

| Bước | Việc cần làm |
|------|-------------------------------|
| 1 | Tạo thư mục `src/data/n4-input/` trong project. |
| 2 | Tạo file `.txt` hoặc `.md` (vd: `bai-26.txt`), copy nội dung từ sách vào. |
| 3 | Lưu file (Cmd+S / Ctrl+S). |
| 4 | Nhắn: *"Đọc file [đường dẫn file], tạo data N4."* |

Nếu bạn gửi sẵn nội dung một bài (dán trực tiếp vào tin nhắn), mình cũng có thể tạo data N4 từ đó mà không cần file trong project.
