import React from "react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import BrandCard, { BrandCardPlaceholder } from "../ui/cards/brand-card";

export default function BrandSlides() {
  return (
    <LargeSlider
      mode="free"
      hideIndicators
      perViewScreen={{ "2xl": 8, xl: 6, lg: 4, md: 3, sm: 2.5, xs: 2.5 }}
      placeholderComponent={<BrandCardPlaceholder />}
      placeholderSlideCount={4}
    >
      {Array.from({ length: 20 }, (_, index) => (
        <BrandCard loaded key={index} />
      ))}
    </LargeSlider>
  );
}
