import reducer, { GET_DETAILS } from '../details/details';

describe('Unit Tests - Details Reducer', () => {
  let state = {};
  const covidData = {
    name: 'Brazil',
    totalConfirmed: 300,
    totalDeaths: 500,
    totalRecovered: 1000,
    newConfirmed: 10,
    newDeaths: 2,
    source: 'Narrativa',
  };
  it('Fetch mocked data', () => {
    state = reducer(state, { type: GET_DETAILS, payload: covidData });
    expect(state).toBe(covidData);
  });
});
