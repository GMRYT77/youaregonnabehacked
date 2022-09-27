import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-[500px] px-1  mt-2">
      <div className="flex flex-col  w-full px-1 md:px-2 xs:max-w-[410px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1240px] sm:px-2 mx-auto">
        <div className="grid grid-cols-4">
          <div className="flex w-full min-h-[250px] p-1 bg-white">
            <div className=""></div>
            <div className="">
              <Image src="/shoe.jpg" width={100} height={100} />
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Hero;
