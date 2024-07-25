import { motion } from "framer-motion";
import { useRef, useState } from "react";

type ListOrderItem = "front" | "middle" | "back";

const ShuffleCards = () => {
  const [order, setOrder] = useState<ListOrderItem[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as ListOrderItem);
    setOrder(orderCopy);
  };

  return (
    <div className="px-2 py-6 overflow-clip text-slate-50 sm:px-32 md:px-16 lg:px-32">
      <div className="relative mx-auto h-[450px] w-[315px] sm:w-[350px] md:w-[400px] lg:w-[450px]">
        <Card
          imgUrl="/images/notes.webp"
          testimonial="Get Notes, Ace Exams: Your Success Starts Here!."
          
          handleShuffle={handleShuffle}
          position={order[0]}
        />
        <Card
          imgUrl="/images/videos.webp"
          testimonial="Can&apos;t Crack the Notes? Watch, Learn, and Master Your Exams with Video Solutions!"
          
          handleShuffle={handleShuffle}
          position={order[1]}
        />
        <Card
          imgUrl="/images/pyqs.webp"
          testimonial="Ready to Test Your Knowledge? Master Your Sem Exams with Our PYQs!"
          
          handleShuffle={handleShuffle}
          position={order[2]}
        />
      </div>
    </div>
  );
};

interface CardProps {
  handleShuffle: Function;
  testimonial: string;
  position: ListOrderItem;
  imgUrl: string;
}

const Card = ({
  handleShuffle,
  testimonial,
  position,
  imgUrl,
  
}: CardProps) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[90%] max-w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-300 bg-gray-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        
        className="pointer-events-none mx-auto h-60 w-50 rounded-full border-2 border-white bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-background">
      &quot;{testimonial}&quot;
      </span>
      
    </motion.div>
  );
};

export default ShuffleCards;
