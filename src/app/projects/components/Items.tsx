"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Aceternity/3d-card";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaRust,
  FaVuejs,
  FaBootstrap,
  FaWordpress,
  FaApple,
  FaWindows,
  FaJava,
  FaTelegram,
  FaDiscord,
  FaChartLine,
  FaFacebook,
  FaSpotify,
  FaTwitter,
  FaAws
} from "react-icons/fa";
import {
  SiEthereum,
  SiSolana,
  SiPolygon,
  SiNuxtdotjs,
  SiMongodb,
  SiTypescript,
  SiSolidity,
  SiWeb3Dotjs,
  SiSwiper,
  SiFramer,
  SiTailwindcss,
  SiAngular,
  SiFirebase,
  SiAxios,
  SiJquery,
  SiFlutter,
  SiDart,
  SiExpo,
  SiKotlin,
  SiDjango,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiRasa,
  SiFlask,
  SiDialogflow,
  SiHiveBlockchain,
  SiTensorflow,
  SiOpencv,
  SiPytorch,
  SiIpfs,
  SiScrapy,
  SiSelenium,
  SiPandas
} from "react-icons/si";
import { GiHypersonicBolt, GiJupiter } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";
import { AiFillApi } from "react-icons/ai";
import { TbBrandReactNative, TbBrandThreejs } from "react-icons/tb";
interface ItemsProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  uniqueAspects: string;
  outcome: string;
}

const technologyIcons: { [key: string]: JSX.Element } = {
  React: <FaReact color="#61DAFB" size={25} />,
  Node: <FaNodeJs color="#3C873A" size={25} />,
  MongoDB: <SiMongodb color="#47A248" size={25} />,
  Python: <FaPython color="#3776AB" size={25} />,
  PHP: <FaPhp color="#777BB4" size={25} />,
  HTML5: <FaHtml5 color="#E34F26" size={25} />,
  CSS3: <FaCss3Alt color="#1572B6" size={25} />,
  Tailwind: <SiTailwindcss color="#38B2AC" size={25} />,
  JavaScript: <FaJs color="#F7DF1E" size={25} />,
  TypeScript: <SiTypescript color="#3178C6" size={25} />,
  Swiper: <SiSwiper color="#6332F6" size={25} />,
  Framer: <SiFramer color="#0055FF" size={25} />,
  Web3: <SiWeb3Dotjs color="#F16822" size={25} />,
  Rust: <FaRust color="#DEA584" size={25} />,
  Solidity: <SiSolidity color="#363636" size={25} />,
  Ethereum: <SiEthereum color="#3C3C3D" size={25} />,
  Solana: <SiSolana color="#00FFA3" size={25} />,
  Polygon: <SiPolygon color="#8247E5" size={25} />,
  Next: <RiNextjsFill color="#000000" size={25} />,
  Angular: <SiAngular color="#DD0031" size={25} />,
  RestfulAPI: <AiFillApi color="#FF6F61" size={25} />,
  Vue: <FaVuejs color="#4FC08D" size={25} />,
  Nuxt: <SiNuxtdotjs color="#00C58E" size={25} />,
  Axios: <SiAxios color="#5A29E4" size={25} />,
  Firebase: <SiFirebase color="#FFCA28" size={25} />,
  Bootstrap: <FaBootstrap color="#7952B3" size={25} />,
  jQuery: <SiJquery color="#0769AD" size={25} />,
  Wordpress: <FaWordpress color="#21759B" size={25} />,
  Threejs: <TbBrandThreejs color="#000000" size={25} />,
  Flutter: <SiFlutter color="#02569B" size={25} />,
  Dart: <SiDart color="#0175C2" size={25} />,
  ReactNative: <TbBrandReactNative color="#61DAFB" size={25} />,
  Expo: <SiExpo color="#000020" size={25} />,
  Kotlin: <SiKotlin color="#0095D5" size={25} />,
  Django: <SiDjango color="#092E20" size={25} />,
  SpringBoot: <SiSpringboot color="#6DB33F" size={25} />,
  PostgreSQL: <SiPostgresql color="#336791" size={25} />,
  MySQL: <SiMysql color="#4479A1" size={25} />,
  MacOS: <FaApple color="#A2AAAD" size={25} />,
  Windows: <FaWindows color="#0078D6" size={25} />,
  Java: <FaJava color="#007396" size={25} />,
  Rasa: <SiRasa color="#5A60E7" size={25} />,
  Flask: <SiFlask color="#000000" size={25} />,
  Dialogflow: <SiDialogflow color="#FF9800" size={25} />,
  Telegram: <FaTelegram color="#0088CC" size={25} />,
  Discord: <FaDiscord color="#7289DA" size={25} />,
  Blockchain: <SiHiveBlockchain color="#F7931A" size={25} />,
  Trading: <FaChartLine color="#FF4500" size={25} />,
  Facebook: <FaFacebook color="#1877F2" size={25} />,
  Spotify: <FaSpotify color="#1DB954" size={25} />,
  Twitter: <FaTwitter color="#1DA1F2" size={25} />,
  TensorFlow: <SiTensorflow color="#FF6F00" size={25} />,
  AWS: <FaAws color="#FF9900" size={25} />,
  NLTK: <span className="text-white">NL</span>,
  OpenCV: <SiOpencv color="#5C3EE8" size={25} />,
  PyTorch: <SiPytorch color="#EE4C2C" size={25} />,
  Hyperledger: <GiHypersonicBolt color="#2F3134" size={25} />,
  IPFS: <SiIpfs color="#65C2CB" size={25} />,
  Jupiter: <GiJupiter color="#FF4500" size={25} />,
  BeautifulSoup: <span className="text-white">BS</span>,
  Scrapy: <SiScrapy color="#FF6347" size={25} />,
  Selenium: <SiSelenium color="#43B02A" size={25} />,
  Pandas: <SiPandas color="#150458" size={25} />,
  PyPDF2: <span className="text-white">PyPDF2</span>,
  SMTP: <span className="text-white">SMTP</span>,
};

export function Items({
  title,
  description,
  image,
  technologies,
  link,
  uniqueAspects,
  outcome,
}: ItemsProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/25"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-start gap-2 items-center mt-2 py-5">
          {technologies.map((tech) =>
            technologyIcons[tech] ? (
              <span key={tech}>{technologyIcons[tech]}</span>
            ) : null
          )}
        </div>
        <CardItem className="w-full text-white">- {uniqueAspects}</CardItem>
        <CardItem className="w-full text-white">- {outcome}</CardItem>
        <div className="flex justify-center items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-sm bg-black text-white border border-white/25 text-xs font-bold hover:bg-white/10 transition-all duration-300"
          >
            <Link href={link} target="_blank">
              Live view
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
