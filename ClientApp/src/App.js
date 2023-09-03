import React from "react";
import { Route, Routes } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import Layout from "./components/Layout";
import LayoutBC from "./components/LayoutWbc";
import Home from "./Home/Home";
import "./custom.css";

export default function App(props) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {AppRoutes.map((route, i) => (
          <Route element={<LayoutBC path={route.path} />}>
            <Route key={i} path={route.path} element={route.element} />
          </Route>
        ))}
      </Route>
    </Routes>
  );
}
