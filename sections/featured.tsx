

// import FeaturedCard from "@/components/cards/featured/featured-card";
// import ExpandableFeatured from "@/components/expandables/expandable-featured";
// import Heading from "@/components/Heading/heading";
// import { featuredData } from "@/data";


// const MainFeatured = featuredData[0];

// export default function FeaturedSection() {
//   return (
//     <div className="pt-24 px-3 lg:px-8">
//       {/* Heading */}
//       <Heading number="01" title_1="Featured" title_2="Work" />

//       {/* Main Featured Card */}
//       <FeaturedCard
//         active
//         title={MainFeatured.title}
//         tag={MainFeatured.tag}
//         imageFull={MainFeatured.imageFull} // Correctly pass the imageFull
//         imageCrop={MainFeatured.imageCrop} // Correctly pass the imageCrop
//         link={MainFeatured.link} // Correctly pass the link
//       />

//       <div className="mt-24">
//         {/* Assuming ExpandableFeatured uses a single link */}
//         <ExpandableFeatured /> 
//       </div>
//     </div>
//   );
// }

import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import Heading from "@/components/Heading/heading";
import featuredData from "@/data/featured"; 

const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="01" title_1="Featured" title_2="Work" />
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        imageFull={MainFeatured.imageFull} 
        imageCrop={MainFeatured.imageCrop} 
        link={MainFeatured.link} 
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}