import React from 'react';
import Button from './Button';
import CoffeeList from './CoffeeList';

const CoffeeSection = () => {
  return (
    <div className="relative mx-auto -mt-60 bg-[#111315] w-[85%] rounded-2xl px-10 py-8">
      <h1 className="text-[#FEF7EE] text-3xl text-center mb-3 font-bold">
        Our Colection
      </h1>
      <p className="text-[#6F757C] text-center text-base">
        Introducing our Cooffe Collection, a selection of unique coffees <br />{' '}
        from diferent roast types and origins, expertily roasted in small <br />{' '}
        batches and shipped fresh weekly
      </p>
      <div className='flex justify-center gap-1 mt-3'>
        <Button>All products</Button>
        <Button>Available Now</Button>
      </div>
      <CoffeeList /> 
    </div>
  );
};

export default CoffeeSection;
