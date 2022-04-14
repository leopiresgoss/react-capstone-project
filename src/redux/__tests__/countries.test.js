import reducer, { GET_COUNTRIES, orderByCases, orderByDeaths } from '../countries/countries';

describe('Unit tests - Countries Reducer', () => {
  let state = [];
  const covidData = [
    {
      id: 0,
      name: 'Brazil',
      totalNewDeaths: 300,
      totalNewCases: 500,
      moreInfoLink: '/',
    },
    {
      id: 1,
      name: 'US',
      totalNewDeaths: 400,
      totalNewCases: 100,
      moreInfoLink: '/',
    },
  ];

  it('Fetch mocked data and sort my deaths stats', () => {
    const result = [
      {
        id: 1,
        name: 'US',
        totalNewDeaths: 400,
        totalNewCases: 100,
        moreInfoLink: '/',
      },
      {
        id: 0,
        name: 'Brazil',
        totalNewDeaths: 300,
        totalNewCases: 500,
        moreInfoLink: '/',
      },
    ];
    state = reducer(state, { type: GET_COUNTRIES, payload: covidData });
    expect(state).toEqual(result);
  });
  it('Sort stats by cases', () => {
    const result = [
      {
        id: 0,
        name: 'Brazil',
        totalNewDeaths: 300,
        totalNewCases: 500,
        moreInfoLink: '/',
      },
      {
        id: 1,
        name: 'US',
        totalNewDeaths: 400,
        totalNewCases: 100,
        moreInfoLink: '/',
      },
    ];
    state = reducer(state, orderByCases());
    expect(state).toEqual(result);
  });
  it('Sort stats by deaths', () => {
    const result = [
      {
        id: 1,
        name: 'US',
        totalNewDeaths: 400,
        totalNewCases: 100,
        moreInfoLink: '/',
      },
      {
        id: 0,
        name: 'Brazil',
        totalNewDeaths: 300,
        totalNewCases: 500,
        moreInfoLink: '/',
      },
    ];
    state = reducer(state, orderByDeaths());
    expect(state).toEqual(result);
  });
});
