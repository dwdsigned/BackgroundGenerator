// let _ = require("lodash");

// let arrayDed = [1,2,3,4,5,6,7,8];
// console.log("answer", _.without(array, 3));

console.log(without);
let css = document.querySelector("h3");
console.log(css);
let color1 = document.querySelector(".color1");
console.log(color1);
let color2 = document.querySelector(".color2");
console.log(color2);
let body = document.getElementById("gradient");
console.log(body);
let randomButton = document.querySelector(".random");
console.log(randomButton);

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
let randNum = generateRandom(0, 256);

// color1.value = generateRandomNumber(0, 256);

function randomColor() {
    body.style.background =
    "linear-gradient(to right, rgb("
    + generateRandom(0, 256)
    + ", "
    + generateRandom(0, 256)
    + ", "
    + generateRandom(0, 256)
    + "), rgb("
    + generateRandom(0, 256)
    + ", "
    + generateRandom(0, 256)
    + ", "
    + generateRandom(0, 256)
    + "))";
    console.log(body.style.background);
    // color1.setAttribute("value" )
    css.textContent = body.style.background + ";"
}

randomButton.addEventListener("click", randomColor);