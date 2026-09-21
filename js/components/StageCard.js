import { store } from '../state.js';

export function renderStages(container, state, data) {
  if (!container || !data || !data.stages) return;

  container.innerHTML = '';
  const isAr = state.currentLanguage === 'ar';
  const query = (state.searchQuery || '').toLowerCase().trim();

  // Filter stages based on search query
  const stagesToRender = data.stages.filter(stage => {
    if (!query) return true;
    const searchTarget = (
      stage.title + ' ' + 
      stage.badge + ' ' + 
      (stage.items ? stage.items.map(i => i.label + ' ' + i.text).join(' ') : '') + ' ' +
      (stage.project ? stage.project.title + ' ' + stage.project.task + ' ' + stage.project.source + ' ' + stage.project.deliverable : '')
    ).toLowerCase();
    return searchTarget.includes(query);
  });

  if (stagesToRender.length === 0) {
    const noResultsText = isAr 
      ? 'لم يتم العثور على أي نتائج تطابق بحثك.' 
      : 'No stages or courses found matching your search.';
    container.innerHTML = `
      <div class="no-results-card">
        <div class="no-results-icon">🔎</div>
        <p>${noResultsText}</p>
      </div>
    `;
    return;
  }

  stagesToRender.forEach((stage, index) => {
    const isCompleted = state.completedStages.has(stage.id);

    const card = document.createElement('article');
    card.className = `stage-card ${isCompleted ? 'is-completed' : ''}`;
    card.id = stage.id;

    // Items list HTML
    let itemsHtml = '';
    stage.items.forEach(item => {
      itemsHtml += `<li><strong>${item.label}:</strong> ${item.text}</li>`;
    });

    const durationBadge = stage.duration 
      ? `<span class="stage-duration">⏱️ ${stage.duration}</span>` 
      : '';

    // Project Accordion Box Generation
    let projectHtml = '';
    if (stage.project) {
      const p = stage.project;
      const btnLabel = data.projectBtnText || (isAr ? "المشاريع والتطبيقات المرحلية" : "Stage Projects & Hands-on Tasks");
      const noteLabel = data.projectNote || (isAr ? "تنبيه: وقت تنفيذ هذه المشاريع مستقل تماماً وليس ضمن الساعات المحددة للكورس." : "Note: Execution time for these projects is independent and not included in course hours.");
      const taskLabel = isAr ? "المطلوب والتاسك" : "Task & Requirements";
      const sourceLabel = isAr ? "مصدر البيانات والتحدي" : "Dataset & Challenge Source";
      const deliverLabel = isAr ? "المطلوب تسليمه" : "Expected Deliverable";

      projectHtml = `
        <div class="project-accordion-wrapper">
          <button class="project-toggle-btn">
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
      <header class="stage-header">
        <div class="stage-title-group">
          <label class="completion-checkbox-wrapper" title="${isAr ? 'تحديد كمكتمل' : 'Mark as completed'}">
            <input type="checkbox" class="completion-checkbox" ${isCompleted ? 'checked' : ''} data-stage-id="${stage.id}" />
          </label>
          <h2 class="stage-title">${stage.title}</h2>
        </div>
        <div class="stage-meta">
          ${durationBadge}
          <span class="stage-badge">${stage.badge}</span>
        </div>
      </header>
      <div class="stage-content">
        <ul>${itemsHtml}</ul>
        ${projectHtml}
      </div>
    `;

    // Bind completion checkbox toggle event
    const checkbox = card.querySelector('.completion-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        store.toggleStageCompletion(stage.id);
      });
    }

    // Bind accordion toggle event
    const accordionBtn = card.querySelector('.project-toggle-btn');
    if (accordionBtn) {
      accordionBtn.addEventListener('click', () => {
        accordionBtn.classList.toggle('active');
        const panel = accordionBtn.nextElementSibling;
        if (panel) {
          panel.classList.toggle('open');
        }
      });
    }

    container.appendChild(card);

    // Insert Specialization Link for IBM track after Step 0
    if (state.currentTrack === 'ibm' && index === 0 && data.specialization) {
      const specCard = document.createElement('div');
      specCard.className = 'specialization-banner-card';
      specCard.innerHTML = `
        <div class="spec-title">🎓 ${data.specialization.title}</div>
        <a class="spec-link" href="${data.specialization.url}" target="_blank" rel="noopener noreferrer">${data.specialization.url}</a>
      `;
      container.appendChild(specCard);
    }
  });
}
