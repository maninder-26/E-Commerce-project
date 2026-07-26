import React from "react";
import girl from "../../assets/girl.png";

const Offers = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-blue-100 to-green-400 rounded-3xl overflow-hidden">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10">

          {/* Left */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Exclusive
            </h1>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Offers For You
            </h1>

            <p className="mt-4 text-base md:text-xl font-semibold">
              ONLY ON BEST SELLERS PRODUCT
            </p>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full text-white font-semibold">
              Check Now
            </button>

          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">

            <img
              src={girl}
              alt="Offer"
              className="w-60 sm:w-72 md:w-80 lg:w-[420px] h-auto object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Offers;