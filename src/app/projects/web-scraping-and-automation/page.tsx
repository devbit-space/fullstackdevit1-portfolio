import { ShootingStars } from "@/Aceternity/shooting-stars";
import { StarsBackground } from "@/Aceternity/stars-background";
import { LetsBuild } from "../components/letsbuild";
import { Items } from "../components/Items";
import { scraping } from "@/data/project";

const Scraping = () => {
  return (
    <div>
      <section className="relative h-[80vh] bg-black">
        <div
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="bg-clip-text text-base text-center bg-gradient-to-b from-white to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Scraping & Automation: Unlocking Efficiency
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-neutral-400 text-center">
            Harnessing the power of automation and data scraping to streamline
            workflows and extract valuable insights.
          </p>
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className="relative bg-black py-20">
        <div className="max-w-[90vw] mx-auto relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {scraping.map((project) => (
            <Items key={project.title} {...project} />
          ))}
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section>
        <LetsBuild />
      </section>
    </div>
  );
};

export default Scraping;
