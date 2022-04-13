import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DetailsList from '../components/Details/DetailsList';
import store from '../redux/configureStore';
import { GET_DETAILS } from '../redux/details/details';

const covidData = {
  name: 'Brazil',
  totalConfirmed: 300,
  totalDeaths: 500,
  totalRecovered: 1000,
  newConfirmed: 10,
  newDeaths: 2,
  source: 'Narrativa',
};

const Jsx = () => (
  <BrowserRouter>
    <Provider store={store}>
      <DetailsList name={covidData.name} />
    </Provider>
  </BrowserRouter>
);

const renderCreate = () => renderer.create(Jsx()).toJSON();

const mockCountries = () => {
  render(Jsx());
};

describe('Test Details page', () => {
  store.dispatch({ type: GET_DETAILS, payload: covidData });

  it('Check if the page loads', () => {
    mockCountries();
    const tree = renderCreate();
    expect(screen.getByText(/Total Confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Deaths/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Recovered/i)).toBeInTheDocument();
    expect(screen.getByText(/New Confirmed Cases/i)).toBeInTheDocument();
    expect(screen.getByText(/New Deaths/i)).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
