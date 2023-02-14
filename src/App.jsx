import { useState } from "react";
import data from "../data.json";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home'
import SlideShow from './pages/painting-info'
import Navbar from "./components/navbar";
function App() {
    
  return (
    <div className="lg:container lg:mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/slideShow" element={<SlideShow/>} />
      </Routes>
    </div>
  );
}

export default App;
