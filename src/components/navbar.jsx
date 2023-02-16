import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import PaintingContext from "../context/PaintingContext";


export default function NavBar() {

    const { isStarted } = useContext(PaintingContext)
    const { toggleSlideshow } = useContext(PaintingContext)

  return (
    <nav className="flex items-center justify-between p-6 border-b-2 mb-6 md:px-10 desktop:container h-[10vh]">
     
        <img className="w-[113px]" src={Logo} alt="" />

      <Link
        onClick={toggleSlideshow}
        to={`${isStarted ? "/" : "/slideshow"}`}
        state={{ index: 0 }}
      >
        <p className="text-[9px] tracking-[1.93px] uppercase md:text-subhead-2" href="">
          {isStarted ? "Stop Slideshow" : "Start Slideshow"}
        </p>
      </Link>
    </nav>
  );
}
