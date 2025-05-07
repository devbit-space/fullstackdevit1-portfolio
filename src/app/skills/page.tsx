import { ShootingStars } from "@/Aceternity/shooting-stars";
import { StarsBackground } from "@/Aceternity/stars-background";
import { Vortex } from "@/Aceternity/vortex";
import { CallToAction } from "./components/action";
import Skills from "./components/Skills";
const SkillsPage = () => {
  return (
    <>
      <section className="relative h-[80vh] bg-black">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="bg-clip-text text-base text-center bg-gradient-to-b from-white to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Mastering the Tools of Innovation
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-neutral-400 text-center">
            Explore my technical expertise in Full-Stack development, mobile apps, and AI solutions.
          </p>
        </Vortex>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className="relative bg-black">
        <Skills />
      </section>
      <section className="relative h-[60vh] bg-black">
        <CallToAction />
        <ShootingStars />
        <StarsBackground />
      </section>
    </>
  );
};

export default SkillsPage;
