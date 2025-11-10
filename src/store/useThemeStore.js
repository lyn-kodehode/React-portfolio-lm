import { create } from "zustand";
import { persist } from "zustand/middleware";

// checks for saved theme preference or system preference else defaults to lightmode
const getSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

// creates the store
export const useThemeStore = create(
  // persist()wraps store to save to localStorage
  persist(
    // set = function to update the store
    (set) => ({
      // STATE: current theme (default: check system preference)
      theme: getSystemTheme(),

      // ACTION: toggle between light and dark modes
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      // ACTION: set specific theme
      setTheme: (theme) => set({ theme }),
    }),
    {
      // localStorage keyName
      name: "theme-storage",
    }
  )
);
