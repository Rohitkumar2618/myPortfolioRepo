
// export default Button;

import Link from "next/link";
import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils"; 

interface ButtonProps {
  children: ReactNode;
  link?: string;
  className?: string;
  isIcon?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  link,
  className,
  isIcon = false,
}) => {
  return (
    <div>
      {link ? (
        <Link href={link} target="_blank" className="cursor-pointer">
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <div>
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </div>
      )}
    </div>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  className?: string;
  isIcon?: boolean;
  link?:string
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, className, isIcon }) => {
  return (
    <div
      className={cn(
        "cursor-pointer flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
        className, // Pass custom className
        isIcon ? "h-10 w-10 p-0" : "h-full w-max px-3 py-2" // Adjust spacing for isIcon
      )}
    >
      {children}
    </div>
  );
};

export default Button;
