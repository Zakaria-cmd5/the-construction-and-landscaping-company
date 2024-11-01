import Image from "next/image";
import iconImage from "../../../public/logo.png";
import MobileNavbarMenu from "./MobileNavbarMenu";
import NavbarButton from "./NavbarButton";

const MobileNavbar = () => {
  return (
    <div className="md:hidden bg-[#0E7E83] flex justify-between items-center px-4 py-2">
      <Image
        src={iconImage}
        alt="icon"
        width={50}
        height={40}
        className="relative -top-1"
      />
      <p className="text-[#eef6f3] lg:text-[16px] text-[14px] lg:leading-[20px]">
        THE CONSTRUCTION AND <br /> LANDSCAPING COMPANY
      </p>
      <NavbarButton isItMobileSize={true} />
      <MobileNavbarMenu />
    </div>
  );
};

export default MobileNavbar;
