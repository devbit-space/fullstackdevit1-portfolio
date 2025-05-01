import { ShootingStars } from "@/Aceternity/shooting-stars";
import { StarsBackground } from "@/Aceternity/stars-background";
import { Hero } from "./components/hero";

const Contact = () => {
  return (
    <>
      <section className="bg-black relative">
        <Hero />
        <ShootingStars />
        <StarsBackground />
      </section>
    </>
  );
};

export default Contact;
