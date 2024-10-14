import { PropsWithChildren } from "react";

const FeaturesHeading = ({ children }: PropsWithChildren) => {
  return (
    <section className="bg-[#59ED9F] bg-opacity-50 h-[188px] w-[1920px] flex items-center">
      <span className="text-[64px] p-4 leading-[76.8px]">{children}</span>
    </section>
  );
};

export default FeaturesHeading;
