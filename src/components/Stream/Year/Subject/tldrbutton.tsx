import React from 'react';
import Link from 'next/link';

const TLDRButton = () => {
  return (
    <Link href="https://tldr-nice.vercel.app/" passHref>
      <div className="fixed bottom-8 right-8 z-50">
        <div className="group relative w-fit transition-transform duration-300 active:scale-95">
          <button className="relative z-10 rounded-3xl bg-gradient-to-br from-blue-400 to-red-500 p-2 text-xl font-semibold duration-300 group-hover:scale-110">
            <span className="block rounded-3xl bg-slate-950 px-4 py-2 text-lg text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
              TL;DR it!
            </span>
          </button>
          <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-blue-400 to-red-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
        </div>
      </div>
    </Link>
  );
};

export default TLDRButton;
