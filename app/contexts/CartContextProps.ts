import type { CartItem } from "~/models/CartItem";

export interface CartContextProps {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}