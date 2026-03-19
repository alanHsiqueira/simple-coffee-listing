import React from 'react';
import type { fetchCoffees } from '../types/type';
const CoffeeCard = ({ image, name }: fetchCoffees) => {
  return (
    <div className="">
      <img className="rounded-xl  " src={image} alt="" />
      <p className="text-[#FEF7EE] text-[10px]">{name}</p>
    </div>
  );
};

export default CoffeeCard;
