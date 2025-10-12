import React, { createContext, useContext, useState, ReactNode } from "react";
import { CourseItem } from "../types";

// Helper function to calculate cart totals
export const calculateCartTotals = (cart: CourseItem[]) => {
  const subtotal = cart.reduce((s, c) => s + c.price, 0);
  let discountRate = 0;
  if (cart.length === 2) discountRate = 0.05;
  else if (cart.length === 3) discountRate = 0.1;
  else if (cart.length >= 4) discountRate = 0.15;
  const discount = subtotal * discountRate;
  const discountedTotal = subtotal - discount;
  const vat = discountedTotal * 0.15;
  const total = discountedTotal + vat;
  return { subtotal, discount, vat, total };
};

export const CartContext = createContext<{
  cart: CourseItem[];
  addToCart: (c: CourseItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getCartTotals: () => { subtotal: number; discount: number; vat: number; total: number };
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotals: () => ({ subtotal: 0, discount: 0, vat: 0, total: 0 }),
});

export function useCart() {
  return useContext(CartContext);
}

// Provider component to wrap the application
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CourseItem[]>([]);

  const addToCart = (c: CourseItem) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === c.id)) return prev;
      return [...prev, c];
    });
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);
  const getCartTotals = () => calculateCartTotals(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartTotals }}>
      {children}
    </CartContext.Provider>
  );
};