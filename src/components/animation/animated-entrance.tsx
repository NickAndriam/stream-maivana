import { ElementRefContext } from "@/contexts/ElementRefContext";
import React from "react";
export default function AnimatedEntrance() {
  const context = React.useContext(ElementRefContext);
  if (context === undefined) {
    throw new Error(
      "AnimatedEntrance must be used within a ElementRefProvider"
    );
  }
  return <div className="w-20 h-20 bg-red-50">test</div>;
}
