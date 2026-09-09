let currentLanguage = 'ar';

function renderApp() {
  if (!window.roadmapData) return;

  const data = window.roadmapData[currentLanguage];
  const isAr = currentLanguage === 'ar';

  document.documentElement.setAttribute('lang', currentLanguage);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  document.getElementById('hero-title').innerText = data.heroTitle;
  document.getElementById('hero-subtitle').innerText = data.heroSubtitle;
  document.getElementById('pdf-btn-text').innerText = data.pdfBtnText;
  document.getElementById('lang-btn').innerHTML = `<span class="btn-icon">🌐</span> ${isAr ? 'English' : 'عربي'}`;

  // Quick Jump Navigation
  const pillsContainer = document.getElementById('pills-container');
  pillsContainer.innerHTML = '';
  data.stages.forEach(stage => {
    const pill = document.createElement('a');
    pill.className = 'pill-item';
    pill.href = `#${stage.id}`;
    pill.innerText = stage.title.split('.')[0] + '.' + (stage.title.split('.')[1]?.slice(0, 16) || '');
    
    // Smooth scrolling handler
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(stage.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    pillsContainer.appendChild(pill);
  });

  // Render Vertical Single-Column Cards
  const stagesContainer = document.getElementById('stages-container');
  stagesContainer.innerHTML = '';

  data.stages.forEach(stage => {
    const card = document.createElement('div');
    card.className = 'stage-card';
    card.id = stage.id;

    let itemsHtml = '';
    stage.items.forEach(item => {
      itemsHtml += `<li><strong>${item.label}:</strong> ${item.text}</li>`;
    });

    card.innerHTML = `
      <div class="stage-header">
        <h2 class="stage-title">${stage.title}</h2>
        <span class="stage-badge">${stage.badge}</span>
      </div>
      <div class="stage-content">
        <ul>${itemsHtml}</ul>
      </div>
    `;

    stagesContainer.appendChild(card);
  });
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  renderApp();
}

// Event Bindings
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
  renderApp();
});