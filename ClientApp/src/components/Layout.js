import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./footer";
export default function Layout(props) {
  return (
    <div>
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  );
}
