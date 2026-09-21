import { scrollToStage } from '../utils/dom.js';

export function renderNavPills(container, state, data) {
  if (!container || !data || !data.stages) return;

  container.innerHTML = '';
  
  const query = (state.searchQuery || '').toLowerCase().trim();

  const filteredStages = data.stages.filter(stage => {
    if (!query) return true;
    const stageContentStr = JSON.stringify(stage).toLowerCase();
    return stageContentStr.includes(query);
  });

  filteredStages.forEach(stage => {
    const isCompleted = state.completedStages.has(stage.id);
    const pill = document.createElement('a');
    pill.className = `pill-item ${isCompleted ? 'completed' : ''}`;
    pill.href = `#${stage.id}`;
    pill.dataset.stageId = stage.id;
    
    // Format short title for pill
    const titleParts = stage.title.split('.');
    let shortTitle = titleParts[0] + '.';
    if (titleParts[1]) {
      shortTitle += titleParts[1].slice(0, 16);
    } else {
      shortTitle = stage.title.slice(0, 20);
    }
    
    pill.innerHTML = `
      ${isCompleted ? '<span class="pill-completed-dot"></span>' : ''}
      <span>${shortTitle}</span>
    `;

    pill.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToStage(stage.id);
    });

    container.appendChild(pill);
  });
}
