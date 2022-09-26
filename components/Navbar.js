import React from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <section className="relative w-full bg-white backdrop-blur h-fit drop-shadow-md">
        <div className="flex relative container mx-auto py-3 px-1 w-full justify-between items-center">
          <div className="relative w-[223px] h-[49px]">
            <Image src="/logosvg.svg" alt="logo" layout="fill" />
          </div>
          <div className="relative flex gap-4 text-[1.6rem] items-center">
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Get Hacked ..."
                id="search"
                className="bg-neutral-200 rounded-lg outline-1 px-2 py-1 border-[1px] text-[1.2rem] border-transparent focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-neutral-500 "
              />
            </div>
            <BiSearch />
            <FiShoppingCart />
            <HiMenuAlt3 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
