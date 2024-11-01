"use client";

import Link from "next/link";
import { useState } from "react";

const DesktopNavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="hidden lg:flex items-center">
        <div
          className="h-[59px] w-[59px] flex flex-col justify-center items-center space-y-1"
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
          <span className="bg-[#EEF9F3] w-[36.88px] h-[3.69px] rounded -ml-2" />
          <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
        </div>
        <span className="text-[#eef6f3]">MENU</span>
      </div>
      {isMenuOpen && (
        <div className="w-[400px] h-[500px] bg-[#EEF9F3] absolute z-20 top-20 left-[62%] rounded-l-lg mt-1">
          <ul className="flex flex-col items-center justify-center space-x-2 uppercase">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
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
    </>
  );
};

export default DesktopNavbarMenu;
