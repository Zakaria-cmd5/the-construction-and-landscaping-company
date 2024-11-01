import Search from "@/components/Search";
import Image from "next/image";
import iconImage from "../../../public/logo.png";
import DesktopNavbarLinks from "./DesktopNavbarLinks";
import DesktopNavbarMenu from "./DesktopNavbarMenu";
import NavbarButton from "./NavbarButton";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex bg-[#0E7E83] justify-between items-center w-full h-[79px]">
      <Image
        src={iconImage}
        alt="icon"
        width={69}
        height={57}
        className="relative -top-1"
      />
      <p className="text-[#eef6f3] text-[20px] flex items-center leading-[24.2px] w-[287px] h-[48px]">
        THE CONSTRUCTION AND LANDSCAPING COMPANY
      </p>
      <div className="w-[80px] border-2 bg-[#EEF9F3] -rotate-90" />
      <DesktopNavbarLinks />
      <Search />
      <DesktopNavbarMenu />
      <NavbarButton />
    </div>
  );
};

export default DesktopNavbar;
