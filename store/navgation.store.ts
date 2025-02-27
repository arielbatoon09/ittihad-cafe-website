import { create } from "zustand";
import { INavigationState } from "@/types/navigation.types";

export const useNavigationStore = create<INavigationState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));