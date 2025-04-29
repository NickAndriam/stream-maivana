import React from "react";

interface PlaceholderProps {
  className?: string;
}

const Placeholder = ({ className }: PlaceholderProps) => {
  return (
    <div
      className={`w-1/2 h-10 bg-secondary animate-pulse rounded-xl ${className}`}
    />
  );
};

export default Placeholder;
