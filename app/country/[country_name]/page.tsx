import { notFound } from 'next/navigation';
import CountryDetail from '../../components/CountryDetail';

const countries = {
  pakistan: {
    name: 'Pakistan',
    population: 220892331,
    capital: 'Islamabad',
  },
  turkey: {
    name: 'Turkey',
    population: 84339067,
    capital: 'Ankara',
  },
  switzerland: {
    name: 'Switzerland',
    population: 8654622,
    capital: 'Bern',
  },
  italy: {
    name: 'Italy',
    population: 60317116,
    capital: 'Rome',
  },
  netherlands: {
    name: 'Netherlands',
    population: 17441139,
    capital: 'Amsterdam',
  },
};

const CountryPage = ({ params }: { params: { country_name: string } }) => {
  const country = countries[params.country_name.toLowerCase() as keyof typeof countries];

  if (!country) {
    return notFound(); // Shows a 404 page if the country doesn't exist
  }

  return <CountryDetail name={country.name} population={country.population} capital={country.capital} />;
};

export default CountryPage;
