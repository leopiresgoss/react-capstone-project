import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { orderByCases, orderByDeaths } from '../../redux/countries/countries';

const Order = (props) => {
  const { handleListChange, order } = props;
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
      dispatch(orderByCases());
    }
    if (e.value === 'deaths') {
      dispatch(orderByDeaths());
    }

    handleListChange(e.value);
  };

  if (order === 'filter' && selectedValue === 'cases') {
    setSelectedValue('deaths');
  }

  const selectStyle = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#2e4475',
      border: 'none',
      minHeight: '0',
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingTop: '0',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '0',
    }),
  };

  return (
    <div className="filter-box d-flex gap-1 background-dark-blue align-center px-4 py-1">
      <h6 className="d-grid align-content-center text-white m-0 font-lato fw-bold">ORDER BY:</h6>
      <Select
        placeholder="Order by"
        value={options.find((option) => option.value === selectedValue)}
        options={options}
        onChange={handleChange}
        className="bg-transparent font-lato fw-bold"
        styles={selectStyle}
      />
    </div>
  );
};

Order.propTypes = {
  handleListChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};

export default Order;
