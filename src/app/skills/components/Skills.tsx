"use client";

import React from "react";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import {
  FaStar,
  FaReact,
  FaVuejs,
  FaFlask,
  FaRust,
  FaAngular,
  FaGofore,
  FaEthereum,
  FaJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaDocker,
  FaAws,
  FaGit,
  FaLinux,
  FaPhp,
  FaShieldAlt,
  FaJava,
  FaSwift,
  FaStarHalfAlt,
  FaWordpress,
  FaShopify
} from "react-icons/fa";
import {
  SiDjango,
  SiNuxtdotjs,
  SiSvelte,
  SiExpress,
  SiTailwindcss,
  SiSolidity,
  SiBlockchaindotcom,
  SiTypescript,
  SiGraphql,
  Si365Datascience,
  SiKotlin,
  SiScrapy,
  SiSelenium,
  SiCypress,
  SiPuppeteer,
  SiAppium,
  SiWeb3Dotjs,
  SiPolkadot,
  SiNextdotjs,
  SiExpo
} from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { GiArtificialIntelligence, GiVendingMachine } from "react-icons/gi";
import { FaNode } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { GoRuby } from "react-icons/go";
import { FaC, FaFlutter } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import Image from "next/image";
import FiveStar from "./Five-star";
type SkillName = (typeof skills)[number]["name"];

const skillIcons: Record<SkillName, JSX.Element> = {
  react: <FaReact className="w-12 h-12 mr-4" color="#61DAFB" />,
  nextjs: <SiNextdotjs className="w-12 h-12 mr-4" color="#ffffff" />,
  vuejs: <FaVuejs className="w-12 h-12 mr-4" color="#42b883" />,
  nuxtjs: <SiNuxtdotjs className="w-12 h-12 mr-4" color="#00C58E" />,
  svelte: <SiSvelte className="w-12 h-12 mr-4" color="#FF3E00" />,
  angular: <FaAngular className="w-12 h-12 mr-4" color="#DD0031" />,
  rust: <FaRust className="w-12 h-12 mr-4" color="#DEA584" />,
  go: <FaGofore className="w-12 h-12 mr-4" color="#00ADD8" />,
  csharp: <PiFileCSharp className="w-12 h-12 mr-4" color="#239120" />,
  flask: <FaFlask className="w-12 h-12 mr-4" color="#ffffff" />,
  django: <SiDjango className="w-12 h-12 mr-4" color="#092E20" />,
  express: <SiExpress className="w-12 h-12 mr-4" color="#ffffff" />,
  tailwindcss: <SiTailwindcss className="w-12 h-12 mr-4" color="#38B2AC" />,
  solidity: <SiSolidity className="w-12 h-12 mr-4" color="#00ADD8" />,
  ethereum: <FaEthereum className="w-12 h-12 mr-4" color="#00ADD8" />,
  blockchain: <SiBlockchaindotcom className="w-12 h-12 mr-4" color="#121D33" />,
  ai: <GiArtificialIntelligence className="w-12 h-12 mr-4" color="#FF5733" />,
  javascript: <FaJs className="w-12 h-12 mr-4" color="#F7DF1E" />,
  typescript: <SiTypescript className="w-12 h-12 mr-4" color="#3178C6" />,
  nodejs: <FaNode className="w-12 h-12 mr-4" color="#339933" />,
  python: <FaPython className="w-12 h-12 mr-4" color="#3776AB" />,
  html: <FaHtml5 className="w-12 h-12 mr-4" color="#E34F26" />,
  css: <FaCss3 className="w-12 h-12 mr-4" color="#1572B6" />,
  graphql: <SiGraphql className="w-12 h-12 mr-4" color="#E10098" />,
  docker: <FaDocker className="w-12 h-12 mr-4" color="#2496ED" />,
  aws: <FaAws className="w-12 h-12 mr-4" color="#FF9900" />,
  azure: <TbBrandAzure className="w-12 h-12 mr-4" color="#0078D4" />,
  git: <FaGit className="w-12 h-12 mr-4" color="#F05032" />,
  linux: <FaLinux className="w-12 h-12 mr-4" color="#FCC624" />,
  machinelearning: (
    <GiVendingMachine className="w-12 h-12 mr-4" color="#FF5733" />
  ),
  datascience: <Si365Datascience className="w-12 h-12 mr-4" color="#FF5733" />,
  devops: <VscAzureDevops className="w-12 h-12 mr-4" color="#0078D7" />,
  cybersecurity: <FaShieldAlt className="w-12 h-12 mr-4" color="#FF5733" />,
  php: <FaPhp className="w-12 h-12 mr-4" color="#777BB4" />,
  rubyonrails: <GoRuby className="w-12 h-12 mr-4" color="#CC0000" />,
  reactnative: <FaReact className="w-12 h-12 mr-4" color="#61DAFB" />,
  flutter: <FaFlutter className="w-12 h-12 mr-4" color="#02569B" />,
  swift: <FaSwift className="w-12 h-12 mr-4" color="#FA7343" />,
  wordpress: <FaWordpress className="w-12 h-12 mr-4" color="#21759b" />,
  shopify: <FaShopify className="w-12 h-12 mr-4" color="#7ab55c" />,
  kotlin: <SiKotlin className="w-12 h-12 mr-4" color="#0095D5" />,
  java: <FaJava className="w-12 h-12 mr-4" color="#007396" />,
  cpp: <TbBrandCpp className="w-12 h-12 mr-4" color="#00599C" />,
  c: <FaC className="w-12 h-12 mr-4" color="#A8B9CC" />,
  scrapy: <SiScrapy className="w-12 h-12 mr-4" color="#FF5733" />,
  selenium: <SiSelenium className="w-12 h-12 mr-4" color="#43B02A" />,
  puppeteer: <SiPuppeteer className="w-12 h-12 mr-4" color="#40B5A4" />,
  playwright: (
    <Image
      src="/assets/icon/playwright.png"
      alt="Playwright"
      width={48}
      height={48}
    />
  ),
  appium: <SiAppium className="w-12 h-12 mr-4" color="#41BDF5" />,
  cypress: <SiCypress className="w-12 h-12 mr-4" color="#17202C" />,
  hyperledger: (
    <Image
      src="/assets/icon/hyperledger.svg"
      alt="Hyperledger"
      width={48}
      height={48}
    />
  ),
  truffle: (
    <Image
      src="/assets/icon/truffle.svg"
      alt="Truffle"
      width={48}
      height={48}
    />
  ),
  web3js: <SiWeb3Dotjs className="w-12 h-12 mr-4" color="#F16822" />,
  ipfs: <Image src="/assets/icon/ipfs.png" alt="IPFS" width={48} height={48} />,
  polkadot: <SiPolkadot className="w-12 h-12 mr-4" color="#E6007A" />,
  expo: <SiExpo className="w-12 h-12 mr-4" />
};

const Skills = () => {
  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <ul className="md:w-4/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-[#1d1d1d85] shadow-lg rounded-lg p-4 border border-[#374151] cursor-pointer relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center mb-4 text-white">
              {skillIcons[skill.icon as SkillName]}
            </div>
            <div className="text-white flex items-center justify-center mb-4">
              Proficiency:
              {skill.range && <FiveStar range={skill.range} />}
            </div>
            <div className="hidden group-hover:block">
              <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-black before:-top-2">
                <div className="rounded-sm bg-white py-1 px-2">
                  <p className="whitespace-nowrap">{skill.name}</p>
                </div>
                <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
