import React, { useEffect } from "react";
import "./section7.css";
import Roadmap1 from "../../images/roadmap1.png";
import Roadmap2 from "../../images/roadmap2.png";
import Roadmap3 from "../../images/roadmap3.png";
import AOS from "aos"
import "aos/dist/aos.css"

const Section7 = () => {

  useEffect(() => {
     AOS.init({duration : 2000})
  },[])

  return (
    <section className="section-7 w-full">
      <h1 className="section7-title text-2xl font-medium my-10">Roadmap</h1>
      <div className="wrapper1 h-[500px] flex justify-between mt-10">
        <div className="phase flex-1 flex flex-col justify-center items-center">
          <h1 className="phase-1 typo text-2xl mb-3">Phase 1</h1>
          <ul className="text-xl">
            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
            <li>Flow horizen waves dash tether zcash waves dash terralUSD.</li>
            <li>Quant harmon amp cosmos PancakeSwap decentraland decred</li>
            <li>
              Serum TRON solana tether holo crypto. Flow ecash amp EOS digibyte
              stellar.
            </li>
          </ul>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <img className="h-full w-full" src={Roadmap1} alt="" />
        </div>
      </div>
      <div className="wrapper1 h-[500px] flex justify-between mt-10">
        <div className="phase flex-1 flex flex-col justify-start items-center">
          <h1 className="phase-2 typo text-2xl mb-3">Phase 2</h1>
          <ul className="text-xl">
            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
            <li>Flow horizen waves dash tether zcash waves dash terralUSD.</li>
            <li>Quant harmon amp cosmos PancakeSwap decentraland decred</li>
            <li>
              Serum TRON solana tether holo crypto. Flow ecash amp EOS digibyte
              stellar.
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <img className="h-full w-full" src={Roadmap2} alt="" />
        </div>
      </div>
      <div className="wrapper1 h-[500px] flex justify-between mt-10">
        <div className="phase flex-1 flex flex-col justify-center items-center">
          <h1 className="phase-3 typo text-2xl mb-3">Phase 3</h1>
          <ul className="text-xl">
            <li>
              Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum
            </li>
            <li>Waves TRON dogecoin bancor eCash quant secret</li>
            <li>Celsius crypto bancor nexo ltecoin decentraland crypto.</li>
          </ul>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <img className="h-full w-full" src={Roadmap3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section7;
