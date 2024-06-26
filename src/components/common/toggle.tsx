import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsFillCloudyFill, BsStarFill } from "react-icons/bs";

const ToggleWrapper = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (mode === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [mode]);

  return (
    <div className="fixed top-8 right-28 z-20">
      <DarkModeToggle mode={mode} setMode={setMode} />
    </div>
  );
};

const DarkModeToggle = ({
  mode,
  setMode,
}: {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      className={`p-2 w-28 rounded-full flex shadow-lg relative bg-gradient-to-b ${
        mode === "light"
          ? "justify-end from-blue-500 to-sky-300"
          : "justify-start from-indigo-600 to-indigo-400"
      }`}
    >
      <Thumb mode={mode} />
      {mode === "light" && <Clouds />}
      {mode === "dark" && <Stars />}
    </button>
  );
};

const Thumb = ({ mode }: { mode: string }) => {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.75,
        type: "spring",
      }}
      className="h-10 w-10 rounded-full overflow-hidden shadow-lg relative"
    >
      <div
        className={`absolute inset-0 ${
          mode === "dark"
            ? "bg-slate-100"
            : "animate-pulse bg-gradient-to-tr from-amber-300 to-yellow-500 rounded-full"
        }`}
      />
      {mode === "light" && <SunCenter />}
      {mode === "dark" && <MoonSpots />}
    </motion.div>
  );
};

const SunCenter = () => (
  <div className="absolute inset-1.5 rounded-full bg-amber-300" />
);

const MoonSpots = () => (
  <>
    <motion.div
      initial={{ x: -4, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.35 }}
      className="w-3 h-3 rounded-full bg-slate-300 absolute right-2.5 bottom-1"
    />
    <motion.div
      initial={{ x: -4, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.35 }}
      className="w-3 h-3 rounded-full bg-slate-300 absolute left-1 bottom-4"
    />
    <motion.div
      initial={{ x: -4, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.35 }}
      className="w-2 h-2 rounded-full bg-slate-300 absolute right-2 top-2"
    />
  </>
);

const Stars = () => {
  return (
    <>
      <motion.span
        animate={{
          scale: [0.75, 1, 0.75],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeIn",
        }}
        className="text-slate-300 text-xs absolute right-10 top-2"
      >
        <BsStarFill />
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 0.75, 1],
          opacity: [0.5, 0.25, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeIn",
        }}
        style={{ rotate: "-45deg" }}
        className="text-slate-300 text-lg absolute right-4 top-3"
      >
        <BsStarFill />
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 0.5, 1],
          opacity: [1, 0.5, 1],
        }}
        style={{ rotate: "45deg" }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeIn",
        }}
        className="text-slate-300 absolute right-8 top-8"
      >
        <BsStarFill />
      </motion.span>
    </>
  );
};

const Clouds = () => {
  return (
    <>
      <motion.span
        animate={{ x: [-20, -15, -10, -5, 0], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 0.25,
        }}
        className="text-white text-xs absolute left-10 top-1"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-10, 0, 10, 20, 30], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="text-white text-lg absolute left-4 top-4"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-7, 0, 7, 14, 21], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 12.5,
          repeat: Infinity,
        }}
        className="text-white absolute left-9 top-8"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-15, 0, 15, 30, 45], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          delay: 0.75,
        }}
        className="text-white absolute text-xs left-14 top-4"
      >
        <BsFillCloudyFill />
      </motion.span>
    </>
  );
};

export default ToggleWrapper;
