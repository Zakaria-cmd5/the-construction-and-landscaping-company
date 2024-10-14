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
import heroImage from "../../public/Rectangle 31.png";
import AboutUs from "./AboutUs";
import CategoryImages from "./CategoryImages";
import FeaturesHeading from "./FeaturesHeading";
import SectionsHeading from "./SectionsHeading";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Image src={heroImage} alt="Hero Image" width={1920} height={958} />
      <FeaturesHeading featureColor="feature-image">
        INTERIOR CLADDING
      </FeaturesHeading>
      <SectionsHeading>FLOORS</SectionsHeading>
      <CategoryImages imagesName={floorsImage} />
      <SectionsHeading>WALLS</SectionsHeading>
      <CategoryImages imagesName={wallsImage} />
      <SectionsHeading>SINKS</SectionsHeading>
      <CategoryImages imagesName={sinksImage} />
      <SectionsHeading>FAUCETS</SectionsHeading>
      <CategoryImages imagesName={faucetsImage} />
      <SectionsHeading>KITCHENS</SectionsHeading>
      <CategoryImages imagesName={kitchensImage} />
      <FeaturesHeading featureColor="feature-image">
        LANDSCAPING DEPARTMENT
      </FeaturesHeading>
      <SectionsHeading>SHARUBS</SectionsHeading>
      <CategoryImages imagesName={sharubsImage} />
      <SectionsHeading>SHARUBS</SectionsHeading>
      <CategoryImages imagesName={pavementsImage} />
      <FeaturesHeading featureColor="feature-explain">
        ABOUT US AND OUR SERVICES
      </FeaturesHeading>
      <AboutUs />
    </div>
  );
};

export default Hero;
