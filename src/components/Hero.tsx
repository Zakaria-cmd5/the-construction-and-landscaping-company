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
      <SectionsHeading featureId="floors">FLOORS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={floorsImage} />
      <SectionsHeading featureId="walls">WALLS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={wallsImage} />
      <SectionsHeading featureId="sinks">SINKS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sinksImage} />
      <SectionsHeading featureId="faucets">FAUCETS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={faucetsImage} />
      <SectionsHeading featureId="kitchens">KITCHENS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={kitchensImage} />
      <FeaturesHeading featureColor="feature-image">
        LANDSCAPING DEPARTMENT
      </FeaturesHeading>
      <SectionsHeading featureId="sharubs">SHARUBS</SectionsHeading>
      <ImagesArrayLoop width={471} height={427} imagesName={sharubsImage} />
      <SectionsHeading featureId="pavements">PAVEMENTS</SectionsHeading>
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
