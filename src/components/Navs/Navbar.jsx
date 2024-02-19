import React from "react";
import styles from "../../styles.js";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../public/images/Logo.png"

export default function Navbar() {
  return (
    <>
      <div className="w-full mb-[50px]">
        <nav
          className={`${styles.sectionPadding} flex justify-between items-center`}
        >
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex justify-center items-center gap-[10px] lg:gap-[30px] font-bold text-[1.25rem]">
            <Link className="text-accent hover:text-accentHover" to={"/"}>
              Home
            </Link>
            <Link
              className="text-accent hover:text-accentHover"
              to={"/offline"}
            >
              Singleplayer
            </Link>
            <Link className="text-accent hover:text-accentHover" to={"/online"}>
              Multiplayer
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
