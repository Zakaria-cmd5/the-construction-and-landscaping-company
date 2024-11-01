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
import Image from "next/image";
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
        <div className="hidden lg:block">
          <ImagesArrayLoop width={450} height={427} imagesName={floorsImage} />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={floorsImage[0].src} alt="Floor image" />
        </div>
        {/* Walls section */}
        <SectionsHeading featureId="walls">WALLS</SectionsHeading>
        <div className="hidden lg:block">
          <ImagesArrayLoop width={450} height={427} imagesName={wallsImage} />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={wallsImage[0].src} alt="Wall image" />
        </div>
        {/* Sinks section */}
        <SectionsHeading featureId="sinks">SINKS</SectionsHeading>
        <div className="hidden lg:block">
          <ImagesArrayLoop width={450} height={427} imagesName={sinksImage} />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={sinksImage[0].src} alt="Sink image" />
        </div>
        {/* Faucets section */}
        <SectionsHeading featureId="faucets">FAUCETS</SectionsHeading>
        <div className="hidden lg:block">
          <ImagesArrayLoop width={450} height={427} imagesName={faucetsImage} />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={faucetsImage[0].src} alt="Faucets image" />
        </div>
        {/* Kitchens section */}
        <SectionsHeading featureId="kitchens">KITCHENS</SectionsHeading>
        <div className="hidden lg:block">
          <ImagesArrayLoop
            width={450}
            height={427}
            imagesName={kitchensImage}
          />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={kitchensImage[0].src} alt="Kitchens image" />
        </div>
        {/* Landscaping heading */}
        <FeaturesHeading featureColor="feature-image">
          LANDSCAPING DEPARTMENT
        </FeaturesHeading>
        {/* Sharubs section */}
        <SectionsHeading featureId="sharubs">SHRUBS</SectionsHeading>
        <div className="hidden lg:block">
          <ImagesArrayLoop width={450} height={427} imagesName={sharubsImage} />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={sharubsImage[0].src} alt="Shrubs image" />
        </div>
        {/* Pavements section */}
        <SectionsHeading featureId="pavements">PAVEMENTS</SectionsHeading>
        <div className="hidden lg:block">
          <ImagesArrayLoop
            width={450}
            height={427}
            imagesName={pavementsImage}
          />
        </div>
        <div className="lg:hidden my-4 flex items-center justify-center">
          <Image src={pavementsImage[0].src} alt="Pavements image" />
        </div>
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
