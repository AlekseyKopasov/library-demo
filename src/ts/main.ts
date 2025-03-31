import './types/index.d.ts';

import { initSearchDropdowns } from './modules/search-dropdown'

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initSearchDropdowns();
  });
});
