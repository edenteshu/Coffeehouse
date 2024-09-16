import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import Footer from "./Component/Footer";
import MainPage from "./Component/MainPage";
import Menu from "./Pages/Menu";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route for displaying all pages at once */}
        <Route path="/" element={<MainPage />} />

        {/* Individual routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
