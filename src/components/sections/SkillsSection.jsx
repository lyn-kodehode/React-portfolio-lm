import { content } from "../../data/content";
import { useTranslate } from "../../hooks/useTranslate";
import SectionHeader from "../ui/SectionHeader";

export default function SkillsSection() {
  const t = useTranslate();
  const { list, header } = content.skills;
  return (
    <section
      id="skills-section"
      className="flex flex-col min-h-screen py-14 md:py-20 px-6 md:px-10"
    >
      <SectionHeader caption={header.caption} title={header.title} />
      <div className="flex flex-1 justify-center items-center py-8 md:py-0 md:h-5/6">
        <ul className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-5xl w-full justify-items-center list-none">
          {list.map((item, index) => (
            <li
              key={index}
              className=" group relative"
              style={{
                animation: `fadeInUp .6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Skill card */}
              <div className="relative bg-[var(--bg)] border-[1px] border-[var(--text)] rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[var(--text)] hover:-translate-y-2 hover:border-[var--(text-hover)] hover:bg-[var(--text)] hover:text-[var(--bg)] active:scale-105">
                {/* Skill text */}
                <span className="text-lg font-semibold transition-colors duration-300 group-hover:font-bold">
                  {item}
                </span>

                {/* subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-linear-to-br from-[var(--text)] via-[var(--text)]/80 to-transparent pointer-events-none blur-sm" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
