import React from "react";
import Card from "../ui/card";
import Image from "next/image";
import MyImg from "../../public/images/de22b285-63bd-41cd-b430-71150232dc69.jpeg";
import { cn } from "@/lib/utils";

const MeCard = () => {
  return (
    <Card className="2xl:h-full sm:h-[400px]">
      <div className="w-full h-[200px] sm:h-[500px] overflow-hidden relative">
        <Image
          src={MyImg}
          alt="My Image"
          fill
          className="rounded-sm object-cover sm: object-top"
        />
        {/* Tag */}
        <Tag
          text="Full Stack Developer"
          className="rounded-full absolute bottom-4 left-1"
        />
        <Tag
          text="Hello, universe!"
          className="rounded-full absolute bottom-40 left-4"
        />
      </div>
    </Card>
  );
};

export default MeCard;

const Tag = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={cn("bg-black/[0.8] w-fit py-1.5 px-3", className)}>
      <p className="text-primary-foreground leading-[110%] ">{text}</p>
    </div>
  );
};
