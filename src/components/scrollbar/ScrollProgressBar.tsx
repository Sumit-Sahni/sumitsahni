"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px]  z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-600 hover:to-gray-600 transition-all duration-75 rounded-full"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}
