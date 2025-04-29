import Image from "next/image";
import React from "react";
import { InfoWithIcon, InfoWithTime } from "../typography";

const RecentlyWatchedCard = () => {
  return (
    <div className="bg-card rounded-xl mx-2 h-50 overflow-hidden flex border-4 border-primary">
      <div className="relative w-1/2 h-full overflow-hidden">
        <Image
          src="/assets/img/posters/1.jpg"
          alt="banner image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-2 w-2/3 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Back in Action</h2>
          <p className="text-xs opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            numquam facere...
          </p>
        </div>
        <div className="flex flex-col gap-1 ">
          <InfoWithTime time="50mn34s" />
          <InfoWithIcon />
        </div>
      </div>
    </div>
  );
};

const CardPlaceholder = () => {
  return <div></div>;
};

export default RecentlyWatchedCard;
