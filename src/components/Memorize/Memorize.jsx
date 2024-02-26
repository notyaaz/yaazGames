import React, { useEffect, useState } from "react";
import MemorizeContainer from "./MemorizeContainer.jsx";
import { randomNumber } from "../Helpers.js";
import { cookies } from "../Firebase/Auth.js";
import { updateUser } from "../Firebase/Firestore.js";
import Swal from "sweetalert2";

export default function Memorize() {
    const [cells, setCells] = useState([]);
    console.log(cells);
    function addNumber() {
        const rn = randomNumber() - 1;
        setCells((prev) => {
            return [...prev, rn];
        });
    }
    useEffect(() => {
        addNumber();
    }, []);

    function handleSave() {
        if (cookies.get("user-id")) {
            console.log("updated with: ", cells.length - 1);
            updateUser("mzScore", cells.length - 1);
            Swal.fire({
                title: "Saved!",
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "Can't save",
                text: "you must sign in to be able to save your record",
                icon: "warning",
            });
        }
    }

    return (
        <div className="flex justify-center items-center mt-[10px]">
            <MemorizeContainer
                cells={cells}
                addNumber={addNumber}
                setCells={setCells}
                handleSave={handleSave}
            />
        </div>
    );
}
