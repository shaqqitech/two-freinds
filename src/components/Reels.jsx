import Image from "next/image";
import React from "react";

const Reels = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col space-y-16 p-10">
      <h1 className="font-bold text-5xl text-center">Start of the story</h1>
      <div className="w-full flex flex-col lg:flex-row space-y-2">
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
        <section className="w-full h-full flex-1 flex justify-center items-center">
          <div
            className="w-full h-full mx-2 sm:mx-4 md:mx-8 lg:mx-24 lg:my-10"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            <div className="w-full h-full flex justify-center items-center relative">
              <Image src="" alt="Work image" width={500} height={1} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Reels;
