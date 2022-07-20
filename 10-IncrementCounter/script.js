const counters = document.querySelectorAll(".counter");

let currentTime = 0;
let duration = 1000;

const intervalId = setInterval(() => {
  if (currentTime >= duration) {
    return clearInterval(intervalId);
  }
  counters.forEach((counter) => {
    const inc = counter.attributes.number.value / (duration / 10);
    counter.textContent = Number(counter.textContent) + Math.round(inc);
  });
  currentTime += 10;
}, 10);
