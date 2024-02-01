import React from "react";
import Button from "./components/Button/Button";
import {About, Home, NotFound} from "./pages";
import { Route, Routes } from "react-router-dom";


const App: React.FC = () => {
    return (
        <Routes>
  	        <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );

};

export default App;