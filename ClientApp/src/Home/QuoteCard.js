import React from "react";
import Axios from "axios";

import icon from "./img/quote.svg";
import uparrow from "./img/uparrow.svg";
import downarrow from "./img/downarrow.svg";

export default function Quote(props) {
  return (
    <div
      className={`w-96 h-96 px-8 py-6 bg-white flex-col justify-between items-center gap-4 inline-flex shadow-lg shadow-gray-500`}
    >
      <div className="flex justify-between w-full">
        <div>
          <img
            src={icon}
            alt="card-ico"
            id="quote-ico"
            className="w-[calc(100%-25%)] xl:w-fit"
          />
        </div>
        <div className="text-3xl xl:text-4xl text-blue-950 font-cbold">
          DREIT
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-5xl xl:text-6xl text-blue-950 font-cbold">
          6.05 THB
        </div>
        <div className="flex gap-4 justify-center">
          <img src={uparrow} />
          <div className="text-2xl xl:text-3xl text-lime-700">2.54%</div>
        </div>
      </div>
      <div className="text-neutral-500 font-cbold">Volume (Shares) 6,700</div>
      <div className="text-neutral-500 text-sm">Updated 17 August 2023</div>
    </div>
  );
}
