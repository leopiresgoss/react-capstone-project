import PropTypes from 'prop-types';
import worldMap from '../../images/worldmap-mobile.png';

const Header = ({ countries }) => {
  const style = {
    imgStyle: {
      width: '50%',
    },
  };

  return (
    <header className="d-flex align-center justify-content-center p-4">
      <img src={worldMap} alt="world map" style={style.imgStyle} />
      <div className="d-grid align-content-center m-0">
        <h2 className="text-white fw-bold text-start font-lato">Data by</h2>
        <p className="text-white text-start">
          {countries.length}
          {' '}
          countries
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Header;
