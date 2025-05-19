import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem } from '~/models/CartItem';
import type { CartContextProps } from './CartContextProps';

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCart must be used within a CartProvider');

  return context;
};
