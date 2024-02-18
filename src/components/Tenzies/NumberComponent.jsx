import React from "react";

export default function NumberComponent(props) {
  return (
    <div
      onClick={() => props.handleClick(props.id)}
      className={`${
        props.isClicked ? "bg-accent" : "bg-white"
      } text-[1.4rem] font-Inter font-bold text-gray-900 w-[40px] h-[40px] text-center cursor-pointer drop-shadow-lg flex items-center justify-center`}
    >
      {props.number}
    </div>
  );
}
