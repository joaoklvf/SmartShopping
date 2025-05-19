import type { Product } from "./Product";

export interface DiscountCoupon {
  conditionPrice?: number;
  conditionCategoryId?: string;
  discountValue?: number;
  discountPercentage?: number;
}

export interface CartItem {
  product: Product;
  amount: number;
  discount?: DiscountCoupon;
}