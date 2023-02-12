import { useLocation } from "react-router";
import { useContext, useState, useEffect } from "react";
import ViewImage from "../assets/icon-view-image.svg";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import PaintingsData from "../../data.json";
import PaintingContext from "../context/PaintingContext";

export default function Info() {
  const location = useLocation();
  const { index } = location.state;
  const [count, setCount] = useState(index);
  const { showStarted } = useContext(PaintingContext);

  console.log('test')

  const calcWidth = () => {
    return ((count + 1) / PaintingsData.length) * 100 + "%";
  };

  const style = {
    width: calcWidth(),
  };

  useEffect(() => {
    // call api or anything
    showStarted()
 });

  return (
    <section>
      <div className="px-6 mb-[67px] md:px-10">
        <div className="relative mb-[98px] md:mb-16">
          {/**View Image button */}
          <div className="absolute bg-[rgba(0,0,0,.8)] text-white flex items-center justify-between w-[152px] h-10 px-4 top-4 left-4">
            <img className="w-3" src={ViewImage} alt="" />
            <p>View Image</p>
          </div>
          <img className="block md:hidden" src={PaintingsData[count].images.hero.small} alt="" />
          <img
            className="hidden md:block md:w-[475px]"
            src={PaintingsData[count].images.hero.large}
            alt=""
          />

          {/**Painting Info */}
          <div className="absolute bottom-[-100px] left-[-1px] md:top-0 md:left-[250px]">
            <div className="p-6 md:pt-0 md:p-16 text-black w-[280px] bg-white  md:w-[445px] md:px-16">
              <h1 className="font-bold md:text-heading-1 md:mb-6">{PaintingsData[count].name}</h1>
              <p>{PaintingsData[count].artist.name}</p>
            </div>
            <img
              className="absolute ml-6 left-6 w-16 md:w-[128px] md:self-end md:left-[250px]"
              src={PaintingsData[count].artist.image}
              alt=""
            />
          </div>
        </div>
        <div className="relative flex flex-col md:w-[572px] md:pl-[115px] md:pt-[75px]">
          <h1 className="absolute text-display-mobile text-light-grey self-end md:text-display-desktop md:top-0 md:left-0">
            {PaintingsData[count].year}
          </h1>
          <p className="pt-[74px] z-[1] text-body-2 text-dark-grey text-left md:pt-0">
            {PaintingsData[count].description}
          </p>
        </div>
      </div>

      <div>
        <div className="w-full bg-light-grey h-[1px]">
          <div className={`bg-black h-[1px] `} style={style}></div>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="text-body-2 font-bold">{PaintingsData[count].name}</p>
            <h3 className="text-body-2">{PaintingsData[count].artist.name}</h3>
          </div>

          <div className="flex gap-6">
            <RxTrackPrevious
              onClick={() => {
                if (count == 0) {
                  return;
                } else {
                  setCount(count - 1);
                }
              }}
              color={`${
                count == 0 ? "#D8D8D8" : "black"
              }`}
              size={"16px"}
              className=""
            />

            <RxTrackNext
            onClick={() => {
                if (count == PaintingsData.length - 1) {
                  return;
                } else {
                  setCount(count + 1);
                }
              }}
            
              color={`${
                count == PaintingsData.length - 1 ? "#D8D8D8" : "black"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}