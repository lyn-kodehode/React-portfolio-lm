import { useEffect } from "react";
import { useThemeStore } from "../../store/useThemeStore";

export default function ThemeWatcher() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");

    // Update favicon based on theme
    const faviconLink = document.querySelector("link[type='image/svg+xml']");
    if (faviconLink) {
      // Dark mode = light logo, Light mode = dark logo
      faviconLink.href =
        theme === "dark" ? "./favicon-light.svg" : "./favicon.svg";
    }
  }, [theme]);

  return null;
}
