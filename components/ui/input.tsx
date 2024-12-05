import { FC, ReactNode } from "react";

interface InputProps {
  icon?: ReactNode;
  placeholder?: string;
  type: "email" | "text" | "password";
  img?: ReactNode;
}

const Input: FC<InputProps> = ({ icon, placeholder, type }) => {
  return (
    <div className="relative w-full mt-4">
      {" "}
      {/* Moved margin outside */}
      {/* Icon rendering conditionally */}
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-primary-background text-primary-foreground rounded-lg text-sm pr-2.5 py-4 focus:outline-none ${
          icon ? "pl-10" : "pl-4"
        }`}
      />
    </div>
  );
};

export default Input;
