import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null, // { name, role }

  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));
