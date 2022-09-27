import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  var footerLi =
    "text-[.825rem] font-semibold opacity-75 text-neutral-700 hover:text-neutral-900 hover:opacity-100 hover:underline pb-[1px]";
  var footerHeader =
    "text-[1rem] uppercase font-bold opacity-60 text-neutral-900 pt-1 pb-2";

  return (
    <footer className="w-full bg-white px-1 sm:px-2">
      <div className="max-w-[1280px] sm:max-w-[710px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1240px] mx-auto">
        <div className="w-full flex justify-between items-center border-[1px] py-2 px-1 sm:px-2 border-b-neutral-700 border-opacity-30">
          <div className="relative w-[156.1px] h-[34.3px]">
            <Link href="/">
              <a>
                <Image src="/logosvg.svg" alt="logo" layout="fill" />
              </a>
            </Link>
          </div>
          <div className="flex gap-6 text-[1.6rem] text-neutral-500">
            <BsFacebook className="hover:text-blue-900 cursor-pointer transition-[250ms]" />
            <BsTwitter className="hover:text-blue-600 cursor-pointer transition-[250ms]" />
            <BsYoutube className="hover:text-red-600 cursor-pointer transition-[250ms]" />
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row justify-between mb-2 px-1 sm:px-2">
          <div className="flex  justify-between w-full md:w-8/12 my-2">
            <div className="flex gap-4 md:gap-0 flex-col md:flex-row w-1/2">
              <div className="w-full md:w-1/2 md:px-3  px-2 flex gap-[.35rem] flex-col">
                <h3 className={footerHeader}>About</h3>
                <ul className="flex flex-col w-1/2 gap-1">
                  <Link href="/5">
                    <a>
                      <li className={footerLi}>Contact Us</li>
                    </a>
                  </Link>
                  <Link href="/4">
                    <a>
                      <li className={footerLi}>About Us</li>
                    </a>
                  </Link>
                  <Link href="/63">
                    <a>
                      <li className={footerLi}>Privacy Policy</li>
                    </a>
                  </Link>
                  <Link href="/43">
                    <a>
                      <li className={footerLi}>Wholesale</li>
                    </a>
                  </Link>
                  <Link href="/4">
                    <a>
                      <li className={footerLi}>Getting Hacked</li>
                    </a>
                  </Link>
                  <Link href="/6">
                    <a>
                      <li className={footerLi}>Info</li>
                    </a>
                  </Link>
                </ul>
              </div>
              <div className="w-full md:w-1/2 px-2 flex gap-[.35rem] flex-col">
                <h3 className={footerHeader}>Help</h3>
                <ul className="flex flex-col w-1/2 gap-1">
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Payments</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Shipping</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Scam</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Cancellation & Retun</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>FAQ</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Repot</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Scams !!!</li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 md:gap-0 flex-col md:flex-row w-1/2">
              <div className="w-full md:w-1/2 px-2 flex gap-[.35rem] flex-col">
                <h3 className={footerHeader}>Policy</h3>
                <ul className="flex flex-col w-1/2 gap-1">
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Return Policy</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Terms of Use</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Security</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Sitemap</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Hacking Policy</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Buying Policy</li>
                    </a>
                  </Link>
                </ul>
              </div>
              <div className="w-full md:w-1/2 px-2 flex gap-[.35rem] flex-col">
                <h3 className={footerHeader}>Acount</h3>
                <ul className="flex flex-col w-1/2 gap-1">
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Profile</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Acoount</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Sell</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Wish List</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Recommendation</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Membership</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Manage Devices</li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-4/12 my-1 px-2  ">
            <div className={footerHeader}>Contact Us</div>
            <form
              className="flex flex-col gap-3 text-[.85rem] font-semibold"
              action="../pages/api/contactus.js"
            >
              <div className="grid grid-cols-[1fr_3fr] items-center ">
                <label htmlFor="name" className="text-neutral-500">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="border-neutral-400 border-[1px] border-opacity-50 focus-visible:outline-0 focus-visible:border-opacity-100  p-1 w-full "
                />
              </div>
              <div className="grid grid-cols-[1fr_3fr] items-center ">
                <label htmlFor="email" className="text-neutral-500">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="border-neutral-400 border-[1px] border-opacity-50 focus-visible:outline-0 focus-visible:border-opacity-100  p-1 w-full"
                />
              </div>
              <div className="grid grid-cols-[1fr_3fr]">
                <label htmlFor="text" className="text-neutral-500">
                  Message:
                </label>
                <textarea
                  type="text"
                  name="text"
                  id="text"
                  row="3"
                  required
                  className="border-neutral-400 border-[1px] border-opacity-50 focus-visible:outline-0 focus-visible:border-opacity-100  p-1 w-full"
                />
              </div>
              <div className="grid grid-cols-[1fr_3fr]">
                <div className=""></div>
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="w-fit px-6 pt-1 pb-[.3rem] bg-blue-400 text-white tracking-wider cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-full text-center py-3 border-[1px] border-t-neutral-600 opacity-70 font-semibold px-1 border-opacity-30">
          <span>Hack Store &#169; 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
