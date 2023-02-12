import { Link } from "react-router-dom";
import { useContext } from "react";
import PaintingContext from "../context/PaintingContext";
PaintingContext;
export default function Tile({ index, paintingData }) {
  const { toggleSlideshow } = useContext(PaintingContext);
  return (
    <Link
      onClick={toggleSlideshow}
      to="/slideshow"
      state={{ painting: paintingData, index: index }}
      className=""
    >
      <div className="relative">
        <img className="w-full" src={paintingData.images.thumbnail} alt="" />

        <div className="absolute flex flex-col justify-end items-start bg-gradient-to-t h-[170px] from-zinc-900 bottom-0 left-0 w-full pl-8 pb-8 pt-14 pr-12 text-left">
          <h2 className="text-heading-2 font-bold text-white md:text-heading">
            {paintingData.name}
          </h2>
          <p className="text-body-2 text-gray-400 ">
            {paintingData.artist.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
