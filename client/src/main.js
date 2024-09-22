import { initCY } from './graph.js';

// init cytoscape instance:
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cy')) { initCY() };
})