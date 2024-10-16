import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  featureId: string;
}

const SectionsHeading = ({ children, featureId }: Props) => {
  console.log(featureId)
  return (
    <div className="flex justify-between items-center">
      <div className="flex mt-5 items-center">
        <div className="bg-[#14B05D] w-[40px] h-[30px]" />
        <span className="ml-2 text-[48px] leading-[57.6px]">{children}</span>
      </div>
      <Link
        href={`/features/${featureId}`}
        className="w-[260px] h-[73px] flex items-center justify-center bg-[#074143] mr-5 mt-5 rounded-lg text-[#EEF9F3] text-[28px] leading-[33.89px] font-medium"
      >
        VIEW ALL
      </Link>
    </div>
  );
};

export default SectionsHeading;
