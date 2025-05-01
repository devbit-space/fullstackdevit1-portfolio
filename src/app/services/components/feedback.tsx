import { AnimatedTestimonials } from "@/Aceternity/animated-testimonials";
import { testimonials } from "@/data/testimonials";

export function Feedback() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
