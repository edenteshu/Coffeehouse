import React from "react";
import BannerImg from "../assets/about.jpg";

function About() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 leading-5">
        {/* Image section */}
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <img
            src={BannerImg}
            alt="Ethiopian Coffee"
            className="w-full max-w-md sm:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Text content section */}
        <div className="flex flex-col justify-center">
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-center sm:text-left text-[#004B40] font-cursive"
          >
            Freshly Roasted Coffee
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-7 mt-4"
          >
            At ETHIO TASTE, we source the finest coffee beans from different
            regions of Ethiopia to bring you a truly unique and flavorful coffee
            experience. From the bold and earthy notes of Sidamo to the bright
            and fruity flavors of Yirgacheffe, each cup of coffee at ETHIO TASTE
            is a journey through the diverse and rich coffee culture of
            Ethiopia. Indulge in the tradition and heritage of Ethiopian coffee
            with us at ETHIO TASTE. Come visit our coffee house and discover the
            true essence of Ethiopian coffee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
