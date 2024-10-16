import ImagesArrayLoop, { ImageProps } from "@/components/ImagesArrayLoop";
import {
  faucetsImage,
  floorsImage,
  kitchensImage,
  pavementsImage,
  sharubsImage,
  sinksImage,
  wallsImage,
} from "@/utils/imagesArray";

interface Props {
  params: { featureId: string };
}

const FeatureDetailPage = ({ params }: Props) => {
  if (!params.featureId) return null;

  const imagesMap: Record<string, ImageProps[]> = {
    floors: floorsImage,
    walls: wallsImage,
    sinks: sinksImage,
    faucets: faucetsImage,
    kitchens: kitchensImage,
    sharubs: sharubsImage,
    pavements: pavementsImage,
  };

  const imageName = imagesMap[params.featureId];

  if (!imageName) return null;

  return <ImagesArrayLoop width={286} height={259} imagesName={imageName} />;
};

export default FeatureDetailPage;
