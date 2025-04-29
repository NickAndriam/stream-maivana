"use client";
import Bannerslides from "@/components/slides/banner-slides";
import BrandSlides from "@/components/slides/brand-slides";
import JustReleaseSlides from "@/components/slides/just-release-slides";
import RecentlyWatchedSlides from "@/components/slides/recently-watched-slides";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="flex flex-col gap-10">
      <p
        onClick={toggleTheme}
        className="bg-primary rounded-lg absolute top-0 right-5 z-50 m-4 p-2"
      >
        {theme}
      </p>
      <Bannerslides />
      <section className="flex flex-col gap-10 xl:px-40 lg:px-10 md:px-10 sm:px-10 xs:px-5">
        <BrandSlides />
        <RecentlyWatchedSlides />
        <JustReleaseSlides />
      </section>
    </main>
  );
}
