import { content } from "../../data/content";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../data/projects";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { useTranslate } from "../../hooks/useTranslate";

export default function ProjectsSection() {
  const t = useTranslate();
  const { header } = content.projects;
  const [isLeftChevronVisible, setIsLeftChevronVisible] = useState(false);
  const [isRightChevronVisible, setIsRightChevronVisible] = useState(true);

  // check scroll position to show/hide buttons
  const checkScrollPosition = () => {
    const container = document.getElementById("projects-scroll-container");

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // show left scroll if scrolled past start
    setIsLeftChevronVisible(scrollLeft > 0);

    // show right scroll if not at the end
    setIsRightChevronVisible(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const getContainer = () => {
    return document.getElementById("projects-scroll-container");
  };

  // scroll functions
  const scrollLeft = () => {
    const container = getContainer();

    if (container) {
      container.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = getContainer();

    if (container) {
      container.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // added eventlistener to check scrollposition on mount and scroll
  useEffect(() => {
    checkScrollPosition();
    const container = getContainer();

    if (container) {
      container.addEventListener("scroll", checkScrollPosition);

      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section
      id="projects-section"
      className="flex flex-col min-h-screen py-14 md:py-20 px-6 md:px-10"
    >
      <SectionHeader caption={header.caption} title={header.title} />

      {projects && projects.length > 0 && (
        // <div className="flex flex-1 justify-center items-center relative w-11/12">
        <div className="flex flex-1 justify-center items-center py-8 md:py-0 md:h-5/6 relative w-full">
          {/* left chevron button */}
          {isLeftChevronVisible && (
            <button
              onClick={scrollLeft}
              className="absolute -left-5 sm:-left-5 top-1/2 -translate-y-1/2 z-10 text-[var(--text)] hover:text-[var(--text-hover)] transition-all duration-300 cursor-pointer hover:scale-105 hover:drop-shadow-md hover:-translate-y-5 md:hover:-translate-y-7"
              aria-label="Scroll left"
            >
              <HiChevronLeft className="text-3xl md:text-5xl" />
            </button>
          )}

          {/* projects container */}
          <div
            id="projects-scroll-container"
            className=" overflow-x-auto scrollbar-hide scroll-smooth py-4 w-full max-w-[90%]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 md:gap-8 min-w-max space-px-8 md:space-px-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* right chevron button */}
          {isRightChevronVisible && (
            <button
              onClick={scrollRight}
              className="absolute -right-5 sm:-right-5  top-1/2 -translate-y-1/2 z-10 text-[var(--text)] hover:text-[var(--text-hover)] transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-md hover:-translate-y-5 md:hover:-translate-y-7"
              aria-label="Scroll right"
            >
              <HiChevronRight className="text-3xl md:text-5xl" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
