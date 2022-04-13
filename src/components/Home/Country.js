import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

const Country = (props) => {
  const {
    data, order, index,
  } = props;
  const {
    name, totalNewDeaths, totalNewCases,
  } = data;

  const href = `/details/${name}`;
  return (
    <li className="card">
      <Link to={href} className="text-white">
        <div className="text-end mb-3">
          <ArrowIcon />
        </div>
        <h3 className="font-lato fw-bold text-end mt-5">
          {index}
          {'- '}
          {name}
        </h3>
        {order === 'deaths' && (
        <p className="text-end">
          {totalNewDeaths}
        </p>
        )}

        {order === 'cases' && (
        <p>
          {totalNewCases}
        </p>
        )}

        {order === 'filter' && (
        <p>
          {totalNewDeaths}
        </p>
        )}

      </Link>
    </li>
  );
};

Country.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    totalNewDeaths: PropTypes.number,
    totalNewCases: PropTypes.number,
  }).isRequired,
  order: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
