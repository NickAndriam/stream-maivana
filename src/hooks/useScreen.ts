import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
export default function useScreen() {
  const size = useWindowSize();

  // Create a default screen size like lg, md, sm, xs
  const screenSize: string = React.useMemo(() => {
    const screenWidth = size.width || 0;
    if (screenWidth >= 1536) {
      return "2xl"; // Extra large screens
    } else if (screenWidth >= 1280 && screenWidth < 1536) {
      return "xl"; // Large screens
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      return "lg"; // Medium screens
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      return "md"; // Small screens
    } else if (screenWidth >= 640 && screenWidth < 768) {
      return "sm"; // Extra small screens
    } else {
      return "xs"; // Very small screens
    }
  }, [size]);
  return screenSize;
}
