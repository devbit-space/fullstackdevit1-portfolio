import { ServicesOverview } from "./components/overview";
import { ReasonCard } from "./components/reason_card";
import { ShootingStars } from "@/Aceternity/shooting-stars";
import { StarsBackground } from "@/Aceternity/stars-background";
import { BackgroundLines } from "@/Aceternity/background-lines";
import { Feedback } from "./components/feedback";
import { Reasons } from "@/data/Reason";
import Link from "next/link";
const Services = () => {
  return (
    <>
      <section className="relative h-[80vh]">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-base text-center bg-gradient-to-b from-white to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Expert Engineering Services to Bring Your Ideas to Life
          </h2>
          <p className="max-w-xl mx-auto text-md md:text-xl text-neutral-400 text-center relative z-20">
            Specializing in blockchain, full-stack development, mobile
            applications, and AI solutions.
          </p>
          <div className="text-white mt-16 py-2 rounded-md relative z-20 text-md md:text-xl">
            Scroll down to see my services
          </div>
        </BackgroundLines>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className=" bg-black py-40 relative">
        <h1 className="relative z-10 text-md md:text-6xl  bg-clip-text text-base bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans mb-10">
          My Services
        </h1>
        <ServicesOverview />
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className=" bg-black pt-10 pb-20 relative">
        <h1 className="relative z-10 text-md md:text-6xl  bg-clip-text text-base bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans mb-10">
          Why Choose Me?
        </h1>
        <div className="flex items-center justify-center">
          {Reasons.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
      {/* <section className="bg-black py-40 relative">
        <h1 className="relative z-10 text-md md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans mb-10">
          What my clients say
        </h1>
        <div className="relative z-10">
          <Feedback />
        </div>
        <ShootingStars />
        <StarsBackground />
      </section> */}
    </>
  );
};

export default Services;
