# 💍 Thiệp Cưới Online - Hướng Dẫn Đầy Đủ

Template thiệp cưới online hoàn chỉnh, mobile-first, deploy được ngay.

## 📁 Cấu Trúc Dự Án

```
wedding-website/
├── index.html              ← Trang chính (toàn bộ UI)
├── config.json             ← ⭐ File cấu hình - chỉnh ở đây!
├── google-apps-script.js   ← Script kết nối Google Sheets
├── generate-links.js       ← Script tạo link mời khách
├── vercel.json             ← Cấu hình deploy Vercel
├── img/                    ← Ảnh của bạn
│   └── eng_pics/           ← Ảnh gallery
└── README.md               ← Tài liệu này
```

## 🚀 Chạy Local

```bash
# Python (không cần cài gì thêm)
cd wedding-website
python3 -m http.server 8080
# Mở: http://localhost:8080

# Hoặc VS Code: cài "Live Server" extension → chuột phải index.html
```

> Không được double-click file HTML vì fetch config.json sẽ bị CORS block.

## ✏️ Cá Nhân Hoá

Chỉ cần sửa `config.json`. Không cần động vào code.

**Thông tin cô dâu chú rể, ngày cưới, địa điểm, câu chuyện, ảnh, nhạc** → tất cả trong config.json.

## 👤 Link Mời Cá Nhân

```
https://ten-site.vercel.app?guest=Nguyen+Van+An
```

Tên tiếng Việt cần encode URL. Dùng script:
```bash
node generate-links.js
```

## 📋 Kết Nối Google Sheets (RSVP)

1. Tạo Google Sheet mới
2. Extensions → Apps Script → paste nội dung `google-apps-script.js`
3. Deploy → Web App → Anyone → Copy URL
4. Paste URL vào `config.json → rsvp.googleSheetUrl`

## 🌐 Deploy Vercel

```bash
npm install -g vercel
vercel login
cd wedding-website
vercel
# Nhận URL: https://ten-ban.vercel.app
```

Hoặc kéo thả thư mục vào vercel.com.

## ✅ Tính Năng

- Responsive mobile-first
- Cá nhân hoá tên khách (?guest=)
- Countdown timer real-time
- Nhạc nền + nút bật/tắt
- Loading animation đẹp
- Scroll animation (AOS)
- Gallery lightbox (FancyBox)
- Form RSVP + validate đầy đủ
- Kết nối Google Sheets
- SEO + OG tags
- Lazy load ảnh
- Google Maps nhúng
- Toàn bộ dữ liệu từ config.json

---
*Made with love for your special day* 💍
