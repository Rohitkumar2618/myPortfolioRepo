


import React from 'react';

const HeadingAnimatedSvg = ({ text = "", animated = true }) => {
  return (
    <div className="relative flex   gap-4 ">
      {/* Heading Text */}
      <h1
        className={`text-xl sm:text-3xl lg:text-1xl  font-bold text-white
        transition-transform duration-500 ${animated ? "hover:scale-105" : ""}`}
      >
        {text}
      </h1>

      {/* SVG Animation */}
      <div className="relative w-10 h-10  flex justify-center items-center 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white animate-spin-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-label="Animated spinning circle"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a7.65 7.65 0 015.657 2.343m0 10.606A7.65 7.65 0 0112 19.646m-5.657-2.343A7.65 7.65 0 014.354 12M19.646 12a7.65 7.65 0 00-2.343-5.657m0 10.606A7.65 7.65 0 0012 19.646m-5.657-2.343A7.65 7.65 0 004.354 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeadingAnimatedSvg;
