let currentLanguage = 'ar';
let currentTrack = 'ibm'; // IBM is now the default track

function renderApp() {
  if (!window.roadmapsData) return;

  const trackData = window.roadmapsData[currentTrack];
  const data = trackData[currentLanguage];
  const isAr = currentLanguage === 'ar';

  // Update Document Direction & Language
  document.documentElement.setAttribute('lang', currentLanguage);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Hero Section
  document.getElementById('hero-badge').innerText = data.heroBadge || "AI Engineering Curriculum";
  document.getElementById('hero-title').innerText = data.heroTitle;
  document.getElementById('hero-subtitle').innerText = data.heroSubtitle;
  document.getElementById('pdf-btn-text').innerText = data.pdfBtnText;
  document.getElementById('track-label').innerText = data.trackLabel || (isAr ? "اختر المسار:" : "Select Track:");
  document.getElementById('lang-btn').innerHTML = `<span class="btn-icon">🌐</span> ${isAr ? 'English' : 'عربي'}`;

  // Roadmap Visual Banner (Displayed for both tracks)
  const bannerBox = document.getElementById('roadmap-banner');
  const bannerImg = document.getElementById('roadmap-img');
  if (data.bannerImg && data.bannerImg.trim() !== "") {
    bannerBox.style.display = 'block';
    bannerImg.src = data.bannerImg;
  } else {
    bannerBox.style.display = 'none';
  }

  // Track Selector Toggle Active Class
  document.getElementById('btn-track-andrew').classList.toggle('active', currentTrack === 'andrew');
  document.getElementById('btn-track-ibm').classList.toggle('active', currentTrack === 'ibm');

  // Quick Navigation Pills
  const pillsContainer = document.getElementById('pills-container');
  pillsContainer.innerHTML = '';
  data.stages.forEach(stage => {
    const pill = document.createElement('a');
    pill.className = 'pill-item';
    pill.href = `#${stage.id}`;
    
    // Extract short name
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

    // Only render duration badge if duration exists (IBM track only)
    const durationBadge = stage.duration ? `<span class="stage-duration">⏱️ ${stage.duration}</span>` : '';

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
      </div>
    `;

    stagesContainer.appendChild(card);

    // Insert Full Specialization Banner Link immediately after Step 0 (for IBM track)
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

function switchTrack(trackName) {
  currentTrack = trackName;
  renderApp();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  renderApp();
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});