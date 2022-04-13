import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Country from './Country';
import Order from './Order';
import Search from './Search';
import { orderByDeaths } from '../../redux/countries/countries';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
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
    }
  };

  return (
    <>
      <Search filterSearched={filterSearched} />
      <Order handleListChange={handleListChange} order={order} />
      <ul className="cards">
        {filteredCountries.length === 0 && (countries.map((country) => (
          <Country key={country.id} data={country} order={order} />
        )))}
        {filteredCountries.length !== 0 && (filteredCountries.map((country) => (
          <Country key={country.id} data={country} order={order} />
        )))}
      </ul>
    </>
  );
};

export default Countries;
