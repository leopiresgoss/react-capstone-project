import PropTypes from 'prop-types';

const Country = (props) => {
  const { data, filter } = props;
  const {
    id, name, totalNewDeaths, totalNewCases,
  } = data;

  const href = `/#/details/${id}`;

  return (
    <li className="card">
      <a className="details-link" href={href}>More Info</a>
      <h3>{name}</h3>

      {filter === 'deaths' && (
        <p>
          Today&apos;s Deaths:
          {' '}
          {totalNewDeaths}
        </p>
      )}

      {filter === 'cases' && (
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
    id: PropTypes.number,
    name: PropTypes.string,
    totalNewDeaths: PropTypes.number,
    totalNewCases: PropTypes.number,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Country;
