import { useSelector } from 'react-redux';
import { useState } from 'react';
import Country from './Country';
import Order from './Order';

const Countries = () => {
  const { countries } = useSelector((state) => state);
  const [order, changeOrder] = useState('deaths');

  const handleListChange = (order) => {
    changeOrder(order);
  };

  return (
    <>
      <Order handleListChange={handleListChange} />
      <ul className="cards">
        {countries.map((country) => (
          <Country key={country.id} data={country} order={order} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
