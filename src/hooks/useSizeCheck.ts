import React, { useState, useEffect } from "react";

export const useCheckSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile: boolean = width <= 768;
  return isMobile;
};
