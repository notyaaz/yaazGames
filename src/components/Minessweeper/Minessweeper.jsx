import React, { useEffect, useState } from "react";
import MinessweeperContainer from "./MinessweeperContainer.jsx";
import { shuffle2DArray } from "../Helpers.js";

export default function Minessweeper() {
  const [grid, setGrid] = useState(() => {
    var arr = [];
    let remainingBombs = 40;

    for (var i = 0; i < 14; i++) {
      var row = [];
      for (var j = 0; j < 18; j++) {
        if (remainingBombs > 0) {
          row.push({ isBomb: true, isSolved: false, isFlaged: false });
          remainingBombs -= 1;
        } else {
          row.push({ isBomb: false, isSolved: false, isFlaged: false });
        }
      }
      arr.push(row);
    }

    arr = shuffle2DArray(arr);
    return arr;
  });
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);
  const [time, setTime] = useState(0);

  function lose() {
    setGrid((prev) => {
      return prev.map((row, yIndex) => {
        return row.map((cellObject, xIndex) => {
          return { ...cellObject, isSolved: true, isFlaged: false };
        });
      });
    });

    setLost(true);
  }

  function win() {
    setWon(true);
    console.log("u wonnn!!");
  }

  function reset() {
    setGrid((prev) => {
      const newAr = prev.map((row, yIndex) => {
        return row.map((cellObject, xIndex) => {
          return { ...cellObject, isSolved: false, isFlaged: false };
        });
      });

      return shuffle2DArray(newAr);
    });
    setLost(false);
    setWon(false);
    setTime(0);
  }

  function checkWin() {
    if (lost || won) return;
    let flag = false;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const cellObject = grid[i][j];
        if (!cellObject.isBomb) {
          if (!cellObject.isSolved) {
            flag = true;
            break;
          }
        }
      }
    }
    if (!flag) {
      win();
    }
  }

  useEffect(() => {
    checkWin();
  }, [grid]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center bg-m_backgroundColor h-svh">
        <MinessweeperContainer
          grid={grid}
          setGrid={setGrid}
          lose={lose}
          lost={lost}
          reset={reset}
          win={win}
          checkWin={checkWin}
          time={time}
        />
      </div>
    </div>
  );
}
