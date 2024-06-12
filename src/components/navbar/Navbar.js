import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="h-[72px] bg-black px-[50px] flex justify-between items-center text-white">
          <div className="frame1 flex items-center">
            <h2 className="logo uppercase text-[24px] tracking-[15px]">ai.gen</h2>
            <div className="lists">
              <ul className="flex gap-[30px] ml-20">
                <li>Features</li>
                <li>Roadmaps</li>
                <li>Tokenomics</li>
              </ul>
            </div>
          </div>
          <div className="frame2 flex gap-2.5">
            <button className=" nav-btn bg-[#a6a6a6] font-medium">Whitepaper</button>
            <button className="nav-btn gradient capitalize font-medium">Get started</button>
          </div>
    </nav>
  );
};

export default Navbar;
