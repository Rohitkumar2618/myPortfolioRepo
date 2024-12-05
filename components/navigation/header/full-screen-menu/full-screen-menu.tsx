

import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./curve";
import Profile2 from "@/components/ui/Profile2";
import NavLink from "./nav-link";
import Link from "next/link";
import MenuCard from "./menu-card";

export default function FullScreenMenu() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Featured ", href: "/#featured" },

    { title: "About", href: "/#about" },

    { title: "Contact", href: "/#contact" },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      {/* Profile Section */}
      <div className="relative w-full max-w-[95%] mx-auto">
        <div className="absolute top-8">
          <Profile2 />
        </div>
      </div>

      {/* Menu and Navigation */}
      <div className="absolute bottom-32 w-full lg:pl-[5%] ">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div className=" hidden pl-4 2xl:flex flex-col justify-end  mb-8">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          {/* Menu */}
          <MenuCard/>
        </div>
      </div>

      {/* Footer Links */}
     
     <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap justify-between  uppercase text-white">

            {/* {...left side} */}
            <div className="flex items-center gap-4">
                <Link href='/'>  LEGAL NOTICE</Link>
                <Link href='/'>  404</Link>
                <Link href='/'>  LEGALSTYLE</Link>
            </div>
            {/* Middle */}
            <div className="flex items-center gap-4">
                <Link href='https://www.linkedin.com/in/rohit-darunde-2606r1802a'>  LinkedIn</Link>
                <Link href='https://github.com/Rohitkumar2618'>  GitHub</Link>
                <Link href='https://x.com/rohitkumar15239?t=bKDRZaMXCJoDHYtXIPQnKQ&s=08 '>  Twitter</Link>
            </div>
            {/* Right */}
            <div className="flex items-center gap-4">
                <Link href='/'> © 2024</Link>
              
            </div>

        </div>
     </div>


      {/* Curve SVG Effect */}
      <Curve />
    </motion.div>
  );
}
