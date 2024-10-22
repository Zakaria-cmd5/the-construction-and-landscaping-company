"use client";

import { useTranslationContext } from "@/context/TranslationContextProvider";
import { exteriorsImage, interiorsImage } from "@/utils/imagesArray";
import ImagesArrayLoop from "./ImagesArrayLoop";

interface Props {
  darkMode: boolean;
}

const BusinessExibition = ({ darkMode }: Props) => {
  const { t } = useTranslationContext();

  return (
    <div className="mt-10 grid grid-cols-2">
      <div>
        <h2
          className={`flex justify-center font-bold text-[36px] leading-[43.57px] text-[#000000] ${
            darkMode && "text-white"
          }`}
        >
          {t("interiorComponentHeading")}
        </h2>
        <ImagesArrayLoop
          imagesType="businessImage"
          height={297}
          width={427}
          imagesName={interiorsImage}
        />
      </div>
      <div>
        <h2
          className={`flex justify-center font-bold text-[36px] leading-[43.57px] text-[#000000] ${
            darkMode && "text-white"
          }`}
        >
          {t("exteriorComponentHeading")}
        </h2>
        <ImagesArrayLoop
          imagesType="businessImage"
          height={297}
          width={427}
          imagesName={exteriorsImage}
        />
      </div>
    </div>
  );
};

export default BusinessExibition;
