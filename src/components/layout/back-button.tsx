"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div
      onClick={() => router.back()}
      className="bg-card rounded-full border fixed top-0 left-0 z-50 m-4 p-2 cursor-pointer"
    >
      <ChevronLeft />
    </div>
  );
}
