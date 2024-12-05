

// import { featuredData } from "@/data";
// import FeaturedCard from "../cards/featured/featured-card";
// import { cn } from "@/lib/utils";
// import { useState } from "react";

// export default function ExpandableFeatured() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="w-full  py-12">
//       <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-8">
//         {featuredData.slice(1).map((featured, i) => (
//           <div
//             key={i}
//             className={cn(
//               "relative h-[400px] lg:w-3/3 mb-16 transition-all origin-center duration-300 ease-in-out ",
//            i === hoveredIndex ? "lg:w-[100%]" : "lg:w-[90%]"
//             )}
//             onMouseEnter={() => setHoveredIndex(i)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <FeaturedCard
//               title={featured.title}
//               active={hoveredIndex === i}
//               tag={featured.tag}
//               imageFull={featured.imageFull} // Correctly pass the imageFull
//               imageCrop={featured.imageCrop} 
//               link={featured.link}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import featuredData from "@/data/featured"; // Corrected import
import FeaturedCard from "../cards/featured/featured-card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-8">
        {featuredData.slice(1).map((featured, i) => (
          <div
            key={i}
            className={cn(
              "relative h-[400px] lg:w-3/3 mb-16 transition-all origin-center duration-300 ease-in-out",
              i === hoveredIndex ? "lg:w-[100%]" : "lg:w-[90%]"
            )}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <FeaturedCard
              title={featured.title}
              active={hoveredIndex === i}
              tag={featured.tag}
              imageFull={featured.imageFull} 
              imageCrop={featured.imageCrop} 
              link={featured.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}