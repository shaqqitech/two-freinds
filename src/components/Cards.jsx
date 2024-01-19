"use client";
import React, { useState } from "react";
import { cardsData } from "@/Data/Data";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";
// import img1 from '../../public/images/img1.jpg';

const Cards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const rotateCard = (index) => {
    const degrees = (index - currentCard) * -25;
    return {
      transform: `rotate(${degrees}deg)`,
      zIndex: 10 - Math.abs(index - currentCard),
    };
  };

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % 15);
  };

  const prevCard = () => {
    setCurrentCard((currentCard - 1 + 15) % 15);
  };

  return (
    <main className="w-full h-full flex justify-center items-center flex-col relative space-y-5">
      <section className="w-96 h-96 relative flex justify-center items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-40 h-80 absolute rounded-3xl overflow-hidden ring-4 ring-yellow-400 transform transition-transform ease-in-out duration-500"
            style={rotateCard(index)}
          >
            <Image
              src={card.img}
              alt={`Card ${index + 1}`}
              // layout="fill"
              // objectFit="cover"
              fill
              sizes="100%"
            />
            {index !== currentCard && (
              <div
                className="w-full h-full absolute bg-black opacity-50 rounded-3xl"
                style={{ backdropFilter: "blur(12px)" }}
              ></div>
            )}
          </div>
        ))}
      </section>
      <div className="flex space-x-5 mt-4">
        <button
          className="w-10 h-10 flex justify-center items-center font-bold rounded-full"
          onClick={prevCard}
        >
          <GrPrevious size={20} className="text-white" />
        </button>
        <button
          className="w-10 h-10 flex justify-center items-center  font-bold rounded-full"
          onClick={nextCard}
        >
          <GrNext size={20} className="text-white" />
        </button>
      </div>
    </main>
  );
};

export default Cards;
