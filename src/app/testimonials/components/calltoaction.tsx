"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/Aceternity/lamp";

export const CallToAction = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div>
          <h2 className="text-white text-4xl font-medium tracking-tight">
            Ready to Experience the Difference?
          </h2>
          <div>

          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}