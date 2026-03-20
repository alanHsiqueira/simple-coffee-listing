import React from 'react';
import CoffeeCard from './CoffeeCard';
import type { fetchCoffees } from '../types/type';

const CoffeeList = () => {
  const [coffees, setCoffees] = React.useState<fetchCoffees[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json',
        );
        const json = await response.json();
        setCoffees(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="text-center text-[#FEF7EE] text-2xl">Loading...</div>
    );
  }
  if (error) {
    return <div className="text-center text-[#FEF7EE] text-2xl">{error}</div>;
  }
  return (
    <div className="grid grid-cols-3 px-80">
      {coffees &&
        coffees.map((coffee) => <CoffeeCard key={coffee.id} {...coffee} />)}
    </div>
  );
};

export default CoffeeList;
