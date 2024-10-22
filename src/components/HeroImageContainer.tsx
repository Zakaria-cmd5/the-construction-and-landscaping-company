"use client";

import { useTranslationContext } from "@/context/TranslationContextProvider";
import Image from "next/image";
import heroImage from "../../public/Rectangle 31.png";

const HeroImageContainer = () => {
  const { t } = useTranslationContext();

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] shadow-lg">
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
        <h1 className="text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[57.6px] font-bold max-w-4xl">
          {t("heroComponentHeading")}
        </h1>
      </div>
    </div>
  );
};

export default HeroImageContainer;
