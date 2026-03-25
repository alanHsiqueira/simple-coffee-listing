import React from 'react';
import CoffeeCard from './CoffeeCard';
import type { CoffeeItem } from '../types/coffee.types';
import type { CoffeeListProps } from '../types/coffee.types';

const COFFEE_DATA_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

const isCoffee = (value: unknown): value is CoffeeItem => {
  if (!value || typeof value !== 'object') return false;

  const item = value as Record<string, unknown>;

  return (
    typeof item.id === 'number' &&
    typeof item.name === 'string' &&
    typeof item.image === 'string' &&
    typeof item.price === 'string' &&
    (typeof item.rating === 'number' ||
      typeof item.rating === 'string' ||
      item.rating === null) &&
    typeof item.votes === 'number' &&
    typeof item.popular === 'boolean' &&
    typeof item.available === 'boolean'
  );
};

const isCoffeeList = (value: unknown): value is CoffeeItem[] => {
  return Array.isArray(value) && value.every(isCoffee);
};

const CoffeeList = ({ filter }: CoffeeListProps) => {
  const [coffees, setCoffees] = React.useState<CoffeeItem[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(COFFEE_DATA_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json: unknown = await response.json();

        if (!isCoffeeList(json)) {
          throw new Error('Invalid response format from coffee API');
        }

        setCoffees(json);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        if (error instanceof Error) {
          setError(`Error: ${error.message}`);
        } else {
          setError('Error: Unexpected error while fetching coffees.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div
        className="text-center text-[#FEF7EE] text-2xl"
        role="status"
        aria-live="polite"
        aria-label="Carregando cafés"
      >
        Carregando...
      </div>
    );
  }
  if (error) {
    return (
      <div
        className="text-center text-[#FEF7EE] text-2xl"
        role="alert"
        aria-live="assertive"
      >
        {error}
      </div>
    );
  }
  const filteredCoffees = coffees?.filter((coffee) =>
    filter === 'all' ? true : coffee.available,
  );
  return (
    <section>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-10 px-6 md:px-20 2xl:px-40 justify-items-center"
        role="list"
      >
        {coffees &&
          filteredCoffees?.map((coffee) => (
            <div key={coffee.id} role="listitem">
              <CoffeeCard {...coffee} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default CoffeeList;
