import React from 'react'
import Pages from "./Pages";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Components } from '../components/Components';

const Layout = () => {
    return (
        <BrowserRouter>
            <Components.Navbar />
            <Routes>
                <Route path="/"
                    element={<Pages.Home />} />
                <Route path="/about"
                    element={<Pages.About />} />
                <Route path="/contact"
                    element={<Pages.Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout