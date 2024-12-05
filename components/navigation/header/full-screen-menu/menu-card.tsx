// import Heading from "@/components/Heading/heading"
// import HeadingAnimatedSvg from "@/components/Heading/heading-animated"
// import { link } from "fs"
// import Link from "next/link"

// export default function MenuCard() {
//     return(
//         <div className="w-full h-auto min-h-[427px] gap-[70px]
//         bg-[#1e36ea] rounded-[10px]
//         flex-col justify-between items-start flex relative overflow-hidden pt-10 px-[25px]
//         pb-5 shadow-md
//         ">
//           {/* {heade}   */}
//           <div className="w-full flex relative justify-between items-center">
//             <div className="uppercase font-bold text-2xl text-white">
//                 RohitKumar
//             </div>
//             <HeadingAnimatedSvg
//           animated
//             text="LEARN MORE ABOUT ROHITKUMAR DARUNDE" />

//             {/* Menu */}
//             <div className="z-40 w-fu;; flex-col gap-y-[5px] justify-center items-start relative">
//                 {myLinks.map((link,i)=>{
//                     <Link
//                     key={i}
//                     href={link.link}
//                     className="text-[#fdf825] uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white ">

//                         {link.title}
//                     </Link>
//                 })}
//             </div>
//           </div>
//         </div>
//     )
// }

// const myLinks = [

// {title:"About", link:"#about"},
// {title:"Background", link:"#about"},
// {title:"Courses", link:"#about"},
// {title:"Experience", link:"#about"},
// {title:"Education", link:"#about"},

// ]




import React from 'react';
import Link from "next/link";
import HeadingAnimatedSvg from '@/components/Heading/heading-animated';
import ShadeImg from "../../../../public/images/images.jpg"
import Image from 'next/image';
const MenuCard = () => {
  const menuItems = [
    { title: "ABOUT", link: "#about" },
    
    
    { title: "EXPERIENCE", link: "#experience" },
    { title: "EDUCATION", link: "#education" },
    { title: "CERTIFICATIONS", link: "#certifications" },
    { title: "TECH STACK", link: "#tech-stack" },
    { title: "GALLERY", link: "#gallery" },
  ];

  return (
    <div className="    w-full  sm: ml-[10px] sm: w-[371px] md:w-[600px] lg:w-[400px] h-auto min-h-[427px] gap-[20px] bg-[#1e36ea] rounded-[10px] flex-col justify-between items-sta flex relative overflow-hidden pt-10 px-[25px] pb-5  shadow-md p-4 ">
      {/* Header */}
      <div className="w-full flex relative justify-between items-center">
        <div className="text-white text-2xl font-bold  uppercase">
          WHO IS Rohitkumar ?
        </div>
    <HeadingAnimatedSvg/>
      </div>

      {/* Menu Items */}
      <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
        {menuItems.map((item, index) => (
          <Link
            key={index} 
            href={item.link}
            className="text-[#fdf825] uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75  hover:text-white transition-colors duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <Image src={ShadeImg} alt="" className='block w-full h-full mix-blend-overlay absolute
      top-0 right-0 left-0 bottom-0 '  />
    </div>
  );
};

export default MenuCard;