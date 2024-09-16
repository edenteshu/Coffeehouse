import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cupImg from "../assets/cup.png";

function LogIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignUp
        ? "http://localhost:5000/auth/register"
        : "http://localhost:5000/auth/login";
      const data = isSignUp ? { name, email, password } : { email, password };

      const response = await axios.post(url, data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        alert(response.data.message || "An error occurred");
      }
    } catch (error) {
      alert("Failed to authenticate. Please try again.");
    }
  };

  return (
    <div className=" items-center flex justify-center px-0 lg:px-0">
      <div className="container">
        <div className="max-w-screen-xl sm:rounded-lg flex justify-center">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={cupImg}
                  alt="coffee cup"
                  className="max-h-[100px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl xl:text-4xl font-extrabold text-[#004B40]">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </h1>
              </div>
              <div className="w-full flex-1 mt-8">
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-xs flex flex-col gap-4"
                >
                  {isSignUp && (
                    <input
                      className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-[#FFB726] text-gray-900 w-full py-4 rounded-lg hover:bg-stone-400 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                      {isSignUp ? "Sign Up" : "Sign In"}
                    </span>
                  </button>
                  <p className="mt-6 text-xs text-black text-center">
                    {isSignUp
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <span
                      className="text-black font-semibold cursor-pointer"
                      onClick={() => setIsSignUp(!isSignUp)}
                    >
                      {isSignUp ? "Sign in" : "Sign up"}
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
