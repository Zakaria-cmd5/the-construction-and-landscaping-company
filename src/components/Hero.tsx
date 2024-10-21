"use client";

import {
  faucetsImage,
  floorsImage,
  kitchensImage,
  pavementsImage,
  sharubsImage,
  sinksImage,
  wallsImage,
} from "@/utils/imagesArray";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../public/Rectangle 31.png";
import AboutUs from "./AboutUs";
import BusinessExibition from "./BusinessExibition";
import FeaturesHeading from "./FeaturesHeading";
import ImagesArrayLoop from "./ImagesArrayLoop";
import SectionsHeading from "./SectionsHeading";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className={`flex flex-col ${darkMode && "bg-neutral-900"}`}>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] shadow-lg">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[57.6px] font-bold max-w-4xl">
            {t("heroComponentHeading")}
          </h1>
        </div>
      </div>
      <FeaturesHeading darkMode={darkMode} featureColor="feature-image">
        {t("heroComponentInteriorHeading")}
      </FeaturesHeading>
      <SectionsHeading darkMode={darkMode} featureId="floors">
        {t("heroComponentFloorsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={floorsImage} />
      <SectionsHeading darkMode={darkMode} featureId="walls">
        {t("heroComponentWallsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={wallsImage} />
      <SectionsHeading darkMode={darkMode} featureId="sinks">
        {t("heroComponentSinksHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sinksImage} />
      <SectionsHeading darkMode={darkMode} featureId="faucets">
        {t("heroComponentFaucetsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={faucetsImage} />
      <SectionsHeading darkMode={darkMode} featureId="kitchens">
        {t("heroComponentKitchensHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={kitchensImage} />
      <FeaturesHeading darkMode={darkMode} featureColor="feature-image">
        {t("heroComponentLandscapingHeading")}
      </FeaturesHeading>
      <SectionsHeading darkMode={darkMode} featureId="sharubs">
        {t("heroComponentShrubsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sharubsImage} />
      <SectionsHeading darkMode={darkMode} featureId="pavements">
        {t("heroComponentPavementsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={pavementsImage} />
      <FeaturesHeading darkMode={darkMode} featureColor="feature-explain">
        {t("heroComponentAboutUsHeading")}
      </FeaturesHeading>
      <AboutUs darkMode={darkMode} />
      <FeaturesHeading darkMode={darkMode} featureColor="feature-explain">
        {t("heroComponentNusinessHeading")}
      </FeaturesHeading>
      <BusinessExibition darkMode={darkMode} />
      <button
        onClick={toggleDarkMode}
        className={`fixed w-16 h-16 bottom-16 right-16  ${darkMode ? 'bg-white text-black' : 'bg-neutral-900 text-white'} rounded-full   font-semibold`}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Hero;
