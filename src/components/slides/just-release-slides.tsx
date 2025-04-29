import React from "react";
import { Title } from "../ui/typography";
import { LargeSlider } from "../ui/slider/LargeSlider";
import JustReleaseCard from "../ui/cards/just-release-card";

const JustReleaseSlides = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title
        loaded
        heading="h3"
        placeholderStyle="w-40 h-10 ml-2"
        className="ml-2"
      >
        Just Released
      </Title>
      <LargeSlider
        perViewScreen={{
          "2xl": 4.1,
          xl: 3,
          lg: 2.5,
          md: 2,
          sm: 1.5,
          xs: 1.5,
        }}
        hideIndicators={true}
        withArrow
      >
        {Array.from({ length: 20 }, (_, index) => (
          <JustReleaseCard key={index} />
        ))}
      </LargeSlider>
    </div>
  );
};

export default JustReleaseSlides;
