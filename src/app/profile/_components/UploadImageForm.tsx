"use client";

import { updateImageAction } from "@/actions/updateImageAction";
import FormLabel from "@/components/FormLabel";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import noImage from "../../../../public/profilePageImages/noImage.png";

interface Props {
  userProfileImage: string | null | undefined;
}

const UploadImageForm = ({ userProfileImage }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profileImage, setProfileImage] = useState<any>("");

  return (
    <form
      action={(formData) =>
        updateImageAction(formData, profileImage?.secure_url)
      }
      className="absolute left-0 bottom-0 ml-2 mb-2"
    >
      <CldUploadWidget
        uploadPreset="landscaping"
        onSuccess={(result) => setProfileImage(result.info)}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col" onClick={() => open()}>
              <FormLabel>Profile Image</FormLabel>
              <div className="flex flex-col items-center">
                <Image
                  src={userProfileImage ? userProfileImage : noImage}
                  alt="Profile image"
                  className="absolute left-1/2 bottom-[80%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full object-cover"
                  width={200}
                  height={200}
                />
                <span className="text-xs underline text-green-500">Change</span>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      <button
        type="submit"
        className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md"
      >
        Save Image
      </button>
    </form>
  );
};

export default UploadImageForm;
