import { content } from "../../data/content";
import { useTranslate } from "../../hooks/useTranslate";
import { useThemeStore } from "../../store/useThemeStore";
import { getButtonStyles, heroButtonClasses } from "../../utils/buttonStyles";

// button style function

export default function HeroSection() {
  const t = useTranslate();
  const { theme } = useThemeStore();
  const { name, title, subtitle, buttons } = content.hero;

  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center px-6 md:px-10"
    >
      <div className="text-center max-w-4xl">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold font-primary mb-8">
          {name}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-3xl font-secondary mb-3">{t(title)}</p>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl font-secondary mb-8 opacity-90">
          {t(subtitle)}
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <a
            href={buttons.cv.href}
            download="Lyn_Michaels_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${heroButtonClasses} ${getButtonStyles("outline")}`}
          >
            {t(buttons.cv.label)}
          </a>
          <a
            href={buttons.contact.href}
            className={`${heroButtonClasses} ${getButtonStyles("filled")}`}
            style={{ scrollBehavior: "smooth" }}
          >
            {t(buttons.contact.label)}
          </a>
        </div>
      </div>
    </section>
  );
}
