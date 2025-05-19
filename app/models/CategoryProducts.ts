
import type { Category } from "./Category";
import type { Product } from "./Product";

export interface CategoryProducts {
  category: Category;
  products: Product[];
}