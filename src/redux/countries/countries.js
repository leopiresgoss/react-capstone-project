import fetchCountriesData from '../../services/fetchCountriesData';

// Actions
const GET_COUNTRIES = 'GET_COUNTRIES';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default: return state;
  }
}

// Action creators
export const getCountries = () => async (dispatch) => {
  const payload = await fetchCountriesData();
  dispatch({
    type: GET_COUNTRIES,
    payload,
  });
};
