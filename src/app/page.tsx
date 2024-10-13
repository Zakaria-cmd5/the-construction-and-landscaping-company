import CategoryHeading from "@/components/CategoryHeading";
import SectionsHeading from "@/components/SectionsHeading";
import { faucetsImage, floorsImage, kitchensImage, pavementsImage, sharubsImage, sinksImage, wallsImage } from "@/utils/imagesArray";
import Image from "next/image";
import heroImage from "../../public/Rectangle 31.png";

export default function Home() {
  

  return (
    <div className="flex flex-col">
      <Image src={heroImage} alt="Hero Image" width={1920} height={958} />
      <CategoryHeading>INTERIOR CLADDING</CategoryHeading>
      <SectionsHeading>FLOORS</SectionsHeading>
      <div className="flex items-center space-x-6 p-6">
        {floorsImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
      <div className="flex mt-5 items-center">
        <div className="bg-[#14B05D] w-[40px] h-[30px]" />
        <span className="ml-2 text-[48px] leading-[57.6px]">WALLS</span>
      </div>
      <div className="flex items-center space-x-6 p-6">
        {wallsImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
      <SectionsHeading>SINKS</SectionsHeading>
      <div className="flex items-center space-x-6 p-6">
        {sinksImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
      <SectionsHeading>FAUCETS</SectionsHeading>
      <div className="flex items-center space-x-6 p-6">
        {faucetsImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
      <SectionsHeading>KITCHENS</SectionsHeading>
      <div className="flex items-center space-x-6 p-6">
        {kitchensImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
      <CategoryHeading>LANDSCAPING DEPARTMENT</CategoryHeading>
      <SectionsHeading>SHARUBS</SectionsHeading>
      <div className="flex items-center space-x-6 p-6">
        {sharubsImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
      <SectionsHeading>SHARUBS</SectionsHeading>
      <div className="flex items-center space-x-6 p-6">
        {pavementsImage.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={471}
            height={427}
          />
        ))}
      </div>
    </div>
  );
}
