// import React, { useState, useEffect, useRef } from "react";

// export default function SvgCurve() {
//   const [mouseX, setMouseX] = useState(0); // Track mouse X position
//   const [mouseY, setMouseY] = useState(0); // Track mouse Y position
//   const svgRef = useRef<SVGPathElement | null>(null);

//   // Capture mouse movement
//   const handleMouseMove = (e: MouseEvent) => {
//     setMouseX(e.clientX); // Update mouse X position
//     setMouseY(e.clientY); // Update mouse Y position
//   };

//   // Calculate the control point for the Bézier curve based on mouse position
//   const calculatePath = () => {
//     const svgWidth = window.innerWidth;
//     const svgHeight = window.innerHeight;

//     const controlPointX = (mouseX / svgWidth) * 100; // Control point on X axis
//     const controlPointY = (mouseY / svgHeight) * 50 + 50; // Control point on Y axis, scale to screen height

//     // Quadratic Bézier curve: `M` (move to start), `Q` (control point), and end coordinates
//     return `M 0 50 Q ${controlPointX} ${controlPointY}, 100 50`;
//   };

//   // Update path on mouse move
//   useEffect(() => {
//     if (svgRef.current) {
//       svgRef.current.setAttribute("d", calculatePath());
//     }
//   }, [mouseX, mouseY]);

//   // Attach event listener to capture mouse movement
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="line-container -top-10">
//       <svg
//         width="100%"
//         height="100"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <path
//           ref={svgRef}
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           d="M 0 50 Q 50 50, 100 50"
//         />
//       </svg>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef, useCallback } from "react";

export default function SvgCurve() {
  const [mouseX, setMouseX] = useState(0); // Track mouse X position
  const [mouseY, setMouseY] = useState(0); // Track mouse Y position
  const svgRef = useRef<SVGPathElement | null>(null);

  // Capture mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX); // Update mouse X position
    setMouseY(e.clientY); // Update mouse Y position
  };

  // Calculate the control point for the Bézier curve based on mouse position
  const calculatePath = useCallback(() => {
    const svgWidth = window.innerWidth;
    const svgHeight = window.innerHeight;

    const controlPointX = (mouseX / svgWidth) * 100; // Control point on X axis
    const controlPointY = (mouseY / svgHeight) * 50 + 50; // Control point on Y axis, scale to screen height

    // Quadratic Bézier curve: `M` (move to start), `Q` (control point), and end coordinates
    return `M 0 50 Q ${controlPointX} ${controlPointY}, 100 50`;
  }, [mouseX, mouseY]);

  // Update path on mouse move
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.setAttribute("d", calculatePath());
    }
  }, [mouseX, mouseY, calculatePath]);

  // Attach event listener to capture mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="line-container -top-10">
      <svg
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={svgRef}
          fill="none"
          stroke="white"
          strokeWidth="2"
          d="M 0 50 Q 50 50, 100 50"
        />
      </svg>
    </div>
  );
}
