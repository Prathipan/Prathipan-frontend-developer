import React from "react";
import "./footer.css";
import { FaTwitter, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex footer m-9">
        <div className="flex-1 footer-text text-3xl ml-10">
          <p>Dash dash terraUSD neo uniswap</p>
          <p>kadena helium avalanche polymath</p>
          <p>bancor</p>
        </div>
        <div className="flex-1 flex flex-col ">
          <p className="text-xl text-right mb-5 ">Looking for help ?</p>
          <div className="w-full text-right">
            <input
              className="border-2 bg-transparent p-3 border-solid border-[white] rounded-md w-[60%]"
              placeholder="Enter your email"
            />
            <button className="gradient submit-btn">Submit</button>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto my-0" />
      <div className="flex justify-around my-7">
        <h2 className="logo uppercase text-[24px] tracking-[15px]">ai.gen</h2>
        <div className="w-[300px] flex justify-between">
          <FaTwitter style={{ fontSize: '40px' }} />
          <FaLinkedin style={{ fontSize: '40px' }} />
          <FaTiktok style={{ fontSize: '40px' }} />
          <FaYoutube style={{ fontSize: '40px' }} />
        </div>
      </div>
    </>
  );
};

export default Footer;
