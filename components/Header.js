import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../ItemData/data";

const Header = () => {
  return (
    <section className="relative w-full flex flex-col ">
      <div className="relative flex flex-col  w-full px-1 md:px-2 xs:max-w-[410px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1240px] sm:px-2 mx-auto">
        <div className="relative grid grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-3 lg:gap-4 md:px-2 px-1 mb-4">
          <div className="relative flex flex-col gap-1 bg-white rounded drop-shadow  min-w-full min-h-[300px] p-2">
            <div className="relative w-full h-[180px]">
              <Image src="/shoe.jpg" layout="fill" objectFit="cover" />
            </div>

            <div className="relative flex flex-col">
              <span className="tracking-wide text-neutral-600 text-[.875rem] font-semibold">
                Shoes
              </span>
              <p className="text-[.925rem] text-neutral-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae, maxime.
              </p>
              <div className="flex items-baseline my-1">
                <b className="text-[.75rem] font-bold pr-[1px]">₹</b>
                <span className="text-[1.15rem] font-bold ">899</span>.
                <span className="text-[.9rem] font-semibold">00</span>
              </div>
              <div className="relative flex gap-2 mb-2">
                <Image src="/FillStar.svg" width={22} height={22} />
                <Image src="/FillStar.svg" width={22} height={22} />
                <Image src="/FillStar.svg" width={22} height={22} />
                <Image src="/FillStar.svg" width={22} height={22} />
                <Image src="/HollowStar.svg" width={22} height={22} />
              </div>
            </div>

            <div className="w-full bg-blue-400 py-2 text-center text-semibold text-white rounded cursor-pointer">
              Add to Cart
            </div>
          </div>
          {products.map((d, idx) => {
            return (
              <div
                key={idx}
                className="relative flex flex-col gap-1 bg-white rounded drop-shadow  min-w-full min-h-[300px] p-2"
              >
                <div className="flex w-full"></div>

                <div className="relative w-full h-[180px]">
                  <Image src={d.img} layout="fill" objectFit="cover" />
                </div>

                <div className="relative flex flex-col">
                  <span className="tracking-wide text-neutral-600 text-[.875rem] font-semibold capitalize">
                    {d.category}
                  </span>
                  <p className="text-[.925rem] text-neutral-700">{d.name}</p>
                  <div className="flex items-baseline my-1">
                    <b className="text-[.75rem] font-bold pr-[1px]">₹</b>
                    <span className="text-[1.15rem] font-bold ">{d.price}</span>
                    .
                    <span className="text-[.9rem] font-semibold">{d.deci}</span>
                  </div>
                  <div className="relative flex gap-2 mb-2">
                    <Image src="/FillStar.svg" width={22} height={22} />
                    <Image src="/FillStar.svg" width={22} height={22} />
                    <Image src="/FillStar.svg" width={22} height={22} />
                    <Image src="/FillStar.svg" width={22} height={22} />
                    <Image src="/HollowStar.svg" width={22} height={22} />
                  </div>
                </div>
                <Link href={d.slug}>
                  <a>
                    <div className="w-full bg-blue-400 py-2 text-center text-semibold text-white rounded cursor-pointer">
                      Add to Cart
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
