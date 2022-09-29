import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ImGoogle, ImFacebook2, ImTwitter, ImAppleinc } from "react-icons/im";

const login = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <section className="w-full flex px-2 ">
        <div className="flex flex-col w-full max-w-[450px] bg-[#f3f3f3] p-1 mx-auto mt-5 rounded-md">
          <div className="w-full mb-6 text-center text-[1.25rem] font-bold text-neutral-800 uppercase border-b-[1px] border-opacity-60 border-neutral-700">
            Log In
          </div>
          <div className="flex w-full flex-col gap-3 px-4 pb-2 border-b-[1px] border-opacity-60 border-neutral-700">
            <div className="flex items-center justify-center  w-full gap-3 drop-shadow py-2 capitalize bg-white text-center font-semibold cursor-pointer">
              <ImGoogle className="text-[.95rem]" /> <span>google</span>
            </div>
            <div className="flex items-center text-white justify-center  w-full gap-3 drop-shadow py-2 capitalize bg-blue-700 text-center font-semibold cursor-pointer">
              <ImFacebook2 className="text-[.95rem]" /> <span>facebook</span>
            </div>
            <div className="flex items-center text-white justify-center  w-full gap-3 drop-shadow py-2 capitalize bg-blue-500 text-center font-semibold cursor-pointer">
              <ImTwitter className="text-[.95rem]" /> <span>twitter</span>
            </div>
            <div className="flex items-center text-white justify-center  w-full gap-3 drop-shadow py-2 capitalize bg-neutral-800 text-center font-semibold cursor-pointer">
              <ImAppleinc className="text-[.95rem]" /> <span>apple</span>
            </div>
          </div>
          <div className="w-8/12 text-[.775rem] font-semibold my-2 mx-auto text-center">
            <span>By signing in you agree our </span>
            <Link href="/">
              <a>
                <span className="text-blue-900 hover:underline">
                  Terms and Conditions
                </span>
              </a>
            </Link>
            <span> , </span>
            <Link href="/">
              <a>
                <span className="text-blue-900 hover:underline">
                  Privacy Policy
                </span>
              </a>
            </Link>
            <span> and </span>
            <Link href="/">
              <a>
                <span className="text-blue-900 hover:underline">
                  Hacking Policy
                </span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
