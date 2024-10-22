"use client";

import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext({
  t: (key: string) => key,
  i18n: { changeLanguage: () => {} },
});

const TranslationContextProvider = ({ children }: PropsWithChildren) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;

export const useTranslationContext = () => {
  return useContext(TranslationContext);
};
