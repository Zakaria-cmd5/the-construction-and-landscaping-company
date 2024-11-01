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
import AboutUs from "./AboutUs";
import BusinessExibition from "./BusinessExibition";
import FeaturesHeading from "./FeaturesHeading";
import HeroImageContainer from "./HeroImageContainer";
import SectionImages from "./SectionImages";
import SectionsHeading from "./SectionsHeading";

const Hero = () => {
  const { darkMode } = useDarkMode();

  return (
      <div className={`flex flex-col ${darkMode && "bg-neutral-900"}`}>
        {/* Hero Image container */}
        <HeroImageContainer />
        {/* Interior Heading section */}
        <FeaturesHeading featureColor="feature-image">
          INTERIOR CLADDING
        </FeaturesHeading>
        {/* Floors section */}
        <SectionsHeading featureId="floors">FLOORS</SectionsHeading>
        <SectionImages imagesName={floorsImage} />
        {/* Walls section */}
        <SectionsHeading featureId="walls">WALLS</SectionsHeading>
        <SectionImages imagesName={wallsImage} />
        {/* Sinks section */}
        <SectionsHeading featureId="sinks">SINKS</SectionsHeading>
        <SectionImages imagesName={sinksImage} />
        {/* Faucets section */}
        <SectionsHeading featureId="faucets">FAUCETS</SectionsHeading>
        <SectionImages imagesName={faucetsImage} />
        {/* Kitchens section */}
        <SectionsHeading featureId="kitchens">KITCHENS</SectionsHeading>
        <SectionImages imagesName={kitchensImage} />
        {/* Landscaping heading */}
        <FeaturesHeading featureColor="feature-image">
          LANDSCAPING DEPARTMENT
        </FeaturesHeading>
        {/* Sharubs section */}
        <SectionsHeading featureId="sharubs">SHRUBS</SectionsHeading>
        <SectionImages imagesName={sharubsImage} />
        {/* Pavements section */}
        <SectionsHeading featureId="pavements">PAVEMENTS</SectionsHeading>
        <SectionImages imagesName={pavementsImage} />
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
  );
};

export default Hero;
