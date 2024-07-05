require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://bikeindex.org/api/v3';

const getStolenBikes = async (bikelocation, dateFrom, dateTo) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        bikelocation,
        stolenness: 'proximity',
        access_token: API_KEY,
        occurred_after: dateFrom,
        occurred_before: dateTo
      }
    });
    return response.data.bikes;
  } catch (error) {
    console.error('Error fetching stolen bikes:', error);
    throw error;
  }
};

const getBikeStats = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/count`, {
      params: {
        location,
        stolenness: 'proximity',
        access_token: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching bike stats:', error);
    throw error;
  }
};

module.exports = {
  getStolenBikes,
  getBikeStats
};