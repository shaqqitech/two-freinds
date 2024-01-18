import Image from "next/image";
import React from "react";

const SiteMade = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col space-y-16">
      <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-yellow-500">Why I made this site ??</h1>
      <div className="w-full flex flex-col lg:flex-row space-y-2">
        {/* Left Box */}
        <section className="w-full lg:flex-1 flex justify-center items-center">
          <div
            className=" flex justify-center items-center flex-col space-y-8"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <p className="font-semibold lg:w-1/2 text-slate-500 text-xl sm:text-2xl lg:text-3xl text-center">
              Kyu ke wo raat bhar baatein karna, Wo ik sath movies dekhna, Wo ik dusre ke sath reels share karna, Wo rozana ki chhoti se chhoti baat ik dusre ko batana, Wo uska apni streaks send karna aur kuch streaks aisi ke jo sirf mere liye hoti thi, Wo us ka mood off hona to mere sath baatein karna, Wo uska "Cute moment Ali" kehna.
              <br />
              Aj bhi mujhy bohat zyada yaad ata hai Dost, Bohat Zyada yaad ata hai.
            </p>

          </div>
        </section>
      </div>
    </main>
  );
};

export default SiteMade;
