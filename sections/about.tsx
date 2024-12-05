import ExperienceCard from "@/components/cards/experience";
import EducationCard from "@/components/cards/education";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import Heading from "@/components/Heading/heading";
import Gallery from "@/components/ui/gallery";
import React from "react";
import CertificationCard from "@/components/cards/certification";
import StackCard from "@/components/cards/stack";

const AboutSection = () => {
  return (
    <div className="pt-24 px-3  lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ExperienceCard />
          <ResumeCard />
         
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <CertificationCard />
            <EducationCard />
          </div>
          <div className="space-y-4">
            <StackCard />
           
            
          </div>
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
