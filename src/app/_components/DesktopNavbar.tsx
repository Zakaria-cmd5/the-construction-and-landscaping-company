import Search from "@/components/Search";
import DesktopNavbarLinks from "./DesktopNavbarLinks";
import DesktopNavbarMenu from "./DesktopNavbarMenu";
import NavbarButton from "./NavbarButton";
import NavbarIconHeading from "./NavbarIconHeading";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex bg-[#0E7E83] justify-between items-center w-full h-[5rem] md:h-[4.9375rem] px-4 md:px-8">
      <NavbarIconHeading />
      <div className="hidden md:block w-[5rem] border-2 bg-[#EEF9F3] -rotate-90" />
      <DesktopNavbarLinks />
      <Search />
      <DesktopNavbarMenu />
      <NavbarButton />
    </div>
  );
};

export default DesktopNavbar;
