import Swal from "sweetalert2";
import { cookies } from "./Firebase/Auth.js";

export function randomNumber() {
    return Math.ceil(Math.random() * 9);
}

export function shuffle2DArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = array[i].length - 1; j >= 0; j--) {
            const k = Math.floor(Math.random() * (i + 1));
            const l = Math.floor(Math.random() * array[k].length);
            [array[i][j], array[k][l]] = [array[k][l], array[i][j]];
        }
    }
    return array;
}

export async function winAlert() {
    Swal.fire({
        title: "You won, Congrats!",
        text: "Do you want to save this new record?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#E09600",
        cancelButtonColor: "#4483E3",
        confirmButtonText: "Save!",
    }).then((result) => {
        if (result.isConfirmed) {
            if (cookies.get("user-id")) {
                Swal.fire({
                    title: "Saved!",
                    text: "Your record has been saved.",
                    icon: "success",
                });
                return true;
            } else {
                Swal.fire({
                    title: "Can't save",
                    text: "You are not signed in, you must sign in to be able to save your records",
                    icon: "error",
                });
                return false;
            }
        }
    });
    return false;
}

export function delay(timeInMilliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // Resolve the promise after the specified time
        }, timeInMilliseconds);
    });
}
