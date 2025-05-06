"use client";
import Bannerslides from "@/components/slides/banner-slides";
import BrandSlides from "@/components/slides/brand-slides";
import FeaturedSlides from "@/components/slides/featured-slides";
import JustReleaseSlides from "@/components/slides/just-release-slides";
import MoviesSlides from "@/components/slides/movie-slides";
import PopularSlides from "@/components/slides/popular-slides";
import RecentlyWatchedSlides from "@/components/slides/recently-watched-slides";
import SeriesSlides from "@/components/slides/series-slides";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="flex flex-col gap-10">
      <div
        onClick={toggleTheme}
        className="bg-primary rounded-full absolute top-0 right-5 z-50 m-4 p-2"
      >
        {theme === "dark" ? (
          <Sun className="text-white" />
        ) : (
          <Moon className="text-white" />
        )}
      </div>
      <Bannerslides />
      <section className="flex flex-col gap-12 xl:px-40 lg:px-10 md:px-10 sm:px-10 xs:px-5">
        <BrandSlides />
        <RecentlyWatchedSlides />
        <JustReleaseSlides />
        <FeaturedSlides />
        <PopularSlides />
        <MoviesSlides />
        <SeriesSlides />
      </section>
    </main>
  );
}
