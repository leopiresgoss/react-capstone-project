import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './redux/countries/countries';
import Homepage from './pages/Homepage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
