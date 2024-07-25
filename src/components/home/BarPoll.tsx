"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Vote {
  title: string;
  votes: number;
  color: string;
}

const BarPoll: React.FC = () => {
  const [votes, setVotes] = useState<Vote[]>([
    {
      title: "Loved it!",
      votes: 15,
      // NOTE: Color assumes a tailwind CSS class.
      // One off colors could be added using something like:
      // bg-[#6366F1]
      color: "bg-green-500",
    },
    {
      title: "It was okay!",
      votes: 11,
      color: "bg-blue-500",
    },
    {
      title: "I didnt like it!",
      votes: 7,
      color: "bg-red-500",
    },
  ]);

  return (
    <section className="bg-backround px-4 py-12">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
        <Options votes={votes} setVotes={setVotes} />
        <Bars votes={votes} />
      </div>
    </section>
  );
};

interface OptionsProps {
  votes: Vote[];
  setVotes: React.Dispatch<React.SetStateAction<Vote[]>>;
}

const Options: React.FC<OptionsProps> = ({ votes, setVotes }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  const handleIncrementVote = (vote: Vote) => {
    const newVote = { ...vote, votes: vote.votes + 1 };

    setVotes((pv) => pv.map((v) => (v.title === newVote.title ? newVote : v)));
  };

  return (
    <div className="col-span-1 py-12">
      <h3 className="mb-6 text-3xl font-semibold text-background">
        What&apos;s your opinion?
      </h3>
      <div className="mb-6 space-y-2">
        {votes.map((vote) => {
          return (
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleIncrementVote(vote)}
              key={vote.title}
              className={`w-full rounded-md ${vote.color} py-2 font-medium text-white`}
            >
              {vote.title}
            </motion.button>
          );
        })}
      </div>
      
    </div>
  );
};

interface BarsProps {
  votes: Vote[];
}

const Bars: React.FC<BarsProps> = ({ votes }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  return (
    <div
      className="col-span-1 grid min-h-[200px] gap-2"
      style={{
        gridTemplateColumns: `repeat(${votes.length}, minmax(0, 1fr))`,
      }}
    >
      {votes.map((vote) => {
        const height = vote.votes
          ? ((vote.votes / totalVotes) * 100).toFixed(2)
          : 0;
        return (
          <div key={vote.title} className="col-span-1">
            <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.span
                animate={{ height: `${height}%` }}
                className={`relative z-0 w-full ${vote.color}`}
                transition={{ type: "spring" }}
              />
              <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                <b>{vote.title}</b>
                <br />
                <span className="text-xs text-slate-200">
                  {vote.votes} votes
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BarPoll;
