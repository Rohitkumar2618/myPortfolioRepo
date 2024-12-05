"use client";


import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import FeaturedSection from "@/sections/featured";
import LandingPage from "@/sections/landing";


export default function Home() {
  return (
    
    <div>
           
            <LandingPage />
    <div className="pb-8  ">
  
        <FeaturedSection />
       
        <AboutSection />
        <ContactSection />
      </div>
    </div>
 
  );
}
