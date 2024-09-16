import React, { useState } from "react";
import axios from "axios";

const Order = () => {
  const [order, setOrder] = useState({ name: "", coffeeType: "", size: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/orders", order, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      alert("Order placed successfully!");
      setOrder({ name: "", coffeeType: "", size: "" });
      setIsSubmitted(true);
    } catch (error) {
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#004B40]">
          Place Your Order
        </h2>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={order.name}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="coffeeType"
            name="coffeeType"
            value={order.coffeeType}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            placeholder="Enter your coffee type"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="size"
            name="size"
            value={order.size}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            placeholder="Enter size (Small, Medium, Large)"
          />
        </div>
        <button
          type="submit"
          className="mt-5 tracking-wide font-semibold bg-[#FFB726] text-gray-900 w-full py-4 rounded-lg hover:bg-stone-400 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
          Order
        </button>
        {isSubmitted && (
          <p className="mt-6 text-xs text-black text-center">
            Thank you for your order!
          </p>
        )}
      </form>
    </div>
  );
};

export default Order;
