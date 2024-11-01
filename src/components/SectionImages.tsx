import Image from "next/image";
import ImagesArrayLoop, { ImageProps } from "./ImagesArrayLoop";

interface Props {
  imagesName: ImageProps[];
}

const SectionImages = ({ imagesName }: Props) => {
  return (
    <>
      <div className="hidden 2xl:block">
        <ImagesArrayLoop width={450} height={427} imagesName={imagesName} />
      </div>
      <div className="hidden 2xl:hidden md:block">
        <ImagesArrayLoop width={200} height={427} imagesName={imagesName} />
      </div>
      <div className="lg:hidden md:hidden my-4 flex items-center justify-center">
        <Image src={imagesName[0].src} alt="Floor image" />
      </div>
    </>
  );
};

export default SectionImages;
