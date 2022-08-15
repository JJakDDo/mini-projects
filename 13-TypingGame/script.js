import words from "./wordsList.js";
const wordsBox = document.querySelector(".words-list");
const input = document.querySelector(".word-input");
const scoreElem = document.querySelector(".score > p");
let boxWidth, boxHeight;

let currentWords = [];
let score = 0;

const getWidthAndHeight = () => {
  boxWidth = wordsBox.getBoundingClientRect().width;
  boxHeight = wordsBox.getBoundingClientRect().height;
};

getWidthAndHeight();

const getNewWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex].word.replace(/\d/gi, "");
  currentWords.push(word);
  return word;
};

const intervalId = setInterval(() => {
  const word = document.createElement("div");
  const left = Math.random() * (boxWidth - 100) + "px";
  word.innerText = getNewWord();
  word.classList.add("word");
  word.style.cssText = `position:absolute; top: 0; left: ${left}; width: 100px; text-align:center;color:#eaeaea;`;
  wordsBox.appendChild(word);
}, 1000);

const animation = () => {
  const wordList = document.querySelectorAll(".word");
  for (let i = 0; i < wordList.length; i++) {
    const { height } = wordList[i].getBoundingClientRect();
    wordList[i].style.top =
      parseInt(wordList[i].style.top) + getMovementByFrame() + "px";
    if (parseInt(wordList[i].style.top) + height >= boxHeight) {
      clearInterval(intervalId);
      input.disabled = true;
      return;
    }
  }
  requestAnimationFrame(animation);
};

const getMovementByFrame = () => {
  const { height } = wordsBox.getBoundingClientRect();
  return height / (60 * 5);
};

requestAnimationFrame(animation);

const updateScore = () => {
  score++;
  scoreElem.innerText = `점수: ${score}`;
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let index = currentWords.indexOf(input.value);
    if (index >= 0) {
      const wordList = document.querySelectorAll(".word");
      currentWords = [
        ...currentWords.slice(0, index),
        ...currentWords.slice(index + 1),
      ];
      wordsBox.removeChild(wordList[index]);
      updateScore();
    }
    input.value = "";
  }
});

window.addEventListener("resize", getWidthAndHeight);
