import { useLanguageStore } from "../../store/useLanguageStore";
import {
  compactButtonClasses,
  getButtonStyles,
} from "../../utils/buttonStyles";

export default function LanguageToggle() {
  const { toggleLanguage, language } = useLanguageStore();
  return (
    <button
      onClick={toggleLanguage}
      className={`${compactButtonClasses} ${getButtonStyles(
        "outline"
      )} w-[44px] h-[36px] md:w-[60px] md:h-[40px] min-w-0 px-0`}
      aria-label="Toggle Language"
    >
      {language === "no" ? "EN" : "NO"}
    </button>
  );
}
