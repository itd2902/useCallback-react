import React, { useRef } from "react";
export const Rerender = () => {
  const renderRef = useRef(0);
  console.log("renderRef", renderRef.current++);
};
