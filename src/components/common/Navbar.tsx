"use client";
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import ToggleWrapper from "./toggle";
import { UserButton } from "@clerk/nextjs";

export const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-background z-100">
        {!isMobile && <ToggleWrapper />}
        <Nav active={navActive} setActive={setNavActive} isMobile={isMobile} />
      </div>    
    </>
  );
};

interface NavProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

const Nav: React.FC<NavProps> = ({ active, setActive, isMobile }) => {
  return (
    <>
      <Link href="/" passHref>
        <div className="flex items-center p-4 bg-background cursor-pointer">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            className="mr-2"
          >
            <path
              d="M0 0 C5.93431181 4.27133768 10.20568179 9.34232669 12.03515625 16.46484375 C13.04681569 25.45263916 12.4657593 33.03709197 7.03515625 40.46484375 C2.2754769 45.78980568 -3.04719702 49.03485813 -10.16796875 49.81640625 C-19.36512824 50.19464441 -26.15160915 48.8299187 -33.0625 42.5625 C-39.50376135 35.67154073 -40.45086305 29.20915183 -40.265625 19.9375 C-39.51985175 11.32720885 -35.75963599 6.67407018 -29.37890625 1.09375 C-21.20769726 -4.41983277 -8.67190296 -4.5547752 0 0 Z M-31.96484375 17.46484375 C-31.96484375 18.12484375 -31.96484375 18.78484375 -31.96484375 19.46484375 C-29.26354606 20.67110252 -26.55573015 21.85477767 -23.83984375 23.02734375 C-23.07929688 23.36958984 -22.31875 23.71183594 -21.53515625 24.06445312 C-16.93489173 26.02749704 -13.91084745 27.06032881 -8.96484375 25.46484375 C-6.43982058 24.33750471 -4.02819312 23.18769493 -1.58984375 21.90234375 C-0.62884766 21.40831055 -0.62884766 21.40831055 0.3515625 20.90429688 C1.91654257 20.09844893 3.47639646 19.28265882 5.03515625 18.46484375 C5.03515625 17.80484375 5.03515625 17.14484375 5.03515625 16.46484375 C-9.06928322 13.13682994 -18.2809835 13.47371784 -31.96484375 17.46484375 Z M-30.96484375 23.46484375 C-30.96484375 24.78484375 -30.96484375 26.10484375 -30.96484375 27.46484375 C-29.97484375 27.46484375 -28.98484375 27.46484375 -27.96484375 27.46484375 C-27.96484375 26.47484375 -27.96484375 25.48484375 -27.96484375 24.46484375 C-28.95484375 24.13484375 -29.94484375 23.80484375 -30.96484375 23.46484375 Z M-3.49609375 26.375 C-8.98334516 29.58678406 -12.81747706 29.90262565 -18.96484375 28.46484375 C-20.98509174 27.86231365 -22.99717844 27.2216381 -24.96484375 26.46484375 C-23.98698945 31.26184862 -23.98698945 31.26184862 -21.2578125 35.16796875 C-16.84913856 37.66146066 -11.86503577 37.05393787 -6.96484375 36.46484375 C-3.67580354 35.15428483 -3.67580354 35.15428483 -1.96484375 32.46484375 C-1.07428639 28.8230204 -1.07428639 28.8230204 -0.96484375 25.46484375 C-2.11846189 25.37968641 -2.11846189 25.37968641 -3.49609375 26.375 Z M-30.96484375 30.46484375 C-30.96484375 32.11484375 -30.96484375 33.76484375 -30.96484375 35.46484375 C-29.97484375 35.46484375 -28.98484375 35.46484375 -27.96484375 35.46484375 C-27.96484375 33.81484375 -27.96484375 32.16484375 -27.96484375 30.46484375 C-28.95484375 30.46484375 -29.94484375 30.46484375 -30.96484375 30.46484375 Z "
              fill="#8E1F60"
              transform="translate(45.96484375,8.53515625)"
            />
          </svg>
          <h1 className="text-4xl font-semibold font-mono text-background">EngiDocs</h1>
        </div>
      </Link>

      <HamburgerButton active={active} setActive={setActive} isMobile={isMobile} />
      <AnimatePresence>{active && <LinksOverlay isMobile={isMobile} />}</AnimatePresence>
    </>
  );
};

interface LinksOverlayProps {
  isMobile: boolean;
}

const LinksOverlay: React.FC<LinksOverlayProps> = ({ isMobile }) => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-32px)] w-[calc(100%-_32px)] overflow-hidden">
      <Logo />
      {isMobile && <div className="absolute top-4 right-4"><ToggleWrapper /></div>}
      <LinksContainer />
      <FooterCTAs isMobile={isMobile} />
    </nav>
  );
};

interface LinksContainerProps {}

const LinksContainer: React.FC<LinksContainerProps> = () => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  idx: number;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, idx }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className="block text-5xl font-semibold text-violet-400 transition-colors hover:text-violet-50 md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="#"
      className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-red transition-colors hover:bg-violet-50"
    >
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white-600"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#FFFFFF"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#FFFFFF"
        ></path>
      </svg>
    </motion.a>
  );
};

interface HamburgerButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ active, setActive, isMobile }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className="fixed z-30 rounded-xl bg-gradient-to-br from-blue-600 to-red-500 shadow-lg shadow-violet-800/20"
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

interface FooterCTAsProps {
  isMobile: boolean;
}

const FooterCTAs: React.FC<FooterCTAsProps> = ({ isMobile }) => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-white transition-colors hover:text-violet-300" />
            </motion.a>
          );
        })}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.125,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: 8 }}
        className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-red-700 px-3 py-3 text-4xl uppercase text-violet-200 transition-colors hover:bg-white hover:text-violet-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
      >
        <UserButton />
        <span className="hidden md:block">
          <a href="/contact" className="hover:underline">contact us</a>
        </span>
        <FiArrowRight />
      </motion.button>
    </>
  );
};

const LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/aboutUs" },
  { title: "Stream", href: "/stream" },
  { title: "Team", href: "/team" },
  { title: "Account", href: "/sign-up" },
];

const SOCIAL_CTAS = [
  { Component: SiTwitter, href: "#" },
  { Component: SiInstagram, href: "#" },
  { Component: SiLinkedin, href: "#" },
  { Component: SiYoutube, href: "#" },
];
const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3, stiffness: 400, damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
