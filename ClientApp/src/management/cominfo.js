import React from "react";

import Navbar from "../components/navbar";

import { FaRegAddressCard } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { PiCurrencyCircleDollar, PiCoin, PiSignature } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";
import { BsCalendar4, BsTelephone } from "react-icons/bs";
import { IoLocationOutline, IoMailOutline } from "react-icons/io";
import { LiaFaxSolid } from "react-icons/lia";

export default function ComInfo(props) {
  const navitems = [
    {
      title: "Company Information",
      active: true,
      link: "/Management/REIT_Manager/Company_Information",
    },
    {
      title: "Organization Structure",
      active: false,
      link: "/Management/REIT_Manager/Organization_Structure",
    },
    {
      title: "Board of Directors",
      active: false,
      link: "/Management/REIT_Manager/Board_of_Directors",
    },
  ];
  return (
    <section>
      <div className="mb-[150px] md:mb-[170px]">
        <Navbar navitems={navitems} />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-cbold text-blue-950">
          Dusit Thani Properties REIT Co., Ltd., the REIT Manager
        </h1>
        <p>
          is a registered company in Thailand, which was established on 21
          August 2517 with registered paid-up capital of 10,000,000 Baht,
          consisting of common stock of 100,000 shares at Par value of 100 Baht.
        </p>
        <p>
          Dusit Thani Properties REIT Co., Ltd. has Dusit Thani Public Company
          Limited as a major shareholder who holds for 99.99% of total paid-up
          capital. Dusit Thani Properties REIT Co., Ltd. obtained the approval
          from the Office of the SEC to be the REIT Manager on 31 October 2017
          with main objectives to specifically operate and manage the Trust.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
          <div className="flex flex-col items-center justify-center border-r px-5">
            <div className="text-gold text-3xl">
              <FaRegAddressCard />
            </div>
            <h6 className="font-cbold text-zinc-800">
              Company Registration ID
            </h6>
            <p className="text-neutral-500">0105560138818</p>
          </div>
          <div className="flex flex-col items-center justify-center md:border-r px-5">
            <div className="text-gold text-3xl">
              <FaRegAddressCard />
            </div>
            <h6 className="font-cbold text-zinc-800">
              Company Registration ID
            </h6>
            <p className="text-neutral-500">0105560138818</p>
          </div>
          <div className="flex flex-col items-center justify-center border-r md:border-r-0">
            <div className="text-gold text-3xl">
              <FaRegAddressCard />
            </div>
            <h6 className="font-cbold text-zinc-800">
              Company Registration ID
            </h6>
            <p className="text-neutral-500">0105560138818</p>
          </div>
          <div className="flex flex-col items-center justify-center md:border-r">
            <div className="text-gold text-3xl">
              <FaRegAddressCard />
            </div>
            <h6 className="font-cbold text-zinc-800">
              Company Registration ID
            </h6>
            <p className="text-neutral-500">0105560138818</p>
          </div>
          <div className="flex flex-col items-center justify-center border-r">
            <div className="text-gold text-3xl">
              <FaRegAddressCard />
            </div>
            <h6 className="font-cbold text-zinc-800">
              Company Registration ID
            </h6>
            <p className="text-neutral-500">0105560138818</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-gold text-3xl">
              <FaRegAddressCard />
            </div>
            <h6 className="font-cbold text-zinc-800">
              Company Registration ID
            </h6>
            <p className="text-neutral-500">0105560138818</p>
          </div>
        </div>
      </div>
    </section>
  );
}
