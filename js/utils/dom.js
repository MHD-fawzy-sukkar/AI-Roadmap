/**
 * Utility functions for DOM manipulation, sanitization, and state persistence.
 */

const COMPLETED_STORAGE_KEY = 'ai_engineer_roadmap_completed_stages';

/**
 * Load completed stage IDs from localStorage
 * @returns {Set<string>}
 */
export function getCompletedStages() {
  try {
    const stored = localStorage.getItem(COMPLETED_STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch (e) {
    console.error('Error reading completed stages from localStorage', e);
    return new Set();
  }
}

/**
 * Save completed stage IDs to localStorage
 * @param {Set<string>} completedSet 
 */
export function saveCompletedStages(completedSet) {
  try {
    localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(Array.from(completedSet)));
  } catch (e) {
    console.error('Error saving completed stages to localStorage', e);
  }
}

/**
 * Helper to safely create an element with attributes and inner HTML
 * @param {string} tag 
 * @param {Object} attrs 
 * @param {string} innerHTML 
 * @returns {HTMLElement}
 */
export function createElement(tag, attrs = {}, innerHTML = '') {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, val]) => {
    if (key === 'className') {
      el.className = val;
    } else if (key.startsWith('on') && typeof val === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), val);
    } else {
      el.setAttribute(key, val);
    }
  });
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}

/**
 * Smooth scroll to element by ID
 * @param {string} id 
 */
export function scrollToStage(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
