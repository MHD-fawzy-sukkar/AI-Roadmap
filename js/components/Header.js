import { store } from '../state.js';

export function renderHeader(state, data) {
  const isAr = state.currentLanguage === 'ar';
  
  // Update document language & direction
  document.documentElement.setAttribute('lang', state.currentLanguage);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Track buttons active state
  const btnIbm = document.getElementById('btn-track-ibm');
  const btnAndrew = document.getElementById('btn-track-andrew');
  if (btnIbm) btnIbm.classList.toggle('active', state.currentTrack === 'ibm');
  if (btnAndrew) btnAndrew.classList.toggle('active', state.currentTrack === 'andrew');

  // Track label & text update
  const trackLabel = document.getElementById('track-label');
  if (trackLabel) {
    trackLabel.innerText = data?.trackLabel || (isAr ? 'اختر المسار:' : 'Select Track:');
  }

  // Language button update
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.innerHTML = `<span class="btn-icon">🌐</span> ${isAr ? 'English' : 'عربي'}`;
  }

  // PDF Export button text
  const pdfBtnText = document.getElementById('pdf-btn-text');
  if (pdfBtnText) {
    pdfBtnText.innerText = data?.pdfBtnText || (isAr ? 'تصدير PDF' : 'Export PDF');
  }
}

export function initHeaderEvents() {
  const btnIbm = document.getElementById('btn-track-ibm');
  const btnAndrew = document.getElementById('btn-track-andrew');
  const langBtn = document.getElementById('lang-btn');
  const printBtn = document.getElementById('print-btn');

  if (btnIbm) btnIbm.addEventListener('click', () => store.setTrack('ibm'));
  if (btnAndrew) btnAndrew.addEventListener('click', () => store.setTrack('andrew'));
  if (langBtn) langBtn.addEventListener('click', () => store.toggleLanguage());
  if (printBtn) printBtn.addEventListener('click', () => window.print());
}
