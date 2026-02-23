import { Product } from "@/Data/Type/Product/Product";
import { createContext, useState } from "react";

type ProductContextType = {
  singleproduct: Product[];
  gotoproduct: (product: Product) => void;
};

type Props = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export default function ProductProvider({ children }: Props) {
  const [singleproduct, setSingleproduct] = useState<Product[]>([]);

  const gotoproduct = (product: Product) => {
    let duplicate = false;
    setSingleproduct((prev) => {
      duplicate = prev.some((item) => item.id === product.id);
      if (duplicate) {
        return prev;
      }
      return [...prev, product];
    });

    if (duplicate) {
      alert("Item Already in the cart");
    } else {
      alert("Product added Successfully");
    }
  };

  return (
    <ProductContext.Provider value={{ singleproduct, gotoproduct }}>
      {children}
    </ProductContext.Provider>
  );
}
