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
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../public/Rectangle 31.png";
import AboutUs from "./AboutUs";
import BusinessExibition from "./BusinessExibition";
import FeaturesHeading from "./FeaturesHeading";
import ImagesArrayLoop from "./ImagesArrayLoop";
import SectionsHeading from "./SectionsHeading";

const Hero = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="flex flex-col">
      <Image src={heroImage} alt="Hero Image" width={1920} height={958} />
      <FeaturesHeading featureColor="feature-image">
        {t("heroComponentInteriorHeading")}
      </FeaturesHeading>
      <SectionsHeading featureId="floors">
        {t("heroComponentFloorsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={floorsImage} />
      <SectionsHeading featureId="walls">
        {t("heroComponentWallsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={wallsImage} />
      <SectionsHeading featureId="sinks">
        {t("heroComponentSinksHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sinksImage} />
      <SectionsHeading featureId="faucets">
        {t("heroComponentFaucetsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={faucetsImage} />
      <SectionsHeading featureId="kitchens">
        {t("heroComponentKitchensHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={kitchensImage} />
      <FeaturesHeading featureColor="feature-image">
        {t("heroComponentLandscapingHeading")}
      </FeaturesHeading>
      <SectionsHeading featureId="sharubs">
        {t("heroComponentShrubsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sharubsImage} />
      <SectionsHeading featureId="pavements">
        {t("heroComponentPavementsHeading")}
      </SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={pavementsImage} />
      <FeaturesHeading featureColor="feature-explain">
        {t("heroComponentAboutUsHeading")}
      </FeaturesHeading>
      <AboutUs />
      <FeaturesHeading featureColor="feature-explain">
        {t("heroComponentNusinessHeading")}
      </FeaturesHeading>
      <BusinessExibition />
    </div>
  );
};

export default Hero;
