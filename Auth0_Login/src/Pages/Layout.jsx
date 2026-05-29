import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="pt-20"> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Service />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Layout;