

import React, { FC, ReactNode } from "react";
import Button from "../ui/button";

interface ContactCardProps {
  title: string;
  icon: ReactNode;
  text: string;
  btnText: string;
  link?: string; // Optional link for the button

}

const ContactCard: FC<ContactCardProps> = ({
  title,
  icon,
  text,
  btnText,
  link,

}) => {
  return (
    <div className="bg-primary-background border border-border rounded-lg relative overflow-hidden p-6 shadow-md">
      <div className="z-10 flex flex-col gap-6 items-start">
        {/* Header */}
        <div className="flex items-center gap-x-3">
          <span className="border-2 w-10 h-10 rounded-lg grid place-items-center">
            {icon}
          </span>
          <h1 className="font-medium text-lg">{title}</h1>
        </div>
        {/* Body text */}
        <h2 className="font-bold text-2xl">{text}</h2>
        {/* Button */}
        <Button link={link} className="!w-28">
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
