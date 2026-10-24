# Hồ sơ bác sĩ nha khoa thẩm mỹ

Mẫu website PHP + JavaScript thuần, không cần framework hoặc cơ sở dữ liệu.

## Chạy website
Yêu cầu PHP 8.0 trở lên. Trong thư mục dự án:

```sh
php -S localhost:8000
```

Mở http://localhost:8000. Đưa toàn bộ thư mục lên hosting PHP để triển khai thực tế.

## Cập nhật nội dung
- `config.php`: tên bác sĩ, thương hiệu, chuyên môn, lời giới thiệu, địa chỉ, giờ làm việc.
- `template.php`: nội dung dịch vụ và các mục hồ sơ; thêm bằng cấp/chứng chỉ đã xác minh.
- `assets/doctor.svg`: minh họa tự tạo, thay bằng ảnh có quyền sử dụng và sửa văn bản thay thế trong template.
- `assets/style.css`: màu sắc, bố cục và hiển thị trên điện thoại.
- `assets/app.js`: menu, thông tin dịch vụ, form minh họa.

`preview.html` là bản xem giao diện tĩnh. PHP vẫn là bản nguồn chính; cập nhật config/template không tự động cập nhật preview.

## Form đặt lịch
Form chỉ minh họa: không gửi mạng, không lưu dữ liệu, không tạo lịch hẹn. Khi đưa vào sử dụng cần bổ sung backend tiếp nhận, xác thực đầu vào phía máy chủ, chống CSRF/spam, chính sách dữ liệu và phương thức thông báo được chủ phòng khám chọn. Hiện không có số điện thoại, Zalo, đánh giá hoặc chứng chỉ giả.

Font được tải từ Google Fonts; khi không có mạng trình duyệt sử dụng font dự phòng. Hình minh họa nằm cục bộ.
