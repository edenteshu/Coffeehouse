import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";

const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Order />
      <Login />
    </div>
  );
};

export default MainPage;
