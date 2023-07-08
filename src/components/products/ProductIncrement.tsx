"use client";

import { useProductContext } from "./useProductContext";

export const ProductIncrement = () => {
  const { setProductQuantity, productQuantity } = useProductContext();

  const handleDecrement = () => {
    if (productQuantity > 1) setProductQuantity(productQuantity - 1);
  };
  const handleIncrement = () => setProductQuantity(productQuantity + 1);

  return (
    <div className="max-w-[120px] items-center flex justify-around w-full h-12 bg-light-gray">
      <button
        onClick={handleDecrement}
        className="font-Manrope cursor-pointer font-bold uppercase tracking-[1px] text-black opacity-25 text-[13px]"
      >
        -
      </button>
      <span className="text-black font-Manrope tracking-[1px] font-bold uppercase text-[13px]">
        {productQuantity}
      </span>
      <button
        onClick={handleIncrement}
        className="font-Manrope cursor-pointer font-bold uppercase tracking-[1px] text-black opacity-25 text-[13px]"
      >
        +
      </button>
    </div>
  );
};
