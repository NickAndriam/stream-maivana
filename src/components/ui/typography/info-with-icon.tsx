import React from "react";
import { StarIcon } from "lucide-react";
import Placeholder from "../placeholder/placeholder";

interface InfoWithIconProps {
  loaded?: boolean;
  placeholderStyle?: string;
}

export default function InfoWithIcon(props: InfoWithIconProps) {
  // Placeholder for loading state
  if (!props.loaded) {
    return <Placeholder className={`${props.placeholderStyle}`} />;
  }
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-start items-center gap-1">
        <StarIcon className="text-yellow-500" size={14} />
        <p className="font-extrabold text-sm">4.7</p>
      </div>
      <p className="text-xs opacity-60"> | Action • Movie</p>
    </div>
  );
}
