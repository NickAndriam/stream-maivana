import SafeView from "@/components/layout/safe-view";
import MovieDetail from "@/components/player/movie-detail";
import VideoPlayer from "@/components/player/video-player";
import MoviesSlides from "@/components/slides/movie-slides";
import SeriesSlides from "@/components/slides/series-slides";
import React from "react";

interface PlayerPageProps {
  params: { id: string };
}

export default async function Page({ params }: PlayerPageProps) {
  const { id } = params;
  console.log(id); // Use `id` instead of `slug` to match the dynamic route
  return (
    <main>
      <VideoPlayer />
      <SafeView className="bg-card z-100 rounded-md gap-4 py-4 lg:py-10">
        <MovieDetail />
        <MoviesSlides />
        <SeriesSlides />
      </SafeView>
    </main>
  );
}

// Ensure `generateStaticParams` is correctly exported
//@typescript-eslint/no-explicit-any
export async function generateStaticParams() {
  const posts = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return posts.map((post: any) => ({
    id: post.id, // Use `id` to match the dynamic route parameter
  }));
}
