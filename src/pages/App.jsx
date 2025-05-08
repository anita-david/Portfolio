import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Navigation from "./Navigation";
import Toggle from "./Toggle";
import "../styles/App.css";
function App() {
  return (
    <div>
      <Toggle />
      <Navigation />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;
