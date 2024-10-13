import CategoryHeading from "@/components/CategoryHeading";
import FeatureImages from "@/components/featureImages";
import SectionsHeading from "@/components/SectionsHeading";
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <Image src={heroImage} alt="Hero Image" width={1920} height={958} />
      <CategoryHeading>INTERIOR CLADDING</CategoryHeading>
      <SectionsHeading>FLOORS</SectionsHeading>
      <FeatureImages imagesName={floorsImage} />
      <div className="flex mt-5 items-center">
        <div className="bg-[#14B05D] w-[40px] h-[30px]" />
        <span className="ml-2 text-[48px] leading-[57.6px]">WALLS</span>
      </div>
      <FeatureImages imagesName={wallsImage} />
      <SectionsHeading>SINKS</SectionsHeading>
      <FeatureImages imagesName={sinksImage}/>
      <SectionsHeading>FAUCETS</SectionsHeading>
      <FeatureImages imagesName={faucetsImage} />
      <SectionsHeading>KITCHENS</SectionsHeading>
      <FeatureImages imagesName={kitchensImage} />
      <CategoryHeading>LANDSCAPING DEPARTMENT</CategoryHeading>
      <SectionsHeading>SHARUBS</SectionsHeading>
      <FeatureImages imagesName={sharubsImage} />
      <SectionsHeading>SHARUBS</SectionsHeading>
      <FeatureImages imagesName={pavementsImage} />
    </div>
  );
}
