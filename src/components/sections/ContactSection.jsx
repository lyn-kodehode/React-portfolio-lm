import { content } from "../../data/content";
import SectionHeader from "../../components/ui/SectionHeader";
import { useTranslate } from "../../hooks/useTranslate";
import { getButtonStyles, heroButtonClasses } from "../../utils/buttonStyles";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const t = useTranslate();
  const { header, email, phone, message, socialLinks } = content.contact;

  // favicon icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case "github":
        return <FaGithub className="w-6 h-6 " />;
      case "linkedin":
        return <FaLinkedin className="w-6 h-6" />;
      case "email":
        return <FaEnvelope className="w-6 h-6" />;
      case "phone":
        return <FaPhone className="w-6 h-6" />;
      default:
        return null;
    }
  };

  // icon colors
  const getIconColor = (iconName) => {
    switch (iconName) {
      case "email":
        return "hover:bg-[var(--contact)] hover:border-[var(--contact)] hover:text-[var(--bg)]";
      // return "hover:bg-[var(--contact)] hover:border-[var(--contact)] hover:text-white";
      case "phone":
        // return "hover:bg-green-500 hover:border-green-500 hover:text-white";
        return "hover:bg-[var(--live)] hover:border-[var(--live)] hover:text-[var(--bg)]";
      case "github":
        // return "hover:bg-[var(--github)] hover:border-[var(--github)] hover:text-white";
        return "hover:bg-[var(--github)] hover:border-[var(--github)] hover:text-[var(--bg)]";
      case "linkedin":
        // return "hover:bg-blue-600 hover:border-blue-600 hover:text-white";
        return "hover:bg-[var(--linkedin)] hover:border-[var(--linkedin)]  hover:text-[var(--bg)]";
      default:
        return "";
    }
  };

  return (
    <section
      id="contact-section"
      className="flex flex-col min-h-screen py-14 md:py-20 px-6 md:px-10"
    >
      <SectionHeader caption={t(header.caption)} title={t(header.title)} />

      <div className="flex flex-1 justify-center items-center py-8 md:py-0">
        <div className="text-center max-w-3xl w-full space-y-8">
          {/* message */}
          <p className="text-lg md:text-xl text-[var(--text)] opacity-90 leading-relaxed">
            {t(message)}
          </p>
          {/* contact info + social links */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                // className={`flex items-center gap-2 text-[var(--text)]`}
                className={`group relative bg-[var(--bg)] border-[1px] border-[var(--text)] rounded-full p-4 text-[var(--text)] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[var(--text)] hover:-translate-y-2 active:scale-105 ${getIconColor(
                  link.icon
                )}`}
                aria-label={link.id}
              >
                {/* icon wrapper */}
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {getIcon(link.icon)}
                </div>

                {/* subtle glow effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-[var(--text)] via-[var(--text)]/50 to-transparent pointer-events-none blur-md" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
