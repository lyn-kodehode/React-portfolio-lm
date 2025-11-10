import { content } from "../../data/content";

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="py-8 px-6 md:px-10 border-t border-[var(--text)]/20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm md:text-base text-[var(--text)] opacity-70">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
