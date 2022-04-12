import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const DetailsList = ({ id }) => {
  const selectedCountry = useSelector((state) => (
    state.countries.find((country) => country.id === Number(id))
  ));

  return (
    <p>{selectedCountry.moreInfoLink}</p>
  );
};

DetailsList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailsList;
