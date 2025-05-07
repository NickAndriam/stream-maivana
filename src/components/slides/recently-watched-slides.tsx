import React from "react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import RecentlyWatchedCard, {
  RecentlyWatchedCardPlaceholder,
} from "../ui/cards/recently-watched-card";
import { Title } from "../ui/typography";

export default function RecentlyWatchedSlides() {
  return (
    <div className="flex flex-col gap-5">
      <Title
        loaded
        heading="h3"
        placeholderStyle="w-40 h-10 ml-2"
        className="ml-2"
      >
        Recently Watched
      </Title>
      <LargeSlider
        perViewScreen={{
          "2xl": 4.1,
          xl: 3,
          lg: 2.5,
          md: 2,
          sm: 1.5,
          xs: 1.1,
        }}
        hideIndicators={true}
        withArrow
        placeholderComponent={<RecentlyWatchedCardPlaceholder />}
        placeholderSlideCount={3}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <RecentlyWatchedCard key={index} />
        ))}
      </LargeSlider>
    </div>
  );
}
