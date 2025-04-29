import Image from "next/image";
import { Info, Title, Paragraph } from "./typography";
import { Button, ButtonOutline } from "./buttons";
import { Bookmark, PlayCircle } from "@deemlol/next-icons";

const Banner = () => {
  const loaded = true; // Simulating the loaded state
  return (
    <div className="relative h-[60vh] md:h-[50vh] lg:h-[60vh] min-w-[300px]">
      <Image
        src="/assets/img/posters/3.jpg"
        alt="banner image"
        fill
        style={{ objectFit: "cover" }}
      />
      <section className="absolute bottom-0 left-0 w-full h-auto backdrop-blur-xs bg-gradient-to-t from-black to-black/10 p-5 xl:px-40 lg:px-20 md:px-20 sm:px-5 xs:px-5">
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
          className="my-5 lg:w-2/3 text-white"
          placeholderStyle="w-full h-20"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          iusto saepe rem vel, aliquid, quas neque suscipit autem omnis numquam
          ipsum non.
        </Paragraph>
        <div className="flex gap-4 mt-4 md:w-2/3 lg:w-1/3">
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

export default Banner;
