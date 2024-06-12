import React, { useEffect } from "react";
import "./section2.css";
import SectionImg from "../../images/section2.png";
import AOS from "aos"
import "aos/dist/aos.css"

const Section2 = () => {

  useEffect(() => {
    AOS.init({duration : 2000})
 },[])

  return (
    <section className="section2-wrapper flex justify-center items-center relative">
      <img className="wrapper" src={SectionImg} alt="" />
      <div className="absolute text-5xl font-medium leading-10" data-aos="fade-up">
        <h2 className="mb-5">
          <span className="sec2-text-gradient">Create, customize, and publish </span>your
        </h2>
        <h2>digita persona to life efforlessly</h2>
      </div>
    </section>
  );
};

export default Section2;
