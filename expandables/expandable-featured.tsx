import FeaturedCard from "@/components/cards/featured/featured-card";
import { featuredData } from "@/data";
import { cn } from "@/lib/utils";
import { object } from "framer-motion/client";
import { FC, useState } from "react";


interface ExpandableFeaturedProps {
  link: string; // Define the link prop type
}



const ExpandableFeatured: FC<ExpandableFeaturedProps> = (
  // { link }
) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(object);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="w-full grid  lg:flex lg:justify-between lg:gap-x-4 overflow-hidden">
      {featuredData.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoveredIndex ? "lg:w-[20%]" : "lg:w-[30%]"
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard
            title={featured.title}
            tag={featured.tag}
         
          
            active={i === hoveredIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableFeatured;
