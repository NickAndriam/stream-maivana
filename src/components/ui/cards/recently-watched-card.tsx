import Image from "next/image";
import React from "react";
import { InfoWithIcon, InfoWithTime, Paragraph, Title } from "../typography";
import Placeholder from "../placeholder/placeholder";

const RecentlyWatchedCard = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="bg-card rounded-xl mx-2 h-50 overflow-hidden flex border-4 border-primary cursor-pointer hover:opacity-60"
      {...props}
    >
      <div className="relative w-1/2 h-full overflow-hidden ">
        <Image
          src="/assets/img/posters/1.jpg"
          alt="banner image"
          fill
          style={{ objectFit: "cover" }}
          className="animate-in fade-in duration-1000"
        />
      </div>
      <div className="p-2 w-2/3 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <Title loaded heading="h5" placeholderStyle="w-20 h-8">
            Back in Action
          </Title>
          <Paragraph
            loaded
            className="opacity-60"
            size="xs"
            placeholderStyle="w-40 h-15"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            numquam facere...
          </Paragraph>
        </div>
        <div className="flex flex-col gap-1 ">
          <InfoWithTime time="50mn 34s" placeholderStyle="h-6 w-30" />
          <InfoWithIcon placeholderStyle="h-6" />
        </div>
      </div>
    </div>
  );
};

export const RecentlyWatchedCardPlaceholder = () => {
  return (
    <div className="bg-card rounded-xl mx-2 h-50 overflow-hidden flex border-4 border-background/40 animate-pulse">
      <div className="relative w-1/2 h-full overflow-hidden bg-gray-500" />
      <div className="p-2 w-2/3 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <Placeholder className="w-20 h-8" />
          <Placeholder className="w-40 h-15" />
        </div>
        <div className="flex flex-col gap-1 ">
          <Placeholder className="h-6 w-30" />
          <Placeholder className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default RecentlyWatchedCard;
