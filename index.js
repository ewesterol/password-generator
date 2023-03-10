let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function generatePassword() {
  if (
    password1.textContent.length === 0 &&
    password2.textContent.length === 0
  ) {
    for (i = 0; i <= 15; i++) {
      //password1
      let randomPassword1 = Math.floor(Math.random() * characters.length);
      password1.textContent += characters[randomPassword1];
      //password2
      let randomPassword2 = Math.floor(Math.random() * characters.length);
      password2.textContent += characters[randomPassword2];
    }
  } else {
    eraseField();
  }
}
function eraseField() {
  password1.textContent = [];
  password2.textContent = [];
  generatePassword();
}
