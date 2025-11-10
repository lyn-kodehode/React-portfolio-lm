import { useEffect, useState } from "react";
import { useUIStore } from "../../store/useUIStore";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { navLinks } from "../../data/navLinks";
import { useTranslate } from "../../hooks/useTranslate";

export default function NavBar() {
  const { language } = useTranslate();
  const {
    isNavVisible,
    setNavVisible,
    isHamburgerOpen,
    toggleMenu,
    closeHamburger,
  } = useUIStore();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  // auto-hides navBar on scrolldown
  useEffect(() => {
    // lastScrollTop value is set once on mount
    let lastScrollTop = 0;
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      const scrollTop = window.pageYOffset;

      // if scrolling down
      // compare current scroll and previous scroll
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setNavVisible(false);
        if (isHamburgerOpen) {
          closeHamburger();
        }
      }
      // if scrolling up
      else {
        setNavVisible(true);
      }

      // change logo when scrolling past hero section
      if (heroSection) {
        const heroPassed =
          scrollTop > heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolledPastHero(heroPassed);
      }

      // lastScrollTop value persists
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // avoid eventlistener bubbling
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHamburgerOpen]);

  const handleLinkClick = () => {
    closeHamburger();
  };

  return (
    <>
      <nav
        className={`flex items-center fixed top-0 right-0 left-0 z-50 bg-[var(--bg)] shadow-md px-4 md:px-6 lg:px-10 py-3 md:py-4 transition-all duration-300 text-[var(--text)] ${
          !isNavVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Logo - changes when past hero section */}
        <div className="flex-1">
          <div className="text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 font-primary">
            <span
              className={` ${
                isScrolledPastHero ? "opacity-0 absolute" : "opacity-100"
              }`}
            >
              LM
            </span>
            {/* <span className={` ${isScrolledPastHero ? "inline" : "hidden"}`}> */}
            <span
              className={` ${
                isScrolledPastHero ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              LYN MICHAELS
            </span>
          </div>
        </div>

        {/* Desktop menu links */}
        <ul className="hidden md:flex gap-3 md:gap-5 lg:gap-6.5 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="font-primary font-light text-xl lg:text-2xl whitespace-nowrap hover:-translate-y-px transition-all duration-300"
            >
              <a
                className="hover:opacity-70 transition-opacity duration-300 "
                // className="hover:-translate-y-0.5 hover:font-light "
                href={link.href}
                style={{ scrollBehavior: "smooth" }}
              >
                {language === "no" ? link.no : link.en}
              </a>
            </li>
          ))}
        </ul>

        {/* control buttons + hamburger icon */}
        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3 lg:gap-4">
          <LanguageToggle />
          <ThemeToggle />
          {/* hamburger icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-7 h-6 justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ease ${
                isHamburgerOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isHamburgerOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ease ${
                isHamburgerOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Hamburger menu links */}
      <div
        className={`md:hidden fixed top-16 right-0 w-36 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isHamburgerOpen && isNavVisible ? "max-h-96" : "max-h-0"
        } bg-[var(--bg)] text-[var(--text)] shadow-lg`}
      >
        <nav className="pt-3">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} onClick={handleLinkClick} className="">
                {/* PLEASE FIX HOVER */}
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 px-4 text-right text-lg font-primary font-light hover:-translate-y-px hover:font-light hover:opacity-70 transition-all duration-300"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {language === "no" ? link.no : link.en}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

// width 768px desktop menu and control buttons look cramped
