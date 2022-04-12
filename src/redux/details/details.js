import fetchDetailsData from '../../services/fetchDetailsData';

// Actions
const GET_DETAILS = 'GET_DETAILS';
// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const fetchDetails = (moreInfoLink, name) => async (dispatch) => {
  const payload = await fetchDetailsData(moreInfoLink, name);

  dispatch({
    type: GET_DETAILS,
    payload,
  });
};
