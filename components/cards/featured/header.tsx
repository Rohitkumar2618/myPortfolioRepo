

import { useEffect, useState } from "react";
import FullScreenMenu from "@/components/navigation/header/full-screen-menu/full-screen-menu";
import ToggleButton from "@/components/navigation/header/full-screen-menu/toggle-button";
import Profile from "@/components/ui/profile";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  // Logic to show the toggle button on scroll (vertical scroll > 300px)
  useEffect(() => {
    // Ensure the scroll event runs only on the client side
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 300) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      {/* Profile Section */}
      <Profile />

      {/* Toggle Button (shows only when scroll position > 300px) */}
      {showToggle && (
        <ToggleButton open={open} onClick={() => setOpen((prev) => !prev)} />
      )}

      {/* Full Screen Menu (animated on open) */}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu />}
      </AnimatePresence>
    </div>
  );
}
