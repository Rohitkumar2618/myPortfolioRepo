
// import Link from "next/link";
// import { FC, ReactNode } from "react";
// import { RiArrowRightUpLine } from "react-icons/ri";

// // Timeline Component
// interface TimelineProps {
//   children: ReactNode;
  
// }

// const Timeline: FC<TimelineProps> = ({ children }) => {
//   return <div className="flex flex-col gap-y-6">{children}</div>;
// };

// export default Timeline;

// // TimelineItem Component
// interface TimelineItemProps {
//   date: string;
//   title: string;
//   subTitle: string;
//   link?: string;
//   tag?: string;
//   isCourse?: boolean;
//   className?:string
// }

// export const TimelineItem: FC<TimelineItemProps> = ({
//   date,
//   title,
//   subTitle,
//   link,
//   isCourse,
//   tag,

// }) => {
//   return (
//     <div className="flex flex-wrap gap-12 min-h justify-start relative">
//       <div
//         className="h-auto flex-none break-words whitespace-pre"
//         style={{ width: isCourse ? "0" : "auto" }}
//       >
//         <p className="text-secondary-foreground">{date}</p>
//       </div>

//       {/* Right side */}
//       <div
//         className="flex gap-x-2"
//         style={{ transform: isCourse ? "translateX(-45px)" : "none" }}
//       >
//         <div className="flex flex-col gap-0.5"></div>
//         {/* Title */}
//         <div className="text-primary-foreground break-words whitespace-pre">
//           <p className="leading-6 font-medium text-sm">{title}</p>
//           {/* Subtitle */}
//           <div className="flex items-center gap-2 w-min">
//             {link ? (
//               <Link href={link}>
//                 <Body link={link} subTitle={subTitle} tag={tag} />
//               </Link>
//             ) : (
//               <Body subTitle={subTitle} tag={tag} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Body Component
// interface BodyProps {
//   subTitle: string;
//   tag?: string;
//   link?: string;
// }

// const Body: FC<BodyProps> = ({ link, subTitle, tag }) => {
//   return (
//     <div className="text-secondary-foreground flex items-center">
//       <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
//       {/* Arrow icon next to subtitle */}
//       {tag && (
//         <div className="ms-2  rounded-[20px] bg-white/5 py-0.5 px-1.5">
//           <p className="text-[10px] font-normal text-secondary-foreground">
//             {tag}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };


import Link from "next/link";
import { FC, ReactNode } from "react";

// Timeline Component
interface TimelineProps {
  children: ReactNode;
}

const Timeline: FC<TimelineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

export default Timeline;

// TimelineItem Component
interface TimelineItemProps {
  date: string;
  title: string;
  subTitle: string;
  link?: string;
  tag?: string;
  isCourse?: boolean;
  className?: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  date,
  title,
  subTitle,
  link,
  isCourse,
  tag,
}) => {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{ width: isCourse ? "0" : "auto" }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>

      {/* Right side */}
      <div
        className="flex gap-x-2"
        style={{ transform: isCourse ? "translateX(-45px)" : "none" }}
      >
        <div className="flex flex-col gap-0.5"></div>
        {/* Title */}
        <div className="text-primary-foreground break-words whitespace-pre">
          <p className="leading-6 font-medium text-sm">{title}</p>
          {/* Subtitle */}
          <div className="flex items-center gap-2 w-min">
            {link ? (
              <Link href={link}>
                <Body subTitle={subTitle} tag={tag} />
              </Link>
            ) : (
              <Body subTitle={subTitle} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Body Component
interface BodyProps {
  subTitle: string;
  tag?: string;
}

const Body: FC<BodyProps> = ({ subTitle, tag }) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {/* Tag next to subtitle */}
      {tag && (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      )}
    </div>
  );
};
