import { useDarkMode } from "@/context/DarkModeToggleProvider";
import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  featureColor: "feature-image" | "feature-explain";
}

const FeaturesHeading = ({ children, featureColor }: Props) => {
  const { darkMode } = useDarkMode();

  const sectionClassName = classNames({
    "bg-opacity-50 h-[188px] w-[1920px] flex items-center sm:w-full sm:h-[150px]":
      true,
    "bg-[#59ED9F]": featureColor === "feature-image",
    "bg-[#0E7E83]": featureColor === "feature-explain",
  });

  const spanClassName = classNames({
    "lg:text-[64px] p-4 lg:leading-[76.8px] sm:text-[48px] sm:leading-[60px] text-[32px] leading-[40px]":
      true,
    "text-white": darkMode,
  });

  return (
    <section className={sectionClassName}>
      <span className={spanClassName}>{children}</span>
    </section>
  );
};

export default FeaturesHeading;
