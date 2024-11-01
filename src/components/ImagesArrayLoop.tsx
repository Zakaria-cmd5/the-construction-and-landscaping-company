import Image, { StaticImageData } from "next/image";

export interface ImageProps {
  id: string;
  src: StaticImageData;
  alt: string;
}

interface Props {
  imagesName: ImageProps[];
  width: number;
  height: number;
  imagesType?: "featureImage" | "businessImage";
}

const ImagesArrayLoop = ({ imagesName, height, width, imagesType }: Props) => {
  return (
    <div
      className={` ${
        imagesType === "businessImage"
          ? "grid grid-cols-2 gap-6 p-6"
          : "items-center p-6 grid grid-cols-4 gap-6"
      }`}
    >
      {imagesName.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};

export default ImagesArrayLoop;
