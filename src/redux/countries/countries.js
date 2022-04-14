import fetchCountriesData from '../../services/fetchCountriesData';

// Actions
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ORDER_BY_DEATHS = 'ORDER_BY_DEATHS';
export const ORDER_BY_CASES = 'ORDER_BY_CASES';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return action
        .payload.slice().sort((a, b) => Number(b.totalNewDeaths) - Number(a.totalNewDeaths));
    case ORDER_BY_DEATHS:
      return state.slice().sort((a, b) => Number(b.totalNewDeaths) - Number(a.totalNewDeaths));
    case ORDER_BY_CASES:
      return state.slice().sort((a, b) => Number(b.totalNewCases) - Number(a.totalNewCases));
    default: return state;
  }
}

// Action creators
export const orderByDeaths = () => ({
  type: ORDER_BY_DEATHS,
});

export const orderByCases = () => ({
  type: ORDER_BY_CASES,
});

export const getCountries = () => async (dispatch) => {
  const payload = await fetchCountriesData();
  dispatch({
    type: GET_COUNTRIES,
    payload,
  });
};
