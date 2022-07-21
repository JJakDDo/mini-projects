const counter = document.querySelector("span");

let isUp = true;
let number = 10;

const intervalId = setInterval(() => {
  if (isUp) {
    counter.textContent = number--;
    counter.classList.add("up");
    counter.classList.remove("down");
    isUp = false;
  } else {
    counter.classList.remove("up");
    counter.classList.add("down");
    isUp = true;
  }

  if (number < 0) {
    clearInterval(intervalId);
  }
  console.log("here");
}, 500);
