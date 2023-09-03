import React from "react";

import Navbar from "../components/navbar";

export default function Trust(props) {
  const navitems = [
    {
      title: "Overview",
      active: false,
      link: "/About_Us/Overview",
    },
    {
      title: "Trust Structures",
      active: true,
      link: "/About_Us/Trust_Structures",
    },
  ];
  return (
    <section>
      <div className="mb-[150px] md:mb-[170px]">
        <Navbar navitems={navitems} />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-cbold text-blue-950">
          Trust Structures
        </h1>
        <p>
          Vitae vel volutpat quam nisi id dui. Enim felis non ullamcorper
          suspendisse dictum nisi commodo aenean. Faucibus porttitor facilisi
          mauris tempor consectetur arcu id dictum. Tristique velit risus
          scelerisque in aliquet molestie. Nulla amet laoreet in orci ultrices
          quam consectetur nullam gravida. Urna diam venenatis id lectus nunc
          aliquet blandit. Non consequat eget.
        </p>
        <img
          src="https://dreit.blob.core.windows.net/trust/trust-structure-en.png"
          alt="truststructure"
        />
      </div>
    </section>
  );
}
