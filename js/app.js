import { store } from './state.js';
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderProgressBar } from './components/ProgressBar.js';
import { renderSearch } from './components/Search.js';
import { renderNavPills } from './components/NavPills.js';
import { renderStages } from './components/StageCard.js';

class Application {
  constructor() {
    this.progressContainer = document.getElementById('progress-container');
    this.searchContainer = document.getElementById('search-container');
    this.pillsContainer = document.getElementById('pills-container');
    this.stagesContainer = document.getElementById('stages-container');
    this.observer = null;
  }

  init() {
    // Initialize navbar button click handlers
    initHeaderEvents();

    // Subscribe to state store updates
    store.subscribe((state, data) => this.render(state, data));

    // Initial render
    const state = store.getState();
    const data = store.getCurrentTrackData();
    this.render(state, data);

    // Setup global keyboard shortcuts
    this.setupKeyboardShortcuts();
  }

  render(state, data) {
    if (!data) return;

    renderHeader(state, data);
    renderHero(state, data);
    renderProgressBar(this.progressContainer, state, data);
    renderSearch(this.searchContainer, state);
    renderNavPills(this.pillsContainer, state, data);
    renderStages(this.stagesContainer, state, data);

    // Re-initialize ScrollSpy observer after DOM update
    this.setupScrollSpy();
  }

  setupScrollSpy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const stageElements = document.querySelectorAll('.stage-card');
    const pillElements = document.querySelectorAll('.pill-item');

    if (stageElements.length === 0) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            pillElements.forEach((pill) => {
              if (pill.dataset.stageId === id) {
                pill.classList.add('active');
              } else {
                pill.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    );

    stageElements.forEach((el) => this.observer.observe(el));
  }

  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // '/' key to focus search input
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const searchInput = document.getElementById('roadmap-search-input');
        if (searchInput) searchInput.focus();
      }
      // 'Escape' to clear search input or blur
      if (e.key === 'Escape') {
        const searchInput = document.getElementById('roadmap-search-input');
        if (searchInput && document.activeElement === searchInput) {
          store.setSearchQuery('');
          searchInput.blur();
        }
      }
    });
  }
}

// Global bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
  app.init();
});
