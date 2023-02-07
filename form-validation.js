"use strict";

const form = document.querySelector("form");
const inputs = [...document.querySelectorAll(".input")];
const errorMessages = [...document.querySelectorAll(".error-message")];
const errorIcons = [...document.querySelectorAll(".error-icon")];

form.addEventListener("submit", (e) => {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      // dont submit form
      e.preventDefault();
      // display all error styles
      errorMessages[i].classList.remove("hidden");
      inputs[i].classList.add("input-error");
      inputs[i].nextElementSibling.classList.remove("hidden");
    } else {
      // hide all erros styles
      errorMessages[i].classList.add("hidden");
      inputs[i].classList.remove("input-error");
      inputs[i].nextElementSibling.classList.add("hidden");
    }
  }
});

// Below first primitive version of code 😸

// const form = document.querySelector("form");
// const firstName = document.querySelector("[name='firstName']");
// const firstNameMessage = document.querySelector(".first-name-message");
// const lastName = document.querySelector("[name='lastName']");
// const lastNameMessage = document.querySelector(".last-name-message");
// const email = document.querySelector("[name='email']");
// const emailMessage = document.querySelector(".email-message");
// const password = document.querySelector("[name='password']");
// const passwordMessage = document.querySelector(".password-message");

// form.addEventListener("submit", (e) => {
//   if (firstName.value === "" || firstName.value == null) {
//     e.preventDefault();
//     firstNameMessage.classList.remove("hidden");
//     firstName.classList.add("input-error");
//     firstName.nextElementSibling.classList.remove("hidden");
//   }

//   if (lastName.value === "" || lastName.value == null) {
//     e.preventDefault();
//     lastNameMessage.classList.remove("hidden");
//     lastName.classList.add("input-error");
//     lastName.nextElementSibling.classList.remove("hidden");
//   }

//   if (email.value === "" || email.value == null) {
//     e.preventDefault();
//     emailMessage.classList.remove("hidden");
//     email.classList.add("input-error");
//     email.nextElementSibling.classList.remove("hidden");
//   }

//   if (password.value === "" || password.value == null) {
//     e.preventDefault();
//     passwordMessage.classList.remove("hidden");
//     password.classList.add("input-error");
//     password.nextElementSibling.classList.remove("hidden");
//   }
// });
