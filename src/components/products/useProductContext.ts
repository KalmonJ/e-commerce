import { useContext } from "react";
import { ProductContext } from "./context";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("I didn't find a product provider");
  return context;
};
