import React from "react";

import Quote from "./QuoteCard";
import Nav from "./navcard";
import Announce from "./announcecard";

export default function Card(props) {
  return (
    <div className="card">
      <div className="max-w-[1400px] flex gap-8 px-8 max-md:flex-col max-md:items-center mx-auto md:flex-wrap md:justify-around">
        <Quote />
        <Nav />
        <Announce />
      </div>
    </div>
  );
}
