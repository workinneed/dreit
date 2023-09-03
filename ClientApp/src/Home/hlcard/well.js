import React from "react";

import style from "./hl.module.css";

export default function Well(props) {
  return (
    <div className="relative group max-lg:flex justify-center grow">
      <div className="max-lg:group-hover:w-28 w-48 h-48 bg-white group-hover:bg-gold group inline-flex justify-center items-center flex-col gap-4 transition duration-500 py-1">
        <svg
          width="64"
          height="72"
          viewBox="0 0 64 72"
          className="fill-gold group-hover:fill-white max-sm:w-[50%]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M52.25 0C58.4375 0 63.5 5.0625 63.5 11.25C63.5 16.7344 59.5625 21.2344 54.5 22.3594V27C54.5 33.3281 49.4375 38.25 43.25 38.25H20.75C16.9531 38.25 14 41.3438 14 45V49.7812C19.0625 50.9062 23 55.4062 23 60.75C23 67.0781 17.9375 72 11.75 72C5.42188 72 0.5 67.0781 0.5 60.75C0.5 55.4062 4.29688 50.9062 9.5 49.7812V22.3594C4.29688 21.2344 0.5 16.7344 0.5 11.25C0.5 5.0625 5.42188 0 11.75 0C17.9375 0 23 5.0625 23 11.25C23 16.7344 19.0625 21.2344 14 22.3594V36.1406C15.8281 34.7344 18.0781 33.75 20.75 33.75H43.25C46.9062 33.75 50 30.7969 50 27V22.3594C44.7969 21.2344 41 16.7344 41 11.25C41 5.0625 45.9219 0 52.25 0ZM18.5 60.75C18.5 57.0938 15.4062 54 11.75 54C7.95312 54 5 57.0938 5 60.75C5 64.5469 7.95312 67.5 11.75 67.5C15.4062 67.5 18.5 64.5469 18.5 60.75ZM11.75 18C15.4062 18 18.5 15.0469 18.5 11.25C18.5 7.59375 15.4062 4.5 11.75 4.5C7.95312 4.5 5 7.59375 5 11.25C5 15.0469 7.95312 18 11.75 18ZM52.25 18C55.9062 18 59 15.0469 59 11.25C59 7.59375 55.9062 4.5 52.25 4.5C48.4531 4.5 45.5 7.59375 45.5 11.25C45.5 15.0469 48.4531 18 52.25 18Z" />
        </svg>
        <div className="group-hover:text-white text-center">
          Well Diversitfication
        </div>
      </div>
      <div className="hidden group-hover:block w-1/2 lg:absolute lg:w-[250%] lg:-top-[75%] lg:-left-[75%] z-auto">
        <div className="shadow-md p-4 lg:p-2 bg-white rounded-r-md h-48 lg:h-fit lg:rounded-md overflow-auto">
          <div className="text-gold font-cbold sm:text-lg">
            Well Diversitfication
          </div>
          <div className="text-neutral-500 ">
            The distribution of assets in prime tourist locations in each region
            will help reduce risk of seasonality effects and concentration of
            customer groups which will help diversify the business risks
          </div>
        </div>
        <div
          className={`${style.hlhover} w-[20px] h-[20px] relative left-1/2 -translate-x-1/2 shadow-md max-lg:hidden`}
        ></div>
      </div>
    </div>
  );
}
