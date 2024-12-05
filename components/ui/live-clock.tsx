"use client";
import moment from "moment-timezone";
import { FC, useEffect, useState } from "react";

// Importing the package for current timing
// ! npm i moment-timezone
interface LiveClockProps {
  timeZone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>("");
  
  // useEffect(() => {
  //   const updateClock = () => {
  //     const currentTime = moment().tz(timeZone).format(`HH:mm`);
  //     setTime(currentTime);
  //   };

  //   const intervalId = setInterval(updateClock, 100);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);


  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format(`HH:mm`);
      setTime(currentTime);
    };
  
    updateClock(); // Ensure the clock updates immediately on mount.
  
    const intervalId = setInterval(updateClock, 100);
  
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className=" mt-10  text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>{timeZone.split("/")[0]}</span>
          <span>: {time}</span>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LiveClock;
