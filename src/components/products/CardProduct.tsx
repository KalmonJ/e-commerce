import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
interface CardProductProps extends HTMLAttributes<HTMLDivElement> {}

export const CardProduct = ({ className, children }: CardProductProps) => {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
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

export const ProductDescrition = ({
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
