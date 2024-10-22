// Translate using browser Lang
// "use client";

// import { createContext, PropsWithChildren, useContext, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// const TranslationContext = createContext({
//   t: (key: string) => key,
//   i18n: { changeLanguage: () => {} },
// });

// const TranslationContextProvider = ({ children }: PropsWithChildren) => {
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     i18n.changeLanguage(navigator.language);
//   }, [i18n]);

//   return (
//     <TranslationContext.Provider value={{ t, i18n }}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };

// export default TranslationContextProvider;

// export const useTranslationContext = () => {
//   return useContext(TranslationContext);
// };

// Translate using system Lang
"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext({
  t: (key: string) => key,
  i18n: { changeLanguage: () => {} },
});

const TranslationContextProvider = ({ children }: PropsWithChildren) => {
  const { t, i18n } = useTranslation();

  if (typeof navigator !== "undefined") {
    const userLanguage = navigator.languages
      ? navigator.languages[0]
      : navigator.language;

    if (i18n.changeLanguage) {
      i18n.changeLanguage(userLanguage);
    }
  }

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
