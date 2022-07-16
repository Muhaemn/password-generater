const length = document.getElementById("length");
const checknum = document.getElementById("checknum");
const checkA = document.getElementById("checkA");
const checka = document.getElementById("checka");
const checkS = document.getElementById("checkS");
const pass = document.getElementById("pass");
const btn = document.getElementById("btn");
const checks = document.querySelectorAll(".checki");
const checksp = document.querySelectorAll("p");
checks.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("checked");
  });
});
checksp.forEach((e, index) => {
  e.addEventListener("click", () => {
    checks[index].classList.toggle("checked");
  });
});
let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let Letters = [
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
];
let Symbols = ["!", "@", "#", "$", "%", "&", "*", "?", ">", "<"];
function num() {
  let x = Math.floor(Math.random() * Num.length);
  return Num[x];
}
function cap() {
  let x = Math.floor(Math.random() * Letters.length);
  let y = Letters[x].toLocaleUpperCase();
  return y;
}
function small() {
  let x = Math.floor(Math.random() * Letters.length);
  return Letters[x];
}
function symbol() {
  let x = Math.floor(Math.random() * Symbols.length);
  return Symbols[x];
}
btn.addEventListener("click", () => {
  let functions = [cap, num, small, symbol];
  let password = [];
  for (let i = 0; i < length.value; i++) {
    if(!checknum.checked){functions = functions.filter(e => e!= num)}
    if(!checkA.checked){functions = functions.filter(e=> e!= cap)}
    if(!checka.checked){functions = functions.filter(e=> e!= small)}
    if(!checkS.checked){functions = functions.filter(e=> e!= symbol)}
    password.push(functions[Math.floor(Math.random() * functions.length)]());
  }
  if (
    !(
      !checknum.checked &&
      !checkA.checked &&
      !checka.checked &&
      !checkS.checked
    )
  ) {
    pass.textContent = password.join("");
  } else {
    pass.textContent = "please select the types";
  }
});
