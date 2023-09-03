import React from "react";

import Hero from "./Hero";
import Hilight from "./hilight";
import AssetInfo from "./assetInfo";
import Faq from "./faq";

export default function Home(props) {
  return (
    <div className="max-w-[1920px] container">
      <Hero />
      <Hilight />
      <AssetInfo />
      <Faq />
    </div>
  );
}
