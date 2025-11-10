import { useThemeStore } from "../../store/useThemeStore";
import {
  compactButtonClasses,
  getButtonStyles,
} from "../../utils/buttonStyles";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button
      onClick={toggleTheme}
      className={`${compactButtonClasses} ${getButtonStyles(
        "outline"
      )} w-[44px] h-[36px] md:w-[60px] md:h-[40px] min-w-0 px-0`}
      aria-label="Toggle Theme"
    >
      {/* {theme === "dark" ? <HiMoon /> : <HiSun />} */}
      {theme === "dark" ? <HiSun /> : <HiMoon />}
      {/* {theme === "dark" ? "☀︎" : "⏾"} */}
      {/* {theme === "dark" ? "☀︎" : "☾"} */}
    </button>
  );
}
