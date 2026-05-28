import Home from "./Home";
import About from "./About";
import Service from "./Service";  
import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <>  
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/about" element = {<About />} />
                    <Route path="/service" element = {<Service />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Layout;    