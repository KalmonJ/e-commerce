import { create } from "zustand";

export type CartItem = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];
  setCartItem: (item: CartItem) => void;
  updateQuantity: (quantity: number, productId: number) => void;
};

export const cartStore = create<CartStore>((set, get) => ({
  cartItems: [] as CartItem[],
  setCartItem(item) {
    set((state) => ({ cartItems: [...state.cartItems, item] }));
  },
  updateQuantity(quantity, productId) {
    const cartItems = [...get().cartItems];
    const position = cartItems.findIndex((item) => item.id === productId);
    cartItems[position].quantity = quantity;
    set(() => ({ cartItems }));
  },
}));
