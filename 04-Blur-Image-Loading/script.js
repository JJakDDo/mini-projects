const img = ['../src/img1.jpg', '../src/img4.jpg', '../src/img2.jpg'];

const image = document.querySelector('img');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.btn');

image.src = img[0];

// 특정 범위 안에 있는 숫자를 다른 범위 안에 있는 숫자로 만드는 함수
// 예를 들어서 0 ~ 100의 범위 안에 30이라는 숫자를
// 0 ~ 10 범위 안에서는 3 이라는 숫자가된다.
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const clickHandler = (index) => {
  image.src = img[index];
  let blur = 0;
  text.classList.remove('hide');
  const setIntervalID = setInterval(() => {
    if (blur >= 100) {
      clearInterval(setIntervalID);
      text.classList.add('hide');
    }
    text.textContent = `${blur}%`;
    image.style = `filter: blur(${scale(blur, 0, 100, 30, 0)}px)`;
    blur++;
  }, 30);
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => clickHandler(index));
});
