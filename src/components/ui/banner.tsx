import Image from "next/image";
import { Info, Title, Paragraph } from "./typography";
import { Button, ButtonOutline } from "./buttons";
import { Bookmark, PlayCircle } from "@deemlol/next-icons";
import Placeholder from "./placeholder/placeholder";

const Banner = () => {
  const loaded = true; // Simulating the loaded state
  return (
    <div className="relative h-[50vh] md:h-[50vh] lg:h-[60vh]">
      <Image
        className="fade-in animate-in duration-1000"
        src="/assets/img/posters/3.jpg"
        alt="banner image"
        fill
        style={{ objectFit: "cover" }}
      />
      <section className="absolute bottom-0 left-0 w-full h-auto backdrop-blur-xs bg-gradient-to-t from-black to-black/10 py-5 xl:px-60 lg:px-20 md:px-10 sm:px-5 xs:px-5 px-2">
        <Title
          loaded={loaded}
          className="text-white"
          placeholderStyle="w-40 h-10"
        >
          The avenger: Ultimate Game Of Rings
        </Title>
        <Info
          loaded={loaded}
          className="my-4 text-white"
          placeholderStyle="h-8 w-30"
        >
          2h40m • 2026 • Sci-FI • Action
        </Info>
        <Paragraph
          loaded={loaded}
          className="my-5 lg:w-2/3 text-white lg:block hidden"
          placeholderStyle="w-full h-20"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          iusto saepe rem vel, aliquid, quas neque suscipit autem omnis numquam
          ipsum non.
        </Paragraph>
        <div className="flex gap-4 my-4 md:w-2/3 lg:w-1/3">
          <Button loaded={loaded}>
            <PlayCircle />
            Watch Now
          </Button>
          <ButtonOutline loaded={loaded}>
            <Bookmark />
            Bookmark
          </ButtonOutline>
        </div>
      </section>
    </div>
  );
};

export const BannerPlaceholder = () => {
  return (
    <div className="relative h-[60vh] md:h-[50vh] lg:h-[60vh] bg-background w-[100vw] animate-pulse">
      <div className="absolute bottom-0 left-0 w-full h-auto py-5 xl:px-60 lg:px-20 md:px-10 sm:px-5 xs:px-5 px-2 flex flex-col gap-4">
        <Placeholder className="w-40 h-10 my-2" />
        <Placeholder className="h-8 w-30" />
        <Placeholder className="w-full h-20" />
        <div className="flex gap-4 my-4 md:w-2/3 lg:w-1/3">
          <Placeholder className="w-30 h-10" />
          <Placeholder className="w-30 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
