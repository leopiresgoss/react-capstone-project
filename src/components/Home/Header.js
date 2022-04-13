import PropTypes from 'prop-types';
import worldMap from '../../images/worldmap-mobile.png';

const Header = ({ countries }) => {
  const style = {
    imgStyle: {
      width: '50%',
    },
  };

  return (
    <header className="d-flex align-center justify-content-center">
      <img src={worldMap} alt="world map" style={style.imgStyle} />
      <div className="d-grid align-content-center h6">
        <h6>Countries found:</h6>
        <p className="text-end">{countries.length}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Header;
