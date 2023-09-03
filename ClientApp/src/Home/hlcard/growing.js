import React from "react";

import style from "./hl.module.css";

export default function Growing(props) {
  return (
    <div className="relative group max-lg:flex justify-center grow">
      <div className="max-lg:group-hover:w-28 w-48 h-48 bg-white group-hover:bg-gold group inline-flex justify-center items-center flex-col gap-4 transition duration-500 py-1">
        <svg
          width="90"
          height="72"
          viewBox="0 0 90 72"
          className="fill-gold group-hover:fill-white max-sm:w-[50%]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.5 45C14.9062 45 9 39.0938 9 31.5C9 24.0469 14.9062 18 22.5 18C29.9531 18 36 24.0469 36 31.5C36 39.0938 29.9531 45 22.5 45ZM22.5 22.5C17.4375 22.5 13.5 26.5781 13.5 31.5C13.5 36.5625 17.4375 40.5 22.5 40.5C27.4219 40.5 31.5 36.5625 31.5 31.5C31.5 26.5781 27.4219 22.5 22.5 22.5ZM83.25 0C86.9062 0 90 3.09375 90 6.75V51.75C90 55.5469 86.9062 58.5 83.25 58.5H49.5C48.2344 58.5 47.25 57.5156 47.25 56.25C47.25 55.125 48.2344 54 49.5 54H83.25C84.375 54 85.5 53.0156 85.5 51.75V6.75C85.5 5.625 84.375 4.5 83.25 4.5H29.25C27.9844 4.5 27 5.625 27 6.75V11.25C27 12.5156 25.875 13.5 24.75 13.5C23.4844 13.5 22.5 12.5156 22.5 11.25V6.75C22.5 3.09375 25.4531 0 29.25 0H83.25ZM27 49.5C36.8438 49.5 45 57.6562 45 67.5C45 70.0312 42.8906 72 40.5 72H4.5C1.96875 72 0 70.0312 0 67.5C0 57.6562 8.01562 49.5 18 49.5H27ZM4.5 67.5H40.5C40.5 60.1875 34.3125 54 27 54H18C10.5469 54 4.5 60.1875 4.5 67.5ZM44.2969 23.2031L54 32.9062L66.5156 20.25H58.5C57.2344 20.25 56.25 19.2656 56.25 18C56.25 16.875 57.2344 15.75 58.5 15.75H72C73.125 15.75 74.25 16.875 74.25 18V31.5C74.25 32.7656 73.125 33.75 72 33.75C70.7344 33.75 69.75 32.7656 69.75 31.5V23.4844L55.5469 37.6875C55.125 38.1094 54.5625 38.25 54 38.25C53.2969 38.25 52.7344 38.1094 52.3125 37.6875L41.0625 26.4375C40.2188 25.5938 40.2188 24.0469 41.0625 23.2031C41.9062 22.3594 43.4531 22.3594 44.2969 23.2031Z" />
        </svg>
        <div className="group-hover:text-white text-center">Growing Trends</div>
      </div>
      <div className="hidden group-hover:block w-1/2 lg:absolute lg:w-[200%] lg:-top-[62%] lg:-left-[50%] z-[200]">
        <div className="shadow-md p-4 lg:p-2 bg-white rounded-r-md h-48 lg:h-fit lg:rounded-md overflow-auto">
          <div className="text-gold font-cbold sm:text-lg">Growing Trends</div>
          <div className="text-neutral-500 ">
            An ongoing support by government sector impacts on growing trends in
            hotel industry
          </div>
        </div>
        <div
          className={`${style.hlhover} w-[20px] h-[20px] relative left-1/2 -translate-x-1/2 shadow-md max-lg:hidden`}
        ></div>
      </div>
    </div>
  );
}
