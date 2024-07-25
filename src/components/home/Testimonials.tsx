import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Feature = {
  id: number;
  title: string;
  description: string;
  contentPosition: string;
  imageSrc: string;
};

const features = [
  {
    id: 1,
    title: "Debayudh Basu",
    description:
      "EngiDocs has been a lifesaver for me. I struggle with note-taking and often miss key points during lectures. Having access to comprehensive and well-structured notes from my peers has allowed me to stay on top of my coursework and understand the material better. The ability to compare different sets of notes also gave me new insights and helped reinforce my learning. This resource has made a huge difference in my academic performance.",
    contentPosition: "r",
    imageSrc: "/images/debayudhBasu.webp",
  },
  {
    id: 2,
    title: "Chandrima Ghosh",
    description:
      "Using EngiDocs was a game-changer for me. The detailed lecture notes and summaries provided by my friends gave me a clearer understanding of complex topics. I was able to study more efficiently and improve my grades significantly. The notes were well-organized and covered everything my professor discussed in class. It was like having a study group available 24/7.",
    contentPosition: "l",
    imageSrc: "/images/chandrimaGhosh.webp",
  },
  {
    id: 3,
    title: "Arnab Mondal",
    description:
      "The notes I found on EngiDocs were invaluable during exam preparation. As an engineering student, sometimes I struggled to keep up with the pace of the lectures. The notes provided different perspectives and explanations that clarified confusing concepts. They also included helpful tips and mnemonics that made remembering information easier. My GPA has improved, and I feel more confident in my classes.",
    contentPosition: "r",
    imageSrc: "/images/ArnabMondal.webp",
  },
  {
    id: 4,
    title: "Debjit Deb Barman",
    description:
      "Being able to access notes from other students has saved me countless hours. It is quite difficult to take thorough notes during lectures. EngiDocs filled in the gaps and ensured I didn’t miss any important information. I also loved contributing my own notes and helping others. It’s created a supportive academic community where we all help each other succeed.",
    contentPosition: "l",
    imageSrc: "/images/debjitDebBarman.webp",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Alumni</h1>
        <div className="mx-auto mt-2 h-1 w-24 bg-orange-500 rounded"></div>
      </div>
      <SwapColumnFeatures />
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }: { featureInView: Feature }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-full p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }: { setFeatureInView: React.Dispatch<React.SetStateAction<Feature>>, featureInView: Feature }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, setFeatureInView, featureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: Feature }) => {
  return (
    <div className="relative h-96 w-96 rounded-full bg-slate-800 shadow-xl overflow-hidden">
      <Image
        src={featureInView.imageSrc}
        alt={featureInView.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Testimonial;
