// import { useDispatch } from 'react-redux';
// import
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { filterByCases, filterByDeaths } from '../../redux/filter/filter';

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState('deaths');
  const dispatch = useDispatch();

  const options = [
    {
      id: 'option-1',
      value: 'deaths',
      label: 'New Deaths',
    },
    {
      id: 'option-2',
      value: 'cases',
      label: 'New Cases',
    },
  ];

  const handleChange = (e) => {
    setSelectedValue(e.value);

    if (e.value === 'cases') {
      dispatch(filterByCases());
    }
    if (e.value === 'deaths') {
      dispatch(filterByDeaths());
    }
  };

  return (
    <div className="filter-box">
      <h6>Order by:</h6>
      <Select
        placeholder="Order by"
        value={options.find((option) => option.value === selectedValue)}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
