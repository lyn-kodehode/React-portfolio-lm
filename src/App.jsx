import NavBar from "./components/layout/NavBar";
import HeroSection from "./components/sections/HeroSection";
import ThemeWatcher from "./components/system/ThemeWatcher";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <ThemeWatcher />
      <NavBar />
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;

/* 
THEME, LANGUAGE, MENU TESTER

THEME:
      <div>
        <p>
          Current Theme: <strong>{theme}</strong>
        </p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-github text-white rounded hover:bg-github-hover"
        >
          Toggle Theme
        </button>
      </div>

LANGUAGE:


HAMBURGER MENU:

INSTRUCTIONS:
<div>
        <p>Try this:</p>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Click the buttons to change values</li>
          <li>Refresh the page</li>
          <li>Theme and Language should persist (saved in localStorage)</li>
          <li>Menu state should reset (not saved)</li>
        </ol>
      </div>

*/
