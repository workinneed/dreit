import React from "react";

import bgImg from "./img/asset.png";

import point from "./img/point.svg";

export default function AssetInfo(props) {
  return (
    <section
      style={{ "--image-url": `url(${bgImg})` }}
      className={`asset bg-[image:var(--image-url)] w-full h-screen md:h-[90vh] bg-center relative`}
    >
      <div className="absolute top-0 w-full h-full">
        <div className="w-full h-1/2 bg-gradient-to-b from-stone-50 from-20% to-stone-50/40"></div>
        <div className="w-full h-1/2 bg-gradient-to-t from-stone-50 from-20% to-stone-50/40"></div>
      </div>
      <div className="relative h-fit">
        <div className="max-w-[1400px] mx-auto max-2xl:px-5 py-8">
          <div className="text-blue-950 text-4xl lg:text-5xl xl:text-6xl font-cbold mb-6">
            Asset Information
          </div>
          <div className="flex gap-6 h-[50vh] lg:h-[70vh] justify-between lg:mb-10 max-md:flex-col">
            <div className="flex-auto w-full md:hover:w-[200%] max-md:h-1/2 relative transition-all duration-300 ease-linear">
              <img
                src={require("./img/phuket.jpeg")}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 p-4 pt-4 md:p-8 md:pt-14 bg-gradient-to-t from-slate-900 to-slate-300/10 w-full">
                <div className="text-zinc-400 text-lg md:text-xl lg:text-2xl">
                  Dusit Thani
                </div>
                <div className="flex justify-between items-center md:block">
                  <div className="flex gap-2">
                    <div>
                      <img
                        src={point}
                        alt="point"
                        className="w-[calc(100%-15%)]"
                      />
                    </div>
                    <div className="text-white text-lg md:text-xl lg:text-2xl uppercase">
                      Laguna Phuket Hotel
                    </div>
                  </div>
                  <div className="text-neutral-300 md:mt-4">
                    More Detail{" >"}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto w-full md:hover:w-[200%] max-md:h-1/2 relative transition-all duration-300 ease-linear">
              <img
                src={require("./img/huahin.jpeg")}
                className="w-full h-full object-cover object-center md:object-[85%_0]"
              />
              <div className="absolute bottom-0 p-4 pt-4 md:p-8 md:pt-14 bg-gradient-to-t from-slate-900 to-slate-300/10 w-full">
                <div className="text-zinc-400 text-lg md:text-xl lg:text-2xl">
                  Dusit Thani
                </div>
                <div className="flex justify-between items-center md:block">
                  <div className="flex gap-2 ">
                    <div>
                      <img
                        src={point}
                        alt="point"
                        className="w-[calc(100%-15%)]"
                      />
                    </div>
                    <div className="text-white text-lg md:text-xl lg:text-2xl uppercase">
                      Hua Hin Hotel
                    </div>
                  </div>

                  <div className="text-neutral-300 md:mt-4">
                    More Detail{" >"}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto w-full md:hover:w-[200%] max-md:h-1/2 relative transition-all duration-300 ease-linear">
              <img
                src={require("./img/maldive.jpeg")}
                className="w-full h-full object-cover object-center md:object-[25%_0]"
              />
              <div className="absolute bottom-0 p-4 pt-4 md:p-8 md:pt-14 bg-gradient-to-t from-slate-900 to-slate-300/10 w-full">
                <div className="text-zinc-400 text-lg md:text-xl lg:text-2xl">
                  Dusit Thani
                </div>
                <div className="flex justify-between items-center md:block">
                  <div className="flex gap-2 ">
                    <div>
                      <img
                        src={point}
                        alt="point"
                        className="w-[calc(100%-15%)]"
                      />
                    </div>
                    <div className="text-white text-lg md:text-xl lg:text-2xl uppercase">
                      Maldives Hotel
                    </div>
                  </div>

                  <div className="text-neutral-300 md:mt-4">
                    More Detail{" >"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
