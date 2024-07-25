import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { FlipWords } from "./Flipwords";
import Link from "next/link"; // Adjust the path as per your project structure

interface SquareData {
  id: number;
  src: string;
}
const squareData: SquareData[] = [
  {
    id: 1,
    src:"/images/back1.webp",
  },
    {
      id: 2,
      src: "/images/back2.webp",
    },
    {
      id: 3,
      src: "/images/back3.webp",
    },
    {
      id: 4,
      src: "/images/back4.webp",
    },
    {
      id: 5,
      src: "/images/back5.webp",
    },
    {
      id: 6,
      src: "/images/back6.webp",
    },
    {
      id: 7,
      src: "/images/back7.webp",
    },
    {
      id: 8,
      src: "/images/back8.webp",
    },
    {
      id: 9,
      src: "/images/back9.webp",
    },
    {
      id: 10,
      src: "/images/back10.webp",
    },
    {
      id: 11,
      src: "/images/back11.webp",
    },
    {
      id: 12,
      src: "/images/back12.webp",
    },
    {
      id: 13,
      src: "/images/back13.webp",
    },
    {
      id: 14,
      src: "/images/back14.webp",
    },
    {
      id: 15,
      src: "/images/back15.webp",
    },
    {
      id: 16,
      src: "/images/back16.webp",
    },
  ];

  const shuffle = <T,>(array: T[]): T[] => {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  };
  
  const generateSquares = (): JSX.Element[] => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    ));
  };
  
  const ShuffleGrid = (): JSX.Element => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [squares, setSquares] = useState<JSX.Element[]>(generateSquares());
  
    useEffect(() => {
      shuffleSquares();
  
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);
  
    const shuffleSquares = (): void => {
      setSquares(generateSquares());
  
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
  
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        {squares}
      </div>
    );
  };
  
  interface ShuffleHeroProps {
    navActive: boolean;
  }
  
  const ShuffleHero: React.FC<ShuffleHeroProps> = ({ navActive }) => {
  const words = ["Notes", "Videos", "PYQs", "Summarizer"];

  return (
    <section className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Empower Your Engineering Journey. Get&nbsp;
          <FlipWords words={words} />
          &nbsp;at Your Fingertips!
        </h3>
        <Link href="/stream">
      <button className="mt-8 px-7 py-3 bg-red-400 text-white rounded-md">
        Get Learning
      </button>
    </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};
  
  export default ShuffleHero;