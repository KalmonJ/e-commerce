import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProductInfoProps extends HTMLAttributes<HTMLDivElement> {}

export const ProductInfo = ({ className, children }: ProductInfoProps) => {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
};
