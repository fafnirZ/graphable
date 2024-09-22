
const initCY = () => {
  const cy = cytoscape({
    container: document.getElementById("cy"), 
    elements: [
      { data: { id: 'a' }, position: { x: 100, y: 100 } },
      { data: { id: 'b' }, position: { x: 200, y: 200 } },
      { data: { id: 'ab', source: 'a', target: 'b' } },
    ],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'label': 'data(id)',
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
        }
      }
    ],
    layout: {
      name: 'grid',
      rows: 10
    }})
}

// init cytoscape instance:
document.addEventListener('DOMContentLoaded', initCY)