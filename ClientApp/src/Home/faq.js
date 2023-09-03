import React from "react";

export default function Faq(props) {
  const ask = [
    {
      q: "Ea adipisicing incididunt quis ullamco cupidatat irure velit anim in sunt ullamco.",
      a: "Ipsum ullamco exercitation nisi laborum est anim dolor nisi irure. Consequat officia cillum officia incididunt velit laboris laboris. Cupidatat culpa dolore sit adipisicing aliqua velit ea sit do consectetur excepteur. Incididunt dolore adipisicing eiusmod officia ex.",
    },
    {
      q: "Velit laborum mollit mollit adipisicing minim mollit exercitation do.",
      a: "Dolore consequat proident minim aliqua pariatur consectetur. Voluptate consequat aliquip qui cupidatat ipsum laborum aliquip eiusmod ea cupidatat incididunt magna esse et. Veniam nostrud deserunt enim excepteur proident consequat tempor amet labore ipsum amet voluptate id. Adipisicing sint culpa nostrud occaecat ut labore adipisicing qui.",
    },
    {
      q: "Laboris consectetur voluptate amet proident ea aute occaecat consequat quis labore duis.",
      a: "In ad mollit tempor Lorem culpa enim proident consequat in fugiat. Dolore mollit sint pariatur qui sint. Eu duis ea consequat eu cupidatat magna. Pariatur eu enim aliqua cupidatat culpa mollit. Laboris laboris dolor nostrud voluptate ad. Sunt reprehenderit fugiat officia excepteur aliqua ex sit.",
    },
    {
      q: "Ea adipisicing incididunt quis ullamco cupidatat irure velit anim in sunt ullamco.",
      a: "Ipsum ullamco exercitation nisi laborum est anim dolor nisi irure. Consequat officia cillum officia incididunt velit laboris laboris. Cupidatat culpa dolore sit adipisicing aliqua velit ea sit do consectetur excepteur. Incididunt dolore adipisicing eiusmod officia ex.",
    },
    {
      q: "Velit laborum mollit mollit adipisicing minim mollit exercitation do.",
      a: "Dolore consequat proident minim aliqua pariatur consectetur. Voluptate consequat aliquip qui cupidatat ipsum laborum aliquip eiusmod ea cupidatat incididunt magna esse et. Veniam nostrud deserunt enim excepteur proident consequat tempor amet labore ipsum amet voluptate id. Adipisicing sint culpa nostrud occaecat ut labore adipisicing qui.",
    },
    {
      q: "Laboris consectetur voluptate amet proident ea aute occaecat consequat quis labore duis.",
      a: "In ad mollit tempor Lorem culpa enim proident consequat in fugiat. Dolore mollit sint pariatur qui sint. Eu duis ea consequat eu cupidatat magna. Pariatur eu enim aliqua cupidatat culpa mollit. Laboris laboris dolor nostrud voluptate ad. Sunt reprehenderit fugiat officia excepteur aliqua ex sit.",
    },
  ];

  return (
    <section className="faq pt-10">
      <div className="max-w-[1400px] flex flex-col items-center px-6">
        <div className="text-blue-950 text-4xl lg:text-5xl xl:text-6xl font-cbold">
          Frequently Asked Questions
        </div>
        <div>
          <p className="text-lg md:text-xl text-neutral-500 w-2/3 text-center mx-auto mt-4">
            The following frequently asked questions many investors have about
            DREIT at Dusit Thani Properties REIT.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {ask.map((a, i) => (
            <div key={i}>
              <div className="text-zinc-700 font-cbold md:text-lg">{a.q}</div>
              <div className="text-zinc-700 md:text-lg">{a.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
