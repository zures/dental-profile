// Lucian UX/UI Prompt #001 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/uxui-prompt/#001
(() => {
  document.querySelectorAll('[data-liquid-glass]').forEach(root => {
    const btn = root.querySelector('.u001-btn');
    const mag = root.querySelector('.u001-mag');
    const live = root.querySelector('.u001-live');
    const form = btn.form;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let timers = [];
    const clear = () => { timers.forEach(clearTimeout); timers = []; };
    const later = (fn, ms) => timers.push(setTimeout(() => { if (root.isConnected) fn(); }, ms));
    root.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse' || reduced.matches) return;
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const pull = Math.max(0, 1 - Math.hypot(dx, dy) / 190);
      mag.style.translate = `${(dx * .18 * pull).toFixed(1)}px ${(dy * .18 * pull).toFixed(1)}px`;
      btn.style.setProperty('--mx', `${((e.clientX - r.left) / r.width * 100).toFixed(1)}%`);
      btn.style.setProperty('--my', `${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`);
    });
    root.addEventListener('pointerleave', () => { mag.style.translate = '0px 0px'; });
    // Block repeat submissions while animating without removing keyboard focus.
    form.addEventListener('submit', event => {
      if (root.dataset.state === 'load') {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
    // Keep the existing app.js submit handler, validation, form reset and feedback intact.
    form.addEventListener('submit', () => {
      clear();
      root.dataset.state = 'load';
      btn.setAttribute('aria-busy', 'true');
      btn.setAttribute('aria-disabled', 'true');
      live.textContent = 'Đang hiển thị hiệu ứng minh họa. Không gửi dữ liệu.';
      later(() => {
        root.dataset.state = 'ok';
        btn.removeAttribute('aria-busy');
        btn.removeAttribute('aria-disabled');
        live.textContent = 'Đã hoàn tất trải nghiệm mẫu. Không tạo lịch hẹn hoặc lưu thông tin.';
      }, reduced.matches ? 200 : 1600);
      later(() => { root.dataset.state = 'idle'; live.textContent = ''; }, reduced.matches ? 1200 : 3600);
    });
    reduced.addEventListener('change', () => { mag.style.translate = '0px 0px'; });
    window.addEventListener('pagehide', () => {
      clear(); root.dataset.state = 'idle'; live.textContent = '';
      btn.removeAttribute('aria-busy'); btn.removeAttribute('aria-disabled');
    });
  });
})();
