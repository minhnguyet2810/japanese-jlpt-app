#!/bin/bash
# Chạy web sau khi dọn sạch process cũ và lock
set -e
cd "$(dirname "$0")"

echo "→ Đang dừng process dùng port 4000 và 4001..."
lsof -ti:4000 | xargs kill -9 2>/dev/null || true
lsof -ti:4001 | xargs kill -9 2>/dev/null || true

echo "→ Xóa file lock và cache dev (tránh 404)..."
rm -rf .next/dev 2>/dev/null || true

echo "→ Đợi 2 giây..."
sleep 2

echo "→ Chạy Next.js (port 4000)..."
exec npm run dev
