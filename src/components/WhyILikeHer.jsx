import Image from "next/image";
import React from "react";

const WhyILikeHer = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col space-y-16 mt-10">
      <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-yellow-500">Why do I miss or like her so much ?</h1>
      <div className="w-full flex flex-col lg:flex-row space-y-2">
        {/* Left Box */}
        <section className="w-full lg:flex-1 flex justify-center items-center">
          <div
            className=" flex justify-center items-center flex-col space-y-8"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <p className="font-semibold lg:w-1/2 text-slate-500 text-xl sm:text-2xl lg:text-3xl text-center">
              Me usay itna miss is liye karta hun ke us jesi dost mujhy shayad dubara na mile. Meri kabhi bhi koi girl best-friend nahi rahi or ik hi best-friend mili aur wo bhi aisi ke shayad dubara mujhy kabhi bhi na mile. Wo ik behtreen dost hone ke sath sath itne achi insan thi ke koi chah kar bhi wesa ban'na chahe to bhi na ban paye. Me itna miss is liye karta hun ke us ne mujhy bohat kuch sikhaya hai jo me bilkul bhi nahi janta tha.
              <br />
              Aur me us ko like is liye karta hun ke wo wahid aisa insan or dost thi jise kuch kehne ke liye mujhy kabhi bhi sochna nahi para ke ye bura lagega. Me apni life ki chhoti se chhoti baat bhi bina kuch soche samjhy us ke sath share kiya karta tha. 
            </p>

          </div>
        </section>
      </div>
    </main>
  );
};

export default WhyILikeHer;
