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
  'Chỉnh nha sinh cơ học cá nhân hóa': "Chỉnh nha – niềng răng không chỉ nhằm sắp đều răng mà còn hướng đến sự hài hòa giữa khớp cắn, chức năng ăn nhai và nụ cười. Răng chen chúc, thưa, chìa hoặc một số dạng sai khớp cắn có thể được cân nhắc điều trị sau thăm khám.\n\nVới định hướng sinh cơ học cá nhân hóa, bác sĩ đánh giá vị trí răng, đặc điểm chân răng, sức khỏe nướu và xương nâng đỡ để lựa chọn hệ lực, neo chặn và trình tự dịch chuyển phù hợp. Loại mắc cài hay khay niềng là một phần của kế hoạch, không thay thế chẩn đoán.\n\nQuá trình thường gồm thăm khám và lập hồ sơ, kiểm soát bệnh lý răng miệng nếu có, trao đổi phương án và chi phí, điều trị định kỳ, sau đó đeo hàm duy trì. Phim chụp, ảnh và các dữ liệu khác được chỉ định khi cần.\n\nThời gian, nhu cầu nhổ răng hoặc phối hợp phương pháp khác phụ thuộc tình trạng cụ thể. Trong quá trình niềng có thể có ê tức, kích ứng niêm mạc, sâu răng hoặc viêm nướu nếu vệ sinh chưa tốt; tiêu chân răng và tụt nướu cũng là những nguy cơ cần đánh giá, theo dõi.\n\nBạn cần vệ sinh quanh khí cụ, tuân thủ lịch tái khám và hướng dẫn sử dụng chun hoặc khay nếu được chỉ định. Sau tháo niềng, duy trì theo hướng dẫn giúp hạn chế răng dịch chuyển trở lại.",
  'Mặt dán sứ Veneer': 'Mặt dán sứ được cân nhắc để cải thiện hình thể và màu sắc ở một số trường hợp. Bác sĩ cần đánh giá men răng, khớp cắn và sức khỏe nướu trước khi tư vấn. Không phải mọi trường hợp đều phù hợp.',
  'Tẩy trắng răng': 'Tẩy trắng giúp cải thiện màu răng trong những trường hợp phù hợp. Cần kiểm tra sâu răng, tình trạng nướu và nguyên nhân đổi màu; cảm giác ê buốt có thể xuất hiện. Vật liệu trám và răng sứ không đổi màu như răng tự nhiên.',
  'Phục hình răng sứ': "Phục hình răng sứ nhằm tái lập hình thể, chức năng ăn nhai và sự hài hòa thẩm mỹ của răng trong những trường hợp phù hợp. Răng mất nhiều mô, nứt vỡ hoặc có phục hình cũ cần thay có thể được đánh giá để lựa chọn phương án.\n\nTrước điều trị, bác sĩ kiểm tra mô răng còn lại, tủy răng, nướu và khớp cắn. Tùy trường hợp, phương án có thể là phục hồi trực tiếp, inlay/onlay, mão sứ hoặc giải pháp khác. Mặt dán sứ Veneer và mão sứ có chỉ định, mức độ can thiệp khác nhau; không phải răng nào cũng cần bọc sứ.\n\nQuy trình thường gồm thăm khám, xử lý bệnh lý nếu có, trao đổi thiết kế và vật liệu, sửa soạn răng khi cần, lấy dấu hoặc quét, thử phục hình rồi gắn và kiểm tra khớp cắn. Màu sắc và hình thể được cân nhắc cùng răng kế cận, gương mặt và mong muốn của bạn.\n\nMão sứ thường cần sửa soạn mô răng và đây là can thiệp không thể hoàn nguyên. Ê buốt, viêm tủy, vấn đề nướu, sâu răng ở bờ phục hình hoặc nứt vỡ vật liệu có thể xảy ra. Không phải mọi răng làm sứ đều cần điều trị tủy; chỉ định được đánh giá riêng.\n\nChải răng, làm sạch kẽ răng, tránh cắn vật cứng và tái khám theo hướng dẫn giúp chăm sóc cả phục hình lẫn răng thật bên dưới. Người nghiến răng có thể cần máng bảo vệ sau đánh giá. Tuổi thọ phục hình phụ thuộc tình trạng răng, khớp cắn và cách chăm sóc, không có cam kết bền vĩnh viễn."
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


