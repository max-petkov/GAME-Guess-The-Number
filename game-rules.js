"user strict";

const checkBtn = document.querySelector("#checkNumber");
const questionBox = document.querySelector(".js-number-box");
const body = document.querySelector("body");
const triesLeft = document.querySelector("#triesLeft");
const highscore = document.querySelector("#highscore");
const tryAgain = document.querySelector("#tryAgain");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let tries = 20;
const displayMessage = function (msg) {
  document.querySelector("#response").textContent = msg;
};

checkBtn.addEventListener("click", function () {
  let inputValue = Number(document.querySelector(".js-input-field").value);

  if (!inputValue) {
    displayMessage("No number!");
  } else if (inputValue === randomNumber) {
    displayMessage("Correct!");
    questionBox.textContent = randomNumber;
    body.style.backgroundColor = "#198754";
    highscore.textContent = Number(triesLeft.textContent);
    tryAgain.classList.remove("d-none");
  } else if (inputValue <= 0 || inputValue >= 21) {
    displayMessage("Choose between 1 and 20");
  } else {
    if (tries > 1) {
      displayMessage(inputValue > randomNumber ? "Too high!" : "Too low!");
      tries--;
      triesLeft.textContent = tries;
    } else {
      displayMessage("You lost!");
      triesLeft.textContent = 0;
      questionBox.textContent = randomNumber;
      body.style.backgroundColor = "#dc3545";
      tryAgain.classList.remove("d-none");
    }
  }
});

tryAgain.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  tries = 20;
  document.querySelector(".js-input-field").value = "";
  displayMessage("Start guessing");
  questionBox.textContent = "?";
  triesLeft.textContent = tries;
  body.style.backgroundColor = "#222222";
  tryAgain.classList.add("d-none");
});
