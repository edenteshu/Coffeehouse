import React, { useState } from "react";
// import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" md:bg-[#efbd4a] text-[#004B40] bg-[#610A03]   p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h className="font-serif font-extrabold hover:text-[#894228] text-[#FFC028] md:text-[#004B40]   ">
          ETHIO TASTE
        </h>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-[#894228]  ">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#894228]">
            About
          </Link>
          <Link to="/menu" className="hover:text-[#894228] ">
            Menu
          </Link>
          <Link to="/order" className="hover:text-[#894228] ">
            Order
          </Link>
          <Link to="/login" className="hover:text-[#894228] ">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-[#FFC028] hover:text-[#FFC028] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFC028]"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-[#894228] ">
          <div className="px-2 pt-2 pb-3 space-y-1 text-[#894228] ">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE1B9]  text-[#FFC028]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE1B9]  text-[#FFC028]"
            >
              About
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE1B9]  text-[#FFC028]"
            >
              Menu
            </Link>
            <Link
              to="/order"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE1B9]  text-[#FFC028]"
            >
              Order
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE1B9]  text-[#FFC028]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
