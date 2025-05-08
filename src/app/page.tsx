"use client";
import AnimatedEntrance from "@/components/animation/animated-entrance";
import SafeView from "@/components/layout/safe-view";
import Bannerslides from "@/components/slides/banner-slides";
import BrandSlides from "@/components/slides/brand-slides";
import FeaturedSlides from "@/components/slides/featured-slides";
import JustReleaseSlides from "@/components/slides/just-release-slides";
import MoviesSlides from "@/components/slides/movie-slides";
import PopularSlides from "@/components/slides/popular-slides";
import RecentlyWatchedSlides from "@/components/slides/recently-watched-slides";
import SeriesSlides from "@/components/slides/series-slides";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Bannerslides />
      <SafeView>
        <BrandSlides />
        <RecentlyWatchedSlides />
        <JustReleaseSlides />
        <FeaturedSlides />
        <PopularSlides />
        <MoviesSlides />
        <SeriesSlides />
      </SafeView>
      <AnimatedEntrance />
    </main>
  );
}
