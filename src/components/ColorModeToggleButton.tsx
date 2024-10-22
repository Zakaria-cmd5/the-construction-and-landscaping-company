"use client";

import { useDarkMode } from "@/context/DarkModeToggleProvider";

const ColorModeToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed w-16 h-16 bottom-16 right-16  ${
        darkMode ? "bg-white text-black" : "bg-neutral-900 text-white"
      } rounded-full   font-semibold`}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default ColorModeToggleButton;
