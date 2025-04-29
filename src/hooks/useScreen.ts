import React from "react";

export default function useScreen() {
  const [screen, setScreen] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Create a default screen size like lg, md, sm, xs
  const screenSize = React.useMemo(() => {
    if (screen.width >= 1536) {
      return "2xl"; // Extra large screens
    } else if (screen.width >= 1280) {
      return "xl"; // Large screens
    } else if (screen.width >= 1024) {
      return "lg"; // Medium screens
    } else if (screen.width >= 768) {
      return "md"; // Small screens
    } else if (screen.width >= 640) {
      return "sm"; // Extra small screens
    } else {
      return "xs"; // Very small screens
    }
  }, [screen.width]);

  React.useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenSize;
}
