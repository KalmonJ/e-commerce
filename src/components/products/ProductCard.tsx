"use client";

import { Product } from "./Product";
import Image from "next/image";

export type ProductResponse = {
  thumbnail: string;
  id: number;
  name: string;
  description: string;
  price: number;
};

type ProductCardProps = {
  product: ProductResponse;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Product
      className="w-full"
      productImage={
        <Image
          src={product.thumbnail}
          className="object-cover rounded-lg transition-transform hover:scale-110"
          fill
          alt={product.name}
        />
      }
      key={product.id}
    >
      <Product.Info className="max-w-[445px]">
        <Product.Description className="text-primary uppercase tracking-[10px]">
          New Product
        </Product.Description>
        <Product.Title className="text-black text-[40px] leading-[44px] tracking-[1.429px]">
          {product.name}
        </Product.Title>
        <Product.Description className="text-black opacity-50 text-[15px] leading-[25px]">
          {product.description}
        </Product.Description>
        <Product.Price price={product.price} />
        <div className="flex gap-4">
          <Product.Increment />
          <Product.Button />
        </div>
      </Product.Info>
    </Product>
  );
};
