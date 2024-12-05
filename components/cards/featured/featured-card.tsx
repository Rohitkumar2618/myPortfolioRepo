
// import Link from "next/link"; // Import Link for navigation
// import { FC } from "react";

// import Image from "next/image";
// import HeaderTwo from "./HeaderTwo";

// interface FeaturedCardProps {
//   logo?: string; // Optional logo
//   title: string;
//   tag: string;
//   video: string;
//   active: boolean;
//   link?: string; // Add link prop
// }




// const FeaturedCard: FC<FeaturedCardProps> = ({
//   logo,
//   title,
//   tag,
//   video,
//   active,
//   link,
// }) => {
//   const cardContent = (
//     <div
//       className={`w-full h-full bg-secondary-background   
//         border border-border
//         shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 shrink-0 flex-nowrap p-2 transition-all duration-300 ease-in-out
//         ${active ? "grayscale-0" : "grayscale"}`}
//     >
     
// {/* Header */}
// <HeaderTwo  title={title}   tag={tag}/>

//       {/* Body */}
//       <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
//         <Image
//           src={video}
//           alt={title}
//           className="rounded-md object-left"
//           fill
//           style={{ objectFit: 'cover' }} // Use inline style for objectFit
//           priority
//         />
//       </div>

//       {/* Logo */}
//       {logo && (
//         <div className="flex justify-center mt-4">
//           <Image
//             src={logo}
//             alt={`${title} Logo`}
//             width={100}
//             height={100}
//             className="rounded-md"
//             unoptimized // Optional: only if necessary
//           />
//         </div>
//       )}
//     </div>
//   );

//   // Return the card content wrapped in a Link if a link is provided, 
//   // while maintaining its original styling
//   return link ? (
//     <Link href={link} passHref>
//       <div className="w-full h-full"> {/* Adding an outer div to maintain structure */}
//         {cardContent}
//       </div>
//     </Link>
//   ) : (
//     cardContent
//   );
// };

// export default FeaturedCard;



// import Link from "next/link"; // Import Link for navigation
// import { FC } from "react";
// import { useMediaQuery } from "@mui/material"; // MUI hook for responsive behavior
// import Image from "next/image";
// import HeaderTwo from "./HeaderTwo";

// interface FeaturedCardProps {
//   logo?: string; // Optional logo
//   title: string;
//   tag: string;
//   videoFull: string; // Full-screen version of the image
//   videoCrop: string; // Cropped version of the image
//   active: boolean;
//   link?: string; // Add link prop
// }

// const FeaturedCard: FC<FeaturedCardProps> = ({
//   logo,
//   title,
//   tag,
//  imageCrop,
//  imageFull,
//   active,
//   link,
// }) => {
//   // Use MUI's useMediaQuery to check screen size
//   const isSmallScreen = useMediaQuery("(max-width:600px)"); // Mobile
//   const isMediumScreen = useMediaQuery("(max-width:960px)"); // Tablet

//   // Determine which image to display based on screen size
//   const selectedVideo = isSmallScreen || isMediumScreen ? imageCrop : imageFull;

//   const cardContent = (
//     <div
//       className={`w-full h-full bg-secondary-background   
//         border border-border
//         shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 shrink-0 flex-nowrap p-2 transition-all duration-300 ease-in-out
//         ${active ? "grayscale-0" : "grayscale"}`}
//     >
//       {/* Header */}
//       <HeaderTwo title={title} tag={tag} />

//       {/* Body */}
//       <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
//         <Image
//           src={selectedVideo} // Use the selected image based on screen size
//           alt={title}
//           className="rounded-md object-left"
//           fill
//           style={{ objectFit: "cover" }} // Use inline style for objectFit
//           priority
//         />
//       </div>

//       {/* Logo */}
//       {logo && (
//         <div className="flex justify-center mt-4">
//           <Image
//             src={logo}
//             alt={`${title} Logo`}
//             width={100}
//             height={100}
//             className="rounded-md"
//             unoptimized // Optional: only if necessary
//           />
//         </div>
//       )}
//     </div>
//   );

//   // Return the card content wrapped in a Link if a link is provided
//   return link ? (
//     <Link href={link} passHref>
//       <div className="w-full h-full"> {/* Adding an outer div to maintain structure */}
//         {cardContent}
//       </div>
//     </Link>
//   ) : (
//     cardContent
//   );
// };


// export default FeaturedCard;


// import Link from "next/link"; // Import Link for navigation
// import { FC } from "react";
// import { useMediaQuery } from "@mui/material"; // MUI hook for responsive behavior
// import Image from "next/image";
// import HeaderTwo from "./HeaderTwo";

// interface FeaturedCardProps {
//   logo?: string; // Optional logo
//   title: string;
//   tag: string;
//   imageFull: File; // Full-screen version of the image
//   imageCrop: File; // Cropped version of the image
//   active: boolean;
//   link?: string; // Add link prop
// }

