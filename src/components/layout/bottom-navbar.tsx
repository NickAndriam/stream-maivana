"use client";
import useScreen from "@/hooks/useScreen";
import { Heart, Home, Search, Settings, User } from "lucide-react";
import React from "react";

export default function BottomNavbar() {
  const screen = useScreen();
  const iconSize =
    screen === "2xl"
      ? 35
      : screen === "xl"
      ? 30
      : screen === "lg"
      ? 30
      : screen === "md"
      ? 25
      : screen === "sm"
      ? 25
      : 25;
  return (
    <div
      className="fixed bottom-2 z-10 left-1/2 -translate-x-1/2 w-auto h-16 bg-background/50 backdrop-blur-sm flex items-center justify-evenly shadow-md gap-10 rounded-xl border-1 border-foreground/10
    px-5 py-2"
    >
      <Home className="text-foreground/60" size={iconSize} />
      <Search className="text-foreground/60" size={iconSize} />
      <Heart className="text-foreground/60" size={iconSize} />
      <User className="text-foreground/60" size={iconSize} />
      <Settings className="text-foreground/60" size={iconSize} />
    </div>
  );
}
