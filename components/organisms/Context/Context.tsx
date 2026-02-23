"use client";
import { Product } from "@/Data/Type/Product/Product";
import { createContext, useState } from "react";

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    let exist = false;
    setCart((prev) => {
      exist = prev.some((item) => item.id === product.id);
      if (exist) {
        alert("Quantity updated in cart");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item,
        );
      }
      return [...prev, product];
    });
    if (!exist) {
      alert("Product added successfully");
    }
  };

  const updateQuantity = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item)),
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
