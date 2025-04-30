import React from "react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import PopularCard from "../ui/cards/popular-card";
import { Title } from "../ui/typography";

export default function PopularSlides() {
  return (
    <div>
      <Title loaded heading="h3" className="mb-5 ml-2">
        Popular Of The Week
      </Title>
      <LargeSlider
        hideIndicators
        perViewScreen={{ xs: 1, sm: 1, md: 1.5, lg: 2.5, xl: 2.5, "2xl": 2.5 }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <PopularCard key={index} index={index + 1} />
        ))}
      </LargeSlider>
    </div>
  );
}
