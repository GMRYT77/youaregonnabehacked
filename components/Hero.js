import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] mt-4 lg:mt-6">
      <div className="relative flex flex-col  w-full md:px-2 xs:max-w-[410px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1240px] sm:px-2 mx-auto">
        <div className="hidden     relative w-full bg-white p-3 mb-4 rounded-full md:px-2 px-1">
          heyy
        </div>
        <div className="relative grid grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-3 lg:gap-4 md:px-2 px-1 mb-4">
          <div className="bg-white rounded drop-shadow  min-w-[220px] min-h-[300px] order-1 col-span-2">
            1
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] order-2 col-span-2">
            2
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] order-4 lg:order-3">
            3
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] order-3 lg:order-4 col-span-2">
            1
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  order-5">
            2
          </div>
        </div>
        <span className="h-[4px] w-full bg-white rounded-full mb-4"></span>
      </div>
    </section>
  );
};

export default Hero;
