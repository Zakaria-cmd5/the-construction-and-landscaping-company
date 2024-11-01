"use client";

import Search from "@/components/Search";
import Link from "next/link";
import { useState } from "react";

const MobileNavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileLinks = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/projects", label: "PROJECT" },
    { href: "/profile", label: "PROFILE" },
  ];

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col justify-center items-center space-y-1"
      >
        <span className="bg-[#EEF9F3] w-[30px] h-[3px] rounded" />
        <span className="bg-[#EEF9F3] w-[30px] h-[3px] rounded" />
        <span className="bg-[#EEF9F3] w-[30px] h-[3px] rounded" />
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0E7E83] z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-[#eef6f3] text-xl absolute top-4 right-4"
          >
            X
          </button>
          <ul className="flex flex-col items-center space-y-6">
            {mobileLinks.map((link) => (
              <li
                key={link.href}
                className="text-[#eef6f3] text-[24px] font-bold"
              >
                <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Search />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbarMenu;
