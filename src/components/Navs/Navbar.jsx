import React, { useState } from "react";
import styles from "../../styles.js";
import { Outlet, Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import { auth } from "../../Firebase.js";
import { cookies } from "../Firebase/Auth.js";

export default function Navbar() {
    return (
        <>
            <div className="w-full mb-[50px]">
                <nav className={`${styles.sectionPadding} flex justify-between items-center`}>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="flex justify-center items-center gap-[10px] lg:gap-[30px] font-bold text-[1.25rem]">
                        <Link className="text-accent hover:text-accentHover" to={"/"}>
                            Home
                        </Link>
                        <Link className="text-accent hover:text-accentHover" to={"/offline"}>
                            games
                        </Link>
                        {/* <Link className="text-accent hover:text-accentHover" to={"/online"}>
              Multiplayer
            </Link> */}

                        <Link className="text-accent hover:text-accentHover" to={"/leaderboard"}>
                            Leaderboards
                        </Link>

                        {cookies.get("user-id") ? (
                            ""
                        ) : (
                            <Link className="text-accent hover:text-accentHover" to={"/signing"}>
                                Sign
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    );
}
