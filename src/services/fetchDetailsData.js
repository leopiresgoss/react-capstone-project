import DATE from '../helpers/currentDate';

const BASE_URL = 'https://api.covid19tracking.narrativa.com';

export default function fetchDetailsData(moreInfoLink, name) {
  return fetch(`${BASE_URL}${moreInfoLink}`)
    .then((res) => (
      res.json().then((json) => {
        const country = json.dates[DATE].countries[name];
        return {
          name: country.name,
          totalConfirmed: country.today_confirmed,
          totalDeaths: country.today_deaths,
          totalRecovered: country.today_recovered,
          newConfirmed: country.today_new_confirmed,
          newDeaths: country.today_new_deaths,
          source: country.source,
        };
      })
    )).catch(() => []);
}
