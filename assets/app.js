const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  menu.setAttribute('aria-label', expanded ? 'Đóng menu' : 'Mở menu');
  navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Mở menu');
  navigation.classList.remove('open');
}));
const descriptions = {
  'Mặt dán sứ Veneer': 'Mặt dán sứ được cân nhắc để cải thiện hình thể và màu sắc ở một số trường hợp. Bác sĩ cần đánh giá men răng, khớp cắn và sức khỏe nướu trước khi tư vấn. Không phải mọi trường hợp đều phù hợp.',
  'Tẩy trắng răng': 'Tẩy trắng giúp cải thiện màu răng trong những trường hợp phù hợp. Cần kiểm tra sâu răng, tình trạng nướu và nguyên nhân đổi màu; cảm giác ê buốt có thể xuất hiện. Vật liệu trám và răng sứ không đổi màu như răng tự nhiên.',
  'Phục hình răng sứ': 'Phục hình răng sứ có thể được cân nhắc khi cần tái lập hình thể hoặc chức năng răng. Bác sĩ sẽ trao đổi mức độ can thiệp, lựa chọn vật liệu và cách chăm sóc dựa trên thăm khám.'
};
const dialog = document.querySelector('#service-dialog');
let selectedService = '';
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  selectedService = button.dataset.service;
  document.querySelector('#dialog-title').textContent = selectedService;
  document.querySelector('#dialog-description').textContent = descriptions[selectedService];
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
document.querySelector('#dialog-book').addEventListener('click', () => {
  document.querySelector('#service').value = selectedService;
  dialog.close();
  document.querySelector('#appointment').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  document.querySelector('#name').focus({preventScroll:true});
});
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  status.textContent = 'Bạn đã hoàn tất trải nghiệm đặt lịch mẫu. Chưa có lịch hẹn được tạo và thông tin không được gửi hoặc lưu lại.';
  status.focus();
  event.target.reset();
});
