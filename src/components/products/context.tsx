import { ReactNode, createContext, useState } from "react";
import { ProductResponse } from "./ProductCard";

type ProductContext = {
  product: ProductResponse;
  productQuantity: number;
  setProductQuantity: (quantity: number) => void;
};

export const ProductContext = createContext<ProductContext | null>(null);

type ProductProviderProps = {
  product: ProductResponse;
  children: ReactNode;
};

export const ProductProvider = ({
  children,
  product,
}: ProductProviderProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <ProductContext.Provider
      value={{ product, productQuantity, setProductQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};
