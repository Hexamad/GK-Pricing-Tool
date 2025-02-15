export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string;
  image: string;
  densities: string[];
  dimensions: number[];
  sizes: object;
  metrics: string[];
  features: string[];
  specs: Record<string, string>;
}

export interface ProductSelection {
  density: string;
  dimension: number;
  size: string;
  metrics: string;
}

export type SortOption = 'name' | 'price-asc' | 'price-desc';

export interface FilterState {
  category: string;
  search: string;
  sort: SortOption;
}

export interface CartItem {
  product: Product;
  selection: ProductSelection;
  quantity: number;
  price: number;
}

