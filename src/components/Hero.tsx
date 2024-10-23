"use client";

import { useDarkMode } from "@/context/DarkModeToggleProvider";
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

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <div className={`flex flex-col ${darkMode && "bg-neutral-900"}`}>
        {/* Hero Image container */}
        <HeroImageContainer />
        {/* Interior Heading section */}
        <FeaturesHeading featureColor="feature-image">
          INTERIOR CLADDING
        </FeaturesHeading>
        {/* Floors section */}
        <SectionsHeading featureId="floors">FLOORS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={floorsImage} />
        {/* Walls section */}
        <SectionsHeading featureId="walls">WALLS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={wallsImage} />
        {/* Sinks section */}
        <SectionsHeading featureId="sinks">SINKS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={sinksImage} />
        {/* Faucets section */}
        <SectionsHeading featureId="faucets">FAUCETS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={faucetsImage} />
        {/* Kitchens section */}
        <SectionsHeading featureId="kitchens">KITCHENS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={kitchensImage} />
        {/* Landscaping heading */}
        <FeaturesHeading featureColor="feature-image">
          LANDSCAPING DEPARTMENT
        </FeaturesHeading>
        {/* Sharubs section */}
        <SectionsHeading featureId="sharubs">SHRUBS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={sharubsImage} />
        {/* Pavements section */}
        <SectionsHeading featureId="pavements">PAVEMENTS</SectionsHeading>
        <ImagesArrayLoop width={471} height={427} imagesName={pavementsImage} />
        {/* About us section */}
        <FeaturesHeading featureColor="feature-explain">
          ABOUT US AND OUR SERVICES
        </FeaturesHeading>
        <AboutUs />
        {/* Business Exibition section */}
        <FeaturesHeading featureColor="feature-explain">
          BUSINESS EXHIBITION
        </FeaturesHeading>
        <BusinessExibition />
      </div>
    </Suspense>
  );
};

export default Hero;
