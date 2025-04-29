import React from "react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import BrandCard from "../ui/cards/brand-card";
import useScreen from "@/hooks/useScreen";

export default function BrandSlides() {
  const screen = useScreen();
  return (
    <LargeSlider
      mode="free"
      hideIndicators
      perViewScreen={{ "2xl": 8, xl: 6, lg: 4, md: 3, sm: 2.5, xs: 2.5 }}
    >
      {Array.from({ length: 20 }, (_, index) => (
        <BrandCard key={index} />
      ))}
    </LargeSlider>
  );
}
