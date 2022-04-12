import { useParams } from 'react-router-dom';
import DetailsList from '../components/Details/DetailsList';

const Details = () => {
  const { name } = useParams();

  return (
    <div className="details container-fluid">
      <h2>
        Details
        {' '}
        {name}
      </h2>
      <DetailsList name={name} />
    </div>
  );
};

export default Details;
