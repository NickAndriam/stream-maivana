import React from "react";
import { StarIcon } from "lucide-react";
interface InfoWithIconProps {
  placeholderStyle?: string;
  rating?: number;
  genres?: string[];
}

export default function InfoWithIcon({ rating, genres }: InfoWithIconProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-start items-center gap-1">
        <StarIcon className="text-yellow-500" size={14} />
        <p className="font-extrabold text-sm">{rating || "4.7"}</p>
      </div>
      <p className="text-xs opacity-60">
        {" "}
        | {genres?.flat().join(" • ") || "Action • Movie"}
      </p>
    </div>
  );
}
