import { useParams } from 'react-router-dom';
import DetailsList from '../components/Details/DetailsList';

const Details = () => {
  const { id } = useParams();

  return (
    <div className="details container-fluid">
      <h2>
        Details
        {' '}
        {id}
      </h2>
      <DetailsList id={id} />
    </div>
  );
};

export default Details;
