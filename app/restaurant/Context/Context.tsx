"use client";
import { Product } from "@/Data/Type/Product/Product";
import { createContext, useState } from "react";

type PackageContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const PackageContext = createContext<PackageContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function PackageProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    let duplicate = false;
    setCart((prev) => {
      duplicate = prev.some((item) => item.id === product.id);
      if (!duplicate) {
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <PackageContext.Provider value={{ cart, addToCart }}>
      {children}
    </PackageContext.Provider>
  );
}
