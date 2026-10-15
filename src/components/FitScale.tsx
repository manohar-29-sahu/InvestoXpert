"use client";

import { useEffect } from "react";

const DESIGN_WIDTH = 1440;
const FLUID_MAX = 1199;

/** Zooms the 1440px design canvas to the viewport width at 1200px and wider. Below that, phones and tablets get the fluid layout from src/styles/mobile. */
export function FitScale() {
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const width = window.innerWidth;
      const scale = width > FLUID_MAX ? width / DESIGN_WIDTH : 1;
      root.style.setProperty("zoom", scale === 1 ? "" : String(scale));
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
  return null;
}
