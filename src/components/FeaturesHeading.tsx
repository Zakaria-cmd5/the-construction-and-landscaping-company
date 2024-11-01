import { useDarkMode } from "@/context/DarkModeToggleProvider";
import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  featureColor: "feature-image" | "feature-explain";
}

const FeaturesHeading = ({ children, featureColor }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={classNames({
        "bg-opacity-50 flex items-center lg:justify-normal justify-center w-full h-[120px] sm:h-[150px] lg:h-[188px] px-4":
          true,
        "bg-[#59ED9F]": featureColor === "feature-image",
        "bg-[#0E7E83]": featureColor === "feature-explain",
      })}
    >
      <span
        className={classNames({
          "text-[24px] leading-[32px] sm:text-[36px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[64px] xl:leading-[76.8px]":
            true,
          "text-white": darkMode,
        })}
      >
        {children}
      </span>
    </section>
  );
};

export default FeaturesHeading;
