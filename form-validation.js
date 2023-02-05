"use strict";

const inputs = document.querySelectorAll(".input");
console.log(inputs);
let isValid = true;

for (let i = 0; i < inputs.length; i++) {
  if (!inputs.value) {
    console.log(`puste`);
  }
}
