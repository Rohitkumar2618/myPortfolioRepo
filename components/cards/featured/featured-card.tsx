


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
    {/* <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
  {selectedImage && (
    <Image
      src={selectedImage}
      alt={title}
      className="rounded-md object-left"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  )}
</div> */}
   <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
  {selectedImage && (
    <Image
      src={selectedImage}
      alt={title}
      className="rounded-md object-left"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  )}
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
