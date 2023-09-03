import React from "react";

import Navbar from "../components/navbar";

export default function Lesee(props) {
  const navitems = [
    {
      title: "REIT Manager",
      active: false,
      link: "/Management/REIT_Manager",
    },
    {
      title: "Lessee/ Sub-Lessee and Hotel Operator",
      active: true,
      link: "/Management/Lessee%2F_Sub-Lessee_and_Hotel_Operator",
    },
    {
      title: "Trustee Information",
      active: false,
      link: "/Management/Trustee_Information",
    },
  ];
  return (
    <section>
      <div className="mb-[150px] md:mb-[170px]">
        <Navbar navitems={navitems} />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-cbold text-blue-950">
          Lessee/ Sub-Lessee
        </h1>
        <p>
          Vitae vel volutpat quam nisi id dui. Enim felis non ullamcorper
          suspendisse dictum nisi commodo aenean. Faucibus porttitor facilisi
          mauris tempor consectetur arcu id dictum. Tristique velit risus
          scelerisque in aliquet molestie. Nulla amet laoreet in orci ultrices
          quam consectetur nullam gravida. Urna diam venenatis id lectus nunc
          aliquet blandit. Non consequat eget.
        </p>
      </div>
    </section>
  );
}
