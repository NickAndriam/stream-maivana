"use client";
import useScreen from "@/hooks/useScreen";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useMemo, useState } from "react";

interface LargeSliderProps {
  children: React.ReactNode[];
  perView?: number;
  perViewScreen?: {
    [key: string]: number;
  };
  mode?: "snap" | "free" | "free-snap";
  hideIndicators?: boolean;
  withArrow?: boolean;
}

export const LargeSlider: React.FC<LargeSliderProps> = ({
  children,
  hideIndicators = false,
  perViewScreen,
  mode = "snap",
  withArrow = false,
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
  }, [screen, perViewScreen]);

  // Initializing the Keen Slider with the specified options
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView },
    mode,
    rubberband: true,
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
      {/* Dot Indicators */}
      {!hideIndicators ? (
        <div className="relative my-5">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {children.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? "bg-foreground" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
      {/* Right Arrow */}
      {withArrow ? (
        <ChevronRight
          size={40}
          onClick={() => instanceRef.current?.next()}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-foreground/10 hover:bg-foreground/20 text-foreground/70 p-2 h-auto backdrop-blur-sm rounded-full"
        />
      ) : null}

      {/* Left Arrow */}
      {withArrow ? (
        <ChevronLeft
          size={40}
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-foreground/10 hover:bg-foreground/20 text-foreground/70 p-2 h-auto  backdrop-blur-sm rounded-full"
        />
      ) : null}
    </div>
  );
};
