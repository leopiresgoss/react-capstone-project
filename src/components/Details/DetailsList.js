import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { fetchDetails } from '../../redux/details/details';

const DetailsList = ({ name }) => {
  const dispatch = useDispatch();

  const list = [
    {
      id: 0,
      title: 'New Confirmed Cases',
      value: 'newConfirmed',
    },
    {
      id: 1,
      title: 'New Deaths',
      value: 'newDeaths',
    },
    {
      id: 2,
      title: 'Total Confirmed Cases',
      value: 'totalConfirmed',
    },
    {
      id: 3,
      title: 'Total Deaths',
      value: 'totalDeaths',
    },
    {
      id: 4,
      title: 'Total Recovered',
      value: 'totalRecovered',
    },
  ];

  const selectedCountry = useSelector((state) => (
    state.countries.find((country) => country.name === name)
  ));

  useEffect(() => {
    if (selectedCountry !== undefined) {
      dispatch(fetchDetails(selectedCountry.moreInfoLink, selectedCountry.name));
    }
  }, [selectedCountry]);

  const details = useSelector((state) => state.details);
  const navigate = useNavigate();
  return (
    <>
      <button type="button" className="previous-page" onClick={() => navigate(-1)}>Previous Page</button>
      {Object.keys(details).length !== 0 && (
        <ul className="data-details">
          {list.map((item) => (
            <li key={item.id}>
              <p>
                {item.title}
                :
                {' '}
                {details[item.value]}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

DetailsList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DetailsList;
