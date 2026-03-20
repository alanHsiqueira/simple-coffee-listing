export type fetchCoffees = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
} 


export type CoffeListProps = { 
  filter: "all" | "available";
}