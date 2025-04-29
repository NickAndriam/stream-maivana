"use client";
import useScreen from "@/hooks/useScreen";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useMemo, useState } from "react";

interface LargeSliderProps {
  children: React.ReactNode[];
  perView?: number;
  perViewScreen?: {
    [key: string]: number;
  };
  mode?: "snap" | "free" | "free-snap";
  hideIndicators?: boolean;
}

export const LargeSlider: React.FC<LargeSliderProps> = ({
  children,
  hideIndicators = false,
  perViewScreen,
  mode = "snap",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calling the useScreen hook to get the current screen size
  const screen = useScreen();

  // Settings the perView based on the screen size
  const perView = useMemo(() => {
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
  }, [screen]);

  // Initializing the Keen Slider with the specified options
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView },
    mode,
    rubberband: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative w-full h-auto">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {children.map((child, index) => (
          <div className="keen-slider__slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      {!hideIndicators ? (
        <div className="relative my-5">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {children.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}

      {/* Dot Indicators */}
    </div>
  );
};
