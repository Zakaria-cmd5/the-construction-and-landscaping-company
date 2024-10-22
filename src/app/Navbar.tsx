import dynamic from "next/dynamic";

const Navbar = () => {
  const DesktopNavbar = dynamic(() => import("./_components/DesktopNavbar"), {
    ssr: false,
  });

  const MobileNavbar = dynamic(() => import("./_components/MobileNavbar"), {
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
