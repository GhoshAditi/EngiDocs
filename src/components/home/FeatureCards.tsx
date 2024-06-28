import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { PiLineSegmentsBold } from "react-icons/pi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { GrResources } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import Card from "../home/card/card";
const cardData = [
  {
    title: "Notes",
    description:
      "Check the availability of the photographer or make-up artist of your segment and mark the date on the calendar.",
    imageUrl: "https://i.postimg.cc/zXG3Fd1d/2.png",
    icon: <BsCalendar2DateFill />,
  },
  {
    title: "Videos",
    description:
      "From our Services tab go through the available photographers and makeup artists and choose the person you like.",
    imageUrl: "https://i.postimg.cc/pLgTxR57/3.png",
    icon: <GrUserWorker />,
  },
  {
    title: "PYQs",
    description:
      "You have to pay 30% of the total amount as an advance to confirm your booking. The remaining amount can be paid after the event.",
    imageUrl: "https://i.postimg.cc/Dyp0jqv7/4.png",
    icon: <GiPayMoney />,
  },

];
const Workflow = () => {
  return (
    <div className="simplify-container">
      <div className="text-black font-playfair p-5">
        <div>
          <h1 className="text-2xl font-semibold font-playfair text-gray-800 capitalize lg:text-3xl">
          Our Other Features
          </h1>
          <div className="mt-2">
            <span className="inline-block w-80 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-5 h-1 ml-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-orange-500 rounded-full"></span>
          </div>
        </div>
        <div className="cardContainer">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;