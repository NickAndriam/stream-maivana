import React from "react";
import { Timer } from "lucide-react";
import Placeholder from "../placeholder/placeholder";

interface InfoWithTimeProps {
  time?: string;
  loaded?: boolean;
  placeholderStyle?: string;
}

export default function InfoWithTime(props: InfoWithTimeProps) {
  if (!props.loaded) {
    return <Placeholder className={`${props.placeholderStyle}`} />;
  }
  return (
    <div className="flex gap-1">
      <Timer className="opacity-60" size={15} />
      <p className="text-xs lg:text-xs opacity-80">
        <b>Watched:</b> {props.time}
      </p>
    </div>
  );
}
