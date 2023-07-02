import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
interface CardProductProps extends HTMLAttributes<HTMLDivElement> {
  productImage?: ReactNode;
  action?: ReactNode;
}

export const CardProduct = ({
  className,
  productImage,
  children,
}: CardProductProps) => {
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

interface ProductNameProps extends HTMLAttributes<HTMLHeadingElement> {}

export const ProductName = ({ className, children }: ProductNameProps) => {
  return (
    <h2
      className={cn(
        "font-Manrope text-white tracking-[2px] font-bold uppercase",
        className
      )}
    >
      {children}
    </h2>
  );
};

interface ProductDescritionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const ProductDescription = ({
  className,
  children,
}: ProductDescritionProps) => {
  return (
    <p
      className={cn(
        "font-Manrope text-white font-medium opacity-75",
        className
      )}
    >
      {children}
    </p>
  );
};

interface ProductInfoProps extends HTMLAttributes<HTMLDivElement> {}

export const ProductInfo = ({ className, children }: ProductInfoProps) => {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
};
