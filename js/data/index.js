import { ibmAr } from './ibm-ar.js';
import { ibmEn } from './ibm-en.js';
import { andrewAr } from './andrew-ar.js';
import { andrewEn } from './andrew-en.js';

export const roadmapsData = {
  ibm: {
    ar: ibmAr,
    en: ibmEn
  },
  andrew: {
    ar: andrewAr,
    en: andrewEn
  }
};

// Expose globally for window reference fallback
if (typeof window !== 'undefined') {
  window.roadmapsData = roadmapsData;
}
