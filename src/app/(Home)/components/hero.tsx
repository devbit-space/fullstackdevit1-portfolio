"use client";
import React from "react";
import { HeroParallax } from "@/Aceternity/hero-parallax";
import { products } from "@/data/products";

export const Hero = () => {
  return <HeroParallax products={products} />;
};