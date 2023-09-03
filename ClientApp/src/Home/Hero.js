import React from "react";

import Card from "./card";

export default function Hero(props) {
  return (
    <section className="hero relative bg-stone-50">
      <div className="float-right h-screen w-full lg:w-3/4">
        <img
          src={require("./img/image 3.png")}
          alt="hero_img"
          id="img1"
          className="h-full w-full object-cover object-right-top"
        />
      </div>
      <div className="relative z-50 h-screen w-full">
        <div className="h-1/2 w-full bg-gradient-to-b from-stone-50 from-10% to-transparent to-80%"></div>
        <div className="h-full w-full bg-gradient-to-r from-stone-50 lg:from-25% xl:from-35% to-transparent to-60% absolute top-0 left-0"></div>
        <div className="h-1/2 w-full bg-gradient-to-t from-stone-50 from-10% to-transparent to-80%"></div>
      </div>

      <div className="absolute top-36 w-full z-[100]">
        <div className="max-w-[1400px] mx-auto max-2xl:px-5">
          <div className="text-blue-950 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-cbold pt-5">
            DREIT
          </div>
          <div className="text-blue-950 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Dusit Thani Freehold and Leasehold
            <br />
            Real Estate Investment Trust
          </div>
        </div>
      </div>
      <div className="relative -top-[150px] z-[200]">
        <Card />
      </div>
    </section>
  );
}
