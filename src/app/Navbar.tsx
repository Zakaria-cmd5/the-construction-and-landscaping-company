"use client";

import Search from "@/components/Search";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import iconImage from "../../public/logo.png";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/projects", label: "PROJECTS" },
  ];

  return (
    // Desktop Navbar
    <div className="bg-[#0E7E83] flex justify-between items-center w-[1920px] h-[79px]">
      <Image
        src={iconImage}
        alt="icon"
        width={69}
        height={57}
        className="relative -top-1"
      />
      <p className="text-[#eef6f3] text-[20px] text-center leading-[24.2px] w-[287px] h-[48px]">
        THE CONSTRUCTION AND LANDSCAPING COMPANY
      </p>
      <div className="w-[80px] border-2 bg-[#EEF9F3] -rotate-90" />
      <ul className="flex items-center">
        {links.map((link) => (
          <li
            className={`h-[49px] ${
              link.label === "HOME"
                ? "w-[88px] "
                : link.label === "ABOUT US"
                ? "w-[120px]"
                : link.label === "PROJECTS"
                ? "w-[152px]"
                : ""
            } flex items-center justify-center`}
            key={link.href}
          >
            <Link
              href={link.href}
              className={classNames({
                "text-[#eef6f3] font-bold": true,
                "border-b-2": link.href === currentPath,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Search />
      <div className="flex items-center">
      <div className="h-[59px] w-[59px] flex flex-col justify-center items-center space-y-1">
        <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
        <span className="bg-[#EEF9F3] w-[36.88px] h-[3.69px] rounded -ml-2" />
        <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
      </div>
      <span className="text-[#eef6f3]">MENU</span>
      </div>
      <button className="p-4 text-[#EEF9F3] bg-[#59ED9F] mr-6 rounded-lg border-4 border-[#EEF9F3]">BOOK NOW</button>
    </div>
  );
};

export default Navbar;
