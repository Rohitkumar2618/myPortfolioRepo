import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TooltipProps {
  title: string;
  image: string | StaticImport;
  bgColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, image, bgColor }) => {
  return (
    <div
      className={cn(
        "link relative bg-[#202C33] w-10 h-10 transform cursor-pointer grid place-items-center ",
        "border border-border rounded-xl",
        "hover:scale-110 transition-all duration-200"
      )}
      style={{ background: `${bgColor || "#202C33"}` }}
    >
      <div className="w-[27px] h-[27px]">
        <Image
          src={image}
          alt={title}
          className="w-fu;; h-full overflow-clip object-contain"
        />
      </div>
    </div>
  );
};
export default Tooltip;
