import { useParams } from 'react-router-dom';
import DetailsList from '../components/Details/DetailsList';
import covidImg from '../images/covid-img-mobile.png';

const Details = () => {
  const { name } = useParams();

  return (
    <div className="details container-fluid p-0">
      <header className="px-4 py-5 d-flex align-center justify-content-center">
        <img
          src={covidImg}
          alt="covid virus"
          style={
          { width: '50%' }
        }
        />
        <h2 className="text-white text-end d-grid align-content-center m-0 font-lato fw-bold">
          Statistics:
          {' '}
          {name}
        </h2>
      </header>
      <DetailsList name={name} />
    </div>
  );
};

export default Details;
