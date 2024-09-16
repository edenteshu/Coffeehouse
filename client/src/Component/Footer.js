import React from "react";
import FooterBg from "../assets/footer.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgImage} className="text-white">
      <div className="min-h-[400px]">
        <div className="container grid md:grid-cols-4 pb-20 pt-5 gap-8">
          {/* Company Details */}
          <div className="py-8 px-2">
            <Link
              to="/"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Ethio Taste
            </Link>
            <p className="mb-3 pt-4">Thanks for Your Perfect Coffee Choice</p>
            <Link
              to="https://www.youtube.com/channel/"
              target="_blank"
              className="text-center bg-[#FFC028]  border-2 border-primary p-2 rounded-2xl py-1 px-4 hover:scale-105 duration-200 hover:text-black"
            >
              Visit our YouTube
            </Link>
          </div>

          {/* Address and Social Links */}
          <div>
            <h1 className="text-xl font-semibold mt-9 sm:text-left mb-3">
              Address
            </h1>
            <div>
              <p className="mb-3">Addis Ababa, Ethiopia</p>
              <p>+251952497916</p>

              <div className="gap-3 flex mt-9">
                <Link
                  to="#"
                  className="text-3xl hover:text-primary duration-300"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="#"
                  className="text-3xl hover:text-primary duration-200"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="#"
                  className="text-3xl hover:text-primary duration-200"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="#"
                  className="text-3xl hover:text-primary duration-200"
                >
                  <FaTelegram />
                </Link>
                <Link
                  to="#"
                  className="text-3xl hover:text-primary duration-200"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-xl font-semibold mt-9 sm:text-left mb-3">
              Quick Links
            </h1>
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link to="/menu" className="hover:text-gray-300">
                Menu
              </Link>
              <Link to="/order" className="hover:text-gray-300">
                Order
              </Link>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </div>
          </div>

          {/* Order Section */}
          <div className="py-8 px-2">
            <div>
              <h1 className="text-xl font-semibold mt-9 sm:text-left mb-3">
                Place an Order
              </h1>
            </div>
            <p className="mb-3">Order your favorite coffee right now!</p>
            <Link
              to="/order"
              className="mt-4 bg-[#FFC028] border-2 border-primary p-2 rounded-2xl py-1 px-4 hover:scale-105 duration-200 hover:text-black"
            >
              Order Now
            </Link>
          </div>
        </div>
        <p className="text-center mt-8">
          &copy; Ethio-Taste. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
