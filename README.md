# 💍 Thiệp Cưới Online - Hướng Dẫn Chi Tiết (Full Documentation)

Chào mừng bạn đến với template Thiệp Cưới Online cao cấp. Template này được thiết kế theo phong cách **Soft & Premium**, tập trung vào trải nghiệm người dùng (UX) tinh tế, typography sang trọng và hiệu ứng chuyển động mượt mà.

## 🌟 Tính Năng Nổi Bật

- **Phong cách Soft & Premium:** Giao diện tối giản, sang trọng, tập trung vào khoảng trống (white-space).
- **Cá nhân hóa khách mời:** Tự động hiển thị tên khách mời qua tham số URL (`?guest=`).
- **Hiệu ứng Motion cao cấp:** Sử dụng GSAP cho các chuyển động mượt mà và hiệu ứng Parallax.
- **Cuộn mượt (Smooth Scroll):** Tích hợp Lenis Scroll cho trải nghiệm cuộn tự nhiên.
- **Quản lý RSVP:** Tự động gửi thông tin xác nhận tham dự về Google Sheets.
- **Mobile First:** Tối ưu hóa hoàn hảo cho mọi thiết bị di động.

---

## 📁 Cấu Trúc Thư Mục

```text
wedding-website/
├── index.html              ← Giao diện chính & Logic hiển thị
├── config.json             ← Cấu hình chi tiết (Nội dung, sự kiện, gallery)
├── settings.json           ← ⭐ Cấu hình nhanh (Tên cô dâu/chú rể, ảnh nền)
├── google-apps-script.js   ← Mã nguồn để chạy trên Google Apps Script
├── generate-links.js       ← Script Node.js để tạo danh sách link mời khách
├── vercel.json             ← Cấu hình tối ưu cho Vercel
├── img/                    ← Thư mục chứa tài nguyên hình ảnh
└── README.md               ← Hướng dẫn sử dụng này
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Thử

### 1. Chạy trên máy tính (Local)
Do trình duyệt chặn các yêu cầu "Fetch" từ file local (`file://`), bạn **không thể** chỉ click đúp vào file `index.html`. Bạn cần một server giả lập:

- **Cách 1 (VS Code):** Cài extension **Live Server**. Sau đó chuột phải vào `index.html` và chọn *Open with Live Server*.
- **Cách 2 (Python):** Mở terminal tại thư mục dự án và chạy:
  ```bash
  python -m http.server 8080
  ```
  Sau đó truy cập: `http://localhost:8080`

---

## ✏️ Hướng Dẫn Cá Nhân Hóa

### 1. Chỉnh sửa thông tin cơ bản (`settings.json`)
Đây là file ưu tiên để bạn thay đổi nhanh các thông tin quan trọng:
- `couple`: Tên chú rể (`groomName`) và cô dâu (`brideName`).
- `hero`: Ngày hiển thị (`dateDisplay`) và ảnh nền chính (`backgroundImage`).
- `gallery`: Danh sách ảnh trong album kỷ niệm.

### 2. Chỉnh sửa nội dung chi tiết (`config.json`)
Tại đây bạn có thể chỉnh sửa sâu hơn:
- **Story:** Các mốc thời gian kỷ niệm (năm, tiêu đề, nội dung, ảnh).
- **Events:** Chi tiết lễ cưới, tiệc cưới (thời gian, địa điểm, link Google Maps).
- **RSVP:** Cấu hình URL nhận tin nhắn từ Google Sheets.

### 3. Thay đổi hình ảnh
- Ảnh nên được nén giảm dung lượng (dưới 500KB) để tải nhanh.
- Lưu ảnh vào thư mục `img/`.
- Cập nhật đường dẫn ảnh trong `config.json` hoặc `settings.json`.

---

## 📋 Hướng Dẫn Kết Nối Google Sheets (Nhận RSVP)

Để nhận thông báo khi khách xác nhận tham dự:

1. Truy cập [Google Sheets](https://sheets.new) và tạo một bảng tính mới.
2. Vào **Extensions** (Tiện ích mở rộng) → **Apps Script**.
3. Copy toàn bộ nội dung file `google-apps-script.js` trong dự án và dán vào.
4. Nhấn **Deploy** (Triển khai) → **New Deployment**.
5. Chọn type là **Web App**. Ở mục "Who has access", chọn **Anyone**.
6. Sau khi triển khai, copy **Web App URL**.
7. Dán URL này vào mục `rsvp.googleSheetUrl` trong file `config.json`.

---

## 👤 Tạo Link Mời Khách Hàng Loạt

Để tạo link có tên khách mời (ví dụ: `A và K trân trọng mời Anh Tuấn`):
Dùng cấu trúc: `https://ten-mien-cua-ban.com/?guest=Anh+Tuan`

Bạn có thể dùng script `generate-links.js` để tạo hàng loạt:
1. Sửa danh sách tên khách trong `generate-links.js`.
2. Chạy lệnh: `node generate-links.js`.
3. Script sẽ tạo ra file `links.txt` chứa toàn bộ danh sách link.

---

## 🌐 Deploy Lên Internet (Vercel)

1. Đẩy code lên GitHub cá nhân của bạn.
2. Truy cập [Vercel.com](https://vercel.com).
3. Chọn **Add New** → **Project** → Import Repo từ GitHub.
4. Nhấn **Deploy**. Vercel sẽ tự động cấp cho bạn một domain `.vercel.app` miễn phí.

---

## 🛠 Công Nghệ Sử Dụng

- **Frontend:** HTML5, Vanilla CSS, JavaScript (ES6+).
- **Animation:** [GSAP](https://greensock.com/gsap/) (ScrollTrigger, Parallax).
- **Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis).
- **Image Preview:** [FancyBox](https://fancyapps.com/fancybox/).
- **Data:** JSON-driven architecture.

---
*Chúc bạn có một ngày trọng đại thật tuyệt vời! 💍*
