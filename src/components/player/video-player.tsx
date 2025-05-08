import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function VideoPlayer() {
  return (
    <div className="relative w-full h-[50vh] bg-black -z-10 ">
      <Image
        src="/assets/img/posters/1.jpg"
        alt="banner image"
        layout="fill"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-2xl" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Play size={35} color="white" />
      </div>
    </div>
  );
}
