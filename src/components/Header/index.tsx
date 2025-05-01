"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faBriefcase,
  faProjectDiagram,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { projectItems } from "@/data/project-items";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProjectsMouseOver = () => {
    setIsProjectsOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    setIsProjectsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative w-full p-4 flex justify-between items-center z-[100000] bg-[#0c0e12]">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              className=""
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        <button
          className={`text-white hover:text-[#c99efd] md:hidden ${
            isOpen ? "hidden" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <nav
          className={`flex-col md:flex-row md:flex items-center justify-center space-x-6 ${
            isOpen ? "flex" : "hidden"
          } md:flex text-xl`}
        >
          <Link
            href="/"
            className="flex items-center relative cursor-pointer text-center overflow-hidden text-white group"
          >
            <FontAwesomeIcon size="sm" icon={faHome} className="mr-2" />
            <span className="relative flex items-center !text-[15px]">
              <span className="relative inline-block transition-transform duration-300 transform group-hover:-translate-y-full">
                Home
              </span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 transform translate-y-full text-[#c99efd] group-hover:-translate-y-0">
                Home
              </span>
            </span>
          </Link>
          <Link
            href="/services"
            className="flex items-center relative cursor-pointer text-center overflow-hidden text-white group"
          >
            <FontAwesomeIcon size="sm" icon={faBriefcase} className="mr-2" />
            <span className="relative flex items-center !text-[15px]">
              <span className="relative inline-block transition-transform duration-300 transform group-hover:-translate-y-full">
                Services
              </span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 transform translate-y-full text-[#c99efd] group-hover:-translate-y-0">
                Services
              </span>
            </span>
          </Link>
          <div
            className="relative"
            onMouseOver={handleProjectsMouseOver}
            onMouseLeave={handleProjectsMouseLeave}
            ref={projectsRef}
          >
            <Link
              href="/projects"
              className="flex items-center relative cursor-pointer text-center overflow-hidden text-white group"
            >
              <FontAwesomeIcon
                size="sm"
                icon={faProjectDiagram}
                className="mr-2"
              />
              <span className="relative flex items-center !text-[15px]">
                <span className="relative inline-block transition-transform duration-300 transform group-hover:-translate-y-full">
                  Projects
                </span>
                <span className="absolute top-0 left-0 inline-block transition-transform duration-300 transform translate-y-full text-[#c99efd] group-hover:-translate-y-0">
                  Projects
                </span>
              </span>
            </Link>
            {isProjectsOpen && (
              <div className="absolute top-[90%] left-0 text-white mt-2 w-48 bg-[#161d2b8c] shadow-lg rounded-md text-sm border border-[#3c45588c]">
                {
                  projectItems.map((item, index   ) => (
                    <Link
                      href={`/projects/${item.link}`}
                      className={`block px-4 py-2 hover:bg-[#838383d7] transition-all duration-300 ${index === 0 ? "rounded-t-md" : ""} ${index === projectItems.length - 1 ? "rounded-b-md" : ""}`}
                    >
                      {item.title}
                    </Link>
                  ))
                }
              </div>
            )}
          </div>
          <Link
            href="/skills"
            className="flex items-center relative cursor-pointer text-center overflow-hidden text-white group"
          >
            <FontAwesomeIcon size="sm" icon={faUser} className="mr-2" />
            <span className="relative flex items-center !text-[15px]">
              <span className="relative inline-block transition-transform duration-300 transform group-hover:-translate-y-full">
                Skills
              </span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 transform translate-y-full text-[#c99efd] group-hover:-translate-y-0">
                Skills
              </span>
            </span>
          </Link>
          <Link
            href="/testimonials"
            className="flex items-center relative cursor-pointer text-center overflow-hidden text-white group"
          >
            <FontAwesomeIcon size="sm" icon={faStar} className="mr-2" />
            <span className="relative flex items-center !text-[15px]">
              <span className="relative inline-block transition-transform duration-300 transform group-hover:-translate-y-full">
                Testimonials
              </span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 transform translate-y-full text-[#c99efd] group-hover:-translate-y-0">
                Testimonials
              </span>
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center relative cursor-pointer text-center overflow-hidden text-white group"
          >
            <FontAwesomeIcon size="sm" icon={faEnvelope} className="mr-2" />
            <span className="relative flex items-center !text-[15px]">
              <span className="relative inline-block transition-transform duration-300 transform group-hover:-translate-y-full">
                Contact
              </span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 transform translate-y-full text-[#c99efd] group-hover:-translate-y-0">
                Contact
              </span>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
