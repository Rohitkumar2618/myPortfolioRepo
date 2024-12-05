
import Header from "@/components/cards/featured/header";
import FancyButton from "@/components/ui/fancyButton";
import LiveClock from "@/components/ui/live-clock";
import Profile from "@/components/ui/profile";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";

function LandingPage() {
  return (
    <div className="  h-screen p-8 overflow-hidden">
      Header
   <Header/>
      {/* show magnetic fancy button on small screen and hide on md screen */}
      <div className="absolute  bottom-36 left-10 z-20  md:hidden ">
        <MagneticWrapper className="w-[320px]">
          <FancyButton text="Let's talk" />
        </MagneticWrapper>
      </div>
      {/* LiveClock */}
      <div className="absolute right-10 bottom-10 ">
        <LiveClock timeZone="India" />
      </div>

      {/* Slogan */}
      <div className="absolute  top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  mt-36  leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
      
      <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:lg:mt-10 lg:text-[14vw]   2xl:text-[12rem] uppercase">
        <div>
          <span>Code</span>
        </div>
        <div>
          <span>Crafting</span>
        </div>
        <div className="relative">
          <span className="">Brilliance</span>
        </div>
        
      </div>
      </div>
      {/* Magnetic scroll down */}
      <MagneticWrapper className="absolute  sm:bottom-5 2xl:left-1/2 2xl: -translate-x-1/2 2xl:-bottom-0  2xl:-bottom-[1rem] ">
        <ScrollDown/>  
      </MagneticWrapper>
    </div> 
  );
}

export default LandingPage;
