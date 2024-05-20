
export type Product = {
  name: string;
  description?: string;
  price?: number;
  image?: string;
  ingredients?: string[]
  vegan?: boolean;
}

export type Category = {
  name: string;
  products: Product[];
}