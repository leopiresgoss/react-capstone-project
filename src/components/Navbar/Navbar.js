import { Navbar } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Search from './Search';

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let countryName = '';

  if (pathname !== '/') {
    [countryName] = pathname.match(/\w+$/gi);
  }

  const style = {
    backgroundColor: '#4369b2',
  };
  return (
    <Navbar style={style} className="py-2 px-4 d-flex justify-content-between align-center">
      <button
        type="button"
        className="m-0 previous-page bg-transparent text-white h4 align-center"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {pathname === '/' && (
        <Search />
      )}
      {pathname !== '/' && (
        <h6 className="text-white m-0 font-lato">
          {countryName}
        </h6>
      )}
      <div className="moreButtons m-0 previous-page bg-transparent text-white h6 align-center d-flex gap-4">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </Navbar>
  );
};

export default Nav;
