import { useTranslate } from "../../hooks/useTranslate";
import {
  getButtonStyles,
  projectCardButtonClasses,
} from "../../utils/buttonStyles";

export default function ProjectCard({ project }) {
  const t = useTranslate();
  const { title, description, github, live, image } = project;

  return (
    <article className="group flex-shrink-0 w-[280px] sm:w-[300px] md:w-[360px] lg:w-[390px] xl:w-[420px] h-[373px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[560px] bg-[var(--bg)] border-[1px] border-[var(--text)] rounded-4xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-xl">
      {/* image container: bw to color */}
      <div className="relative w-full h-1/2 overflow-hidden ">
        <img
          src={image.bw}
          alt={title}
          className="absolute inset-0 w-full h-full object-fill opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={image.color}
          alt={title}
          className="absolute inset-0 w-full h-full object-fill opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* content area */}
      <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 md:p-6">
        {/* title and description */}
        <div className="flex-1 space-y-2 sm:space-y-3">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--text-live-hover)]">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text)] leading-relaxed line-clamp-1 sm:line-clamp-2 md:line-clamp-2 lg:line-clamp-3">
            {t(description)}
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${projectCardButtonClasses} ${getButtonStyles(
              "github"
            )}`}
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${projectCardButtonClasses} ${getButtonStyles("live")}`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
