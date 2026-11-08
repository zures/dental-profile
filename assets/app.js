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
const consultationForm = document.querySelector('#booking-form');
const consultationStatus = document.querySelector('#form-status');
const messagePanel = document.querySelector('#zalo-message-panel');
const messagePreview = document.querySelector('#zalo-message-preview');
const zaloConsultationUrl = 'https://zalo.me/0933121369';
let preparingConsultation = false;

async function copyConsultationMessage() {
  if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
  await navigator.clipboard.writeText(messagePreview.value);
}

consultationForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (preparingConsultation || !consultationForm.reportValidity()) return;
  const data = new FormData(consultationForm);
  messagePreview.value = [
    'Chào Bs. Hằng, tôi muốn được tư vấn nha khoa.',
    'Họ và tên: ' + String(data.get('name') || '').trim(),
    'Số điện thoại: ' + String(data.get('phone') || '').trim(),
    'Dịch vụ quan tâm: ' + String(data.get('service') || '').trim(),
    'Lời nhắn: ' + (String(data.get('message') || '').trim() || 'Chưa có lời nhắn')
  ].join('\n');
  messagePanel.hidden = false;
  preparingConsultation = true;
  const submitButton = consultationForm.querySelector('button[type="submit"]');
  submitButton.setAttribute('aria-busy', 'true');
  submitButton.setAttribute('aria-disabled', 'true');
  try {
    await copyConsultationMessage();
    consultationStatus.textContent = 'Đã sao chép nội dung. Đang mở Zalo Bs.Hằng; hãy dán nội dung và nhấn gửi. Tin nhắn chưa được gửi tự động.';
    // Same-tab navigation avoids popup blocking after the clipboard permission prompt.
    window.location.assign(zaloConsultationUrl);
  } catch {
    consultationStatus.textContent = 'Trình duyệt chưa cho phép sao chép. Bạn có thể chọn nội dung bên dưới để sao chép thủ công, rồi nhấn “Liên hệ Zalo Bs.Hằng”. Chưa có tin nhắn nào được gửi.';
    messagePreview.focus();
    messagePreview.select();
  } finally {
    preparingConsultation = false;
    submitButton.removeAttribute('aria-busy');
    submitButton.removeAttribute('aria-disabled');
  }
});

document.querySelector('#copy-zalo-message').addEventListener('click', async () => {
  try {
    await copyConsultationMessage();
    consultationStatus.textContent = 'Đã sao chép nội dung. Nhấn “Liên hệ Zalo Bs.Hằng”, dán nội dung và gửi cho bác sĩ.';
  } catch {
    consultationStatus.textContent = 'Hãy chọn và sao chép nội dung bên dưới bằng thao tác sao chép của thiết bị, sau đó mở Zalo để dán và gửi.';
    messagePreview.focus();
    messagePreview.select();
  }
});

consultationForm.addEventListener('input', event => {
  if (event.target === messagePreview) return;
  messagePanel.hidden = true;
  messagePreview.value = '';
  consultationStatus.textContent = '';
});