// Credential images: native dialog handles focus trapping, Escape and focus return.
const credentialCards = Array.from(document.querySelectorAll('[data-credential]'));
const credentialViewer = document.querySelector('#credential-viewer');
const credentialImage = document.querySelector('#credential-full-image');
const credentialViewport = document.querySelector('.credential-viewport');
const credentialPrev = document.querySelector('#credential-prev');
const credentialNext = document.querySelector('#credential-next');
const credentialZoomIn = document.querySelector('#credential-zoom-in');
const credentialZoomOut = document.querySelector('#credential-zoom-out');
const credentialZoomReset = document.querySelector('#credential-zoom-reset');
let credentialIndex = 0;
let activeCredentialItems = [];
let credentialOpener = null;
function credentialItem(card) {
  return {src: card.href, title: card.dataset.title, alt: card.querySelector("img").alt};
}
function trainingItems(card) {
  try {
    const source = document.getElementById(card.dataset.credentialGallery);
    const list = JSON.parse(source.textContent);
    const items = Array.isArray(list) ? list.filter(item => item && typeof item.src === "string" && item.src && typeof item.title === "string") : [];
    items.sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999) || String(a.receivedDate || '9999-12-31').localeCompare(String(b.receivedDate || '9999-12-31')) || String(a.completedDate || a.receivedDate || '').localeCompare(String(b.completedDate || b.receivedDate || '')));
    return items.length ? items : [credentialItem(card)];
  } catch { return [credentialItem(card)]; }
}
let credentialZoom = 1;

function setCredentialZoom(value) {
  credentialZoom = Math.max(1, Math.min(3, value));
  credentialImage.style.width = (credentialZoom * 100) + '%';
  credentialZoomReset.textContent = Math.round(credentialZoom * 100) + '%';
  credentialZoomIn.disabled = credentialZoom >= 3;
  credentialZoomOut.disabled = credentialZoom <= 1;
  if (credentialZoom === 1) credentialViewport.scrollTo(0, 0);
}
function showCredential(index) {
  credentialIndex = Math.max(0, Math.min(activeCredentialItems.length - 1, index));
  const item = activeCredentialItems[credentialIndex];
  credentialImage.src = item.src;
  credentialImage.alt = item.alt || item.title;
  document.querySelector('#credential-viewer-title').textContent = item.title;
  document.querySelector('#credential-counter').textContent = (credentialIndex + 1) + ' / ' + activeCredentialItems.length;
  credentialPrev.disabled = credentialIndex === 0;
  credentialNext.disabled = credentialIndex === activeCredentialItems.length - 1;
  setCredentialZoom(1);
}
credentialCards.forEach((card, index) => card.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  credentialOpener = card;
  const normalCards = credentialCards.filter(entry => !entry.dataset.credentialGallery);
  activeCredentialItems = card.dataset.credentialGallery ? trainingItems(card) : normalCards.map(credentialItem);
  showCredential(card.dataset.credentialGallery ? 0 : normalCards.indexOf(card));
  credentialViewer.showModal();
}));
document.querySelector('.credential-close').addEventListener('click', () => credentialViewer.close());
credentialPrev.addEventListener('click', () => showCredential(credentialIndex - 1));
credentialNext.addEventListener('click', () => showCredential(credentialIndex + 1));
credentialZoomIn.addEventListener('click', () => setCredentialZoom(credentialZoom + .25));
credentialZoomOut.addEventListener('click', () => setCredentialZoom(credentialZoom - .25));
credentialZoomReset.addEventListener('click', () => setCredentialZoom(1));
credentialViewer.addEventListener('click', event => {
  if (event.target !== credentialViewer) return;
  const r = credentialViewer.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) credentialViewer.close();
});
credentialViewer.addEventListener('close', () => {
  setCredentialZoom(1);
  credentialOpener?.focus({preventScroll: true});
});
credentialViewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' && credentialIndex < activeCredentialItems.length - 1) {
    event.preventDefault(); showCredential(credentialIndex + 1);
  } else if (event.key === 'ArrowLeft' && credentialIndex > 0) {
    event.preventDefault(); showCredential(credentialIndex - 1);
  }
});
