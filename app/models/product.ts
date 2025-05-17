import type { Entity } from "./entity";

export interface Product extends Entity {
  price: number;
  quantity: number;
  categoryId: string;
  imgUrl: string;
  promotional_price?: number;
}