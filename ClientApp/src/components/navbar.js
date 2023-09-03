import React, { useEffect, useState } from "react";

export default function Navbar(props) {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    setNav(props.navitems);
  }, [props.navitems]);
  return (
    <div className="container max-w-[1400px] fixed top-[92px] bg-white pt-3">
      <div className="flex gap-5 border-b-2">
        {nav.map((n, i) => (
          <div
            className={`${
              n.active
                ? "text-gold border-b-2 border-gold font-cbold"
                : "text-neutral-500"
            } py-3 px-2 hover:text-gold hover:border-b-2 hover:border-gold`}
          >
            <a
              href={n.link}
              className={`${
                n.active ? "cursor-default" : "cursor-pointer"
              } md:text-lg `}
            >
              {n.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
