export function renderProgressBar(container, state, data) {
  if (!container || !data || !data.stages) return;

  const isAr = state.currentLanguage === 'ar';
  const totalStages = data.stages.length;
  
  // Count how many stages in the current track are marked completed
  const trackStageIds = new Set(data.stages.map(s => s.id));
  let completedCount = 0;
  trackStageIds.forEach(id => {
    if (state.completedStages.has(id)) completedCount++;
  });

  const percent = totalStages > 0 ? Math.round((completedCount / totalStages) * 100) : 0;

  const titleText = isAr ? 'تقدمك في المسار:' : 'Track Progress:';
  const statsText = isAr 
    ? `${completedCount} من أصل ${totalStages} مرحلة مكتملة (${percent}%)`
    : `${completedCount} of ${totalStages} stages completed (${percent}%)`;

  container.innerHTML = `
    <div class="progress-card">
      <div class="progress-header">
        <span class="progress-title">📈 ${titleText}</span>
        <span class="progress-stats">${statsText}</span>
      </div>
      <div class="progress-track-bg">
        <div class="progress-track-fill" style="width: ${percent}%;"></div>
      </div>
    </div>
  `;
}
