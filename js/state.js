import { getCompletedStages, saveCompletedStages } from './utils/dom.js';
import { roadmapsData } from './data/index.js';

class StateStore {
  constructor() {
    this.state = {
      currentTrack: 'ibm', // 'ibm' | 'andrew'
      currentLanguage: 'ar', // 'ar' | 'en'
      searchQuery: '',
      completedStages: getCompletedStages()
    };
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  /**
   * Returns current active track data for current language
   */
  getCurrentTrackData() {
    const track = roadmapsData[this.state.currentTrack];
    if (!track) return null;
    return track[this.state.currentLanguage] || null;
  }

  setTrack(trackName) {
    if (this.state.currentTrack === trackName) return;
    this.state.currentTrack = trackName;
    this.notify();
  }

  setLanguage(lang) {
    if (this.state.currentLanguage === lang) return;
    this.state.currentLanguage = lang;
    this.notify();
  }

  toggleLanguage() {
    this.state.currentLanguage = this.state.currentLanguage === 'ar' ? 'en' : 'ar';
    this.notify();
  }

  setSearchQuery(query) {
    this.state.searchQuery = query;
    this.notify();
  }

  toggleStageCompletion(stageId) {
    if (this.state.completedStages.has(stageId)) {
      this.state.completedStages.delete(stageId);
    } else {
      this.state.completedStages.add(stageId);
    }
    saveCompletedStages(this.state.completedStages);
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    const data = this.getCurrentTrackData();
    this.listeners.forEach(listener => listener(this.state, data));
  }
}

export const store = new StateStore();
