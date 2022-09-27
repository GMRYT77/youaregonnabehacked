import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  var subMenuLi =
    "pl-1 pb-2 text-neutral-700 opacity-70 hover:opacity-100 hover:text-neutral-900 transition-[50ms]";
  return (
    <>
      <section className="sticky top-0 flex flex-col w-full bg-white backdrop-blur h-fit drop-shadow-md py-[.1rem] px-1 z-[99999]">
        <div className="flex relative max-w-[1240px] mx-auto py-1 px-1 w-full justify-between items-center">
          <div className="relative w-[156.1px] h-[34.3px] sm:w-[200.7px] sm:h-[44.1px]">
            <Link href="/">
              <a>
                <Image src="/logosvg.svg" alt="logo" layout="fill" />
              </a>
            </Link>
          </div>
          <div className="relative gap-4 text-[1.6rem] items-center flex">
            <ul className="hidden lg:flex relative mx-auto py-1 px-1 items-center text-[.975rem] font-semibold ">
              <li className="group cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                Products
                <div className=" absolute hidden group-hover:block pt-5  -ml-3">
                  <ul className="grid grid-cols-[150px_150px_150px] gap-1 bg-white pl-3 py-2 text-[.795rem] font-semibold drop-shadow-md">
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Mobile</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Laptops</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Speaker</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Camera</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Health Care</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Tablets</li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                Category
                <div className=" absolute hidden group-hover:block pt-5 -ml-[98.3px] ">
                  <ul className="grid grid-cols-[150px_150px_150px] gap-1 bg-white pl-3 py-2 text-[.795rem] font-semibold drop-shadow-md">
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Mobile</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Laptops</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Speaker</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Camera</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Health Care</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Tablets</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                Offer Zone
                <div className=" absolute hidden group-hover:block pt-5  -ml-[187.2px]">
                  <ul className="grid grid-cols-[150px_150px_150px] gap-1 bg-white pl-3 py-2 text-[.795rem] font-semibold drop-shadow-md">
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Mobile</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Laptops</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Speaker</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Camera</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Health Care</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Tablets</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                More
                <div className=" absolute hidden group-hover:block pt-5  -ml-[287.9px]">
                  <ul className="grid grid-cols-[150px_150px_150px] gap-1 bg-white pl-3 py-2 text-[.795rem] font-semibold drop-shadow-md">
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shirt</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Shoes</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Watches</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Books</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Furniture</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Television</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Mobile</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Laptops</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Speaker</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Camera</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Health Care</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li className={subMenuLi}>Tablets</li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="relative hidden md:block">
              <input
                type="text"
                name="search"
                placeholder="Get Hacked ..."
                id="search"
                className="bg-[#f5f5f5] text-neutral-800 outline-0 px-2 py-[.1rem] border-[1px] border-neutral-500 border-opacity-30 text-[1.2rem] border-transparent focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-neutral-700 "
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
