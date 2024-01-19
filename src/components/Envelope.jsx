"use client";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { envelopeData } from "@/Data/Data";
import Image from "next/image";
import img1 from "../../public/screenshots/pic1.jpg";
import img2 from "../../public/screenshots/pic2.jpg";
import img3 from "../../public/screenshots/pic3.jpg";
import img4 from "../../public/screenshots/pic4.jpg";
import img5 from "../../public/screenshots/pic5.jpg";
import img6 from "../../public/screenshots/pic6.jpg";
import img7 from "../../public/screenshots/pic7.jpg";
import img8 from "../../public/screenshots/pic8.jpg";
import img9 from "../../public/screenshots/pic9.jpg";
import img10 from "../../public/screenshots/pic10.jpg";
import img11 from "../../public/screenshots/pic11.jpg";
import img12 from "../../public/screenshots/pic12.jpg";
import img13 from "../../public/screenshots/pic13.jpg";
import img14 from "../../public/screenshots/pic14.jpg";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const envelopeData = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? envelopeData.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === envelopeData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Complete Enelope */}
      <div className="w-80 h-60 relative">
        {/* Evelope 4 pages */}
        <div
          className="w-80 h-60 ring-4 ring-rose-800 overflow-hidden cursor-pointer  rounded-xl absolute"
          onClick={handleClick}
        >
          <div className="w-60 h-80 -right-[185px] absolute ring-2 ring-rose-800 -rotate-45 bg-white z-20 bg-gradient-to-l from-pink-600 via-pink-700 to-red-800"></div>
          <div className="w-60 h-80 -left-[185px] absolute ring-2 ring-rose-800 rotate-45 bg-white z-20 bg-gradient-to-r from-pink-600 via-pink-700 to-red-800"></div>
          <div className="w-60 h-80 left-3 -bottom-[185px] rounded-t-3xl absolute ring-2 ring-rose-800 rotate-45 z-20 bg-white bg-gradient-to-tr from-pink-600 via-pink-700 to-red-800"></div>
          <div
            className={`w-60 h-80 right-3 -top-[195px] rounded-b-3xl absolute ring-2 ring-rose-800 transition-all ease-out delay-300 bg-gradient-to-b from-pink-600 via-pink-700 to-red-800 ${
              isOpen ? "-z-50" : "rotate-45 z-20"
            }  bg-white`}
          ></div>
        </div>
        {/* Evelope Cards */}
        <div
          className={`w-full h-full scrollbar-default absolute bg-black ring-2 ring-white z-10 transition-all ease-out delay-300 rounded-xl p-1 text-white ${
            isOpen ? "-translate-y-32" : "translate-y-0"
          }`}
        >
          <MdChevronLeft
            size={30}
            className="bg-white left-1 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
            onClick={prevCard}
          />
          <div className="w-full h-full border-2 border-white border-dashed rounded-lg z-10">
            {/* content div with images */}
            <div className="w-full h-full flex flex-col text-white text-center space-y-2">
              <Image
                src={envelopeData[currentIndex].img}
                alt={`Envelope Image ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Additional content if needed */}
            </div>
          </div>
          <MdChevronRight
            size={30}
            className="bg-white right-1 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
            onClick={nextCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Envelope;
