import React from "react";

import style from "./hl.module.css";

export default function Dream(props) {
  return (
    <div className="relative group max-lg:flex justify-center">
      <div className="max-lg:group-hover:w-28 w-48 h-48 bg-white group-hover:bg-gold group inline-flex justify-center items-center flex-col gap-4 transition duration-500 py-1">
        <svg
          width="82"
          height="73"
          viewBox="0 0 82 73"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gold group-hover:fill-white max-sm:w-[50%]"
        >
          <path d="M80.375 18.4219C81.0781 18.8438 81.5 19.5469 81.5 20.3906V61.4531C81.5 62.4375 80.7969 63.2812 79.9531 63.5625L57.5938 71.8594C57.3125 72 57.0312 72 56.75 72C56.6094 72 56.3281 72 56.1875 72L24.9688 63L3.59375 71.8594C2.89062 72.1406 2.04688 72.1406 1.48438 71.7188C0.78125 71.2969 0.5 70.5938 0.5 69.75V28.6875C0.5 27.7031 1.0625 26.8594 1.90625 26.5781L18.7812 20.25C18.9219 21.6562 19.3438 23.0625 19.9062 24.6094L5 30.2344V66.5156L23 59.0625V42.75C23 41.625 23.9844 40.5 25.25 40.5C26.375 40.5 27.5 41.625 27.5 42.75V59.0625L54.5 66.7969V42.75C54.5 41.625 55.4844 40.5 56.75 40.5C57.875 40.5 59 41.625 59 42.75V66.6562L77 59.9062V23.625L59 30.7969C59 30.7969 60.9688 27 61.8125 24.75L78.4062 18.2812C79.1094 18 79.8125 18 80.375 18.4219ZM41 45C39.5938 45 38.3281 44.4375 37.4844 43.4531C33.125 38.1094 23 25.0312 23 17.8594C23 8.01562 31.0156 0 41 0C50.8438 0 59 8.01562 59 17.8594C59 25.0312 48.7344 38.1094 44.375 43.4531C43.5312 44.4375 42.2656 45 41 45ZM41 4.5C33.5469 4.5 27.5 10.5469 27.5 17.8594C27.5 21.6562 32.8438 30.6562 41 40.5C49.0156 30.6562 54.5 21.6562 54.5 17.8594C54.5 10.5469 48.3125 4.5 41 4.5ZM44.375 18C44.375 19.9688 42.8281 21.375 41 21.375C39.0312 21.375 37.625 19.9688 37.625 18C37.625 16.1719 39.0312 14.625 41 14.625C42.8281 14.625 44.375 16.1719 44.375 18Z" />
        </svg>
        <div className="group-hover:text-white text-center">
          Dream Destination
        </div>
      </div>
      <div className="hidden group-hover:block w-1/2 lg:absolute lg:w-[200%] lg:-top-[75%] z-auto">
        <div className="shadow-md p-4 lg:p-2 bg-white rounded-r-md h-48 lg:h-fit lg:rounded-md overflow-auto">
          <div className="text-gold font-cbold sm:text-lg">
            Dream Destination
          </div>
          <div className="text-neutral-500 text-sm sm:text-base">
            Assets strategically located in the prime tourism destination,
            highly popular among Thais and foreigners
          </div>
        </div>
        <div
          className={`${style.hlhover} w-[20px] h-[20px] relative left-1/4 -translate-x-1/2 shadow-md max-lg:hidden`}
        ></div>
      </div>
    </div>
  );
}
