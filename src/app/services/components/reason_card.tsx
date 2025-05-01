"use client";
import React from "react";
import { PinContainer } from "@/Aceternity/3d-pin";
import { FaCheckCircle } from "react-icons/fa";

interface Reason {
  title: string;
  description: string[];
}

export function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <div className="h-[40rem] flex items-center justify-center ">
      <PinContainer
        title={reason.title}
        href="#"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] ">
          <h3 className="max-w-xs !py-5 !m-0 font-bold !text-md text-slate-100 text-center">
            {reason.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            {reason.description.map((desc, index) => (
              <div key={index} className="text-slate-500 block">
                <span className="text-white mr-2 ">
                  ✔
                </span>
                {desc}
              </div>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
