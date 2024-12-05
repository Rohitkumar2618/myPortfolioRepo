// import Button from "@/components/ui/button";
import FancyButton from "@/components/ui/fancyButton";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";
import FullScreenMenu from "./full-screen-menu/full-screen-menu";

function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper className="w-[320px]">
          <FancyButton text="Let's talk" />
        </MagneticWrapper>
      </div>
      {/* Full screen menu */}
      <FullScreenMenu/>
    </div>
  );
}

export default Header;
