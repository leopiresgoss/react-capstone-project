import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from './Country';
import { getCountries } from '../../redux/countries/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <h2>Orded by Total Deaths</h2>
      <ul className="cards">
        {countries.map((country) => (
          <Country key={country.id} data={country} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
