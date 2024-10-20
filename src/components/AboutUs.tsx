"use client";

import "@/utils/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-16 p-4 gap-4">
      <div className="w-full uppercase text-[#031C1D]">
        <p className="text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageIntroductionAboutTheCompany")}
        </p>
        <h2 className="mt-10 font-bold text-[24px] md:text-[28px]">
          {t("aboutUsPageMissionOfTheCompanyHeading")}
        </h2>
        <p className="text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageMissionOfTheCompanyDescription")}
        </p>
        <h2 className="mt-10 font-bold text-[24px] md:text-[28px]">
          {t("aboutUsPageTeamOfTheCompanyHeading")}
        </h2>
        <p className="text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageTeamOfTheCompanyDescription")}
        </p>
        <h2 className="mt-10 font-bold text-[24px] md:text-[28px]">
          {t("aboutUsPageCompanyOffersHeading")}
        </h2>
        <ul className="list-disc pl-8">
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageCompanyOffersDescriptionFirstLi")}
          </li>
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageCompanyOffersDescriptionSecondLi")}
          </li>
        </ul>
      </div>
      <div className="uppercase text-[#031C1D]">
        {/* Here we will put a video later on */}
        <div className="w-full h-[300px] md:w-[852px] md:h-[587px] bg-black mb-4"></div>

        <h2 className="font-bold text-[24px] md:text-[28px]">{t("aboutUsPageWhyChooseUsHeading")}</h2>
        <ul className="list-disc pl-8">
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageWhyChooseUsDescriptionFirstLi")}
          </li>
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageWhyChooseUsDescriptionSecondLi")}
          </li>
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">            
          {t("aboutUsPageWhyChooseUsDescriptionThirdLi")}
          </li>
        </ul>
        <p className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          {t("aboutUsPageJoinUsDescription")}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
