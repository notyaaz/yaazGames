import React, { useEffect, useState } from "react";
import TenziesContainer from "./TenziesContainer.jsx";
import Swal from "sweetalert2";
import { randomNumber, winAlertAndInputUsername } from "../Helpers.js";

export default function Tenzies() {
  const [ar, setAr] = useState(
    [
      { id: 0, number: 1, isClicked: false },
      { id: 1, number: 2, isClicked: false },
      { id: 2, number: 3, isClicked: false },
      { id: 3, number: 4, isClicked: false },
      { id: 4, number: 5, isClicked: false },
      { id: 5, number: 6, isClicked: false },
      { id: 6, number: 7, isClicked: false },
      { id: 7, number: 8, isClicked: false },
      { id: 8, number: 9, isClicked: false },
      { id: 9, number: 9, isClicked: false },
    ].map((tenz) => ({ ...tenz, number: randomNumber() }))
  );
  const [won, setWon] = useState(false);

  const [mainNumber, setMainNumber] = useState(0);

  function roll() {
    setAr((prev) => {
      const newAr = prev.map((tenz) => {
        tenz.isClicked
          ? (tenz.number = tenz.number)
          : (tenz.number = randomNumber());
        return tenz;
      });
      return newAr;
    });
  }

  async function handleClick(id) {
    if (won == true) return;
    setAr((prev) => {
      const newAr = prev.map((tenz) => {
        if (tenz.id === id) {
          return { id: id, number: tenz.number, isClicked: !tenz.isClicked };
        } else {
          return tenz;
        }
      });
      return newAr;
    });
  }

  useEffect(() => {
    const x = ar[0].number;
    let flag = false;
    for (let i = 0; i < ar.length; i++) {
      if (ar[i].number != x || ar[i].isClicked != true) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      setWon(true);
      winAlertAndInputUsername();
    }
  }, [ar]);

  function playAgain() {
    setAr(
      [
        { id: 0, number: 1, isClicked: false },
        { id: 1, number: 2, isClicked: false },
        { id: 2, number: 3, isClicked: false },
        { id: 3, number: 4, isClicked: false },
        { id: 4, number: 5, isClicked: false },
        { id: 5, number: 6, isClicked: false },
        { id: 6, number: 7, isClicked: false },
        { id: 7, number: 8, isClicked: false },
        { id: 8, number: 9, isClicked: false },
        { id: 9, number: 9, isClicked: false },
      ].map((tenz) => ({ ...tenz, number: randomNumber() }))
    );
    setWon(false);
  }

  return (
    <div className="mt-[100px] flex items-center justify-center">
      <TenziesContainer
        mainNumber={mainNumber}
        ar={ar}
        roll={roll}
        handleClick={handleClick}
        won={won}
        playAgain={playAgain}
      />
    </div>
  );
}
