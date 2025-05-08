"use client";
import React, { createContext } from "react";

export interface ElementRefContextType {
  ref: HTMLDivElement | null;
  setRef: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

export const ElementRefContext = createContext<ElementRefContextType | object>(
  {}
);

const RefProvider = ({ children }: { children: React.ReactNode }) => {
  const [ref, setRef] = React.useState<string>("");

  const value = {
    ref,
    setRef,
  };

  return (
    <ElementRefContext.Provider value={value}>
      {children}
    </ElementRefContext.Provider>
  );
};

export default RefProvider;
