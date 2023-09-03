import React from "react";

import logo from "../img/DREIT_logo.svg";

export default function Footer(props) {
  return (
    <section className="footer bg-stone-50 w-full">
      <div className="max-w-[1400px] mx-auto max-2xl:px-5 py-8">
        <div className="flex max-md:flex-col gap-6">
          <div className="flex flex-col justify-between flex-auto">
            <div className="w-[120px] md:w-[150px]">
              <img src={logo} alt="dreit logo" />
            </div>
            <div className="mt-4">
              <p>
                Investment in REIT contains certain risks, please study all the
                provided information in prospectus before making investment.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-1/4 md:flex-auto max-md:order-last">
            <ul className="first:[&>*]:mt-0 [&>*]:md:mt-3 flex md:block justify-between">
              <li>
                <a className="cursor-pointer">Term and Condition</a>
              </li>
              <li className="md:hidden">|</li>
              <li>
                <a className="cursor-pointer">Cookie Policy</a>
              </li>
              <li className="md:hidden">|</li>
              <li>
                <a className="cursor-pointer">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between flex-auto">
            <h1 className="text-lg md:text-xl font-cbold">
              Dusit Thani Properties REIT Co. Ltd.
            </h1>
            <p>
              No. 319 Chamchuri Square Building, 29th Floor, Phayathai Road,
              Pathumwan, Bangkok 10330
            </p>

            <p>+66 2-200-9999 Ext. 3681-3683</p>
          </div>
        </div>
      </div>
      <div className="border-t text-center py-2">
        Copyright &copy; Dusit Thani Freehold and Leasehold Real Estate
        Investment Trust
      </div>
    </section>
  );
}
