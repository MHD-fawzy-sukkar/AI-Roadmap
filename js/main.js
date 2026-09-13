let currentLanguage = 'ar';
let currentTrack = 'ibm'; // IBM is default

function renderApp() {
  if (!window.roadmapsData) return;

  const trackData = window.roadmapsData[currentTrack];
  const data = trackData[currentLanguage];
  const isAr = currentLanguage === 'ar';

  // Update HTML attributes
  document.documentElement.setAttribute('lang', currentLanguage);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Hero Section
  document.getElementById('hero-badge').innerText = data.heroBadge || "AI Engineering Curriculum";
  document.getElementById('hero-title').innerText = data.heroTitle;
  document.getElementById('hero-subtitle').innerText = data.heroSubtitle;
  document.getElementById('pdf-btn-text').innerText = data.pdfBtnText;
  document.getElementById('track-label').innerText = data.trackLabel || (isAr ? "اختر المسار:" : "Select Track:");
  document.getElementById('lang-btn').innerHTML = `<span class="btn-icon">🌐</span> ${isAr ? 'English' : 'عربي'}`;

  // Roadmap Visual Banner
  const bannerBox = document.getElementById('roadmap-banner');
  const bannerImg = document.getElementById('roadmap-img');
  if (data.bannerImg && data.bannerImg.trim() !== "") {
    bannerBox.style.display = 'block';
    bannerImg.src = data.bannerImg;
  } else {
    bannerBox.style.display = 'none';
  }

  // Track Selector Toggle
  document.getElementById('btn-track-andrew').classList.toggle('active', currentTrack === 'andrew');
  document.getElementById('btn-track-ibm').classList.toggle('active', currentTrack === 'ibm');

  // Quick Navigation Pills
  const pillsContainer = document.getElementById('pills-container');
  pillsContainer.innerHTML = '';
  data.stages.forEach(stage => {
    const pill = document.createElement('a');
    pill.className = 'pill-item';
    pill.href = `#${stage.id}`;
    
    const shortTitle = stage.title.split('.')[0] + '.' + (stage.title.split('.')[1]?.slice(0, 16) || '');
    pill.innerText = shortTitle;
    
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(stage.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    pillsContainer.appendChild(pill);
  });

  // Render Vertical Single-Column Stages
  const stagesContainer = document.getElementById('stages-container');
  stagesContainer.innerHTML = '';

  data.stages.forEach((stage, index) => {
    const card = document.createElement('div');
    card.className = 'stage-card';
    card.id = stage.id;

    let itemsHtml = '';
    stage.items.forEach(item => {
      itemsHtml += `<li><strong>${item.label}:</strong> ${item.text}</li>`;
    });

    const durationBadge = stage.duration ? `<span class="stage-duration">⏱️ ${stage.duration}</span>` : '';

    // Project Accordion Box Generation
    let projectHtml = '';
    if (stage.project) {
      const p = stage.project;
      const btnLabel = data.projectBtnText || "المشاريع والتطبيقات المرحلية";
      const noteLabel = data.projectNote || "تنبيه: وقت تنفيذ هذه المشاريع مستقل تماماً وليس ضمن الساعات المحددة للكورس.";
      const taskLabel = isAr ? "المطلوب والتاسك" : "Task & Requirements";
      const sourceLabel = isAr ? "مصدر البيانات والتحدي" : "Dataset & Challenge Source";
      const deliverLabel = isAr ? "المطلوب تسليمه" : "Expected Deliverable";

      projectHtml = `
        <div class="project-accordion-wrapper">
          <button class="project-toggle-btn" onclick="toggleProjectAccordion(this)">
            <span class="btn-title-group">
              <span>📁</span>
              <span>${btnLabel}</span>
            </span>
            <span class="toggle-arrow">▼</span>
          </button>
          
          <div class="project-content-panel">
            <div class="project-note">
              <span>⚠️</span>
              <span>${noteLabel}</span>
            </div>
            
            <div class="project-main-tag">
              <span>📌</span>
              <span>${p.title}</span>
            </div>

            <div class="project-grid">
              <div class="project-card-item">
                <div class="project-item-header">
                  <span class="icon">🎯</span>
                  <span>${taskLabel}</span>
                </div>
                <div class="project-item-body">${p.task}</div>
              </div>

              <div class="project-card-item">
                <div class="project-item-header">
                  <span class="icon">📊</span>
                  <span>${sourceLabel}</span>
                </div>
                <div class="project-item-body">${p.source}</div>
              </div>

              <div class="project-card-item">
                <div class="project-item-header">
                  <span class="icon">📦</span>
                  <span>${deliverLabel}</span>
                </div>
                <div class="project-item-body">${p.deliverable}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    card.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">${stage.title}</h2>
        <div class="stage-meta">
          ${durationBadge}
          <span class="stage-badge">${stage.badge}</span>
        </div>
      </div>
      <div class="stage-content">
        <ul>${itemsHtml}</ul>
        ${projectHtml}
      </div>
    `;

    stagesContainer.appendChild(card);

    // Insert Specialization Link for IBM track after Step 0
    if (currentTrack === 'ibm' && index === 0 && data.specialization) {
      const specCard = document.createElement('div');
      specCard.className = 'specialization-banner-card';
      specCard.innerHTML = `
        <div class="spec-title">🎓 ${data.specialization.title}</div>
        <a class="spec-link" href="${data.specialization.url}" target="_blank">${data.specialization.url}</a>
      `;
      stagesContainer.appendChild(specCard);
    }
  });
}

function toggleProjectAccordion(btn) {
  btn.classList.toggle('active');
  const panel = btn.nextElementSibling;
  panel.classList.toggle('open');
}

function switchTrack(trackName) {
  currentTrack = trackName;
  renderApp();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  renderApp();
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});