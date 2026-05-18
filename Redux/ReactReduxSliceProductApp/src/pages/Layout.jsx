import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import Register from "./Register";
import Cart from "./Cart";
import Error from "./Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const Layout = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default Layout
