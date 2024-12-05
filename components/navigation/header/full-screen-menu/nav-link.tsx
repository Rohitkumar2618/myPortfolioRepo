

// import React, { FC, useState } from "react";
// import { motion } from "framer-motion";
// import { scale, Slide } from "./animation";
// import Link from "next/link";

// interface NavLinkProps {
//   data: {
//     title: string;
//     href: string;
//     index: number;
//   };
// }

// const NavLink: FC<NavLinkProps> = ({ data }) => {
//   const { title, href, index } = data;
// const  {hovered,setHovered} = useState<bolean>[false]
//   return (
//     <motion.div
//       className="relative flex items-center"
//       variants={Slide}
//       custom={index}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       onMouseEnter={()=>setHovered(true)}
//       onMouseLeave={()=>setHovered(false)}
//     >

//       {/* Hidden Motion Effect */}
//       <motion.div
      
//       variants={scale}
//       animate={hovered ? "open":"closed"}
//       className="w-2.5 h-2.4 bg-white rounded-full absolute -left-[30px]" />

//       {/* Link Element */}
//       <Link
//         href={href}
//         className="text-[5vw] uppercase leading-[96%] font-semibold"
//       >
//         {title}
//       </Link>
//     </motion.div>
//   );
// };

// export default NavLink;
 
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { scale, Slide } from "./animation";
import Link from "next/link";

interface NavLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
}

const NavLink: FC<NavLinkProps> = ({ data }) => {
  const { title, href, index } = data;

  // State for hover effect
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="relative flex items-center"
      variants={Slide}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHovered(true)} // Set hovered state on mouse enter
      onMouseLeave={() => setHovered(false)} // Reset hovered state on mouse leave
    >
      {/* Hover Indicator */}
      <motion.div
        variants={scale}
        animate={hovered ? "open" : "closed"} // Toggle animation based on hover state
        className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px]"
      />

      {/* Link Element */}
      <Link
        href={href}
        className="text-[5vw] uppercase leading-[96%] font-semibold"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
 