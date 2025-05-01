import { ShootingStars } from "@/Aceternity/shooting-stars";
import { StarsBackground } from "@/Aceternity/stars-background";
import { LetsBuild } from "../components/letsbuild";
import { Items } from "../components/Items";
import { blockchain } from "@/data/project";
const ProjectsPage = () => {
  return (
    <>
      <section className="bg-black py-60 relative">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Innovating with Blockchain Technology
        </h2>
        <div className="max-w-xl mx-auto text-md md:text-xl text-neutral-400 text-center">
          Discover my blockchain projects that redefine trust, transparency, and
          efficiency.
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className="relative bg-black py-20">
        <div className="max-w-[80vw] mx-auto relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blockchain.map((project) => (
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

export default ProjectsPage;
