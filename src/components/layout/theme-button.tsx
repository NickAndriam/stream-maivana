"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function ThemeButton() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div
      onClick={toggleTheme}
      className="bg-foreground/40 rounded-full fixed top-0 right-0  z-50 m-4 p-2"
    >
      {theme === "dark" ? (
        <Sun className="text-white" />
      ) : (
        <Moon className="text-white" />
      )}
    </div>
  );
}
