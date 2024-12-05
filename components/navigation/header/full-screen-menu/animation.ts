// import { delay } from "framer-motion";
// import { duration } from "moment-timezone";

// export const menuSlide = {

//     initial: {x:"calc(100% + 100px)"},
//     enter:{x:"0", transition:{duration:0.8, ease:[0.76,0,0.24,1]}},
//     exit:{
//         x:"calc(100% + 100px)",
//         transition:{duration:0.8,ease:[0.76,0,0.24,1]},
//     },
// };

// export const Slide = {

//     initial: {x:80},
//    enter:(i) =>({
//     x:0,
//     transition: { duration:0.8, ease:[0.76,0,0.24,1],delay:0.05 * i}
//    }),
//    exit:(i) =>({
//     x:80,
//     transition: { duration:0.8, ease:[0.76,0,0.24,1],delay:0.05 * i}
//    }),

// };


// export const scale = {

//     open:{scale:1,transition:{duration:0.03}},
//     closed:{scale:0, transition:{duration:0.04}}
// }


export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: {
      x: "0",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  
  export const Slide = {
    initial: { x: 80 },
    enter: (i: number) => ({
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.05 * i,
      },
    }),
    exit: (i: number) => ({
      x: 80,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.01 * i,
      },
    }),
  };
  
  export const scale = {
    open: { scale: 1, transition: { duration: 0.03 } },
    closed: { scale: 0, transition: { duration: 0.04 } },
  };
  