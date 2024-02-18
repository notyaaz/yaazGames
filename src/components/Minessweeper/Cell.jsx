import React, { useEffect, useState } from "react";

export default function Cell(props) {
  const { grid, setGrid, isDark, xPos, yPos, findAroundBombs, lose } = props;

  let { isBomb, isSolved, isFlaged } = grid[yPos][xPos];

  function handleLeftClick(event, xPos, yPos) {
    if (grid[yPos][xPos].isFlaged || grid[yPos][xPos].isSolved) return;

    setGrid((prev) => {
      const newAr = [...prev];
      newAr[yPos][xPos].isSolved = true;

      function revealEmptyCells(rowIndex, colIndex) {
        if (
          findAroundBombs(rowIndex, colIndex) !== 0 ||
          newAr[rowIndex][colIndex].isBomb
        ) {
          return;
        }

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

          if (
            newRow >= 0 &&
            newRow < grid.length &&
            newCol >= 0 &&
            newCol < grid[0].length
          ) {
            // here do the thinge
            if (newAr[newRow][newCol].isSolved == true) continue;
            newAr[newRow][newCol].isSolved = true;
            revealEmptyCells(newRow, newCol);
          }
        }
      }
      revealEmptyCells(yPos, xPos);
      return newAr;
    });

    //u lost
    if (isBomb == true) {
      console.log("u lost");
      lose();
    }
  }

  function handleRightClick(event) {
    if (isSolved) return;
    event.preventDefault();
    setGrid((prev) => {
      const newAr = [...prev];
      newAr[yPos][xPos].isFlaged = !prev[yPos][xPos].isFlaged;
      return newAr;
    });
  }

  let content;
  content = isBomb
    ? "💣"
    : findAroundBombs(yPos, xPos) !== 0
    ? findAroundBombs(yPos, xPos)
    : "";

  return (
    <div
      onClick={(event) => handleLeftClick(event, xPos, yPos)}
      onContextMenu={(event) => handleRightClick(event)}
      className={` w-[30px] h-[30px] text-black font-bold 
      ${isSolved ? (isDark ? "bg-accent pointer-events-none" : "bg-accentHover pointer-events-none") : (isDark ? "bg-complenetary hover:bg-m_resetButton" : "bg-complenetaryHover hover:bg-m_resetButton")} `}
    >
      {isFlaged ? "🚩" : ""}
      {isSolved ? content : ""}
    </div>
  );
}
//🚩💣
