import React from "react";
import { Timer } from "lucide-react";

interface InfoWithTimeProps {
  time?: string;
  placeholderStyle?: string;
  text?: string;
}

export default function InfoWithTime(props: InfoWithTimeProps) {
  return (
    <div className="flex gap-1">
      <Timer className="opacity-60" size={15} />
      <p className="text-xs lg:text-xs opacity-80">
        <b>{props.text || "Watched:"}</b> {props.time}
      </p>
    </div>
  );
}
