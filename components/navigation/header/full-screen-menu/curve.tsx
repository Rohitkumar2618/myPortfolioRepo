// import { duration } from "moment-timezone";
// import { motion } from "framer-motion";
//      export default function Curve () {

// const curve = {
// const intialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
// window.innerHeight}`
//     initial:{
//         d:intialPath,
//     },
//     enter:{
//         d:intialPath,
//         transition:{duration:1, ease:[0.76,0,0.24,1]},
//     },
//     exit:{
//         d:intialPath,
//         transition:{duration:0.8, ease:[0.76,0,0.24,1]},
//     },
// };

// return(
//     <svg className="absolute top-0 -left-[99px] w-[100px] h-full stroke-none fill-primary-background">
//         <motion.path
//         variants={curve}
//         initial="initial"
//         animate="enter"
//         exit="exit">

//         </motion.path>

//     </svg>
// )


//      }


import { motion } from "framer-motion";
import React from "react";

export default function Curve() {
  // Define the initial SVG path using a function to access the window object properly.
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight /2} 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight /2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute top-0 -left-[100px] w-[100px] h-full stroke-none ">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
