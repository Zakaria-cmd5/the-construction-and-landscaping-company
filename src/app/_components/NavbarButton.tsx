import { getUserSession } from "@/utils/getUserSession";
import classNames from "classnames";
import Link from "next/link";

interface Props {
  isItMobileSize?: boolean
}

const NavbarButton = async ({isItMobileSize}:Props) => {
  const sessionId = await getUserSession();

  return (
    <Link
      href={sessionId ? "/profile" : "/signup"}
      className={classNames({
        "p-4 text-[#EEF9F3] bg-[#59ED9F] ml-6 mr-6 rounded-lg border-4 border-[#EEF9F3]":
          true,
        "bg-red-700": sessionId,
        "p-2":isItMobileSize
      })}
    >
      {sessionId ? "Logout" : "Signup"}
    </Link>
  );
};

export default NavbarButton;
