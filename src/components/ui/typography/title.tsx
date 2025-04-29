import React, { Children, useMemo } from "react";
import TextPlaceholder from "../placeholder/placeholder";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  heading?: string;
}

const Title = ({ heading = "h1", ...props }: TitleProps) => {
  // Placeholder for loading state
  if (!props.children) {
    return <TextPlaceholder />;
  }

  const headingStyle = useMemo(() => {
    if (heading === "h1") {
      return "text-3xl md:text-4xl lg:text-5xl";
    } else if (heading === "h2") {
      return "text-2xl md:text-3xl lg:text-4xl";
    } else if (heading === "h3") {
      return "text-xl md:text-2xl lg:text-3xl";
    } else if (heading === "h4") {
      return "text-lg md:text-xl lg:text-2xl";
    } else {
      return "text-base md:text-lg lg:text-xl";
    }
  }, [heading]);

  const h1 = "text-3xl md:text-4xl lg:text-5xl";
  return (
    <h2 className={`${headingStyle} font-bold  ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default Title;
