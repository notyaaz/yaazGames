import React from "react";
import { Link } from "react-router-dom";
import minessweeperImage from "../../images/minessweeperImage.png";
import tenziesImage from "../../images/tenziesImage.png";
import memorizeImage from "../../images/MemorizeImage.png";
import styles from "../../styles.js";

export default function Offline() {
    return (
        <div
            className={`${styles.sectionPadding} flex justify-center items-center lg:mt-[100px] gap-[150px] lg:gap-[250px] flex-wrap`}
        >
            <Link
                className="shadow relative text-black hover:text-accent transition-colors duration-300 ease-in-out"
                to={"/offline/minessweeper"}
            >
                <div className="absolute z-10 w-full h-full top-0 left-0 blurring"></div>
                <img className={"w-[400px] relative "} src={minessweeperImage} />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[2rem] z-20 ">
                    Minessweeper
                </p>
            </Link>
            <Link
                className="shadow relative text-black hover:text-accent transition-colors duration-300 ease-in-out"
                to={"/offline/tenzies"}
            >
                <div className="absolute z-10 w-full h-full top-0 left-0 blurring"></div>
                <img className="w-[400px] h-[310px]" src={tenziesImage} />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[2rem] z-20">
                    Tenzies
                </p>
            </Link>
            <Link
                className="shadow relative text-black hover:text-accent transition-colors duration-300 ease-in-out"
                to={"/offline/memorize"}
            >
                <div className="absolute z-10 w-full h-full top-0 left-0 blurring"></div>
                <img className="w-[400px] h-[310px]" src={memorizeImage} />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[2rem] z-20">
                    Memorize
                </p>
            </Link>
        </div>
    );
}
