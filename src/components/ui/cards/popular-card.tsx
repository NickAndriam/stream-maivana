import { InfoWithIcon, Title } from "../typography";
import Image from "next/image";
import PgText from "../typography/pg-text";
import { Film } from "lucide-react";
import Placeholder from "../placeholder/placeholder";

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
          className="animate-in fade-in duration-1000"
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

export const PopularCardPlaceholder = () => {
  return (
    <div className="flex items-center justify-center gap-6 h-full animate-pulse">
      {/* Placeholder for the index number */}
      <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>

      {/* Placeholder for the image */}
      <div className="relative w-45 h-50 rounded-xl overflow-hidden bg-gray-300">
        <Placeholder className="w-full h-full" />
      </div>

      {/* Placeholder for the text content */}
      <div className="flex flex-col items-start justify-between h-45 gap-2">
        {/* Placeholder for PG Text */}
        <Placeholder className="w-16 h-4" />

        {/* Placeholder for the title */}
        <Placeholder className="w-40 h-6" />

        {/* Placeholder for the genre and year */}
        <div className="flex flex-col gap-1">
          <Placeholder className="w-32 h-4" />
          <Placeholder className="w-32 h-4" />
        </div>

        {/* Placeholder for the InfoWithIcon */}
        <Placeholder className="w-24 h-6" />
      </div>
    </div>
  );
};
