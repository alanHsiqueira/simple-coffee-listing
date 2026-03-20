import Button from './Button';
import CoffeeList from './CoffeeList';
import React from 'react';

const CoffeeSection = () => {
  const [filter, setFilter] = React.useState<"all" | "available">("all");

  return (
    <div className="relative mx-auto -mt-[340px] bg-[#1B1D1F] w-[85%] rounded-2xl px-10 py-12">
      <h1 className="text-[#FEF7EE] text-3xl text-center mb-3 font-bold">
        Our Colection
      </h1>
      <p className="text-[#6F757C] text-center text-base">
        Introducing our Cooffe Collection, a selection of unique coffees <br />{' '}
        from diferent roast types and origins, expertily roasted in small <br />{' '}
        batches and shipped fresh weekly
      </p>
      <div className='flex justify-center gap-2 mt-4'>
        <Button active={filter ==="all"} onClick={() => setFilter("all")}>All products</Button>
        <Button active={filter === "available"} onClick={() => setFilter("available")}>Available Now</Button>
      </div>
      <CoffeeList filter={filter} /> 
    </div>
  );
};

export default CoffeeSection;
