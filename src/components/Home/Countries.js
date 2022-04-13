import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Country from './Country';
import Order from './Order';
import Header from './Header';
import { orderByDeaths } from '../../redux/countries/countries';
import { clearSearch } from '../../redux/search/search';
import './countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, search } = useSelector((state) => state);
  const [order, changeOrder] = useState('deaths');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleListChange = (order) => {
    changeOrder(order);
  };

  const filterSearched = (value) => {
    if (value !== '') {
      changeOrder('filter');
      setFilteredCountries(() => (
        countries.filter((country) => (
          country.name.toLowerCase().includes(value.toLowerCase())
        ))
      ));
    } else if (value === '' && filteredCountries.length !== 0) {
      // go back to original form in case of erasing the search value
      setFilteredCountries([]);
      changeOrder('deaths');
      dispatch(orderByDeaths());
      dispatch(clearSearch());
    }
  };

  useEffect(() => filterSearched(search), [search]);

  return (
    <>
      <Header countries={countries} />
      <Order handleListChange={handleListChange} order={order} />
      <ul className="cards">
        {filteredCountries.length === 0 && (countries.map((country, index) => (
          <Country
            key={country.id}
            data={country}
            order={order}
            index={index + 1}
          />
        )))}
        {filteredCountries.length !== 0 && (filteredCountries.map((country, index) => (
          <Country
            key={country.id}
            data={country}
            order={order}
            index={index + 1}
          />
        )))}
      </ul>
    </>
  );
};

export default Countries;
