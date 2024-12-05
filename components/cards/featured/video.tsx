import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const Video = ({ video, active }: { video: string; active: boolean }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (currentVideo) {
      if (active) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }

      const handleEnded = () => {
        currentVideo.currentTime = 0; // Reset video to the start
        currentVideo.play(); // Replay the video
      };

      currentVideo.addEventListener("ended", handleEnded);

      // Cleanup event listener when component unmounts or active changes
      return () => {
        currentVideo.removeEventListener("ended", handleEnded);
      };
    }
  }, [active]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
      <video
        src={video}
        ref={videoRef}
        loop={false}
        muted
        className={cn(
          "w-full h-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      />
    </div>
  );
};

export default Video;
