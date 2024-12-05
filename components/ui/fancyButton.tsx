import React from "react";

interface CustomButtonProps {
  text: string;
}

const FancyButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <div className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-1 rounded-full">
      <button className="bg-black text-white font-medium py-4 px-8 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black">
        {text} →
      </button>
    </div>
  );
};

export default FancyButton;
