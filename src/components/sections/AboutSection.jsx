import { useTranslate } from "../../hooks/useTranslate";
import { content } from "../../data/content";
import SectionHeader from "../ui/SectionHeader";
import { useLanguageStore } from "../../store/useLanguageStore";

export default function AboutSection() {
  const { language } = useLanguageStore();
  const t = useTranslate();
  const { about } = content;
  const { header, photo } = content.about;
  const paragraphs = about.paragraphs.map((p) => t(p));

  const renderWithName = (text) => {
    const name = "Lyn";
    const parts = text.split(name);

    return (
      <>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="transition font-semibold group-hover:font-extrabold name">
                {name}
              </span>
            )}
          </span>
        ))}
      </>
    );
  };

  // line-spacing conditional on about-text
  const lineSpacingClasses =
    language === "no"
      ? "leading-tight sm:leading-normal md:leading-tight lg:leading-[1.6rem]"
      : "leading-tight sm:leading-normal md:leading-[1.45rem] lg:leading-[1.6rem] ";

  return (
    <section
      id="about-section"
      className="flex flex-col min-h-screen py-14 md:py-20 px-6 md:px-8 lg:px-10"
    >
      <SectionHeader caption={header.caption} title={header.title} />

      {/* Hover only affects the area below */}
      <div className="group mx-auto flex flex-1 flex-col md:flex-row justify-center items-center gap-8 md:gap-6 w-full max-w-[900px]">
        {/* photo transition on group hover */}
        <div className="flex justify-center w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] shrink-0">
          <div className="relative w-full h-[375px] sm:h-[430px]] md:h-[500px] lg:h-[535px] rounded-xl overflow-hidden shadow-md">
            <img
              src={photo.bw}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={photo.color}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="md:hidden pt-[140%]" />
          </div>
        </div>

        {/* text column same size as photo */}
        <div
          className={`w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] md:max-w-[400px] md:h-[500px] lg:h-[535px] space-y-4 overflow-hidden md:overflow-auto flex shrink-0 ${lineSpacingClasses}`}
        >
          <div className="space-y-4">
            {/* paragpraphs */}
            {paragraphs.map((p, index) => (
              <p key={index} className="text-justify">
                {index === 0 ? renderWithName(p) : p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
