import React from "react";
import { Title } from "../ui/typography";
import { LargeSlider } from "../ui/slider/LargeSlider";
import CommonCard, { CommonCardPlaceholder } from "../ui/cards/common-card";

const SeriesSlides = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title
        loaded
        heading="h3"
        placeholderStyle="w-40 h-10 ml-2"
        className="ml-2"
      >
        Series
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
        placeholderComponent={<CommonCardPlaceholder />}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <CommonCard
            key={index}
            height="h-70"
            image="/assets/img/posters/16.jpg"
            title="Sonic 3"
          />
        ))}
      </LargeSlider>
    </div>
  );
};

export default SeriesSlides;
