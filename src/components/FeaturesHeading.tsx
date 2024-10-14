import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  featureColor: "feature-image" | "feature-explain";
}

const FeaturesHeading = ({ children, featureColor }: Props) => {
  return (
    <section
      className={`${
        featureColor === "feature-image" ? "bg-[#59ED9F]" : "bg-[#0E7E83]"
      } bg-opacity-50 h-[188px] w-[1920px] flex items-center`}
    >
      <span className="text-[64px] p-4 leading-[76.8px]">{children}</span>
    </section>
  );
};

export default FeaturesHeading;
