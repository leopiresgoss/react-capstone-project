import PropTypes from 'prop-types';

const Country = (props) => {
  const { data, order } = props;
  const {
    name, totalNewDeaths, totalNewCases,
  } = data;

  const href = `/#/details/${name}`;

  return (
    <li className="card">
      <a className="details-link" href={href}>More Info</a>
      <h3>{name}</h3>

      {order === 'deaths' && (
        <p>
          Today&apos;s Deaths:
          {' '}
          {totalNewDeaths}
        </p>
      )}

      {order === 'cases' && (
      <p>
        Today&apos;s New Cases:
        {' '}
        {totalNewCases}
      </p>
      )}

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
};

export default Country;
