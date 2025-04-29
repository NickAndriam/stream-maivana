import React from "react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import RecentlyWatchedCard from "../ui/cards/recently-watched-card";
import useScreen from "@/hooks/useScreen";
import { Title } from "../ui/typography";

export default function RecentlyWatchedSlides() {
  return (
    <div className="flex flex-col gap-5">
      <Title heading="h2" className="px-2">
        Recently Watched
      </Title>
      <LargeSlider
        perViewScreen={{
          "2xl": 3.1,
          xl: 3,
          lg: 2.5,
          md: 2,
          sm: 1.5,
          xs: 1.1,
        }}
        hideIndicators={true}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <RecentlyWatchedCard key={index} />
        ))}
      </LargeSlider>
    </div>
  );
}
