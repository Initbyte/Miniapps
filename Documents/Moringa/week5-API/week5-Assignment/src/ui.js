const { getStolenBikes, getBikeStats } = require('./service.js');

const displayStolenBikes = async (bikelocation, dateFrom, dateTo) => {
  try {
    const bikes = await getStolenBikes(bikelocation, dateFrom, dateTo);
    const list = document.getElementById('bike-list');
    list.innerHTML = '';
    bikes.forEach(bike => {
      const item = document.createElement('li');
      item.textContent = `${bike.title} - ${bike.manufacturer_name}`;
      list.appendChild(item);
    });
  } catch (error) {
    console.error('Error displaying stolen bikes:', error);
  }
};

const displayBikeStats = async (bikelocation) => {
  try {
    const stats = await getBikeStats(bikelocation);
    const statsContainer = document.getElementById('bike-stats');
    statsContainer.textContent = `Total stolen bikes in ${bikelocation}: ${stats.proximity}`;
  } catch (error) {
    console.error('Error displaying bike stats:', error);
  }
};

module.exports = {
  displayStolenBikes,
  displayBikeStats
};