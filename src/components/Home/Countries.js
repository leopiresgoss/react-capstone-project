import Country from './Country';

const Countries = () => {
  const counties = [
    {
      id: 1,
      name: 'Brazil',
      totalNewDeaths: 50,
      totalNewCases: 200,
    },
    {
      id: 2,
      name: 'Argentina',
      totalNewDeaths: 70,
      totalNewCases: 300,
    },
    {
      id: 3,
      name: 'Angola',
      totalNewDeaths: 10,
      totalNewCases: 100,
    },
  ];

  return (
    <>
      <h2>Orded by Total Deaths</h2>
      <ul className="cards">
        {counties.map((country) => (
          <Country key={country.id} data={country} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
