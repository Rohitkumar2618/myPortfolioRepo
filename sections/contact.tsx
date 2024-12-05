import ContactCard from "@/components/cards/contact-card";
import Heading from "@/components/Heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Image from "next/image";
import sendI from "../public/icons/send.svg";


import { FaPhoneAlt, FaUser } from "react-icons/fa";

import { MdEmail, MdSubject } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={
                <FaPhoneAlt className="text-black text-xl mt-[33px] ml-[33px]" />
              }
              text="+91 7972009146"
              btnText="Call me"
              link="tel:+917972009146"
            />
            <ContactCard
              title="Contact me on this mail"
              icon={
                <MdEmail className="text-black text-xl mt-[33px] ml-[33px]" />
              }
              text="rohitkumarme26@gmail.com"
              btnText="Email me"
              link="mailto:rohitkumarme26@gmail.com"
            />
          </div>

          {/* Contact Form */}
          <div className="flex flex-col bg-secondary-background border border-border rounded-lg space-y-6 p-6 shadow-md">
            <div className="flex flex-col lg:flex-row gap-6">
              <Input
                type="text"
                placeholder="Full Name"
                icon={
                  <FaCircleUser className="text-white fill text-xl mt-[15px] ml-[14px]" />
                }
              ></Input>
              <Input
                type="email"
                placeholder="Email Address"
                icon={
                  <MdEmail className="text-black text-xl mt-[15px] ml-[14px]" />
                }
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <Input
                type="text"
                placeholder="Phone Number"
                icon={
                  <FaUser className="text-black text-xl mt-[15px] ml-[14px]" />
                }
              />
              <Input
                type="text"
                placeholder="Subject"
                icon={
                  <MdSubject className="text-black text-xl mt-[15px] ml-[14px]" />
                }
              />
            </div>
            <Input type="text" placeholder="Your Message" icon={null} />
            <Button className="ml-[70%]">
              Send
              <Image src={sendI}  alt="sendI"/>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
