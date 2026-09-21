export function renderHero(state, data) {
  if (!data) return;

  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const bannerBox = document.getElementById('roadmap-banner');
  const bannerImg = document.getElementById('roadmap-img');

  if (heroBadge) heroBadge.innerText = data.heroBadge || 'AI Engineering Curriculum';
  if (heroTitle) heroTitle.innerText = data.heroTitle || '';
  if (heroSubtitle) heroSubtitle.innerText = data.heroSubtitle || '';

  if (bannerBox && bannerImg) {
    if (data.bannerImg && data.bannerImg.trim() !== '') {
      bannerBox.style.display = 'block';
      bannerImg.src = data.bannerImg;
    } else {
      bannerBox.style.display = 'none';
    }
  }
}
