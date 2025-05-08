"use client";
import useScreen from "@/hooks/useScreen";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useMemo, useState, useEffect } from "react";

interface LargeSliderProps {
  children: React.ReactNode[];
  perViewScreen?: {
    [key: string]: number;
  };
  mode?: "snap" | "free" | "free-snap";
  hideIndicators?: boolean;
  withArrow?: boolean;
  placeholderComponent?: React.ReactNode;
  placeholderSlideCount?: number;
}

export const LargeSlider: React.FC<LargeSliderProps> = ({
  children,
  hideIndicators = false,
  perViewScreen,
  mode = "snap",
  withArrow = false,
  placeholderComponent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  // Get the current screen size using the useScreen hook
  const screen: string = useScreen();

  // Calculate the number of slides per view based on the screen size
  const perView: number = useMemo(() => {
    switch (screen) {
      case "2xl":
        return perViewScreen?.["2xl"] || 6;
      case "xl":
        return perViewScreen?.xl || 6;
      case "lg":
        return perViewScreen?.lg || 5;
      case "md":
        return perViewScreen?.md || 4;
      case "sm":
        return perViewScreen?.sm || 2;
      default:
        return perViewScreen?.xs || 1;
    }
  }, [screen, perViewScreen]);

  // Ensure the slider is ready only after perView is calculated
  useEffect(() => {
    if (perView) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [perView]);

  // Initialize the Keen Slider with the specified options
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView },
    mode,
    rubberband: true,
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const countPerView = Math.round(perView);

  // Show a loading placeholder until the slider is ready
  if (!isReady) {
    return (
      <div className="relative w-full h-auto">
        <div className="keen-slider h-full w-full">
          {Array.from({ length: countPerView }, (_, index) => (
            <div className="keen-slider__slide animate-pulse" key={index}>
              {placeholderComponent}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-auto">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {children.map((child, index) => (
          <div className="keen-slider__slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      {/* Dot Indicators */}
      {!hideIndicators && (
        <div className="relative my-5">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {children.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? "bg-foreground/50" : "bg-foreground/10"
                }`}
              />
            ))}
          </div>
        </div>
      )}
      {/* Navigation Arrows */}
      {withArrow && (
        <>
          <ChevronLeft
            size={40}
            onClick={() => instanceRef.current?.prev()}
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-foreground/10 hover:bg-foreground/20 text-foreground/70 p-2 h-auto backdrop-blur-sm rounded-full"
          />
          <ChevronRight
            size={40}
            onClick={() => instanceRef.current?.next()}
            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-foreground/10 hover:bg-foreground/20 text-foreground/70 p-2 h-auto backdrop-blur-sm rounded-full"
          />
        </>
      )}
    </div>
  );
};
