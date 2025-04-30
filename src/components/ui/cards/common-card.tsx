import Image from "next/image";
import React from "react";
import { InfoWithIcon, Title } from "../typography";

interface JustReleaseCardProps {
  title?: string;
  image?: string;
  rating?: number;
  genres?: string[];
  height?: string;
}

const CommonCard = ({
  title,
  image,
  rating,
  genres,
  height,
}: JustReleaseCardProps) => {
  return (
    <div className="relative mx-2 rounded-lg overflow-hidden">
      <div
        className={`relative bg-card rounded-xl ${
          height || "h-90"
        } overflow-hidden flex`}
      >
        <Image
          src={image || "/assets/img/posters/12.jpg"}
          alt={title || "Just Release"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-auto bg-background/5 bg-gradient-to-t from-background/60 to-background/40 backdrop-blur-sm p-4
      flex flex-col items-start gap-2"
      >
        <Title loaded heading="h4" placeholderStyle="w-40 h-10">
          {title || "Stranger Sphinx"}
        </Title>
        <InfoWithIcon
          loaded
          placeholderStyle="h-6"
          genres={genres}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default CommonCard;
