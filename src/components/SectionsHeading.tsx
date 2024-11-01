import { useDarkMode } from "@/context/DarkModeToggleProvider";
import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  featureId: string;
}

const SectionsHeading = ({ children, featureId }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex mt-5 items-center">
        <div className="bg-[#14B05D] w-[30px] h-[20px] md:w-[40px] md:h-[30px]" />
        <span
          className={classNames({
            "ml-2 text-[24px] leading-[32px] sm:text-[28px] sm:leading-[34px] lg:text-[36px] lg:leading-[43.2px] xl:text-[48px] xl:leading-[57.6px]":
              true,
            "text-white": darkMode,
          })}
        >
          {children}
        </span>
      </div>
      <Link
        href={`/features/${featureId}`}
        className="w-[200px] h-[60px] mt-5 flex items-center justify-center bg-[#074143] rounded-lg text-[#EEF9F3] text-[20px] leading-[25px] font-medium
          sm:w-[220px] sm:h-[65px] sm:text-[22px] sm:leading-[28px] md:w-[240px] md:h-[70px] md:text-[24px] md:leading-[30px] lg:w-[260px] lg:h-[73px] lg:text-[28px] lg:leading-[33.89px]"
      >
        VIEW ALL
      </Link>
    </div>
  );
};

export default SectionsHeading;
