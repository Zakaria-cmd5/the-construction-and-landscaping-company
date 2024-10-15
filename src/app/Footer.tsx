import Image from "next/image";
import Link from "next/link";
import emailImage from "../../public/emailIcon.png";
import faceBookImage from "../../public/facebookIcon.png";
import instagramImage from "../../public/instagramIcon.png";
import logo from "../../public/logo.png";
import regionImage from "../../public/regionIcon.png";
import whatsappImage from "../../public/whatsappIcon.png";

const Footer = () => {
  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/sevices", label: "SERVICES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <footer className="bg-[#074143] h-[449px] w-[1920px] grid grid-rows-3">
      <div className="flex justify-between items-center p-8">
        <h1 className="text-[#EEF9F3] text-[48px] leading-[57.6px]">
          CONTACT US
        </h1>
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={80} height={46.1} />
          <span className="font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
            The Construction and landscaping company
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center p-8">
        <div className="flex flex-col space-y-6">
          <div className="flex space-x-2">
            <Image src={regionImage} alt="Region Icon" width={27} height={24} />
            <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
              1234 Greenway Drive Springfield, IL 62701
            </span>
          </div>

          <div className="flex space-x-2">
            <Image
              src={whatsappImage}
              alt="Whatsapp Icon"
              width={27}
              height={24}
            />
            <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
              (555) 123-4567
            </span>
          </div>

          <div className="flex space-x-2">
            <Image src={emailImage} alt="Email Icon" width={27} height={24} />
            <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
              info@zandnconstruction.com
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
            business hours:
          </span>

          <div className="flex flex-col">
            <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
              Monday - Friday: 8 AM - 6 PM
            </span>
            <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
              Saturday: 9 AM - 4 PM
            </span>
            <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
              Sunday: Closed
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]">
            Quick Links:
          </span>

          <ul className="list-disc pl-8">
            {links.map((link) => (
              <li
                key={link.href}
                className="font-medium text-[20px] text-[#EEF9F3] leading-[24.2px]"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pl-5 mt-24">
        <span className="uppercase font-medium text-[20px] text-[#EEF9F3] leading-[24.2px] mx-auto">
          © 2024 Z and N Construction and Landscaping. All rights reserved.
        </span>

        <div className="flex space-x-2 mr-8">
          <Image
            src={faceBookImage}
            alt="Facebook Icon"
            width={47}
            height={47}
          />
          <Image
            src={instagramImage}
            alt="Instagram Icon"
            width={47}
            height={47}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
