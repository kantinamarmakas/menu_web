
export type Product = {
  name: string;
  description?: string;
  price?: number;
  image?: string;
  ingredients?: string[]
  vegan?: boolean;
  frozen?: boolean;
  seafood?: boolean;
}

export type Category = {
  name: string;
  products: Product[];
}

export type Locales = 'en_US' | 'el_GR' | 'it_IT';