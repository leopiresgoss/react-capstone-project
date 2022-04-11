import PropTypes from 'prop-types';

const Country = ({ data }) => {
  const { name, totalNewDeaths } = data;
  return (
    <li className="card">
      <a className="details-link" href="/">More Info</a>
      <h3>{name}</h3>
      <p>
        Today&apos;s Deaths:
        {' '}
        {totalNewDeaths}
      </p>
    </li>
  );
};

Country.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    totalNewDeaths: PropTypes.number,
  }).isRequired,
};

export default Country;
