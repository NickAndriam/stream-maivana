"use client";
import React from "react";
import TextPlaceholder from "../placeholder/placeholder";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  placeholderStyle?: string;
  loaded?: boolean;
}
const Info = (props: TitleProps) => {
  if (!props.loaded) {
    return (
      <TextPlaceholder
        className={`${props.placeholderStyle} ${props.className}`}
      />
    );
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
