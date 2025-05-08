import React from "react";
import { InfoWithIcon, InfoWithTime, Paragraph, Title } from "../ui/typography";
import { Download, Heart } from "lucide-react";
import { LargeSlider } from "../ui/slider/LargeSlider";
import Image from "next/image";
import ReviewSlides from "../slides/review-slides";

export default function MovieDetail() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Title heading="h2" className="mb-2">
          Back In Action
        </Title>
        <div className="flex gap-4">
          <Download className="opacity-50 hover:opacity-100 cursor-pointer" />
          <Heart className="opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <InfoWithIcon />
          <InfoWithTime text="Duration:" time="2h 30m" />
        </div>
      </div>
      <Paragraph className="w-full lg:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum
        perspiciatis autem possimus nulla? Praesentium neque atque consectetur,
        laboriosam et blanditiis. Excepturi quibusdam corporis necessitatibus
        exercitationem nemo commodi qui obcaecati?
      </Paragraph>
      <div className="flex flex-col gap-10">
        <Cast />
        <ReviewSlides />
      </div>
    </div>
  );
}

const Cast = () => {
  const CastCard = () => {
    return (
      <div className="flex items-center gap-2">
        <div className="relative w-18 h-18 rounded-full overflow-hidden">
          <Image
            alt="cast image"
            src="/assets/img/cast/1.jpeg"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-lg text-bold opacity-80 w-max">John Doe</p>
          <p className="text-xs opacity-60">Ben</p>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <Title heading="h3" className=" opacity-80">
        Cast
      </Title>
      <LargeSlider
        hideIndicators
        mode="free"
        cardSpacing={30}
        perViewScreen={{ lg: 4, md: 3, sm: 2, xs: 2 }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <CastCard key={i} />
        ))}
      </LargeSlider>
    </div>
  );
};
