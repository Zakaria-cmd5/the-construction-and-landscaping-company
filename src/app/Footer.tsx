import dynamic from "next/dynamic";

const Footer = () => {
  const FooterContainer = dynamic(
    () => import("./_components/FooterContainer"),
    {
      ssr: false,
    }
  );

  return <FooterContainer />;
};

export default Footer;
