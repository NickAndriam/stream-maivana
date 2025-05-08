import React from "react";
import TextPlaceholder from "../placeholder/placeholder";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  heading?: string;
  loaded?: boolean;
  placeholderStyle?: string;
}

const Title = ({ heading = "h1", ...props }: TitleProps) => {
  // Placeholder for loading state
  if (!props.loaded) {
    return <TextPlaceholder className={`${props.placeholderStyle}`} />;
  }

  const headingStyles: Record<string, string> = {
    h1: "text-3xl md:text-4xl lg:text-5xl",
    h2: "text-2xl md:text-3xl lg:text-4xl",
    h3: "text-xl md:text-2xl lg:text-3xl",
    h4: "text-lg md:text-xl lg:text-2xl",
    default: "text-base md:text-lg lg:text-xl",
  };

  const headingStyle = headingStyles[heading] || headingStyles.default;

  return (
    <h2
      className={`${headingStyle} font-bold ${props.className} animate-in fade-in duration-1000`}
    >
      {props.children}
    </h2>
  );
};

export default Title;
