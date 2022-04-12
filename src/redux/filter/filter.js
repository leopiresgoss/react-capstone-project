const INITIAL_STATE = {
  filter: 'deaths',
};

// actions
const FILTER_BY_DEATHS = 'FILTER_BY_DEATHS';
const FILTER_BY_CASES = 'FILTER_BY_CASES';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_BY_DEATHS:
      return INITIAL_STATE;
    case FILTER_BY_CASES:
      return {
        ...state,
        filter: 'cases',
      };
    default: return INITIAL_STATE;
  }
}

// action creators
export const filterByDeaths = () => ({
  type: FILTER_BY_DEATHS,
});

export const filterByCases = () => ({
  type: FILTER_BY_CASES,
});
