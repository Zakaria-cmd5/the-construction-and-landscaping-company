import MobileNavbarMenu from "./MobileNavbarMenu";
import NavbarButton from "./NavbarButton";
import NavbarIconHeading from "./NavbarIconHeading";

const MobileNavbar = () => {
  return (
    <div className="md:hidden bg-[#0E7E83] flex justify-between items-center px-4 py-2">
      <NavbarIconHeading />
      <NavbarButton isItMobileSize={true} />
      <MobileNavbarMenu />
    </div>
  );
};

export default MobileNavbar;
