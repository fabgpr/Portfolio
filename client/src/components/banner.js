import { forwardRef } from "react";

import Image from "next/image";
import marioGif from "../../public/images/mario-banner.gif";

const Banner = forwardRef((props, ref) => {
  const scrollToAbout = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 3202, behavior: "smooth" });
  };

  return (
    <div className="relative w-screen h-screen  ">
      <Image
        src={marioGif}
        className="absolute blur-sm h-full w-full object-cover"
      />
      <div className="absolute flex flex-col w-70 p-10 top-[35%] left-[50%] transform -translate-x-1/2">
        <h1 className="font-bold text-white text-center text-5xl text-shadow-1 tracking-tight  ">
          Fabian Pacheco
        </h1>
        <div className="flex justify-around mt-7 gap-2  w-100">
          <button
            className=" text-sm text-center w-[30vw] md:w-44  bg-botones1   text-white font-bold py-2 px-3 cursor-pointer rounded-[15px] drop-shadow-lg"
            onClick={scrollToContact}
          >
            Contáctame
          </button>
          <button
            className=" text-sm text-center w-[30vw] md:w-44  bg-botones1 text-white font-bold py-2 px-3 cursor-pointer rounded-[15px] drop-shadow-lg"
            onClick={scrollToAbout}
          >
            Sobre mí
          </button>
        </div>
      </div>
    </div>
  );
});

export default Banner;
