const wordsBox = document.querySelector(".words-list");
const { x, y, width, height: boxHeight } = wordsBox.getBoundingClientRect();

const intervalId = setInterval(() => {
  const word = document.createElement("div");
  const left = Math.random() * (width - 100) + "px";
  word.innerText = "hello";
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
