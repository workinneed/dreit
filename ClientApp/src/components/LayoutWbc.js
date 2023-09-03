import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import Breadcrumb from "./breadcrumb";
import Footer from "./footer";
export default function LayoutBC(props) {
  return (
    <div>
      <Breadcrumb path={props.path} />
      <div className="container max-w-[1400px] px-6 py-10">
        <Outlet />
      </div>
    </div>
  );
}
