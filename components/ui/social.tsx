// import React from "react";
// import Button from "./button";
// import { SiUdemy } from "react-icons/si";
// import { RiYoutubeFill } from "react-icons/ri";

// const Socials = () => {
//   return (
//     <div className="flex items-center flex-wrap gap-3">
//       {social.map((social, i) => {
//         <Button key={i} link={social.link} isIcon>
//           <span className="w-7 h-7 grid items-center ">{social.icon}</span>
//         </Button>;
//       })}
//     </div>
//   );
// };

// export default Socials;

// const socials = [
//   { icon: <SiUdemy className="w-4 h-4" />, link: "www.google.com" },
//   { icon: <RiYoutubeFill className="w-4 h-4" />, link: "www.google.com" },
// ];


import React from "react";
import Button from "./button";
import { SiUdemy } from "react-icons/si";
import { RiYoutubeFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
};

export default Socials;

const socials = [
  { icon: <SiUdemy className="w-4 h-4" />, link: "www.google.com" },
  { icon: <RiYoutubeFill className="w-4 h-4" />, link: "www.google.com" },
];
