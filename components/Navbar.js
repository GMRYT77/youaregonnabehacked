import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <section className="relative w-full bg-white backdrop-blur h-fit drop-shadow-md px-1">
        <div className="flex relative max-w-[1240px] mx-auto py-3 px-1 w-full justify-between items-center">
          <div className="relative w-[174.4px] h-[39.2px] sm:w-[223px] sm:h-[49px]">
            <Link href="/">
              <a>
                <Image src="/logosvg.svg" alt="logo" layout="fill" />
              </a>
            </Link>
          </div>
          <div className="relative gap-4 text-[1.6rem] items-center flex">
            <div className="relative hidden md:block">
              <input
                type="text"
                name="search"
                placeholder="Get Hacked ..."
                id="search"
                className="bg-neutral-200 rounded-lg outline-1 px-2 py-1 border-[1px] text-[1.2rem] border-transparent focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-neutral-500 "
              />
            </div>
            <BiSearch className="flex md:hidden cursor-pointer" />
            <FiShoppingCart className="cursor-pointer" />
            <HiMenuAlt3 className="flex md:hidden cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
