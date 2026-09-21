import { store } from '../state.js';

export function renderSearch(container, state) {
  if (!container) return;

  const isAr = state.currentLanguage === 'ar';
  const placeholderText = isAr ? 'ابحث عن كورس، أداة، أو مشروع...' : 'Search for a course, tool, or project...';

  container.innerHTML = `
    <div class="search-container">
      <div class="search-input-wrapper">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          id="roadmap-search-input" 
          class="search-input" 
          placeholder="${placeholderText}" 
          value="${state.searchQuery || ''}"
        />
        <button id="clear-search-btn" class="clear-search-btn" style="display: ${state.searchQuery ? 'block' : 'none'};">✕</button>
      </div>
    </div>
  `;

  const input = container.querySelector('#roadmap-search-input');
  const clearBtn = container.querySelector('#clear-search-btn');

  if (input) {
    input.addEventListener('input', (e) => {
      store.setSearchQuery(e.target.value);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      store.setSearchQuery('');
    });
  }
}
