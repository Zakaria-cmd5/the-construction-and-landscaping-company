"use client";

import Search from "@/components/Search";
import { useTranslationContext } from "@/context/TranslationContextProvider";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import iconImage from "../../../public/logo.png";

const DesktopNavbar = () => {
  const { t } = useTranslationContext();

  const currentPath = usePathname();

  const links = [
    { href: "/", label: t("DesktopNavbarHomeLabel") },
    { href: "/about-us", label: t("DesktopNavbarAboutUsLabel") },
    { href: "/projects", label: t("DesktopNavbarProjectLabel") },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { href: "/", label: t("DesktopNavbarMenuLandscapingLabel") },
    { href: "/", label:  t("DesktopNavbarMenuDeckingLabel")},
    { href: "/", label:  t("DesktopNavbarMenuGardeningLabel")},
    { href: "/", label:  t("DesktopNavbarMenuInterlockingLabel")},
    { href: "/", label:  t("DesktopNavbarMenuFloralDesignLabel")},
    { href: "/", label:  t("DesktopNavbarMenuPoolsLabel")},
    { href: "/", label: t("DesktopNavbarMenuRailingsLabel")},
    { href: "/", label:  t("DesktopNavbarMenuWoodwoorkingLabel")},
    { href: "/", label: t("DesktopNavbarMenuShowroomLabel")},
    { href: "/profile", label:  t("DesktopNavbarMenuProfileLabel")},
    { href: "/", label: t("DesktopNavbarMenuContactUsLabel")},
  ];

  return (
    <div className="hidden md:flex bg-[#0E7E83] justify-between items-center w-full h-[79px]">
      <Image
        src={iconImage}
        alt="icon"
        width={69}
        height={57}
        className="relative -top-1"
      />
      <p className="text-[#eef6f3] text-[20px] flex items-center leading-[24.2px] w-[287px] h-[48px]">
        {t("DesktopNavbarHeading")}
      </p>
      <div className="w-[80px] border-2 bg-[#EEF9F3] -rotate-90" />
      <ul className="flex items-center space-x-8">
        {links.map((link) => (
          <li
            className="h-[49px] flex items-center justify-center"
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
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
          <span className="bg-[#EEF9F3] w-[36.88px] h-[3.69px] rounded -ml-2" />
          <span className="bg-[#EEF9F3] w-[44.25px] h-[3.69px] rounded" />
        </div>
        <span className="text-[#eef6f3]">{t("DesktopNavbarMenuHeader")}</span>
      </div>
      <Link
        href="/signup"
        className="p-4 text-[#EEF9F3] bg-[#59ED9F] mr-6 rounded-lg border-4 border-[#EEF9F3]"
      >
        {t("DesktopNavbarButton")}
      </Link>
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
    </div>
  );
};

export default DesktopNavbar;
