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
