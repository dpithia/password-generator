let passwordGen = document.getElementById("btn-generate");
let pass1 = document.getElementById("password-1");
let pass2 = document.getElementById("password-2");

// Add event listener
passwordGen.addEventListener("click", putPassword);

const characters = [
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
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "?",
];

function generatePassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    // generates 15-character password
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function putPassword() {
  const password1 = generatePassword();
  const password2 = generatePassword();
  pass1.textContent = password1;
  pass2.textContent = password2;
}

function copy(element) {
  navigator.clipboard.writeText(element.textContent);
}
