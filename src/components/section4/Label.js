import React from "react";
import "./section4.css";

const Label = ({ data }) => {
  const { name, color1, color2 } = data;

  return (
    <p
      style={{
        background: `linear-gradient(92.08deg, ${color1} 0%, ${color2} 100%)`,
      }}
      className="inline-block mx-5 text-2xl w-[250px] h-[68px] pt-3 pb-2 px-4 rounded-[8px] flex-shrink-1"
    >
      {name}
    </p>
  );
};

export default Label;
