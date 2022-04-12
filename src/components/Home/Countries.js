import { useSelector } from 'react-redux';
import Country from './Country';
import Filter from './Filter';

const Countries = () => {
  // eslint-disable-next-line no-unused-vars
  const { countries, listFilter } = useSelector((state) => state);

  if (listFilter.filter === 'deaths') {
    countries.sort((a, b) => b.totalNewDeaths - a.totalNewDeaths);
  }

  if (listFilter.filter === 'cases') {
    countries.sort((a, b) => b.totalNewCases - a.totalNewCases);
  }

  return (
    <>
      <Filter />
      <ul className="cards">
        {countries.map((country) => (
          <Country key={country.id} data={country} filter={listFilter.filter} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
