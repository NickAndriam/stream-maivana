import Image from "next/image";
import React from "react";
import Placeholder from "../placeholder/placeholder";

interface BrandCardProps {
  loaded?: boolean;
}

const BrandCard = (props: BrandCardProps) => {
  if (!props.loaded) {
    return <Placeholder className="h-18 w-40" />;
  }
  return (
    <div className="h-18 bg-foreground/40 rounded-xl flex items-center justify-center mx-2 bg-gradient-to-t from-background/100 to-background/70 border-[0.5px] border-black/5">
      <div className="relative w-24 h-10">
        <Image
          src="/assets/logo/netflix.png"
          alt="brand image"
          layout="fill"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export const BrandCardPlaceholder = () => {
  return (
    <Placeholder className="h-18 rounded-xl flex items-center justify-center mx-2 bg-gray-500 border-[0.5px] border-black/5 animate-pulse" />
  );
};

export default BrandCard;
