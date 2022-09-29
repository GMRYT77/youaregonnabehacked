import React from "react";

const Header = () => {
  return (
    <section className="relative mt-2 w-full flex flex-col ">
      <div className="relative flex flex-col  w-full px-1 md:px-2 xs:max-w-[410px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1240px] sm:px-2 mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-3 lg:gap-4 md:px-2 px-1 mb-4">
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  order-6">
            3
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] order-7 ">
            1
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px]  order-8">
            2
          </div>
          <div className="bg-white rounded drop-shadow  min-w-full min-h-[300px] order-9 ">
            2
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
