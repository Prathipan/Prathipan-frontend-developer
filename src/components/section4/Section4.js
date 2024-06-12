import React, { useEffect } from "react";
import "./section4.css";
import Label from "./Label";
import AOS from "aos"
import "aos/dist/aos.css"

const data1 = [
  { name: "Avatar", color1: "#802f7eb3", color2: "#ffffff1a" },
  { name: "Technology", color1: "#2b5b75b3", color2: "#ffffff17" },
  { name: "Design", color1: "#802f7eb3", color2: "#ffffff1a" },
  { name: "Artificial Intelligence", color1: "#ffffff17", color2: "#583d80b3" },
  { name: "AI Chat bot", color1: "#583d80b3", color2: "#ffffff17" },
  { name: "Custommizable", color1: "#7a464fb3", color2: "#ffffff17" },
  { name: "3D Model", color1: "#ffffff1a", color2: "#802f7eb3" },
];
const data2 = [
  { name: "People", color1: "#2b5b75b3", color2: "#ffffff17" },
  { name: "Create Videos", color1: "#802f7eb3", color2: "#ffffff1a" },
  { name: "Analyze", color1: "#583d80b3", color2: "#ffffff17" },
  { name: "Outfits", color1: "#2b5b75b3", color2: "#ffffff17" },
  { name: "3D Model", color1: "#ffffff1a", color2: "#802f7eb3" },
  { name: "Voice Chat", color1: "#ffffff17", color2: "#7a464fb3" },
  { name: "Marketing", color1: "#ffffff17", color2: "#583d80b3" },
  { name: "React", color1: "#ffffff17", color2: "#7a464fb3" },
];

const Section4 = () => {

  useEffect(() => {
      AOS.init({duration : 2000})
  },[])


  return (
    <section className="my-[100px]">
      <div className="flex overflow-hidden whitespace-nowrap relative w-full" data-aos="fade-left">
        {data1.map((data, i) => {
          return <Label key={i} data={data} />;
        })}
      </div>
      <div className="flex overflow-hidden whitespace-nowrap relative w-full mt-5" data-aos="fade-right">
        {data2.map((data, i) => {
          return <Label key={i} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Section4;
