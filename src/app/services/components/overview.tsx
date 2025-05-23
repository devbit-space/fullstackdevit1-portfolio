import { HoverEffect } from "@/Aceternity/card-hover-effect";

export function ServicesOverview() {
  return (
    <div className="flex justify-center max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web and software solutions for seamless user experiences.",
    link: "https://netflix.com",
    image: "/assets/images/services/full-stack.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom iOS and Android apps built for performance and usability.",
    link: "https://google.com",
    image: "/assets/images/services/mobile.png",
  },
  {
    title: "AI Solutions",
    description:
      "Machine learning models, AI-powered applications, and data-driven insights.",
    link: "https://meta.com",
    image: "/assets/images/services/ai.png",
  },
  {
    title: "Bot & Automation",
    description:
      "Make.com, n8n, Zapier workflow automation, and built Bot for Scrape and business.",
    link: "https://stripe.com",
    image: "/assets/images/services/blockchain.png",
  },
];
