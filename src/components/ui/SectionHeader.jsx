import { useTranslate } from "../../hooks/useTranslate";

export default function SectionHeader({ caption, title }) {
  const t = useTranslate();

  return (
    <div className="text-center mb-10 md:mb-12">
      <p className="text-base md:text-lg lg:text-xl opacity-70 mb-2">
        {t(caption)}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold">{t(title)}</h2>
    </div>
  );
}
