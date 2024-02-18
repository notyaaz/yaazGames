import React from "react";
import { Link } from "react-router-dom";

export default function Offline() {
  return (
    <div className="flex justify-center items-center h-svh flex-col gap-[20px]">
      <p>
        <Link to={"/offline/minessweeper"}>Minessweeper</Link>
      </p>
      <p>
        <Link to={"/offline/tenzies"}>tenzies</Link>
      </p>
    </div>
  );
}
