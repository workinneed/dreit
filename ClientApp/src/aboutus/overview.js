import React from "react";

import Navbar from "../components/navbar";

import est from "./img/est.svg";
import des from "./img/des.svg";
import term from "./img/term.svg";

export default function Overview(props) {
  const navitems = [
    {
      title: "Overview",
      active: true,
      link: "/About_Us/Overview",
    },
    {
      title: "Trust Structures",
      active: false,
      link: "/About_Us/Trust_Structures",
    },
  ];
  return (
    <section>
      <div className="mb-[150px] md:mb-[170px]">
        <Navbar navitems={navitems} />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/3 lg:w-1/4 h-[350px] md:h-[700px] shrink-0">
          <img
            src={require("./img/picheader.png")}
            alt="picture"
            className="object-cover object-center h-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-auto gap-5">
          <div className="text-xl md:text-2xl text-blue-950 font-cbold">
            Dusit Thani Freehold and Leasehold Real Estate Investment Trust
            (“DREIT”) was converted from Dusit Thani Freehold and Leasehold
            Property Fund (“DTCPF”)
          </div>
          <div className="text-zinc-700 md:text-lg">
            DREIT has obtained an approval from the Office of the SEC to offer
            the REIT units to the investors on 23 November 2017 for the total
            number of 409,400,000 of DREIT units in exchange of the assets and
            liabilities of DTCPF.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 sm:gap-0">
            <div className="sm:border-r flex sm:flex-col sm:items-center sm:px-4 gap-4 sm:gap-0">
              <div>
                <img src={est} alt="establish" />
              </div>
              <div className="sm:text-center">
                <div className="font-cbold text-zinc-700 ">
                  Date of Establishment
                </div>
                <div className="text-neutral-500">29 November 2017</div>
              </div>
            </div>

            <div className="sm:border-r flex sm:flex-col sm:items-center sm:px-4 gap-4 sm:gap-0">
              <div>
                <img src={des} alt="description" />
              </div>
              <div className="sm:text-center">
                <div className="font-cbold text-zinc-700">
                  Project Description
                </div>
                <div className="text-neutral-500">
                  Non-redeemable and specific REIT fully paid-up capital
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col sm:items-center sm:px-4 gap-4 sm:gap-0">
              <div>
                <img src={term} alt="Term" />
              </div>
              <div className="sm:text-center">
                <div className="font-cbold text-zinc-700">Term of Scheme</div>
                <div className="text-neutral-500">Indefinite</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-cbold text-blue-950 py-4">
              Investment Policy
            </h2>

            <p className="text-zinc-700 md:text-lg">
              The Trust focus on investing in high potential freehold or
              leasehold properties especially in hotel properties as well as
              investing in other assets that favor hotel-related business, such
              as meeting and convention room, restaurants, fitness center, spa,
              swimming pool, tennis court etc. The Trust would acquire the core
              assets by either purchase and/or lease and/or sub-lease, either
              direct Investment or share acquisition of the companies, aiming to
              generate benefits in a form of rental income or any related income
              as well as initiating asset enhancement program to uplift asset
              potentiality in order to generate long-term sustainable income.
              Meanwhile the Trust will invest in other assets and/or other
              securities and/or any other returns pursuant to the Securities and
              Exchange Act and/or any other relevant laws in order to diversify
              investment to other different aspects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
