import Image from "next/image";
import houseImage from "../../../public/house.jpg";
import manImage from "../../../public/man.png";
import pale from "../../../public/pale-85 1.png";

const ProfilePage = () => {
  return (
    <div className="grid grid-rows-2">
      <div>
        <Image src={houseImage} alt="House Image" height={491} width={1920} />
      </div>

      <div className="flex">
        <div className="w-[647px] bg-[#EEF9F3] relative">
          <div className="flex justify-between items-center">
            <div className="absolute bottom-0 left-0 flex justify-center items-center">
              <Image src={pale} alt="Pale" />
              <Image
                src={manImage}
                alt="Man in Circle"
                className="absolute left-1/2 bottom-[140%] transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <ul className="flex flex-col p-4 ml-96">
              <li className="text-[28px] text-[#14B05D] leading-[33.89px] font-bold">
                NAME
              </li>
              <li className="text-[28px] text-[#14B05D] leading-[33.89px] font-bold">
                COUNTRY
              </li>
              <li className="text-[28px] text-[#14B05D] leading-[33.89px] font-bold">
                EMAIL
              </li>
              <li className="text-[28px] text-[#14B05D] leading-[33.89px] font-bold">
                PHONE
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[1273px] bg-[#031C1D]">
          <ul className="flex flex-col p-4 ml-96 uppercase ml-0">
            <li className="text-[28px] text-[#EEF9F3] leading-[33.89px] font-bold">
              james williams
            </li>
            <li className="text-[28px] text-[#EEF9F3] leading-[33.89px] font-bold">
              usa - Washington, D.C.
            </li>
            <li className="text-[28px] text-[#EEF9F3] leading-[33.89px] font-bold">
              james96@gmail.com
            </li>
            <li className="text-[28px] text-[#EEF9F3] leading-[33.89px] font-bold">
              +1 202 555 1234
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
