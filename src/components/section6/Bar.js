import React from "react";
import "./section6.css";

const Bar = ({ val }) => {
  const { name, tokens, color } = val;

  console.log(color)

  return (
    <div className="flex border border-solid border-[white] w-[80%] mt-5 rounded-md">
      <div className=" w-[20px] rounded-[5px_0px_0px_5px]" style={{backgroundColor : color}}></div>
      <h2 className="p-3">
        {name} : <span>{tokens}% tokens</span>
      </h2>
    </div>
  );
};

export default Bar;
