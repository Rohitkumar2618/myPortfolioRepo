import { FC, ReactNode } from "react";

interface TextAreaProps {
  icon?: ReactNode;
  placeholder?: string;
}

const TextAreaInput: FC<TextAreaProps> = ({ icon, placeholder }) => {
  return (
    <div className="relative w-full">
      {/* icon */}
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          {icon}
        </div>
      )}
      <textarea
        placeholder={placeholder}
        className={`w-full bg-primary-background text-primary-foreground rounded-lg text-sm p-2.5 pt-4 mt-4 focus:outline-none ${
          icon ? "pl-10" : "pl-4"
        }`}
      />
    </div>
  );
};

export default TextAreaInput;
