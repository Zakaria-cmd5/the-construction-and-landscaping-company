"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavbarLinks = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/projects", label: "PROJECT" },
  ];

  return (
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
  );
};

export default DesktopNavbarLinks;
