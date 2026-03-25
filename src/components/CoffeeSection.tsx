import Button from './Button';
import CoffeeList from './CoffeeList';
import React from 'react';
import vector from '../assets/vector.svg';

const CoffeeSection = () => {
  const [filter, setFilter] = React.useState<'all' | 'available'>('all');

  return (
    <section className="relative mx-auto -mt-20 lg:-mt-60 bg-[#1B1D1F] w-[90%] max-w-300 rounded-2xl px-5 lg:px-10 py-12 lg:py-20 overflow-hidden">
      <div className="absolute top-4 right-[5%] md:right-[20%] lg:right-[30%] pointer-events-none">
        <img src={vector} alt="" aria-hidden="true" />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-[#FEF7EE] text-2xl lg:text-4xl text-center mb-4 font-bold">
          Our Collection
        </h2>
        <p className="text-[#6F757C] text-center text-sm lg:text-base max-w-125">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>

      <div
        className="relative z-10 flex justify-center gap-2 mt-8 md:mb-4"
        role="group"
        aria-label="Filtro de produtos"
      >
        <Button active={filter === 'all'} onClick={() => setFilter('all')}>
          All products
        </Button>
        <Button
          active={filter === 'available'}
          onClick={() => setFilter('available')}
        >
          Available Now
        </Button>
      </div>
      <CoffeeList filter={filter} />
    </section>
  );
};

export default CoffeeSection;
