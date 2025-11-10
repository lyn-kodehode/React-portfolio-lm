/**
 * Get button style classes based on variant and theme
 * @param {string} variant - 'outline' or 'filled' or 'github' or 'live'
 * @param {string} theme - 'light' or 'dark'
 * @returns {string} Tailwind CSS classes
 */

export const getButtonStyles = (variant) => {
  const styles = {
    outline:
      "border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)]/85",

    filled:
      "bg-[var(--contact)] text-[var(--bg)] border-[var(--contact)] hover:bg-[var(--contact-hover)] hover:text-[var(--bg)]/85",

    github:
      "bg-[var(--github)] text-[var(--bg)] border-[var(--github)] hover:bg-[var(--github-hover)] hover:text-var(--bg)]/85",

    live: "bg-[var(--live)] text-[var(--bg)] border-[var(--live)] hover:bg-[var(--live-hover)] hover:text-[var(--bg)]/85",
  };

  return styles[variant] || styles.outline;
};

// optional: Base button classes (shared across all buttons)
export const heroButtonClasses =
  "inline-flex justify-center whitespace-nowrap leading-none items-center px-3 sm:px-7 md:px-8 py-4 md:py-5 rounded-full border-[1px] transition-all duration-300 font-secondary text-sm sm:text-base md:text-lg lg:text-xl hover:-translate-y-0.5 hover:shadow-lg w-full md:w-auto md:min-w-[210px]";

export const compactButtonClasses =
  "inline-flex items-center justify-center whitespace-nowrap leading-none px-3 py-2.5 rounded-full border-[1px] transition-all duration-300 text-sm hover:-translate-y-0.5 hover:shadow-md";

export const projectCardButtonClasses =
  "inline-flex justify-center whitespace-nowrap leading-none items-center px-3 sm:px-4 py-3 sm:py-3 md:py-4 lg:py-4 rounded-full transition-all duration-300 font-secondary text-sm sm:text-base md:text-lg lg:text-xl hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto sm:flex-1 min-w-0";
