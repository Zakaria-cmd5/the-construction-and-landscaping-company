import Image from "next/image";
import iconImage from "../../../public/sharedImages/logo.png";

const NavbarIconHeading = () => {
  return (
    <>
      <Image
        src={iconImage}
        alt="icon"
        width={69}
        height={57}
        className="relative -top-[0.0625rem]"
      />
      <p className="text-[#eef6f3] ml-[0.25rem] lg:text-[1.25rem] text-[0.875rem] lg:leading-[1.25rem] flex items-center leading-[1.5125rem] w-[17.9375rem] h-[3rem]">
        THE CONSTRUCTION AND <br /> LANDSCAPING COMPANY
      </p>
    </>
  );
};

export default NavbarIconHeading;
