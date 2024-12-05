

import { cn } from "@/lib/utils";
import React from "react";

interface ToggleButtonProps {
  open: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-4 top-16 z-50 w-[68px] h-[68px] flex items-center justify-center rounded-full bg-[#323E56] cursor-pointer"
    >
      <div className="relative flex flex-col gap-y-2 w-[30px] transform transition-all duration-300 origin-center overflow-hidden">
        {/* First Bar */}
        <div
          className={cn(
            "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
            { "translate-x-10 opacity-0": open } // Hides the bar when open
          )}
        ></div>

        {/* Middle Bar */}
        <div
          className={cn(
            "bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75",
            { "rotate-45": open } // Rotates into an "X" when open
          )}
        ></div>

        {/* Last Bar */}
        <div
          className={cn(
            "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
            { "-rotate-45": open } // Rotates into an "X" when open
          )}
        ></div>
      </div>
    </button>
  );
};

export default ToggleButton;
  