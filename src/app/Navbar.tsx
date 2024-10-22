import dynamic from "next/dynamic";
import MobileNavbar from "./_components/MobileNavbar";

const Navbar = () => {
  const DesktopNavbar = dynamic(() => import("./_components/DesktopNavbar"), {
    ssr: false,
  });

  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

export default Navbar;
