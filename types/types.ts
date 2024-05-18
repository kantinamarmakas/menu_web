
export type Product = {
  name: string;
  description: string;
  price: number;
  image?: string;
  ingredients?: string[]
}

export type Category = {
  name: string;
  products: Product[];
}