import type { CoffeeItem } from '../types/coffee.types';
import star from '../assets/Star_fill.svg';
import starEmpty from '../assets/Star.svg';
const CoffeeCard = ({
  image,
  name,
  price,
  popular,
  rating,
  votes,
  available,
}: CoffeeItem) => {
  const spanStyle =
    'text-xs font-bold bg-[#F6C768] absolute top-2 left-2 rounded-xl px-2 py-1';
  return (
    <article className="mx-auto mt-5 md:mt-10 w-full max-w-60">
      <div className="relative">
        <img
          className="rounded-xl w-full h-40 object-cover"
          src={image}
          alt={`${name} coffee`}
        />
        {popular ? (
          <span className={spanStyle} aria-label="Popular coffee">
            Popular
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between gap-2 mt-2">
        <p className="text-[#FEF7EE] text-sm sm:text-base font-bold">{name}</p>
        <span className="bg-[#BEE3CC] text-sm font-bold rounded px-1 py-0.5">
          {price}
        </span>
      </div>
      <div className="flex items-center justify-between mt-1 sm:mt-2 ">
        {rating ? (
          <div
            className="flex gap-1 items-center"
            role="img"
            aria-label={`Rating: ${rating} out of 5 stars, ${votes} votes`}
          >
            <img src={star} alt="" aria-hidden="true" />
            <p className="text-sm md:text-base text-[#FEF7EE] leading-none">
              {rating}{' '}
              <span className="text-sm text-[#6F757C]">
                ({votes} votes)
              </span>{' '}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <img src={starEmpty} alt="" aria-hidden="true" />
            <span className="ml-1 text-sm text-[#6F757C] leading-none">
              No ratings
            </span>
          </div>
        )}

        {available ? null : (
          <span className="text-[#ED735D] text-sm  font-bold mt-1" role="alert">
            Sold out
          </span>
        )}
      </div>
    </article>
  );
};

export default CoffeeCard;
