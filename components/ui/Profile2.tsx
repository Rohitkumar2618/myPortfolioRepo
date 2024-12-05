import React from "react";
import Image from 'next/image'
import ProfileI from "../../public/images/profile.png";

const Profile2 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between h-auto p-4 flex-shrink-0 gap-4">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <Image
          className="w-16 h-16 bg-red-200 md:w-32 md:h-32 rounded-full object-center"
          src={ProfileI}
          alt="Profile"
        />
        <h1 className="font-semibold text-xl md:text-4xl lg:text-4xl lg:font-oswald text-white text-center md:text-left">
          Rohitkumar
        </h1>
      </div>

   
    </div>
  );
};

export default Profile2;

