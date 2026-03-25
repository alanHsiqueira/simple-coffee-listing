export type  CoffeeItem = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | string | null;
  votes: number;
  popular: boolean;
  available: boolean;
};

export type CoffeeListProps = {
  filter: 'all' | 'available';
};
