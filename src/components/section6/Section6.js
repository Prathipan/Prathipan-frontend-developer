import React from "react";
import Donut from "../../images/Donut.png";
import Bar from "./Bar";

const data = [
  {
    name: "Partnership",
    tokens: 5,
    color: "#BE2C2C",
  },
  {
    name: "LP Pool",
    tokens: 35,
    color: "#FF8F34",
  },
  {
    name: "Burned",
    tokens: 30,
    color: "#9934FF",
  },
  {
    name: "BNP LP Pool",
    tokens: 30,
    color: "#028DFD",
  },
];

const Section6 = () => {
  return (
    <section>
      <h2 className="section7-title text-2xl font-medium my-10">Tokenomics</h2>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-5 items-center">
          <div className="w-[70%] flex flex-col gap-5">
            <h2>
              Name : <span className="ml-10">AI GEN</span>
            </h2>
            <h2>
              Total Supply : <span className="ml-10">18</span>
            </h2>
            <h2>
              Contract :
              <span className="ml-10">Lorem ipsum dolor sit a...</span>
            </h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 items-center">
          <div className="w-[80%] flex flex-col gap-5">
            <h2>
              Token Name : <span className="ml-10">$AIGEN</span>
            </h2>
            <h2>
              Circulating Supply : <span className="ml-10">1B</span>
            </h2>
            <h2>
              Chain : <span className="ml-10">Ethereum</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <img className="flex-1 h-[500px] w-[480px]" src={Donut} alt="" />
        <div className="flex-1 ml-3">
          {data.map((val, i) => {
            return <Bar key={i} val={val} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Section6;
