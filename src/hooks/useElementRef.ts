import React from "react";
import {
  ElementRefContext,
  ElementRefContextType,
} from "@/contexts/ElementRefContext";

function useElementRef() {
  const context = React.useContext(ElementRefContext);
  if (!context) {
    throw new Error("useElementRef must be used within a ElementRefProvider");
  }
  const { ref, setRef } = context as ElementRefContextType;

  return { ref, setRef };
}
export default useElementRef;
