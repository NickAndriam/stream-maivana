import React from "react";
import { InfoWithIcon, Title } from "../typography";
import Image from "next/image";
import PgText from "../typography/pg-text";
import { Film } from "lucide-react";

interface PopularCardProps {
  className?: string;
  index?: number;
  hideNumber?: boolean | false;
}

export default function PopularCard(props: PopularCardProps) {
  console.log(props.index);
  return (
    <div className="flex items-center justify-center gap-6 h-full">
      {!props.hideNumber ? (
        <h2 className="text-6xl font-bold">{props.index}</h2>
      ) : null}
      <div className="relative w-45 h-50 rounded-xl overflow-hidden">
        <Image
          src="/assets/img/posters/15.png"
          alt="banner image"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-start justify-between h-45">
        <PgText />
        <Title loaded heading="h4">
          The Last of Us
        </Title>
        <div>
          <span className="opacity-60 text-sm flex items-center gap-1">
            <Film size={12} /> Horror • Thriller
          </span>
          <span className="opacity-60 text-sm flex items-center gap-1">
            <Film size={12} /> Year: 2023
          </span>
        </div>
        <InfoWithIcon loaded placeholderStyle="h-6" />
      </div>
    </div>
  );
}
