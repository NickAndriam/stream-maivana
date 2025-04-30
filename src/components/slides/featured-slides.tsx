import React from "react";
import { Paragraph, Title } from "../ui/typography";
import { LargeSlider } from "../ui/slider/LargeSlider";
import CommonCard from "../ui/cards/common-card";
import Image from "next/image";

export default function FeaturedSlides() {
  return (
    <div className="relative flex flex-col gap-5 my-10">
      <div className="ml-3 z-10 flex flex-col gap-2">
        <Title loaded heading="h3" placeholderStyle="w-40 h-10 ml-2">
          Featured in Film Maivana
        </Title>
        <Paragraph loaded>Best featured for you today</Paragraph>
      </div>

      <Image
        src="/assets/img/posters/4.jpg"
        alt="featured"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-lg blur-2xl"
      />
      <LargeSlider
        perViewScreen={{
          "2xl": 3.5,
          xl: 3,
          lg: 2.5,
          md: 2,
          sm: 1.5,
          xs: 1.3,
        }}
        withArrow
      >
        {Array.from({ length: 10 }, (_, index) => (
          <CommonCard
            key={index}
            title="The Wolf of Wall Street"
            image="/assets/img/posters/4.jpg"
            height="h-[500px]"
          />
        ))}
      </LargeSlider>
    </div>
  );
}
