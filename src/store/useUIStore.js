import { create } from "zustand";

// NO persist needed as it doesnt require localStorage
export const useUIStore = create((set) => ({
  // is Hamburger menu open
  isHamburgerOpen: false,
  // is NavBar visible (auto-hides when scrolling down)
  isNavVisible: true,

  // ACTION: toggle between open and close Hamburger menu
  toggleMenu: () =>
    set((state) => ({
      isHamburgerOpen: !state.isHamburgerOpen,
    })),

  // ACTION: close Hamburger menu
  closeHamburger: () => set({ isHamburgerOpen: false }),

  // visible: takes a function more flexible/dynamic statement as parameter
  setNavVisible: (visible) => set({ isNavVisible: visible }),
}));
