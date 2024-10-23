'use client'

import AboutUs from "@/components/AboutUs";
import { useDarkMode } from "@/context/DarkModeToggleProvider";

const AboutUsPage = () => {
  const { darkMode } = useDarkMode();

  return <AboutUs darkMode={darkMode} isItPage={true}/>;
};

export default AboutUsPage;
