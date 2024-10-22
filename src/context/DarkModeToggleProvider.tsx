"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

const DarkModeToggleContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

const DarkModeToggleProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeToggleContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeToggleContext.Provider>
  );
};

export default DarkModeToggleProvider;

export const useDarkMode = () => {
  return useContext(DarkModeToggleContext);
};

// make the dark mode based on the system color
// "use client";

// import {
//   createContext,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// const DarkModeToggleContext = createContext({
//   darkMode: false,
//   toggleDarkMode: () => {},
// });

// const DarkModeToggleProvider = ({ children }: PropsWithChildren) => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const systemPreferenceDarkMode = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     setDarkMode(systemPreferenceDarkMode);

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleChange = (event: MediaQueryListEvent) => {
//       setDarkMode(event.matches);
//     };
//     mediaQuery.addEventListener("change", handleChange);

//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <DarkModeToggleContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeToggleContext.Provider>
//   );
// };

// export default DarkModeToggleProvider;

// export const useDarkMode = () => {
//   return useContext(DarkModeToggleContext);
// };
