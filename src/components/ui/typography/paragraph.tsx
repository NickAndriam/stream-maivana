import React from "react";
import TextPlaceholder from "../placeholder/placeholder";

const Paragraph = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  if (!props.children) {
    return <TextPlaceholder className={`w-full h-30 ${props.className}`} />;
  }
  return (
    <p className={`${props.className} text-base md:text-xl lg:text-xl`}>
      {props.children}
    </p>
  );
};

export default Paragraph;
