"use client";

import React from "react";
import { Vortex } from "@/Aceternity/vortex";
import { MagicButton } from "@/Aceternity/magic-button";
import { useRouter } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";
export const CallToAction = () => {
  const router = useRouter();
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Ready to Leverage My Expertise?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Lets collaborate and create something extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <MagicButton
            title="Contact Me"
            icon={<FaEnvelope />}
            handleClick={() => {
              router.push("/contact");
            }}
          />
        </div>
      </Vortex>
    </div>
  );
};
