"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/Aceternity/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";

export function ClientFeedback() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
