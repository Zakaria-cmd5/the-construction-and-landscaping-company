import { useDarkMode } from "@/context/DarkModeToggleProvider";
import { PropsWithChildren } from "react";

const FormLabel = ({ children }: PropsWithChildren) => {
  const { darkMode } = useDarkMode();

  return (
    <label
      className={`font-medium text-[#121C17] leading-[24.2px] ${
        darkMode && "text-white"
      }`}
    >
      {children}
    </label>
  );
};

export default FormLabel;
