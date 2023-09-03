import React, { useEffect, useState } from "react";

export default function Breadcrumb(props) {
  const [path, setPath] = useState([]);

  useEffect(() => {
    let strpath = props.path.replaceAll("_", " ");
    strpath = strpath.split("/");
    strpath = strpath.filter((a, i) => i != 0);
    if (props.path.indexOf("Management")) {
      console.log("active");
      strpath = strpath.map((s) => {
        return s.replaceAll("%2F", "/");
      });
    }
    setPath(strpath);
  }, [props.path]);

  return (
    <section className="breadcrumb w-full fixed top-[60px] bg-white z-[900]">
      <div className="w-full bg-gradient-to-r from-gold to-transparent">
        <div className="flex gap-2 max-w-[1400px] mx-auto px-6 py-1">
          <div>
            <a href="/" className="text-white">
              Home
            </a>
          </div>
          {path.map((p, i) => (
            <div className="flex gap-2 text-white" key={i}>
              <div>{">"}</div>
              <div className={`${i + 1 == path.length && "text-blue-950"}`}>
                {p}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
