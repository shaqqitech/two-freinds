import Image from "next/image";
import React from "react";
import Envelope from "./Envelope";

const Reels = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col space-y-16 p-10">
      <h1 className="font-bold text-5xl text-center">Sharing Reels</h1>
      <div className="w-full flex flex-col lg:flex-row-reverse space-y-2">
        {/* Left Box */}
        <section className="w-full lg:flex-1 flex justify-center items-center">
          <div
            className=" flex justify-center items-center lg:items-start flex-col space-y-8"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-yellow-500">
            But what type of reels do we share with each other?
            </h1>
            <h2 className="font-semibold text-slate-500 text-xl sm:text-2xl lg:text-3xl">
            We share every type, which means every type of reel, with each other.
            </h2>

          </div>
        </section>

        {/* Right Box */}
        <section className="w-full h-full flex-1 flex justify-center items-center py-28">
          <div
            className="w-full h-full"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            <div className="w-full h-full flex justify-center items-center">
              <Envelope />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Reels;
