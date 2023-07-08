import { ProductIncrement } from "./ProductIncrement";
import { CartItem, cartStore } from "@/stores/cart";

type ProductCartItem = {
  cartItem: CartItem;
};

export const ProductCartItem = ({ cartItem }: ProductCartItem) => {
  const updateQuantity = cartStore((state) => state.updateQuantity);

  const handleIncrement = () => {
    updateQuantity(cartItem.quantity + 1, cartItem.id);
  };

  const handleDecrement = () => {
    if (cartItem.quantity > 1)
      updateQuantity(cartItem.quantity - 1, cartItem.id);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex justify-between w-full items-center gap-4">
        {/* Image here */}
        <div className="flex flex-col  w-full gap-2">
          <h4 className="font-Manrope text-black font-bold text-[15px] leading-[25px]">
            {cartItem.name}
          </h4>
          <span className="font-Manrope text-black text-sm font-bold opacity-50 leading-[25px]">
            {cartItem.price}
          </span>
        </div>
        <div className="max-w-[120px] items-center flex justify-around w-full h-12 bg-light-gray">
          <button
            onClick={handleDecrement}
            className="font-Manrope cursor-pointer font-bold uppercase tracking-[1px] text-black opacity-25 text-[13px]"
          >
            -
          </button>
          <span className="text-black font-Manrope tracking-[1px] font-bold uppercase text-[13px]">
            {cartItem.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="font-Manrope cursor-pointer font-bold uppercase tracking-[1px] text-black opacity-25 text-[13px]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
