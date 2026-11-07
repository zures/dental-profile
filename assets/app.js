const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
navigation.addEventListener('shown.bs.collapse', () => menu.setAttribute('aria-label', 'Đóng menu'));
navigation.addEventListener('hidden.bs.collapse', () => menu.setAttribute('aria-label', 'Mở menu'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  if (matchMedia('(max-width: 767px)').matches) {
    bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false }).hide();
  }
}));
const descriptions = {
  'Chỉnh nha sinh cơ học cá nhân hóa': 'Chỉnh nha theo hướng sinh cơ học cá nhân hóa là cách lập kế hoạch và kiểm soát lực dịch chuyển răng dựa trên đặc điểm của từng người, không chỉ dựa vào loại mắc cài hay khay niềng.\n\nBác sĩ đánh giá khớp cắn, vị trí răng, hình dạng chân răng, sức khỏe nướu và xương nâng đỡ qua thăm khám và hồ sơ chẩn đoán phù hợp. Từ đó, kế hoạch xác định hướng và mức lực, điểm đặt lực, hệ thống neo chặn và trình tự dịch chuyển răng.\n\nTrong quá trình điều trị, đáp ứng của răng và mô nha chu cần được theo dõi để điều chỉnh kế hoạch. Khi mô nâng đỡ suy giảm, hệ lực và neo chặn cần được cân nhắc riêng.\n\nMục tiêu là hướng tới khớp cắn phù hợp, sự hài hòa nụ cười và sức khỏe mô nâng đỡ. Đây là định hướng lập kế hoạch điều trị, không phải cam kết niềng không đau, không nhổ răng hoặc rút ngắn thời gian cho mọi trường hợp. Chỉ định, khí cụ và thời gian cần được tư vấn sau thăm khám.',
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
  document.querySelector('#ortho-sources').hidden = selectedService !== 'Chỉnh nha sinh cơ học cá nhân hóa';
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
