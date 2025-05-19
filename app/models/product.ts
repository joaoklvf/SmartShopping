import type { Entity } from "./Entity";

export interface Product extends Entity {
  price: number;
  quantity: number;
  categoryId: string;
  imgUrl: string;
  promotionalPrice?: number;
}