"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { ProductDescription } from "./ProductDescription";
import { ProductName } from "./ProductName";
import { ProductIncrement } from "./ProductIncrement";
import { ProductInfo } from "./ProductInfo";
import { ProductPrice } from "./ProductPrice";
import { ProductButton } from "./ProductButton";

interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  productImage?: ReactNode;
  action?: ReactNode;
}

export const Product = ({
  className,
  productImage,
  children,
}: ProductProps) => {

  return (
    <div className={cn("flex items-center justify-between", className)}>
      {productImage && (
        <div className="overflow-hidden rounded-lg w-[540px] h-[560px]">
          <AspectRatio ratio={16 / 9} className="h-[560px]">
            {productImage}
          </AspectRatio>
        </div>
      )}
      {children}
    </div>
  );
};

Product.Description = ProductDescription;
Product.Title = ProductName;
Product.Increment = ProductIncrement;
Product.Info = ProductInfo;
Product.Price = ProductPrice;
Product.Button = ProductButton;
