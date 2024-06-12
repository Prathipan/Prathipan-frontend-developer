import React, { useEffect } from "react";
import "./section5.css";
import Shoe from "../../images/shoe.png";
import Avatar from "../../images/AIAvatar.png";
import Script from "../../images/script.png";
import Voice from "../../images/voiceGenerator.png";
import AOS from "aos"
import "aos/dist/aos.css"

const data = [
  {
    name1: "AI",
    name2: "Outfit",
    image: Shoe,
  },
  {
    name1: "Realistic Ai",
    name2: "Avatar",
    image: Avatar,
  },
  {
    name1: "Generate or Write your",
    name2: "Script",
    image: Script,
  },
  {
    name1: "AI Power Voice",
    name2: "Generator",
    image: Voice,
  },
];

const Section5 = () => {

   useEffect(() => {
    AOS.init({duration : 2000})
   },[])

  return (
    <div className="section-5 flex justify-center items-center ">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {data.map(({ name1, name2, image }, i) => {
          return (
            <div className=" flex flex-col p-6 text-center rounded-md" style={{"background": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(122, 70, 79, 0.25) 100%)"}}>
              <div className="flex-1 text-3xl flex flex-col items-center">
                <h2>{name1}</h2>
                <h2>{name2}</h2>
              </div>
              <div className="flex-1" data-aos="fade-up">
                <img src={image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
