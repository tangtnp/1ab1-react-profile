import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // เพิ่มสินค้า
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        // ถ้ามีแล้ว → เพิ่ม quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // ถ้ายังไม่มี → เพิ่มใหม่ quantity = 1
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  // ลบสินค้า
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // ล้างตะกร้า
  clearCart: () => set({ cart: [] }),
}));
