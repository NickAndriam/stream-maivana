import React from "react";

export default function SafeView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-full flex flex-col gap-12 xl:px-40 lg:px-20 md:px-10 sm:px-5 xs:px-5 px-2  ${className}`}
    >
      {children}
    </div>
  );
}
