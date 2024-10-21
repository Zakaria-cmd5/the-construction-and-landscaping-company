"use client";

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
  featureId: string;
  darkMode: boolean
}

const SectionsHeading = ({ children, featureId, darkMode }: Props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex mt-5 items-center">
        <div className="bg-[#14B05D] w-[40px] h-[30px]" />
        <span
          className={`ml-2 lg:text-[48px] lg:leading-[57.6px] 
          sm:text-[36px] sm:leading-[43.2px] 
          text-[28px] leading-[34px] ${darkMode && 'text-white'}`}
        >
          {children}
        </span>
      </div>
      <Link
        href={`/features/${featureId}`}
        className="w-[260px] h-[73px] flex items-center justify-center bg-[#074143] mr-5 mt-5 rounded-lg text-[#EEF9F3] text-[28px] leading-[33.89px] font-medium
          sm:w-[200px] sm:h-[60px] sm:text-[24px] sm:leading-[29px]"
      >
        {t('SectionsHeadingButtonLabel')}
      </Link>
    </div>
  );
};

export default SectionsHeading;
