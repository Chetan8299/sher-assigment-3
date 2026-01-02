import React from "react";
import { RiArrowDownLongLine } from "@remixicon/react";

const Hero = () => {
  return (
    <main className="container">
      <div className="bg-[url(/images/hero.png)] w-full h-142 md:h-180 bg-no-repeat bg-top rounded-4xl">
        <div className="h-full w-full flex flex-col md:flex-row items-start justify-end gap-2 md:items-end md:justify-between p-10 md:p-20">
          <div>
            <h1 className="uppercase text-5xl md:text-6xl lg:text-9xl font-light">
              Design <br /> <span className=" ml-12 md:ml-36"> & Freedom</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl w-3/4 md:pl-40 text-gray">
              Explore Independent Style by Embracing Uniqueness with Our
              Exclusive Designer Apparel
            </p>
          </div>
          <button className="text-gray flex gap-3 items-center text-xl outline-none border-none cursor-pointer">
            {" "}
            <div className="bg-gray/20 rounded-full p-2 outline outline-white/50 ">
              <RiArrowDownLongLine size={18} />
            </div>
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

