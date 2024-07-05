const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { getStolenBikes, getBikeStats } = require('../src/service');

const mock = new MockAdapter(axios);

describe('Bike Index Service', () => {
  afterEach(() => {
    mock.reset();
  });

  test('fetches stolen bikes', async () => {
    const bikes = [{ title: 'Bike 1', manufacturer_name: 'Brand A' }];
    mock.onGet('https://bikeindex.org/api/v3/search').reply(200, { bikes });

    const result = await getStolenBikes('San Francisco, CA', 1622520000, 1623124800);
    expect(result).toEqual(bikes);
  });

  test('fetches bike stats', async () => {
    const stats = { proximity: 100 };
    mock.onGet('https://bikeindex.org/api/v3/search/count').reply(200, stats);

    const result = await getBikeStats('San Francisco, CA');
    expect(result).toEqual(stats);
  });
});
