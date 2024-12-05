


"use client";

import { cn } from "@/lib/utils"; // Assuming this is a utility for class name concatenation
import { FC, ReactNode } from "react";

interface CardProps {
  title?: string; // Optional title prop
  children?: ReactNode; // Optional children prop
  className?: string; // Optional additional class names
}

const Card: FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground",
        className // Allow additional class names to be appended
      )}
      role="region" // Optional: adding ARIA role for accessibility
      aria-labelledby={title ? "card-title" : undefined} // Optional: use if a title is present
    >
      <div className="flex flex-col gap-y-6">
        {title && (
          <div id="card-title" className="font-pixel"> {/* Added ID for accessibility */}
            <p className="uppercase text-lg">{title}</p>
          </div>
        )}
        {children && <div>{children}</div>} {/* Conditionally render children */}
      </div>
    </div>
  );
};

export default Card;
