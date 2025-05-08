import React from "react";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="bg-card rounded-xl border p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-lg opacity-80 font-bold">This is so intersiting</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="text-yellow-500" size={15} />
          ))}
        </div>
      </div>
      <p className="opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt omnis
        assumenda officiis dignissimos, sint dolore voluptates ratione magnam
        iste quae, nobis quas est perferendis nihil labore cumque minima
        consequuntur? Dicta!
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ThumbsUp className="opacity-50 hover:opacity-100 cursor-pointer" />
          <ThumbsDown className="opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-background/90 rounded-full" />
          <p className="font-bold opacity-80">John Belion</p>
        </div>
      </div>
    </div>
  );
}