// const FeaturedCard: FC<FeaturedCardProps> = ({
//   logo,
//   title,
//   tag,
//   imageCrop,
//   imageFull,
//   active,
//   link,
// }) => {
//   // Use MUI's useMediaQuery to check screen size
//   const isSmallScreen = useMediaQuery("(max-width:600px)"); // Mobile
//   const isMediumScreen = useMediaQuery("(max-width:960px)"); // Tablet

//   // Determine which image to display based on screen size
//   const selectedImage = isSmallScreen || isMediumScreen ? imageCrop : imageFull;

//   const cardContent = (
//     <div
//       className={`w-full h-full bg-secondary-background   
//         border border-border
//         shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 shrink-0 flex-nowrap p-2 transition-all duration-300 ease-in-out
//         ${active ? "grayscale-0" : "grayscale"}`}
//     >
//       {/* Header */}
//       <HeaderTwo title={title} tag={tag} />

//       {/* Body */}
//       <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
//         <Image
//           src={selectedImage} // Use the selected image based on screen size
//           alt={title}
//           className="rounded-md object-left"
//           fill
//           style={{ objectFit: "cover" }} // Use inline style for objectFit
//           priority
//         />
//       </div>

//       {/* Logo */}
//       {logo && (
//         <div className="flex justify-center mt-4">
//           <Image
//             src={logo}
//             alt={`${title} Logo`}
//             width={100}
//             height={100}
//             className="rounded-md"
//             unoptimized // Optional: only if necessary
//           />
//         </div>
//       )}
//     </div>
//   );

//   // Return the card content wrapped in a Link if a link is provided
//   return link ? (
//     <Link href={link} passHref>
//       <div className="w-full h-full"> {/* Adding an outer div to maintain structure */}
//         {cardContent}
//       </div>
//     </Link>
//   ) : (
//     cardContent
//   );
// };

// export default FeaturedCard;



// import Link from "next/link"; 
// import { FC } from "react";
// import { useMediaQuery } from "@mui/material"; 
// import Image from "next/image";
// import HeaderTwo from "./HeaderTwo";

// interface FeaturedCardProps {
//   logo?: string; 
//   title: string;
//   tag: string;
//   imageFull: string; 
//   imageCrop: string;
//   active: boolean;
//   link?: string; 
// }

// const FeaturedCard: FC<FeaturedCardProps> = ({
//   logo,
//   title,
//   tag,
//   imageCrop,
//   imageFull,
//   active,
//   link,
// }) => {
//   const isSmallScreen = useMediaQuery("(max-width:600px)");
//   const isMediumScreen = useMediaQuery("(max-width:960px)");

//   const selectedImage = isSmallScreen || isMediumScreen ? imageCrop : imageFull;

//   const cardContent = (
//     <div
//       className={`w-full h-full bg-secondary-background   
//         border border-border
//         shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 shrink-0 flex-nowrap p-2 transition-all duration-300 ease-in-out
//         ${active ? "grayscale-0" : "grayscale"}`}
//     >
//       <HeaderTwo title={title} tag={tag} />
//       <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
//         <Image
//           src={selectedImage}
//           alt={title}
//           className="rounded-md object-left"
//           fill
//           style={{ objectFit: "cover" }} 
//           priority
//         />
//       </div>
//       {logo && (
//         <div className="flex justify-center mt-4">
//           <Image
//             src={logo}
//             alt={`${title} Logo`}
//             width={100}
//             height={100}
//             className="rounded-md"
//             unoptimized 
//           />
//         </div>
//       )}
//     </div>
//   );

//   return link ? (
//     <Link href={link} passHref>
//       <div className="w-full h-full"> 
//         {cardContent}
//       </div>
//     </Link>
//   ) : (
//     cardContent
//   );
// };

// export default FeaturedCard;


import Link from "next/link";
import { FC } from "react";
import { useMediaQuery } from "@mui/material"; 
import Image, { StaticImageData } from "next/image";
import HeaderTwo from "./HeaderTwo";

interface FeaturedCardProps {
  logo?: string; 
  title: string;
  tag: string;
  imageFull?: StaticImageData | string; 
  imageCrop?: StaticImageData | string;
  active: boolean;
  link?: string; 
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  imageCrop,
  imageFull,
  active,
  link,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const selectedImage = isSmallScreen || isMediumScreen ? imageCrop : imageFull;

  const cardContent = (
    <div
      className={`w-full h-full bg-secondary-background   
        border border-border
        shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 shrink-0 flex-nowrap p-2 transition-all duration-300 ease-in-out
        ${active ? "grayscale-0" : "grayscale"}`}
    >
      <HeaderTwo title={title} tag={tag} />
      <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        <Image
          src={selectedImage}
          alt={title}
          className="rounded-md object-left"
          fill
          style={{ objectFit: "cover" }} 
          priority
        />
      </div>
      {logo && (
        <div className="flex justify-center mt-4">
          <Image
            src={logo}
            alt={`${title} Logo`}
            width={100}
            height={100}
            className="rounded-md"
            unoptimized 
          />
        </div>
      )}
    </div>
  );

  return link ? (
    <Link href={link} passHref>
      <div className="w-full h-full"> 
        {cardContent}
      </div>
    </Link>
  ) : (
    cardContent
  );
};

export default FeaturedCard;
