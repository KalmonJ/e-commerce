"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { HTMLAttributes } from "react";
import { ProductResponse } from "./ProductCard";
import { userStore } from "./../../stores/user";
import { AddProduct } from "./../../lib/validators/cart";
import { ApiResponse } from "@/types/api";
import { Cart } from "@/types/cart";
import { useProductContext } from "./useProductContext";
import { cartStore } from "@/stores/cart";

interface ProductButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const addToCart = async (input: AddProduct) => {
  const response = await fetch("/api/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data: ApiResponse<Cart> = await response.json();
  return data;
};

export const ProductButton = ({ className }: ProductButtonProps) => {
  const user = userStore((state) => state.user);
  const { productQuantity, product } = useProductContext();
  const setCartItem = cartStore((state) => state.setCartItem);

  const handleAddToCart = async () => {
    setCartItem({
      id: product.id,
      image: product.thumbnail,
      name: product.name,
      price: product.price,
      quantity: productQuantity,
    });

    console.log(user, "usuário");

    await addToCart({
      ownerId: String(user.id),
      productId: String(product.id),
      productQuantity: productQuantity,
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={cn("uppercase border-none", className)}
    >
      ADD TO CART
    </Button>
  );
};
