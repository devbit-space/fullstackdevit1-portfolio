import { ShootingStars } from "@/Aceternity/shooting-stars";
import { StarsBackground } from "@/Aceternity/stars-background";
import { LetsBuild } from "../components/letsbuild";
import { Items } from "../components/Items";
import { bot } from "@/data/project";
const BotDevelopment = () => {
  return (
    <>
      <section className="bg-black py-60 relative">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Building Intelligent and Interactive Bots
        </h2>
        <div className="max-w-xl mx-auto text-md md:text-xl text-neutral-400 text-center px-4">
          Explore my bot projects that deliver seamless automation, engagement, and efficiency.
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className="relative bg-black py-20">
        <div className="max-w-[90vw] mx-auto relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {bot.map((project) => (
            <Items key={project.title} {...project} />
          ))}
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section>
        <LetsBuild />
      </section>
    </>
  );
};

export default BotDevelopment;
