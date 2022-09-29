import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [itemCount, setItemCount] = useState(0);
  const toggleCart = () => {
    if (
      ref.current.classList.contains("-translate-y-[500px]") &&
      ref.current.classList.contains("-translate-y-[500px]")
    ) {
      ref.current.classList.remove("-translate-y-[500px]");
      ref.current.classList.add("translate-y-0");
    } else if (!ref.current.classList.contains("-translate-y-[500px]")) {
      ref.current.classList.add("-translate-y-[500px]");
      ref.current.classList.remove("translate-y-0");
    }
  };
  const ref = useRef();
  var subMenuLi =
    "pl-1 pb-2 text-neutral-700 opacity-70 hover:opacity-100 hover:text-neutral-900 transition-[50ms]";
  var cartItem =
    "w-full grid gap-[.1rem] grid-cols-[70px_3fr_35px_35px] h-fit max-h-[90px] overflow-hidden shadow-lg mb-1 bg-white";

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
            <ul className="hidden lg:flex relative mx-auto py-1 px-1 items-center text-[.975rem] font-semibold z-[100]">
              <li className="group flex flex-col cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                <span className="">Products</span>
                <div className=" absolute hidden group-hover:block pt-5 mt-7 -ml-3">
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
              <li className="group flex cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                Category
                <div className=" absolute hidden group-hover:block pt-5 mt-7 -ml-[98.3px] ">
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
              <li className="group flex cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                Offer Zone
                <div className=" absolute hidden group-hover:block pt-5 mt-7 -ml-[187.2px]">
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
              <li className="group flex cursor-pointer hover:bg-neutral-300 hover:bg-opacity-70 transition-[150ms] px-3 pb-[.3rem] pt-1">
                More
                <div className=" absolute hidden group-hover:block pt-5 mt-7 -ml-[287.9px]">
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
              <BiSearch className="absolute right-1 top-2 cursor-pointer" />
            </div>
            <BiSearch className="flex md:hidden cursor-pointer" />
            <div className="flex">
              <FiShoppingCart
                className="cursor-pointer block"
                onClick={toggleCart}
              />
              <div
                ref={ref}
                className="absolute flex flex-col top-full bg-white px-2 py-1 right-0 text-[.85rem] min-w-[280px] max-w-[320px] xs:max-w-[400px] mt-5 -translate-y-[500px] z-[98] transition  ease-in-out"
              >
                <div className="relative flex w-full justify-between text-[.925rem] border-b-[1px] border-neutral-500 pb-[.4rem]">
                  <span
                    className="font-semibold "
                    onClick={() => setItemCount(itemCount + 1)}
                  >
                    Hack Cart
                  </span>
                  <div
                    className="bg-neutral-800 text-white font-bold text px-[.4rem] rounded-full"
                    id="counter"
                  >
                    {itemCount}
                  </div>
                </div>
                <div className="relative block w-full py-1 max-h-[380px] overflow-y-auto ">
                  {itemCount === 0 ? (
                    <div className="w-full p-2 flex h-12 items-center">
                      <span className="font-bold">Empty</span>
                    </div>
                  ) : (
                    <div className={cartItem}>
                      <div className="relative w-[70px] h-[70px]">
                        <Image
                          src="/shoe.jpg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <p className="flex w-full text-[.725rem] font-semibold ml-1 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Soluta aperiam iste dolorum obcaecati pariatur
                      </p>
                      <div className="flex flex-col items-center justify-start gap-2">
                        <div className="font-bold">Qty</div>
                        <div className="">1</div>
                      </div>
                      <div className="flex justify-center items-center text-[1.3rem]">
                        <MdCancel
                          className="text-red-600 cursor-pointer"
                          onClick={() => setItemCount(itemCount - 1)}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between py-1 border-[1px] border-t-neutral-500 border-opacity-60 pt-2">
                  <button className="px-4 pt-1 pb-[.3rem] font-semibold">
                    View Cart
                  </button>
                  <button className="px-4 pt-1 pb-[.3rem] bg-green-400 text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <HiMenuAlt3 className="flex md:hidden cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
