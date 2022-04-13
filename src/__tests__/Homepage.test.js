import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '../pages/Homepage';
import Nav from '../components/Navbar/Navbar';
import store from '../redux/configureStore';
import { GET_COUNTRIES } from '../redux/countries/countries';

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

const Jsx = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Nav />
      <Homepage />
    </Provider>
  </BrowserRouter>
);

const renderCreate = () => renderer.create(Jsx()).toJSON();

const mockCountries = () => {
  render(Jsx());
};

describe('Test Homepage', () => {
  store.dispatch({ type: GET_COUNTRIES, payload: covidData });

  it('Check if the page loads', () => {
    mockCountries();
    const tree = renderCreate();
    expect(screen.getByText(/Brazil/i)).toBeInTheDocument();
    expect(screen.getByText(/US/i)).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });

  it('Check if search bar is loading', () => {
    mockCountries();
    const tree = renderCreate();
    fireEvent.change(screen.getByPlaceholderText('Search Country'), { target: { value: 'brazil' } });
    expect(screen.queryByText(/Brazil/i)).toBeInTheDocument();
    expect(screen.queryByText(/US/i)).not.toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });

  it('Check if search bar is loading', () => {
    mockCountries();
    const tree = renderCreate();
    fireEvent.change(screen.getByPlaceholderText('Search Country'), { target: { value: 'brazil' } });
    expect(screen.queryByText(/Brazil/i)).toBeInTheDocument();
    expect(screen.queryByText(/US/i)).not.toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
