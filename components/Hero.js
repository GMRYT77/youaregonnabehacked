import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-[500px] px-1  mt-4 lg:mt-6">
      <div className="flex flex-col  w-full px-1 md:px-2 xs:max-w-[410px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1240px] sm:px-2 mx-auto">
        <div className="w-full flex-1 bg-white p-3 mb-4 rounded-full "></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-3 lg:gap-4 md:px-2 px-1">
          <div className="bg-white rounded drop-shadow  min-w-[220px] min-h-[300px]  col-span-2">
            1
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  col-span-2">
            2
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] order-4  lg:order-3">
            3
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] col-span-2">
            1
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  ">
            2
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  ">
            3
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  ">
            1
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  ">
            2
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  ">
            2
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Hero;
