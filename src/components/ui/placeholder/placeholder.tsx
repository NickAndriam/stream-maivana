import React from "react";

interface PlaceholderProps {
  className?: string;
}

const Placeholder = ({ className }: PlaceholderProps) => {
  return (
    <div
      className={`w-1/2 bg-gray-500 animate-pulse rounded-xl ${className}`}
    />
  );
};

export default Placeholder;
