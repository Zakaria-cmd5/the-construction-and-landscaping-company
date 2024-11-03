import Image from "next/image";
import Link from "next/link";
import emailImage from "../../public/footerComponentImages/emailIcon.png";
import faceBookImage from "../../public/footerComponentImages/facebookIcon.png";
import instagramImage from "../../public/footerComponentImages/instagramIcon.png";
import regionImage from "../../public/footerComponentImages/regionIcon.png";
import whatsappImage from "../../public/footerComponentImages/whatsappIcon.png";
import logo from "../../public/sharedImages/logo.png";

const Footer = () => {
  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "PROJECT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <footer className="bg-[#074143] h-auto w-full p-6 md:p-8 lg:p-10 uppercase">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-[#EEF9F3] text-[36px] md:text-[40px] lg:text-[48px] leading-[40px] lg:leading-[57.6px]">
          contact us
        </h1>
        <div className="flex items-center mt-4 lg:mt-0">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={40}
            className="mr-4"
          />
          <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3] leading-[20px] lg:leading-[24.2px] text-center">
            THE CONSTRUCTION AND LANDSCAPING COMPANY
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Image src={regionImage} alt="Region Icon" width={20} height={20} />
            <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
              1234 Greenway Drive Springfield, IL 62701
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src={whatsappImage}
              alt="Whatsapp Icon"
              width={20}
              height={20}
            />
            <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
              (555) 123-4567
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={emailImage} alt="Email Icon" width={20} height={20} />
            <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
              info@zandnconstruction.com
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
            Business Hours:
          </span>
          <div className="flex flex-col space-y-1">
            <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
              Monday - Friday: 8 AM - 6 PM
            </span>
            <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
              Saturday: 9 AM - 4 PM
            </span>
            <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
              Sunday: Closed
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <span className="uppercase font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]">
            Quick Links:
          </span>
          <ul className="list-disc pl-4 space-y-1">
            {links.map((link) => (
              <li
                key={link.href}
                className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#EEF9F3]"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-16 space-y-4 lg:space-y-0">
        <span className="uppercase font-medium text-[14px] md:text-[16px] lg:text-[20px] text-[#EEF9F3] text-center">
          © 2024 Z and N Construction and Landscaping. All rights reserved.
        </span>
        <div className="flex space-x-4">
          <Image
            src={faceBookImage}
            alt="Facebook Icon"
            width={40}
            height={40}
          />
          <Image
            src={instagramImage}
            alt="Instagram Icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
