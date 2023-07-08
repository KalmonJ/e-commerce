import { ProductResponse } from "@/components/products/ProductCard";

export type Cart = {
  id: number;
  total: number;
  products: ProductResponse[];
};
