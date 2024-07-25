import React from 'react';
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link';

interface CardProps {
  heading: string;
  description: string;
  imgSrc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ heading, description, imgSrc, link }) => {
  return (
    <Link href={link}>
      <motion.div
        transition={{
          staggerChildren: 0.035,
        }}
        whileHover="hover"
        className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative "
      >
        <div
          className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
          <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
          <div>
            <h4>
              {heading.split("").map((l, i) => (
                <ShiftLetter letter={l} key={i} />
              ))}
            </h4>
            <p className="bg-black">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const ShiftLetter: React.FC<{ letter: string }> = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden bg-black h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

interface ColorChangeCardsProps {
  stream: string;
}

const ColorChangeCards: React.FC<ColorChangeCardsProps> = ({ stream }) => {
  const years = [
    {
      heading: "1st Year",
      description: "Foundational courses and introduction to core concepts.",
      imgSrc: "/images/year1.webp",
    },
    {
      heading: "2nd Year",
      description: "Advanced topics and specialized coursework.",
      imgSrc: "/images/year2.webp",
    },
    {
      heading: "3rd Year",
      description: "In-depth study and practical applications.",
      imgSrc: "/images/year3.webp",
    },
    {
      heading: "4th Year",
      description: "Final year projects and career preparation.",
      imgSrc: "/images/year4.webp",
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-background">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Year</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        {years.map((year, index) => (
          <Card
          key={index}
          heading={year.heading}
          description={year.description}
          imgSrc={year.imgSrc}
          link={`/stream/${stream}/year/${index + 1}`}
        />
        ))}
      </div>
    </div>
  );
};

export default ColorChangeCards;