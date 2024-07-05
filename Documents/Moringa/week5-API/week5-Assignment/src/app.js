const { displayStolenBikes, displayBikeStats } = require('./ui.js');

const bikelocation = 'San Francisco, CA';  
const dateFrom = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;  // One week ago
const dateTo = Math.floor(Date.now() / 1000);

document.addEventListener('DOMContentLoaded', () => {
  displayStolenBikes(bikelocation, dateFrom, dateTo);
  displayBikeStats(bikelocation);
});