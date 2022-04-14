import reducer, { searchValue, clearSearch } from '../search/search';

describe('Unit Tests - Search Reducer', () => {
  let state = '';

  it('Test adding value', () => {
    const value = 'brazil';
    state = reducer(state, searchValue(value));
    expect(state).toBe(value);
  });

  it('Test removing value', () => {
    const value = '';
    state = reducer(state, clearSearch());
    expect(state).toBe(value);
  });
});
