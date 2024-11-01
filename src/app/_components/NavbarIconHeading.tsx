import Image from "next/image";
import iconImage from "../../../public/logo.png";

const NavbarIconHeading = () => {
  return (
    <>
      <Image
        src={iconImage}
        alt="icon"
        width={69}
        height={57}
        className="relative -top-1"
      />
      <p className="text-[#eef6f3] ml-4 lg:text-[20px] text-[14px] lg:leading-[20px] flex items-center leading-[24.2px] w-[287px] h-[48px]">
        THE CONSTRUCTION AND LANDSCAPING COMPANY
      </p>
    </>
  );
};

export default NavbarIconHeading;
