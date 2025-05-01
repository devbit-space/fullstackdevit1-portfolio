"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-10 border-t border-gray-700">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-gray-500 text-center mb-4 md:mb-0 max-sm:w-full">
          © 2025{" "} copyright by <span className="font-bold">wizard</span>
        </div>
        <nav className="flex flex-wrap gap-4 items-center justify-center text-sm font-medium text-gray-500">
          <Link
            href="/"
            className="text-white hover:text-blue-500 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-blue-500 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-blue-500 transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="text-white hover:text-blue-500 transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            href="/testimonials"
            className="text-white hover:text-blue-500 transition-all duration-300"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-500 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        <Link href="https://facebook.com" className="text-gray-500 hover:text-white">
          <FaFacebook size={24} />
        </Link>
        <Link
          href="https://twitter.com"
          className="text-gray-500 hover:text-white"
        >
          <FaTwitter size={24} />
        </Link>
        <Link
          href="https://instagram.com"
          className="text-gray-500 hover:text-white"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://linkedin.com"
          className="text-gray-500 hover:text-white"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://github.com/BJ-dev0706"
          className="text-gray-500 hover:text-white"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://t.me/@digitalwizard0"
          className="text-gray-500 hover:text-white"
        >
          <FaTelegram size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
