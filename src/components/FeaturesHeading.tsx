import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  featureColor: "feature-image" | "feature-explain";
  darkMode: boolean
}

const FeaturesHeading = ({ children, featureColor, darkMode }: Props) => {
  return (
    <section
      className={`${
        featureColor === "feature-image" ? "bg-[#59ED9F]" : "bg-[#0E7E83]"
      } bg-opacity-50 h-[188px] w-[1920px] flex items-center 
      sm:w-full sm:h-[150px]`} 
    >
      <span
        className={`lg:text-[64px] p-4 lg:leading-[76.8px] 
      sm:text-[48px] sm:leading-[60px] text-[32px] leading-[40px] ${darkMode && 'text-white'}`}
      >
        {children}
      </span>
    </section>
  );
};

export default FeaturesHeading;
