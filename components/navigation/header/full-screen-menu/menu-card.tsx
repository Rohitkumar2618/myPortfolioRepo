



// import React from 'react';
// import Link from "next/link";
// import HeadingAnimatedSvg from '@/components/Heading/heading-animated';
// import ShadeImg from "../../../../public/images/images.jpg"
// import Image from 'next/image';
// const MenuCard = () => {
//   const menuItems = [
//     { title: "ABOUT", link: "#about" },
    
    
//     { title: "EXPERIENCE", link: "#experience" },
//     { title: "EDUCATION", link: "#education" },
//     { title: "CERTIFICATIONS", link: "#certifications" },
//     { title: "TECH STACK", link: "#tech-stack" },
//     { title: "GALLERY", link: "#gallery" },
//   ];

//   return (
//     <div className="    w-full  sm: ml-[10px] sm: w-[371px] md:w-[600px] lg:w-[400px] h-auto min-h-[427px] gap-[20px] bg-[#1e36ea] rounded-[10px] flex-col justify-between items-sta flex relative overflow-hidden pt-10 px-[25px] pb-5  shadow-md p-4 ">
//       {/* Header */}
//       <div className="w-full flex relative justify-between items-center">
//         <div className="text-white text-2xl font-bold  uppercase">
//           WHO IS Rohitkumar ?
//         </div>
//     <HeadingAnimatedSvg/>
//       </div>

//       {/* Menu Items */}
//       <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index} 
//             href={item.link}
//             className="text-[#fdf825] uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75  hover:text-white transition-colors duration-300"
//           >
//             {item.title}
//           </Link>
//         ))}
//       </div>

//       <Image src={ShadeImg} alt="" className='block w-full h-full mix-blend-overlay absolute
//       top-0 right-0 left-0 bottom-0 '  />
//     </div>
//   );
// };

// export default MenuCard;


import Link from "next/link";
import HeadingAnimatedSvg from '@/components/Heading/heading-animated';
import ShadeImg from "../../../../public/images/images.jpg";
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
    <div className=" w-[371px] sm: ml-[10px] md:w-[600px] lg:w-[400px] h-auto min-h-[427px] gap-[20px] bg-[#1e36ea] rounded-[10px] flex flex-col justify-between items-start relative overflow-hidden pt-10 px-5 pb-5 shadow-md">
      {/* Header */}
      <div className="w-full flex relative justify-between items-center">
        <div className="text-white text-xl sm:text-2xl font-bold uppercase">
          WHO IS Rohitkumar?
        </div>
        <HeadingAnimatedSvg />
      </div>

      {/* Menu Items */}
      <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-[#fdf825] uppercase text-[32px] sm:text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <Image 
        src={ShadeImg} 
        alt="Background Shade" 
        className='block w-full h-full mix-blend-overlay absolute top-0 right-0 left-0 bottom-0' 
      />
    </div>
  );
};

export default MenuCard;