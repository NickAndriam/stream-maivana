import React from "react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import Banner, { BannerPlaceholder } from "../ui/banner";

export default function Bannerslides() {
  return (
    <LargeSlider
      hideIndicators={false}
      perViewScreen={{ "2xl": 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
      placeholderComponent={<BannerPlaceholder />}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Banner key={index} />
      ))}
    </LargeSlider>
  );
}
