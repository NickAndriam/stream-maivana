import Image from "next/image";
import React from "react";
import { InfoWithIcon, Title } from "../typography";

const JustReleaseCard = () => {
  return (
    <div className="relative mx-2 rounded-lg overflow-hidden">
      <div className="relative bg-card rounded-xl h-90 overflow-hidden flex">
        <Image
          src="/assets/img/posters/12.jpg"
          alt="banner image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-auto bg-background/5 bg-gradient-to-t from-background/60 to-background/40 backdrop-blur-sm p-4
      flex flex-col items-start gap-2"
      >
        <Title loaded heading="h4" placeholderStyle="w-40 h-10">
          Stranger Sphinx
        </Title>
        <InfoWithIcon loaded placeholderStyle="h-6" />
      </div>
    </div>
  );
};

export default JustReleaseCard;
