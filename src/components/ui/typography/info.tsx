"use client";
import React from "react";
import TextPlaceholder from "../placeholder/placeholder";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}
const Info = (props: TitleProps) => {
  if (!props.children) {
    return <TextPlaceholder className={`h-5 w-40 ${props.className}`} />;
  }
  return (
    <p
      className={`${props.className} text-base md:text-xl lg:text-2xl opacity-60`}
    >
      {props.children}
    </p>
  );
};

export default Info;
