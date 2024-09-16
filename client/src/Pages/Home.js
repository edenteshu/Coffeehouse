import React from "react";
import Heroimg from "../assets/hero.png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="sm:bg-[#FDE1B9] md:bg-[#8F0200]">
    <div className="container pb-8 sm:pb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {/* Image section */}
        <div className="min-h-[450px] flex flex-col justify-center items-center relative order-1 sm:order-2">
          <img
            src={Heroimg}
            alt="Ethiopian Coffee"
            className="w-[650px] sm:w-[450px] mx-auto drop-shadow-lg"
          />
          <button className="bg-[#FFC028] border-2 border-primary p-2 rounded-2xl mt-4 py-1 px-4 hover:scale-105 duration-200 hover:text-black">
            <h1 className="text-white">Taste it</h1>
          </button>
        </div>

        {/* Text content section */}
        <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
          <h1 className="text-5xl font-bold text-[#8F0200] md:text-white">
            Experience the Rich and Original Flavors of{" "}
            <span className="bg-clip-text text-transparent bg-[#004B40] font-cursive">
              Ethiopian Coffee
            </span>
            at Ethio Taste
          </h1>
          <div className="flex justify-center sm:justify-start">
            <Link
              to="/order"
              className="mt-4 bg-[#FFC028] border-2 border-primary p-2 rounded-2xl py-1 px-4 hover:scale-105 duration-200 hover:text-black"
            >
              <span className="text-white">Order Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
