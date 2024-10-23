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
import LoadingSkeleton from "./LoadingSkeleton";
import SectionsHeading from "./SectionsHeading";

const Hero = () => {
  const { darkMode } = useDarkMode();

  const { t } = useTranslationContext();

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <div className={`flex flex-col ${darkMode && "bg-neutral-900"}`}>
        {/* Hero Image container */}
        <HeroImageContainer />
        {/* Interior Heading section */}
        <FeaturesHeading featureColor="feature-image">
          {t("heroComponentInteriorHeading")}
        </FeaturesHeading>
        {/* Floors section */}
        <SectionsHeading featureId="floors">
          {t("heroComponentFloorsHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={floorsImage} />
        {/* Walls section */}
        <SectionsHeading featureId="walls">
          {t("heroComponentWallsHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={wallsImage} />
        {/* Sinks section */}
        <SectionsHeading featureId="sinks">
          {t("heroComponentSinksHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={sinksImage} />
        {/* Faucets section */}
        <SectionsHeading featureId="faucets">
          {t("heroComponentFaucetsHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={faucetsImage} />
        {/* Kitchens section */}
        <SectionsHeading featureId="kitchens">
          {t("heroComponentKitchensHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={kitchensImage} />
        {/* Landscaping heading */}
        <FeaturesHeading featureColor="feature-image">
          {t("heroComponentLandscapingHeading")}
        </FeaturesHeading>
        {/* Sharubs section */}
        <SectionsHeading featureId="sharubs">
          {t("heroComponentShrubsHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={sharubsImage} />
        {/* Pavements section */}
        <SectionsHeading featureId="pavements">
          {t("heroComponentPavementsHeading")}
        </SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={pavementsImage} />
        {/* About us section */}
        <FeaturesHeading featureColor="feature-explain">
          {t("heroComponentAboutUsHeading")}
        </FeaturesHeading>
        <AboutUs darkMode={darkMode} />
        {/* Business Exibition section */}
        <FeaturesHeading featureColor="feature-explain">
          {t("heroComponentNusinessHeading")}
        </FeaturesHeading>
        <BusinessExibition darkMode={darkMode} />
      </div>
    </Suspense>
  );
};

export default Hero;
