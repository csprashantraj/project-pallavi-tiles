import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home";

const RoutesManager = () => {
    const location = useLocation();
	window.scroll(0,0);
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
        </Routes>
    )
}
export default RoutesManager;