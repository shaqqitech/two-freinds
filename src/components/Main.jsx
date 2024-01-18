import React from "react";
import { kalam } from "@/app/fonts";

const Main = () => {
  return (
    <main className={` w-full h-screen flex flex-col`}>
      <section className="w-full h-10 flexCenter">
        <h1 className="text-center font-bold text-2xl">Two-Friends</h1>
      </section>
      <section
        className="w-full h-full flexCol text-xl sm:text-2xl md:text-4xl lg:text-6xl space-y-3"
        data-aos="fade-left"
        data-aos-duration="400"
      >
        <h4 className="text-slate-400">This is a Story of</h4>
        <h1 className="font-bold">Two Friends Who Met Online</h1>
        <h4 className="text-slate-400">On Instagram</h4>
        <h4 className="text-slate-400">Approx. 4 years ago.</h4>
      </section>
    </main>
  );
};

export default Main;
