

import React from "react";
import Image from 'next/image'
import MagneticWrapper from "../visualEffects/magnetic-wrapper";
import FancyButton from "./fancyButton";
import ProfileI from "../../public/images/profile.png";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between h-auto p-4 flex-shrink-0 gap-4">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <Image
          className="w-20 h-20 bg-red-200 md:w-32 md:h-32 rounded-full object-center"
          src={ProfileI}
          alt="Profile"
        />
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-white text-center md:text-left">
          Rohitkumar
        </h1>
      </div>

      {/* Button Section */}
      <div className="hidden 2xl:flex">
        <MagneticWrapper className="w-[240px] md:w-[320px]">
          <FancyButton text="Let's talk" />
        </MagneticWrapper>
      </div>
    </div>
  );
};

export default Profile;

