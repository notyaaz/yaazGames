import Swal from "sweetalert2";

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

export async function winAlertAndInputUsername() {
  const { value: username } = await Swal.fire({
    icon: "success",
    title: "You won, Congrats",
    input: "text",
    inputLabel: "Enter your username",
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  });
  if (username) {
    Swal.fire(`SENT`);
  }
  return username
}
