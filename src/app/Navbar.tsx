"use client";

import Search from "@/components/Search";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import iconImage from "../../public/logo.png";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/projects", label: "PROJECTS" },
  ];

  const menuLinks = [
    { href: "/", label: "landscaping" },
    { href: "/", label: "decking" },
    { href: "/", label: "gardening" },
    { href: "/", label: "interlocking" },
    { href: "/", label: "floral design" },
    { href: "/", label: "pools" },
    { href: "/", label: "railings" },
    { href: "/", label: "woodwoorking" },
    { href: "/", label: "showroom" },
    { href: "/profile", label: "profile" },
    { href: "/", label: "contact us" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-[#0E7E83] justify-between items-center w-full h-[79px]">
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
          <div
            className="h-[59px] w-[59px] flex flex-col justify-center items-center space-y-1"
            onClick={() => {
              setIsDesktopMenuOpen((prev) => !prev);
            }}
          >
            <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
            <span className="bg-[#EEF9F3] w-[36.88px] h-[3.69px] rounded -ml-2" />
            <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
            {/* {isDesktopMenuOpen && (
              <div className="w-[724px] h-[958] bg-[#EEF9F3] relative z-10">
                <ul className="flex flex-col items-center justify-center space-x-2 uppercase">
                  {menuLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#121C17] font-medium leading-[43.57px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
          <span className="text-[#eef6f3]">MENU</span>
        </div>
        <button className="p-4 text-[#EEF9F3] bg-[#59ED9F] mr-6 rounded-lg border-4 border-[#EEF9F3]">
          BOOK NOW
        </button>
        {isDesktopMenuOpen && (
          <div className="w-[400px] h-[500px] bg-[#EEF9F3] absolute z-10 top-20 left-[58%] rounded-l-lg mt-1">
            <ul className="flex flex-col items-center justify-center space-x-2 uppercase">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#121C17] hover:text-[#0E7E83] font-medium leading-[43.57px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-[#0E7E83] flex justify-between items-center px-4 py-2">
        <Image
          src={iconImage}
          alt="icon"
          width={50}
          height={40}
          className="relative -top-1"
        />
        <p className="text-[#eef6f3] text-[16px] leading-[20px]">
          THE CONSTRUCTION AND LANDSCAPING COMPANY
        </p>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center space-y-1"
        >
          <span className="bg-[#EEF9F3] w-[30px] h-[3px] rounded" />
          <span className="bg-[#EEF9F3] w-[30px] h-[3px] rounded" />
          <span className="bg-[#EEF9F3] w-[30px] h-[3px] rounded" />
        </button>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0E7E83] z-50 flex flex-col items-center justify-center">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#eef6f3] text-xl absolute top-4 right-4"
            >
              X
            </button>
            <ul className="flex flex-col items-center space-y-6">
              {links.map((link) => (
                <li
                  key={link.href}
                  className="text-[#eef6f3] text-[24px] font-bold"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Search />
            </div>
            <button className="mt-8 p-4 text-[#EEF9F3] bg-[#59ED9F] rounded-lg border-4 border-[#EEF9F3]">
              BOOK NOW
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
