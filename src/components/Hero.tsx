"use client";

import { useDarkMode } from "@/context/DarkModeToggleProvider";
import { useTranslationContext } from "@/context/TranslationContextProvider";
import {
  faucetsImage,
  floorsImage,
  kitchensImage,
  pavementsImage,
  sharubsImage,
  sinksImage,
  wallsImage,
} from "@/utils/imagesArray";
import { Suspense } from "react";
import AboutUs from "./AboutUs";
import BusinessExibition from "./BusinessExibition";
import FeaturesHeading from "./FeaturesHeading";
import HeroImageContainer from "./HeroImageContainer";
import ImagesArrayLoop from "./ImagesArrayLoop";
import SectionsHeading from "./SectionsHeading";
import Spinner from "./Spinner";

const Hero = () => {
  const { darkMode } = useDarkMode();

  const { t } = useTranslationContext();

  return (
    <Suspense fallback={<Spinner />}>
      <div className={`flex flex-col ${darkMode && "bg-neutral-900"}`}>
        <HeroImageContainer />
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
        <BusinessExibition darkMode={darkMode} />
      </div>
    </Suspense>
  );
};

export default Hero;
