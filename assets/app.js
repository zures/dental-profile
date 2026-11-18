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
  'Mặt dán sứ Veneer': "Mặt dán sứ Veneer là lớp phục hình mỏng được gắn lên bề mặt ngoài của răng để cải thiện hình thể, màu sắc hoặc một số khuyết điểm nhỏ. Phương án này có thể được cân nhắc khi răng có hình dáng chưa hài hòa, khe thưa nhỏ, sứt mẻ nhẹ hoặc đổi màu trong những trường hợp phù hợp.\n\nTrước điều trị, bác sĩ đánh giá lượng men răng còn lại, mô răng, sức khỏe nướu, khớp cắn và thói quen nghiến răng. Răng sâu, viêm nướu hoặc sai lệch khớp cắn cần được kiểm soát hay xử lý trước. Với răng lệch nhiều, mất nhiều mô hoặc đổi màu nặng, chỉnh nha hoặc phương án phục hồi khác có thể phù hợp hơn.\n\nQuy trình thường gồm thăm khám, trao đổi mong muốn về màu sắc và hình thể, lập kế hoạch, sửa soạn răng khi cần, lấy dấu hoặc quét, thử mặt dán rồi gắn và kiểm tra khớp cắn. Thiết kế được cân nhắc cùng răng kế cận, đường cười và gương mặt để hướng đến sự hài hòa tự nhiên.\n\nVeneer không đồng nghĩa với không mài răng. Mức độ sửa soạn phụ thuộc vị trí răng, màu nền và thiết kế; mô răng đã lấy đi không thể hoàn nguyên. Ê buốt, bong mặt dán, nứt vỡ sứ, vấn đề nướu hoặc sâu răng ở bờ phục hình có thể xảy ra. Kết quả và độ bền phụ thuộc chỉ định, kỹ thuật thực hiện, khớp cắn và cách chăm sóc.\n\nSau điều trị, bạn cần chải răng, làm sạch kẽ răng, tránh cắn vật cứng và không dùng răng để mở đồ vật. Tái khám theo hướng dẫn giúp kiểm tra mặt dán và mô răng bên dưới; người nghiến răng có thể cần máng bảo vệ sau đánh giá.",
  'Tẩy trắng răng': "Tẩy trắng răng sử dụng chất làm trắng để cải thiện màu răng tự nhiên trong những trường hợp phù hợp. Phương pháp này có thể được cân nhắc khi bạn muốn cải thiện sắc độ răng sau khi bác sĩ xác định nguyên nhân đổi màu và đánh giá sức khỏe răng miệng.\n\nTrước điều trị, bác sĩ kiểm tra sâu răng, tình trạng nướu, răng nhạy cảm, các miếng trám và phục hình hiện có. Cao răng, mảng bám hoặc vết nhiễm màu bề mặt có thể cần làm sạch trước khi đánh giá nhu cầu tẩy trắng. Răng đổi màu do chấn thương, điều trị tủy hoặc một số nguyên nhân khác có thể cần phương án riêng.\n\nTùy tình trạng và nhu cầu, bác sĩ có thể tư vấn tẩy trắng tại phòng khám hoặc sử dụng máng tẩy tại nhà theo hướng dẫn. Quy trình thường gồm ghi nhận màu răng ban đầu, lựa chọn phương pháp, bảo vệ mô mềm phù hợp, thực hiện hoặc hướng dẫn sử dụng và đánh giá đáp ứng. Nồng độ, thời gian và số lần sử dụng cần theo chỉ định.\n\nÊ buốt tạm thời và kích ứng nướu có thể xuất hiện. Mức độ sáng màu khác nhau ở từng người; không thể cam kết trắng đến một sắc độ cố định. Răng sứ, mặt dán sứ và vật liệu trám không đổi màu như răng tự nhiên nên có thể lộ chênh lệch màu sau tẩy trắng. Không nên tự tăng nồng độ, kéo dài thời gian hoặc lặp lại quá thường xuyên.\n\nBạn cần duy trì vệ sinh răng miệng, hạn chế thuốc lá và thực phẩm, đồ uống dễ gây nhiễm màu theo hướng dẫn. Màu răng có thể thay đổi dần theo thời gian. Nếu ê buốt nhiều hoặc kéo dài, hãy ngừng sử dụng sản phẩm tẩy tại nhà và liên hệ bác sĩ; việc tẩy nhắc lại cần được đánh giá trước.",
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
const zaloConsultationUrl = 'https://zalo.me/84865621916';
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

// Native light dismiss when available; preserve it on older browsers.
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const isOutside = (event, modal) => {
    const rect = modal.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  document.querySelectorAll('dialog[closedby="any"]').forEach(modal => {
    let outsidePointerId = null;
    modal.addEventListener('pointerdown', event => {
      outsidePointerId = event.isPrimary && event.button === 0 && isOutside(event, modal) ? event.pointerId : null;
    });
    modal.addEventListener('pointerup', event => {
      if (event.pointerId === outsidePointerId && isOutside(event, modal)) modal.close();
      outsidePointerId = null;
    });
    modal.addEventListener('pointercancel', () => { outsidePointerId = null; });
    modal.addEventListener('close', () => { outsidePointerId = null; });
  });
}
