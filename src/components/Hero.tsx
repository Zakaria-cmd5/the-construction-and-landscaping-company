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
import BusinessExibition from "./BusinessExibition";
import FeaturesHeading from "./FeaturesHeading";
import ImagesArrayLoop from "./ImagesArrayLoop";
import SectionsHeading from "./SectionsHeading";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Image src={heroImage} alt="Hero Image" width={1920} height={958} />
      <FeaturesHeading featureColor="feature-image">
        INTERIOR CLADDING
      </FeaturesHeading>
      <SectionsHeading>FLOORS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={floorsImage} />
      <SectionsHeading>WALLS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={wallsImage} />
      <SectionsHeading>SINKS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sinksImage} />
      <SectionsHeading>FAUCETS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={faucetsImage} />
      <SectionsHeading>KITCHENS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={kitchensImage} />
      <FeaturesHeading featureColor="feature-image">
        LANDSCAPING DEPARTMENT
      </FeaturesHeading>
      <SectionsHeading>SHARUBS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sharubsImage} />
      <SectionsHeading>SHARUBS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={pavementsImage} />
      <FeaturesHeading featureColor="feature-explain">
        ABOUT US AND OUR SERVICES
      </FeaturesHeading>
      <AboutUs />
      <FeaturesHeading featureColor="feature-explain">
        BUSINESS EXHIBITION
      </FeaturesHeading>
      <BusinessExibition />
    </div>
  );
};

export default Hero;
