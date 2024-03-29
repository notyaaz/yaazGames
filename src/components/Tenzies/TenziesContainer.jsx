import React from "react";
import NumberComponent from "./NumberComponent.jsx";

export default function TenziesContainer(props) {
    return (
        <div className="bg-gray-200 w-[400px] min-h-[400px] rounded-md px-[40px] py-[30px] shadow">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-gray-900 font-bold text-[2rem]">Tenzies</h2>
                <p className="text-gray-700 text-[1rem] text-center">
                    Roll until all dice are the same. Click each die to freeze it at its current
                    value between rolls.
                </p>
                <div className="flex justify-center items-center gap-[20px] flex-wrap my-[40px]">
                    {props.ar.map((tenz, key) => {
                        return (
                            <NumberComponent
                                key={key}
                                id={tenz.id}
                                number={tenz.number}
                                handleClick={props.handleClick}
                                isClicked={tenz.isClicked}
                            />
                        );
                    })}
                </div>
                <div className="flex gap-12">
                    <button
                        onClick={props.won ? props.playAgain : props.roll}
                        className=" bg-complenetary text-white rounded-lg py-[5px] w-[100px] outline-none hover:bg-complenetaryHover"
                    >
                        <p>{props.won ? "play again" : "Roll"}</p>
                    </button>
                    <p className="text-[1.5rem] font-bold">{props.time}</p>
                </div>
            </div>
        </div>
    );
}
