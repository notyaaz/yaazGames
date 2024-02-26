import React, { useEffect, useState, useRef } from "react";
import { delay } from "../Helpers.js";

export default function MemorizeContainer({ cells, setCells, addNumber, handleSave }) {
    const lightColor = "bg-complenetaryHover";
    const darkColor = "bg-accent";
    const redColor = "bg-red-500";

    const x = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const [color, setColor] = useState(darkColor);
    const [cellIndex, setCellIndex] = useState();
    const [canClick, setCanClick] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [lost, setLost] = useState(false);

    async function handleClick(cellNumber) {
        if (!canClick || lost) return;

        setCanClick(false);
        setCellIndex(cellNumber);

        if (cells[clickCount] == cellNumber) {
            await changeColor(lightColor, 100);
            setClickCount((prev) => prev + 1);
        } else {
            await changeColor(redColor, 400);
            setClickCount((prev) => prev + 1);
            console.log("u lost");
            setLost(true);
        }

        if (clickCount + 1 == cells.length) {
            addNumber();
            setClickCount(0);
        }
        setCanClick(true);
    }

    async function changeColor(color, time) {
        setColor(color);
        await delay(time).then(async () => {
            setColor(darkColor);
        });
    }

    async function changeCellsColor() {
        setCanClick(false);
        await delay(1000);
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            setCellIndex(cell);
            await changeColor(lightColor, 300);
            await delay(300);
        }
        setCanClick(true);
    }

    useEffect(() => {
        if (isPlaying && !lost) {
            changeCellsColor();
        }
    }, [cells]);

    function handlePlay() {
        changeCellsColor();
        setIsPlaying(true);
    }
    function handleRestart() {
        setIsPlaying(false);
        setLost(false);
        setCanClick(false);
        setClickCount(0);
        setCells([]);
        addNumber();
    }

    return (
        <div className="w-[500px] flex justify-center items-center flex-col gap-10">
            <div>your score is: {cells.length == 0 ? 0 : cells.length - 1}</div>
            <div className="flex justify-center items-center flex-wrap gap-[10px]">
                {x.map((cellNumber) => {
                    return (
                        <div
                            key={cellNumber}
                            onClick={(e) => {
                                handleClick(cellNumber);
                            }}
                            className={`${
                                cellNumber == cellIndex ? color : darkColor
                            } w-[120px] h-[150px] rounded-lg cursor-pointer transition-colors duration-200 ease-in-out`}
                        ></div>
                    );
                })}
            </div>
            <div className="flex gap-[20px]">
                <button
                    onClick={lost ? handleRestart : handlePlay}
                    className="bg-complenetary hover:bg-complenetaryHover outline-none rounded-lg w-[100px] p-[12px]"
                    hidden={lost ? false : isPlaying ? true : false}
                >
                    {lost ? "Restart" : "Play"}
                </button>

                <button
                    onClick={handleSave}
                    className="bg-complenetary hover:bg-complenetaryHover outline-none rounded-lg w-[100px] p-[12px]"
                    hidden={!lost}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
