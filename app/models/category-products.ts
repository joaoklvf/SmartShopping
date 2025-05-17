import type { Category } from "./category";
import type { Product } from "./product";

export interface CategoryProducts {
  category: Category;
  products: Product[];
}