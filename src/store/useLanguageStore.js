import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  // persist()wraps store to save to localStorage
  persist(
    // set = function to update the store
    (set) => ({
      // defaults to Norwegian
      language: "no",

      // ACTION: toggle between english and norwegian
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "no" ? "en" : "no",
        })),

      // ACTION: set specific theme
      setLanguage: (language) => set({ language }),
    }),
    {
      // localStorage keyName
      name: "language-storage",
    }
  )
);
