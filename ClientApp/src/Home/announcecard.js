import React from "react";
import Axios from "axios";

import icon from "./img/annonce.svg";
import download from "./img/download.svg";

export default function Announce(props) {
  const annlist = [
    { title: "Report NAV as of 31 May 2023", link: "" },
    { title: "Report NAV as of 30 April 2023 (Revise)", link: "" },
    { title: "Report NAV as of 30 April 2023", link: "" },
    { title: "Notification on the appointment of Director", link: "" },
    { title: "Report NAV as of 30 April 2023.", link: "" },
  ];
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
        <div className="text-3xl  xl:text-4xl text-blue-950 font-cbold">
          ANNOUNCE
        </div>
      </div>
      <div className="announce-list flex flex-col justify-between gap-6">
        {annlist.map((a, i) => (
          <div className="flex justify-between" key={i}>
            <div className="text-neutral-500 font-cbold truncate">
              {a.title}
            </div>
            <div>
              <a href={a.link}>
                <img src={download} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
