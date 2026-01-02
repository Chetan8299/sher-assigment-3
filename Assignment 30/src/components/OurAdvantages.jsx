import { RiArrowRightUpLine } from "@remixicon/react";
import React from "react";

const OurAdvantages = () => {
  return (
    <section className="container">
      <h1 className="uppercase text-3xl md:text-5xl my-4">Our Advantages</h1>

      <div className="top py-4 flex flex-col md:flex-row w-full gap-4">
        <div className="bg-[url(/images/girlModel.png)] min-h-60 bg-no-repeat object-cover md:w-1/2 rounded-2xl"></div>
        <div className="flex flex-col md:w-1/2 gap-4">
          <div className="bg-secondary-black rounded-2xl p-10 flex flex-col md:flex-row items-end">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">INDEPENDENT DESIGNERS</h1>
              <p className="font-heading text-gray">
                Our platform celebrates the ingenuity of independent designers,
                offering a diverse range of fashion-forward garments that
                reflect the creativity and innovation of the artists behind
                them. Explore curated collections showcasing unique creations by
                independent designers.
              </p>
            </div>
            <button className="flex items-center gap-2">
              <div className="bg-gray/20 rounded-full p-2 outline outline-white/50 ">
                <RiArrowRightUpLine size={18} />
              </div>
              <div>EXPLORE</div>
            </button>
          </div>
          <div className="bg-secondary-black rounded-2xl p-10 flex flex-col md:flex-row items-end">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">EXCLUSIVE & UNIQUITY</h1>
              <p className="font-heading text-gray">
                Indulge in curated collections showcasing exclusive,
                one-of-a-kind pieces, each with its own story and charm.
                Experience the allure of unique fashion pieces that radiate
                sophistication and individuality, curated for those who seek
                exclusivity.
              </p>
            </div>
            <button className="flex items-center gap-2">
              <div className="bg-gray/20 rounded-full p-2 outline outline-white/50 ">
                <RiArrowRightUpLine size={18} />
              </div>
              <div>EXPLORE</div>
            </button>
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col md:flex-row-reverse w-full gap-4">
        <div className="bg-[url(/images/mannequins.png)] min-h-60 bg-no-repeat object-contain md:w-1/2 rounded-2xl"></div>
        <div className="flex flex-col md:w-1/2 gap-4">
          <div className="bg-secondary-black rounded-2xl p-10 flex flex-col md:flex-row items-end">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">HIGH QUALITY</h1>
              <p className="font-heading text-gray">
                Embrace superior craftsmanship with our meticulously curated,
                enduringly high-quality garments. Discover garments crafted with
                utmost attention to detail and finest materials, promising
                longevity and timeless style.
              </p>
            </div>
            <button className="flex items-center gap-2">
              <div className="bg-gray/20 rounded-full p-2 outline outline-white/50 ">
                <RiArrowRightUpLine size={18} />
              </div>
              <div>EXPLORE</div>
            </button>
          </div>
          <div className="bg-secondary-black rounded-2xl p-10 flex flex-col md:flex-row items-end">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">ECO-FRIENDLY</h1>
              <p className="font-heading text-gray">
                Join our commitment to sustainability with eco-friendly fashion
                options, stylish yet mindful of our planet. Explore guilt-free
                shopping with our eco-conscious collections, crafted with
                planet-friendly materials and ethical practices.
              </p>
            </div>
            <button className="flex items-center gap-2">
              <div className="bg-gray/20 rounded-full p-2 outline outline-white/50 ">
                <RiArrowRightUpLine size={18} />
              </div>
              <div>EXPLORE</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
