import type { fetchCoffees } from '../types/type';
import star from '../assets/Star_fill.svg';
import starEmpty from "../assets/Star.svg";
const CoffeeCard = ({
  image,
  name,
  price,
  popular,
  rating,
  votes,
  available,
}: fetchCoffees) => {
  const spanStyle =
    'text-xs bg-[#F6C768] absolute top-2 left-2 rounded-xl px-2 py-1';
  return (
    <div className="mx-auto mt-10">
      <div className="relative">
        <img className="rounded-xl w-full h-40 " src={image} alt="Coffee" />
        {popular ? <span className={spanStyle}>Popular</span> : null}
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[#FEF7EE] text-base font-bold">{name}</p>
        <span className="bg-[#BEE3CC] text-sm rounded px-1 py-0.5">{price}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        {rating ? (
          <div className="flex gap-1 items-center">
            <img src={star} alt="rating" />
            <p className="text-base text-[#FEF7EE]">{rating} <span className='text-sm text-[#6F757C]'>({votes}votes)</span> </p>
          </div>
        ) : (
          <div className='flex items-center gap-1'>
            <img src={starEmpty} alt="" />
               <span className="ml-1 text-sm text-[#6F757C]">No ratings</span>
          </div>
       
        )}

        {available ? null : (
          <span className="text-[#ED735D] text-sm  font-bold">Sold out</span>
        )}
      </div>
    </div>
  );
};

export default CoffeeCard;
