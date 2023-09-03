import React from "react";

import Dream from "./hlcard/dream";
import Well from "./hlcard/well";
import Manage from "./hlcard/manage";
import Growing from "./hlcard/growing";
import Expect from "./hlcard/expect";

export default function Hilight(props) {
  return (
    <section className="hilight bg-stone-50 flex flex-col items-center -mt-[50px] relative z-[100] max-w-[1400px]">
      <div className="text-gold text-lg font-cbold">SINCE 1995</div>
      <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-blue-950 font-cbold">
        Investment Highlights
      </div>
      <div className="text-neutral-500"></div>
      <div className="flex gap-4 xl:gap-12 mb-12 max-lg:flex-col max-lg:items-center">
        <div>
          <Dream />
        </div>
        <div className="lg:pt-24">
          <Well />
        </div>
        <div className="lg:pt-48">
          <Manage />
        </div>
        <div className="lg:pt-24">
          <Growing />
        </div>
        <div>
          <Expect />
        </div>
      </div>
    </section>
  );
}
