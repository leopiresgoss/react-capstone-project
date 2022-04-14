import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Nav from '../components/Navbar/Navbar';

describe('Test Navbar', () => {
  describe('Test App.js', () => {
    it('Test if the page loads', () => {
      const tree = renderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <Nav />
          </Provider>
        </BrowserRouter>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
