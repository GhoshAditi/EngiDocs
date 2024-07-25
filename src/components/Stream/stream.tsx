"use client"
import { FC } from "react";
import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Link from 'next/link';

interface StreamProps {
  name: string;
  icon: IconType;
  link: string;
}

const Stream: FC = () => {
  const streams: StreamProps[] = [
    { name: "CSE", icon: FiCloudLightning, link: "/stream/cse" },
      { name: "CSE/AIML", icon: FiCloudLightning, link: "/stream/cse-aiml" },
    { name: "IT", icon: FiCloudLightning, link: "/stream/it" },
    { name: "ECE", icon: FiCloudLightning, link: "/stream/ece" },
      { name: "EE", icon: FiCloudLightning, link: "/stream/ee" },
      { name: "MECHANICAL", icon: FiCloudLightning, link: "/stream/mechanical" },
      { name: "CIVIL", icon: FiCloudLightning, link: "/stream/civil" },
      { name: "AEIE", icon: FiCloudLightning, link: "/stream/aeie" },
      { name: "BIOTECHNOLOGY", icon: FiCloudLightning, link: "/stream/biotech" },
      { name: "FOOD TECHNOLOGY", icon: FiCloudLightning, link: "/stream/foodtech" },
    
    // Add more streams as needed
  ];

  const cards = streams.map((stream, index) => (
    <ShimmerBorderCard key={index} stream={stream} />
  ));

  return (
    <div className="bg-background px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-background mb-8">
        Choose Your Stream
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards}
      </div>
    </div>
  );
};

interface ShimmerBorderCardProps {
  stream: StreamProps;
}

const ShimmerBorderCard: FC<ShimmerBorderCardProps> = ({ stream }) => {
  const Icon = stream.icon;

  return (
    <Link href={stream.link}>
      <div className="group relative mx-auto w-full max-w-xs sm:max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50 my-4">
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-4 sm:p-8 transition-colors duration-500 group-hover:bg-slate-800">
          <Icon className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />
          <h4 className="relative z-10 mb-4 w-full text-2xl sm:text-3xl font-bold text-slate-50">
            {stream.name}
          </h4>
          <p className="relative z-10 text-sm sm:text-base text-slate-400">
            Learn more about {stream.name} and its curriculum.
          </p>
        </div>
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
};

export default Stream;
