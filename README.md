# Hồ sơ bác sĩ nha khoa thẩm mỹ

Website tĩnh bằng HTML, CSS và JavaScript thuần. Không cần PHP, framework, cài npm hay cơ sở dữ liệu.

## Xem trên máy

Tải dự án và mở `index.html` bằng Chrome, Edge, Firefox hoặc Safari. Menu, thông tin dịch vụ và form minh họa chạy ngay trên trình duyệt.

Có thể dùng máy chủ tĩnh khi cần:

```sh
python3 -m http.server 8000
```

Sau đó truy cập http://localhost:8000. `preview.html` chuyển hướng về `index.html` để giữ các đường dẫn xem trước cũ.

## Cấu trúc

- `index.html`: toàn bộ nội dung trang, thông tin bác sĩ, địa chỉ, giờ làm việc và liên kết Zalo.
- `assets/style.css`: layout responsive và theme xanh ngọc, cam đào, vàng nhạt.
- `assets/app.js`: menu, hộp thoại dịch vụ và form minh họa.
- `assets/doctor.svg`: hình minh họa giữ chỗ.

## Cập nhật thông tin thật

Sửa trực tiếp trong `index.html`: tên bác sĩ (gồm cả tiêu đề trang), thương hiệu, chuyên môn, lời giới thiệu, địa chỉ và giờ làm việc. Cập nhật nội dung dịch vụ trong `assets/app.js` khi cần.

Nút Zalo hiện trỏ tới `https://zalo.me/0123456789`. Khi đổi số, cập nhật cả URL, số hiển thị và aria-label trong `index.html`. Khả năng mở ứng dụng hoặc tài khoản phụ thuộc thiết bị, cấu hình trình duyệt và Zalo.

Thay `assets/doctor.svg` bằng ảnh có quyền sử dụng và cập nhật src, kích thước, alt cùng nhãn hình giữ chỗ.

## Đưa lên GitHub Pages

Trong repository: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. Không có bước build. Khả năng dùng Pages cho repository Private phụ thuộc gói GitHub. Bật Pages có thể khiến nội dung website được truy cập công khai theo cấu hình tài khoản; kiểm tra thiết lập trước khi xuất bản.

Dự án cũng chạy trên mọi hosting tĩnh. Giữ `index.html` và thư mục `assets/` cùng cấp; đường dẫn tài nguyên tương đối hỗ trợ cả website trong thư mục con.

## Phạm vi chức năng

Form chỉ minh họa: không gửi, không lưu dữ liệu và không tạo lịch hẹn. Tiếp nhận lịch hẹn thật cần dịch vụ form hoặc backend được cấu hình riêng. Website chưa có đánh giá hoặc chứng chỉ thật.

Font tải từ Google Fonts, có font dự phòng khi mất mạng. Ảnh minh họa được lưu cục bộ.

## Bootstrap

Đã tích hợp Bootstrap 5.3.8 (bản ổn định, MIT) qua các tệp phân phối chính thức được lưu tại `assets/vendor/`. Không cần CDN hoặc npm khi chạy website.

- `bootstrap.min.css` được nạp trước CSS riêng của website.
- `bootstrap.bundle.min.js` được nạp trước `assets/app.js` để chạy menu Collapse.
- Lưới dịch vụ dùng `row`, `col-12 col-md-6`; thẻ dùng `card`, nút dùng `btn`, form dùng `form-control` và `form-select`.
- Các biến màu website trong `assets/style.css` ánh xạ sang biến Bootstrap để giữ theme xanh ngọc.
- Khi nâng phiên bản, thay cả hai tệp vendor bằng bản chính thức cùng phiên bản và kiểm tra lại menu, form, hộp thoại và giao diện responsive.
