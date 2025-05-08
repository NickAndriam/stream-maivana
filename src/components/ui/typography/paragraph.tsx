import React from "react";

const Paragraph = (props: {
  children?: React.ReactNode;
  className?: string;
  size?: string;
  placeholderStyle?: string;
  loaded?: boolean;
}) => {
  const paragraphStyles: Record<string, string> = {
    xs: "text-xs md:text-xs lg:text-xs",
    base: "text-base md:text-xl lg:text-xl",
    sm: "text-sm md:text-base lg:text-base",
    lg: "text-lg md:text-2xl lg:text-2xl",
    xl: "text-xl md:text-3xl lg:text-3xl",
    "2xl": "text-2xl md:text-4xl lg:text-4xl",
    "3xl": "text-3xl md:text-5xl lg:text-5xl",
    default: "text-base md:text-xl lg:text-xl",
  };

  const paragraphStyle = props.size
    ? paragraphStyles[props.size]
    : paragraphStyles.default;
  return (
    <p className={`${props.className} ${paragraphStyle}`}>{props.children}</p>
  );
};

export default Paragraph;
