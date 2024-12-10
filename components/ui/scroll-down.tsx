
import { RiArrowDownLine } from "react-icons/ri";

export default function ScrollDown() {
  return (
    <div className=" w-[5rem] absolute mt-[430px] 2xl:mt-[-80px] 2xl:w-[5rem] h-[5rem] rounded-full border border-primary-foreground flex items-center justify-center">
      <RiArrowDownLine className="w-1/2 h-1/2 absolute left-5 top-5" />
    </div>
  );
}
