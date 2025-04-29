import React from "react";
import Info from "./info";
import { Star, StarIcon } from "lucide-react";

export default function InfoWithIcon() {
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
