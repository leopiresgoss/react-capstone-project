import DATE from '../helpers/currentDate';

const BASE_URL = 'https://api.covid19tracking.narrativa.com/api';

export default function fetchCountriesData() {
  const data = fetch(`${BASE_URL}/${DATE}`)
    .then((res) => (
      res.json().then((json) => {
        const { countries } = json.dates[DATE];

        return Object.keys(countries).map((key, index) => ({
          id: index,
          name: countries[key].name,
          totalNewDeaths: countries[key].today_deaths,
          totalNewCases: countries[key].today_new_confirmed,
          moreInfoLink: countries[key].links[0].href,
        }));
      })
    ))
    .catch(() => []);
  return data;
}
