import React, { useEffect } from "react";
import "./section8.css";
import Section8Img from "../../images/section8.png";
import AOS from "aos"
import "aos/dist/aos.css"

const Section8 = () => {

  useEffect(() => {
    AOS.init({duration : 2000})
  },[])

  return (
    <section className="section8 mt-11 flex flex-col items-center relative mb-[200px]">
      <img src={Section8Img} alt="" data-aos="fade-up" />
        <p className="gradient w-[80%] text-6xl rounded-md p-5 absolute bottom-[-50px]">Get Started </p>
    </section>
  );
};

export default Section8;
