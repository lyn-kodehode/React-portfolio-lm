import { useLanguageStore } from "../store/useLanguageStore";

export const useTranslate = () => {
  const { language } = useLanguageStore();

  //   function that takes bilingual text
  const t = (textObject) => {
    // if string - return as is
    if (typeof textObject === "string") return textObject;

    // if object, return the current language
    return textObject[language] || textObject.en || "[Missing translation]";
  };

  return t;
};
