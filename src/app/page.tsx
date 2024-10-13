import CategoryHeading from "@/components/CategoryHeading";
import SectionsHeading from "@/components/SectionsHeading";
import Image from "next/image";
import heroImage from "../../public/Rectangle 31.png";
import faucet1 from "../../public/faucetsImage/Rectangle 39.png";
import faucet2 from "../../public/faucetsImage/Rectangle 40.png";
import faucet3 from "../../public/faucetsImage/Rectangle 41.png";
import floor1 from "../../public/floorsImage/Rectangle 39.png";
import floor2 from "../../public/floorsImage/Rectangle 40.png";
import floor3 from "../../public/floorsImage/Rectangle 41.png";
import kitchen1 from "../../public/kitchensImage/Rectangle 39.png";
import kitchen2 from "../../public/kitchensImage/Rectangle 40.png";
import kitchen3 from "../../public/kitchensImage/Rectangle 41.png";
import pavement1 from '../../public/pavementsImage/Rectangle 39.png';
import pavement2 from '../../public/pavementsImage/Rectangle 40.png';
import pavement3 from '../../public/pavementsImage/Rectangle 41.png';
import sharub1 from '../../public/sharubsImage/Rectangle 39.png';
import sharub2 from '../../public/sharubsImage/Rectangle 40.png';
import sharub3 from '../../public/sharubsImage/Rectangle 41.png';
import sink1 from "../../public/sinksImage/Rectangle 39.png";
import sink2 from "../../public/sinksImage/Rectangle 40.png";
import sink3 from "../../public/sinksImage/Rectangle 41.png";
import wall1 from "../../public/wallsImage/Rectangle 39.png";
import wall2 from "../../public/wallsImage/Rectangle 40.png";
import wall3 from "../../public/wallsImage/Rectangle 41.png";

export default function Home() {
  const floorsImage = [
    { id: "1", src: floor1, alt: "floor1" },
    { id: "2", src: floor2, alt: "floor2" },
    { id: "3", src: floor3, alt: "floor3" },
    { id: "4", src: floor1, alt: "floor4" },
  ];

  const wallsImage = [
    { id: "1", src: wall1, alt: "wall1" },
    { id: "2", src: wall2, alt: "wall2" },
    { id: "3", src: wall3, alt: "wall3" },
    { id: "4", src: wall1, alt: "wall4" },
  ];

  const sinksImage = [
    { id: "1", src: sink1, alt: "sink1" },
    { id: "2", src: sink2, alt: "sink2" },
    { id: "3", src: sink3, alt: "sink3" },
    { id: "4", src: sink1, alt: "sink4" },
  ];

  const faucetsImage = [
    { id: "1", src: faucet1, alt: "faucet1" },
    { id: "2", src: faucet2, alt: "faucet2" },
    { id: "3", src: faucet3, alt: "faucet3" },
    { id: "4", src: faucet1, alt: "faucet4" },
  ];

  const kitchensImage = [
    { id: "1", src: kitchen1, alt: "kitchen1" },
    { id: "2", src: kitchen2, alt: "kitchen2" },
    { id: "3", src: kitchen3, alt: "kitchen3" },
    { id: "4", src: kitchen1, alt: "kitchen4" },
  ];

  const sharubsImage = [
    { id: "1", src: sharub1, alt: "sharub1" },
    { id: "2", src: sharub2, alt: "sharub2" },
    { id: "3", src: sharub3, alt: "sharub3" },
    { id: "4", src: sharub1, alt: "sharub4" },
  ];

  const pavementsImage = [
    { id: "1", src: pavement1, alt: "pavement1" },
    { id: "2", src: pavement2, alt: "pavement2" },
    { id: "3", src: pavement3, alt: "pavement3" },
    { id: "4", src: pavement1, alt: "pavement4" },
  ];

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
