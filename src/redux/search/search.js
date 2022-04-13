// Actions
const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

// Reducer
export default function reducer(state = '', action) {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return action.payload;
    case CLEAR_SEARCH:
      return '';
    default: return state;
  }
}

// Action creators
export const searchValue = (payload) => ({
  type: SEARCH_COUNTRY,
  payload,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
