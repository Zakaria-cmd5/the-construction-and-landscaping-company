import Image, { StaticImageData } from "next/image";

interface ImageProps {
  id: string;
  src: StaticImageData;
  alt: string;
}

interface Props {
  imagesName: ImageProps[];
}

const CategoryImages = ({ imagesName }: Props) => {
  return (
    <div className="flex items-center space-x-6 p-6">
      {imagesName.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={471}
          height={427}
        />
      ))}
    </div>
  );
};

export default CategoryImages;
