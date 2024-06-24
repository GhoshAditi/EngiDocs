"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const BarPoll = () => {
  const [votes, setVotes] = useState([
    {
      title: "Tabs",
      votes: 1,
      color: "bg-indigo-500",
    },
    {
      title: "Spaces",
      votes: 2,
      color: "bg-fuchsia-500",
    },
    {
      title: "Who cares bro?",
      votes: 3,
      color: "bg-violet-500",
    },
  ]);

  return (
    <section className="bg-slate-900 p-4 w-full">
      <div className="grid grid-cols-1 gap-2">
        <Options votes={votes} setVotes={setVotes} />
        <Bars votes={votes} />
      </div>
    </section>
  );
};

const Options = ({ votes, setVotes }: { votes: { title: string, votes: number, color: string }[], setVotes: React.Dispatch<React.SetStateAction<{ title: string, votes: number, color: string }[]>> }) => {
  const totalVotes = votes.reduce((acc: number, cv) => (acc += cv.votes), 0);

  const handleIncrementVote = (vote: { title: string, votes: number, color: string }) => {
    const newVote = { ...vote, votes: vote.votes + 1 };
    setVotes((pv) => pv.map((v) => (v.title === newVote.title ? newVote : v)));
  };

  return (
    <div className="py-4">
      <h3 className="mb-6 text-3xl font-semibold text-slate-50">
        What's your opinion?
      </h3>
      <div className="mb-6 space-y-2">
        {votes.map((vote) => (
          <motion.button
            key={vote.title}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => handleIncrementVote(vote)}
            className={`w-full rounded-md ${vote.color} py-2 font-medium text-white`}
          >
            {vote.title}
          </motion.button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="mb-2 italic text-slate-400">{totalVotes} votes</span>
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          onClick={() => setVotes((pv) => pv.map((v) => ({ ...v, votes: 0 })))}
          className="rounded-sm bg-slate-700 px-2 py-1.5 text-sm font-medium text-slate-200"
        >
          Reset count
        </motion.button>
      </div>
    </div>
  );
};

type Vote = {
    title: string;
    votes: number;
    color: string;
  };
  
  const Bars = ({ votes }: { votes: Vote[] }) => {
    const totalVotes = votes.reduce((acc, cv) => acc + cv.votes, 0);
  
    return (
      <div
        className="min-h-[200px] grid gap-2"
        style={{ gridTemplateColumns: `repeat(${votes.length}, 1fr)` }}
      >
        {votes.map((vote) => {
          const height = totalVotes > 0 ? ((vote.votes / totalVotes) * 100).toFixed(2) : 0;
          return (
            <div key={vote.title} className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.span
                animate={{ height: `${height}%` }}
                className={`relative z-0 w-full ${vote.color}`}
                transition={{ type: "spring" }}
              />
              <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                <b>{vote.title}</b>
                <br />
                <span className="text-xs text-slate-200">{vote.votes} votes</span>
              </span>
            </div>
          );
        })}
      </div>
    );
  };

const Stats = () => {
    
  return (
    <div className="stats shadow bg-slate-800 p-4 w-full">
      <div className="stat" style={{ marginLeft: '20px', padding: '2px 4px', width: 'calc(100% + 30px)' }}>
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Title</div>
        <div className="stat-value">Value</div>
        <div className="stat-desc">Description</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <footer className="min-h-screen bg-slate-900 p-4 flex flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl">
        <div className="w-2/5">
          <BarPoll />
        </div>
        <div className="w-2/5">
          <Stats />
        </div>
      </div>
    </footer>
  );
};

export default App;