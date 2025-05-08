import React from "react";
import ReviewCard from "../ui/cards/review-card";
import { Title } from "../ui/typography";
import { LargeSlider } from "../ui/slider/LargeSlider";

export default function CommentSlides() {
  return (
    <>
      <Title heading="h3" className="opacity-80">
        Reviews
      </Title>
      <div className="xl:-mx-40 lg:-mx-20 md:-mx-10 sm:-mx-5 xs:-mx-5 -mx-2 xl:px-40 lg:px-20 md:px-10 sm:px-5 xs:px-5 px-2 bg-background py-5">
        <LargeSlider
          hideIndicators
          perViewScreen={{
            xl: 2.5,
            lg: 2.5,
            md: 2,
            sm: 2,
            xs: 1,
          }}
          cardSpacing={20}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex items-center justify-center">
              <ReviewCard />
            </div>
          ))}
        </LargeSlider>
      </div>
    </>
  );
}
