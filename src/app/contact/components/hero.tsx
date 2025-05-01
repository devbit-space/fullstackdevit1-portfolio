"use client";
import { WorldMap } from "@/Aceternity/world-map";
import { motion } from "motion/react";
import { ContactForm } from "./contact_form";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaGoogle,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";
export const Hero = () => {
  return (
    <div className=" py-40 w-full">
      <div className="max-w-7xl mx-auto text-center pb-10 relative z-20">
        <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-neutral-700 text-xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Let&rsquo;s Build Something Amazing{" "}
          <span className="!text-White">
            {"Together".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 relative z-20">
          Whether it&rsquo;s a blockchain project, a full-stack application, a
          mobile app, or an AI solution, I&rsquo;m here to help
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <Link
            href="https://github.com/BJ-dev0706"
            className="hover:text-white"
            style={{ color: "#e7e7e7" }}
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://t.me/@digitalwizard0"
            className="hover:text-white"
            style={{ color: "#0088cc" }}
          >
            <FaTelegram size={24} />
          </Link>
          <Link
            href="https://discord.gg/xuqa47fxQQ"
            className="hover:text-white"
            style={{ color: "#7289da" }}
          >
            <FaDiscord size={24} />
          </Link>
          <Link
            href="https://wa.me/85244175972"
            className="hover:text-white"
            style={{ color: "#25D366" }}
          >
            <FaWhatsapp size={24} />
          </Link>
          <Link
            href="mailto:wizrad.local@gmail.com"
            className="hover:text-white"
            style={{ color: "#DB4437" }}
          >
            <FaGoogle size={24} />
          </Link>
          <Link
            href="https://facebook.com"
            className="hover:text-white"
            style={{ color: "#3b5998" }}
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://twitter.com"
            className="hover:text-white"
            style={{ color: "#1DA1F2" }}
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://instagram.com"
            className="hover:text-white"
            style={{ color: "#E1306C" }}
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="hover:text-white"
            style={{ color: "#0077b5" }}
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="md:w-1/2">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                },
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                },
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
        <div className="md:w-1/2 relative z-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
