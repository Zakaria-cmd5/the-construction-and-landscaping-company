"use client";

import { useState } from "react";
import LogoutModel from "./LogoutModel";
import UploadImageForm from "./UploadImageForm";

type UserInfo = {
  name: string | undefined;
  country: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  city: string | undefined;
  image: string | undefined | null;
};

interface Props {
  user: UserInfo;
}

const Profile = ({ user }: Props) => {
  const userInfo = [
    { key: "NAME", value: user.name },
    { key: "COUNTRY", value: user.country },
    { key: "CITY", value: user.city },
    { key: "EMAIL", value: user.email },
    { key: "PHONE", value: user.phoneNumber },
  ];

  const [isClosedModel, setIsClosedModel] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[500px] bg-[#EEF9F3]  relative mt-4 md:mt-0 p-4">
          <ul className="flex flex-col uppercase">
            {userInfo.map((info) => (
              <li
                className="text-[20px] md:text-[24px] text-[#14B05D] leading-6 md:leading-[29px] font-bold"
                key={info.key}
              >
                {info.key}
              </li>
            ))}
          </ul>
          <UploadImageForm userProfileImage={user.image} />
        </div>

        <div className="w-full md:w-1/2 h-[500px] bg-[#031C1D] relative mt-4 md:mt-0 p-4">
          <ul className="flex flex-col uppercase">
            {userInfo.map((info) => (
              <li
                key={info.key}
                className="text-[20px] md:text-[24px] text-[#EEF9F3] leading-6 md:leading-[29px] font-bold"
              >
                {info.value}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsClosedModel(true)}
            className="text-[#EEF9F3] bg-[#E55B5B] sm:w-[130px] w-full md:w-[172px] h-[45px] border-2 rounded-lg absolute bottom-4 right-4 hover:text-[#59Ed9f] hover:bg-[#EEF9F3]"
          >
            LOGOUT
          </button>
        </div>
      </div>
      <LogoutModel
        isClosedModel={isClosedModel}
        setIsClosedModel={() => setIsClosedModel(false)}
      />
    </>
  );
};

export default Profile;
