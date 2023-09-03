import React, { useState, useEffect } from "react";
import tel from "../img/tel.svg";
import logo from "../img/DREIT_logo.svg";

import NavLoc from "./navloc";

export default function NavMenu(props) {
  const [click, setClick] = useState(false);

  const menuClick = () => {
    setClick(!click);
  };

  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [scroll, setScroll] = useState(0);

  const handelScrollY = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    window.addEventListener("scroll", handelScrollY);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("scroll", handelScrollY);
    };
  });

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  const [yPos, setYPos] = useState(false);

  useEffect(() => {
    if (scroll > 80) {
      setYPos(true);
    } else {
      setYPos(false);
    }
  }, [scroll]);

  return (
    <section
      className={`NavMenu w-full fixed z-[999] h-[60px] ${
        yPos ? "bg-white" : "bg-transparent"
      } transition duration-300`}
    >
      <div
        className={`flex justify-between max-w-[1400px] mx-auto px-6 py-4 relative`}
      >
        <div className="h-[40px]">
          <a href="/">
            <img src={logo} alt="dreit-logo" id="logo" className="h-full" />
          </a>
        </div>
        <div className="hidden md:flex gap-8 text-blue-950 w-fit text-lg lg:text-xl">
          <ul className="flex gap-8 mt-1">
            <li className="w-fit hover:h-[20vh] hover:text-gold cursor-pointer group grow">
              Management
              <div className="hidden group-hover:block absolute w-full bg-white top-[60px] left-0 ">
                <div className="flex flex-wrap justify-around">
                  {NavLoc.map((n, i) => (
                    <div key={i}>
                      <div className="font-cbold text-blue-950">
                        <a href={n.url}>{n.title}</a>
                      </div>

                      <ul className="text-zinc-500 pl-2">
                        {n.submenu.map((s, si) => (
                          <li>
                            <a href={s.url}>{s.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li className="w-fit hover:h-[20vh] hover:text-gold cursor-pointer group grow">
              Investor Relations
              <div className="hidden group-hover:block absolute w-full bg-white top-[60px] left-0">
                <div className="flex flex-wrap justify-around">
                  <div className="font-cbold text-blue-950">
                    REIT Performance
                  </div>
                </div>
              </div>
            </li>
            <li className="w-fit hover:text-gold cursor-pointer grow">
              Contact Us
            </li>
          </ul>
          <div className="flex w-fit h-fit border border-blue-950 px-3 py-1">
            <img src={tel} alt="tel" />
            <div className="w-fit text-lg lg:text-xl">
              <a href="tel:02-686-6100">Tel: +66 2-686-6100</a>
            </div>
          </div>
        </div>
        <div className="md:hidden" onClick={menuClick}>
          <div className="border border-blue-950 rounded-md px-1 py-2">
            <div
              className={`border border-blue-950 w-6 h-0 bg-black mb-1 transition duration-300 ${
                click && "rotate-45 translate-y-1.5"
              }`}
            ></div>
            <div
              className={`border border-blue-950 w-6 h-0 bg-black mb-1 transition duration-300 ${
                click && "opacity-0"
              }`}
            ></div>
            <div
              className={`border border-blue-950 w-6 h-0 bg-black transition duration-300 ${
                click && "-rotate-45 -translate-y-1.5"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
