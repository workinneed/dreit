import React from "react";

import style from "./hl.module.css";

export default function Expect(props) {
  return (
    <div className="relative group max-lg:flex justify-center grow">
      <div className="max-lg:group-hover:w-28 w-48 h-48 bg-white group-hover:bg-gold group inline-flex justify-center items-center flex-col gap-2 md:gap-4 transition duration-500 py-1">
        <svg
          width="72"
          height="64"
          viewBox="0 0 72 64"
          className="fill-gold group-hover:fill-white max-sm:w-[50%]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60.6094 21.0312C67.6406 26.6562 72 35.2344 72 44.5156C72 51.8281 69.3281 56.4688 64.9688 61.1094C63.4219 62.6562 61.3125 63.5 59.0625 63.5H21.7969C19.5469 63.5 17.4375 62.6562 15.8906 61.1094C11.5312 56.4688 9 51.8281 9 44.5156C9 35.0938 13.3594 26.6562 20.25 21.1719L14.9062 5H11.25C7.45312 5 4.5 8.09375 4.5 11.75V25.25C4.5 26.5156 3.375 27.5 2.25 27.5C0.984375 27.5 0 26.5156 0 25.25V11.75C0 5.5625 4.92188 0.5 11.25 0.5H64.2656C65.8125 0.5 66.9375 2.04688 66.375 3.59375L60.6094 21.0312ZM19.6875 5L24.1875 18.5H56.6719L61.1719 5H19.6875ZM25.0312 23C22.2188 25.3906 17.2969 28.9062 14.7656 36.5H66.0938C63.5625 29.0469 58.9219 25.3906 55.9688 23H25.0312ZM61.7344 58.0156C65.8125 53.5156 67.5 49.8594 67.5 44.5156C67.5 43.3906 67.3594 42.2656 67.2188 41H13.6406C13.5 42.2656 13.5 43.3906 13.5 44.5156C13.5 49.8594 15.0469 53.5156 19.2656 58.0156C19.8281 58.7188 20.8125 59.1406 21.7969 59H59.0625C60.0469 59.1406 61.0312 58.7188 61.7344 58.0156Z" />
        </svg>
        <div className="group-hover:text-white text-center">
          Expected Constant Return
        </div>
      </div>
      <div className="hidden group-hover:block w-1/2 lg:absolute lg:w-[250%] lg:-top-[75%] lg:right-0 z-auto">
        <div className="shadow-md p-4 lg:p-2 bg-white rounded-r-md h-48 lg:h-fit lg:rounded-md overflow-auto">
          <div className="text-gold font-cbold sm:text-lg">
            Expected Constant Return
          </div>
          <div className="text-neutral-500">
            With the potentiality of assets and professional hotel teams, DREIT
            anticipate a constant long-term benefit distribution to all trust
            unitholders
          </div>
        </div>
        <div
          className={`${style.hlhover} w-[20px] h-[20px] relative left-3/4 translate-x-1/2 shadow-md max-lg:hidden`}
        ></div>
      </div>
    </div>
  );
}
