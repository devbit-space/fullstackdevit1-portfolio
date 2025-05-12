"use client";

import { useEffect, useState } from "react";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { MagicButton } from "@/Aceternity/magic-button";
import { Boxes } from "@/Aceternity/background-boxes";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
const Introduction: React.FC = () => {
  const [isIpFetched, setIsIpFetched] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const router = useRouter();
  useEffect(() => {
    // const fetchClientIp = async (): Promise<void> => {
    //   if (!isIpFetched) {
    //     try {
    //       await fetch("/api/getClientIp", { method: "POST" });
    //       setIsIpFetched(true);
    //     } catch (error) {
    //       console.error("Error fetching client IP:", error);
    //     }
    //   }
    // };

    // fetchClientIp();

    // return () => {
    //   setIsIpFetched(false);
    // };
  }, []);

  return (
    <main className="relative w-full h-full bg-black ">
      <Hero />
      <section className="h-[80vh] py-20 relative w-screen overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Raul Andres is Awesome
        </h1>
        <div className="text-center mt-2 text-neutral-300 relative z-20">
          <About />
          <MagicButton title="Show My Works" handleClick={() => {
            router.push("/projects");
          }} />
        </div>
      </section>
    </main>
  );
};

export default Introduction;
