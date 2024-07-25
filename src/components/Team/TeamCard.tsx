import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  portfolioLink: string;
  linkedinLink: string; // New prop for LinkedIn link
  githubLink: string;   // New prop for GitHub link
}

const TeamCard: React.FC = () => {
  return (
    <section className="p-1 bg-primary-bg">
      <span className="block text-center text-xl font-medium mb-4">
        {/* Placeholder for any additional text or component */}
      </span>
      <div className="grid gap-[30rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <Card
          title="Aditi Ghosh"
          description="I write good code"
          imgSrc="https://res.cloudinary.com/dff97ky68/image/upload/v1720419818/WhatsApp_Image_2024-07-08_at_00.30.33_39cbe156_jour2t.jpg"
          portfolioLink="https://example.com/aditi-portfolio"
          linkedinLink="https://www.linkedin.com/in/aditighosh2005/"
          githubLink="https://github.com/GhoshAditi"
        />
        <Card
          title="Rishi Paul"
          description="I write bad code"
          imgSrc="https://media.licdn.com/dms/image/D5603AQFcc8_vrp3w-Q/profile-displayphoto-shrink_800_800/0/1714159671557?e=1725494400&v=beta&t=dLUd-g0ov1Qoqh8QjZsklxDMCh7974KEw8eOL_TSUc4"
          portfolioLink="https://rishi-paul04.vercel.app/"
          linkedinLink="https://www.linkedin.com/in/rishi-paul04/l"
          githubLink="https://github.com/rishicds"
        />
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ imgSrc, title, description, portfolioLink, linkedinLink, githubLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      whileTap={{ scale: isOpen ? 1 : 1 }} // Scale effect on tap
      className="w-[380px] h-[400px] relative"
      onClick={toggleCard} // Toggle state on click
    >
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        animate={{
          top: isOpen ? "50%" : "0%", // Adjust top position based on isOpen state
          right: isOpen ? "50%" : "0%", // Adjust right position based on isOpen state
          scale: isOpen ? 1 : 1, // Scale effect when isOpen
        }}
        className="absolute inset-0 bg-slate-200 z-10"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className={`w-full pl-48 h-1/2 absolute bottom-0 right-0 z-0 flex flex-col items-center bg-white text-black transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <a
          href={portfolioLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-full h-full flex items-center justify-center hover:text-indigo-500 transition-colors"
        >
          <div className="flex items-center">
            <span className="text-xs">My Portfolio</span>
            <FiArrowUpRight className="text-lg ml-1" />
          </div>
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-full h-full flex items-center justify-center hover:text-indigo-500 transition-colors"
        >
          <div className="flex items-center">
            <span className="text-xs">LinkedIn</span>
            <FiArrowUpRight className="text-lg ml-1" />
          </div>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-full h-full flex items-center justify-center hover:text-indigo-500 transition-colors"
        >
          <div className="flex items-center">
            <span className="text-xs">GitHub</span>
            <FiArrowUpRight className="text-lg ml-1" />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default TeamCard;
