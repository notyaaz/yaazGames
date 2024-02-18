import React, { useEffect, useState } from "react";
import Cell from "./Cell.jsx";

export default function MinessweeperContainer(props) {
  const { grid, setGrid, lose, reset, win, time } = props;

  const findAroundBombs = (rowIndex, colIndex) => {
    let count = 0;

    // Define the neighboring directions: up, down, left, right, and diagonals
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    // Iterate over the neighboring cells
    for (let [dx, dy] of directions) {
      const newRow = rowIndex + dx;
      const newCol = colIndex + dy;

      // Check if the neighboring cell is within the grid boundaries
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length
      ) {
        // Increment the count if the neighboring cell is a bomb
        if (grid[newRow][newCol].isBomb) {
          count++;
        }
      }
    }

    return count;
  };

  return (
    <div className="w-[540px] h-[420px]  text-center ">
      <div className="flex justify-center text-center">
        <button
          className="text-black font-Inter font-bold bg-m_resetButton px-4 py-1 outline-none"
          onClick={reset}
        >
          {" "}
          Reset
        </button>
        <p className="font-Inter font-bold bg-m_resetButton px-4 py-1">
          {time}
        </p>
      </div>
      <div className="flex flex-wrap shadow">
        {grid.map((row, yPos) => {
          return row.map((cellObject, xPos) => {
            //make the flipedfloped colors
            if (yPos % 2 == 0) var isDark = xPos % 2 == 0 ? true : false;
            else var isDark = xPos % 2 != 0 ? true : false;

            return (
              <Cell
                grid={grid}
                setGrid={setGrid}
                key={xPos}
                isDark={isDark}
                xPos={xPos}
                yPos={yPos}
                findAroundBombs={findAroundBombs}
                lose={lose}
                win={win}
              />
            );
          });
        })}
      </div>
    </div>
  );
}
