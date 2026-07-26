import React from "react";
import { ArrowRight } from "lucide-react";
import men from "../../assets/men.png";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-green-400 to-blue-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10">

        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">

          <h1 className="text-lg md:text-xl font-semibold text-gray-900">
            Best Deals ! Best Prices !
          </h1>

          <div className="flex justify-center md:justify-start items-center mt-4">
            <p className="font-bold text-4xl md:text-5xl">New</p>

            <img
              className="w-10 h-10 ml-2"
              src="https://www.svgrepo.com/show/433961/waving-hand.svg"
              alt="wave"
            />
          </div>

          <p className="font-bold text-4xl md:text-5xl">
            Collections
          </p>

          <p className="font-bold text-4xl md:text-5xl">
            For Everyone
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto md:mx-0">
            Latest Collection
            <ArrowRight size={20} />
          </button>

        </div>

        {/* Right Section */}

        <div className="flex-1 flex justify-center mb-8 md:mb-0">

          <img
            src={men}
            alt="hero"
            className="w-60 sm:w-72 md:w-80 lg:w-[420px] h-auto object-contain"
          />

        </div>

      </div>
    </div>
  );
};

export default Hero;