import Image from "next/image";
import React from "react";

const FinalWords = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col space-y-16">
      <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-yellow-500">Final Words ??</h1>
      <div className="w-full flex flex-col lg:flex-row space-y-2">
        {/* Left Box */}
        <section className="w-full lg:flex-1 flex justify-center items-center">
          <div
            className=" flex justify-center items-center flex-col space-y-8"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <p className="font-semibold lg:w-1/2 text-slate-500 text-xl sm:text-2xl lg:text-3xl text-center">
                May Allah keep her and her husband and her family members happy forever.💕🤲
            </p>

          </div>
        </section>
      </div>
    </main>
  );
};

export default FinalWords;
