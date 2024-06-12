import React, { useEffect } from "react";
import "./main.css";
import Image1 from "../../images/Picture.png";
import Image2 from "../../images/Picture (1).png";
import Image3 from "../../images/Picture (2).png";
import Image4 from "../../images/Picture (3).png";
import Image5 from "../../images/Picture (4).png";
import Image6 from "../../images/Picture (5).png";
import Image7 from "../../images/Picture (6).png";
import Image8 from "../../images/Picture (7).png";
import Image9 from "../../images/Picture (8).png";
import AOS from "aos"
import "aos/dist/aos.css"

const Main = () => {


    useEffect(() => {
       AOS.init({duration : 2000})
    },[])

  return (
    <section className="flex">
      <div className="flex-1 flex flex-col justify-center items-center ml-20">
        <div className="ml-10" data-aos="fade-up"> 
          <div className="border p-[5px] border-solid border-[gray] rounded-[10px] inline ">
            <h2 className="inline">🎉New in AI.GEN: Real Time Interaction</h2>
          </div>
          <div className="Desc mt-10">
            <h1 className="text-5xl font-medium">IOTA polygon serum ipsum</h1>
            <h1 className="text-5xl font-medium text-gradient my-3">
              WAX terraUSD gala theta.
            </h1>
            <p className="text-2xl my-10">
              Chiliz serum TRON dash aave cardano crypto celo.Golem ankr bancor
              horizen ethereum quant bitcoin.
            </p>
            <button className="btn gradient text-xl ">Get Started</button>
          </div>
        </div>
      </div>
      <div className="flex-1 images flex w-full justify-end">
        <div className="w-full" data-aos="fade-down">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
        <div className="w-full">
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </div>
        <div className="w-full" data-aos="fade-down">
          <img src={Image7} alt="" />
          <img src={Image8} alt="" />
          <img src={Image9} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
