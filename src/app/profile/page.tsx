"use client";

import Image from "next/image";
import { useState } from "react";
import houseImage from "../../../public/house.jpg";
import manImage from "../../../public/man.png";
import pale from "../../../public/pale-85 1.png";
import LogoutModel from "./_components/LogoutModel";

const ProfilePage = () => {
  const [isClosedModel, setIsClosedModel] = useState<boolean>(false);

  return (
    <>
      <div className="grid grid-rows-2">
        <div>
          <Image
            src={houseImage}
            alt="House Image"
            height={491}
            width={1920}
            className="w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[647px] bg-[#EEF9F3] relative">
            <div className="flex justify-between items-center">
              <div className="absolute bottom-0 left-0 justify-center items-center lg:flex hidden">
                <Image src={pale} alt="Pale" />
                <Image
                  src={manImage}
                  alt="Man in Circle"
                  className="absolute left-1/2 bottom-[140%] transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              <ul className="flex flex-col p-4 ml-0 md:ml-24 lg:ml-48 xl:ml-96">
                <li className="text-[24px] md:text-[28px] text-[#14B05D] leading-[29px] md:leading-[33.89px] font-bold">
                  NAME
                </li>
                <li className="text-[24px] md:text-[28px] text-[#14B05D] leading-[29px] md:leading-[33.89px] font-bold">
                  COUNTRY
                </li>
                <li className="text-[24px] md:text-[28px] text-[#14B05D] leading-[29px] md:leading-[33.89px] font-bold">
                  EMAIL
                </li>
                <li className="text-[24px] md:text-[28px] text-[#14B05D] leading-[29px] md:leading-[33.89px] font-bold">
                  PHONE
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[1273px] bg-[#031C1D] relative mt-4 md:mt-0">
            <ul className="flex flex-col p-4 uppercase ml-0">
              <li className="text-[24px] md:text-[28px] text-[#EEF9F3] leading-[29px] md:leading-[33.89px] font-bold">
                james williams
              </li>
              <li className="text-[24px] md:text-[28px] text-[#EEF9F3] leading-[29px] md:leading-[33.89px] font-bold">
                usa - Washington, D.C.
              </li>
              <li className="text-[24px] md:text-[28px] text-[#EEF9F3] leading-[29px] md:leading-[33.89px] font-bold">
                james96@gmail.com
              </li>
              <li className="text-[24px] md:text-[28px] text-[#EEF9F3] leading-[29px] md:leading-[33.89px] font-bold">
                +1 202 555 1234
              </li>
            </ul>
            <button
              onClick={() => setIsClosedModel(true)}
              className="text-[#EEF9F3] bg-[#E55B5B] w-[172px] h-[45px] border-2 rounded-lg absolute bottom-4 right-4 hover:text-[#59Ed9f] hover:bg-[#EEF9F3]"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      <LogoutModel
        isClosedModel={isClosedModel}
        setIsClosedModel={() => setIsClosedModel(false)}
      />
    </>
  );
};

export default ProfilePage;
