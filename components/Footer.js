import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  var footerLi =
    "text-[.925rem] font-semibold opacity-75 text-neutral-700 hover:text-neutral-900 hover:opacity-100 hover:underline";
  var footerHeader =
    "text-[1rem] uppercase font-bold opacity-60 text-neutral-900 pt-1 pb-2";

  return (
    <footer className="w-full bg-white px-1 sm:px-2">
      <div className="max-w-[1280px] sm:max-w-[710px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1240px] mx-auto">
        <div className="w-full flex justify-between items-center border-[1px] py-2 px-1 sm:px-2 border-b-neutral-700 border-opacity-50">
          <div className="relative w-[178.4px] h-[39.2px]">
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
            <div className="flex gap-4 xs:gap-0 flex-col xs:flex-row w-1/2">
              <div className="w-1/2  px-2 flex gap-[.35rem] flex-col">
                <h3 className={footerHeader}>About</h3>
                <ul className="flex flex-col w-1/2 gap-1">
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Contact Us</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>About Us</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Privacy Policy</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Wholesale</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Getting Hacked</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Info</li>
                    </a>
                  </Link>
                </ul>
              </div>
              <div className="w-1/2 px-2 flex gap-[.35rem] flex-col">
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
            <div className="flex gap-4 xs:gap-0 flex-col xs:flex-row w-1/2">
              <div className="w-1/2 px-2 flex gap-[.35rem] flex-col">
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
                </ul>
              </div>
              <div className="w-1/2 px-2 flex gap-[.35rem] flex-col">
                <h3 className={footerHeader}>Social</h3>
                <ul className="flex flex-col w-1/2 gap-1">
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Facebook</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Twitter</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li className={footerLi}>Youtube</li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 my-1 px-2 border-[1px] border-l-neutral-600 border-opacity-50">
            <div className="">g</div>
          </div>
        </div>

        <div className="w-full text-center py-3 border-[1px] border-t-neutral-600 opacity-70 font-semibold px-1 border-opacity-50">
          <span>Hack Store &#169; 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
