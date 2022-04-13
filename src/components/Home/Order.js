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

Order.propTypes = {
  handleListChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};

export default Order;
