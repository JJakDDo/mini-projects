const bottleContainer = document.querySelector("#bottle_container");
const bottles = document.querySelectorAll(".bottle");
const remainingWater = document.querySelector("#remaining_water");
const remainingWaterText = document.querySelector("#remaining_water > h2");
const drankWater = document.querySelector("#drank_water");
const drankWaterText = document.querySelector("#drank_water > h3");
bottleContainer.addEventListener("click", (event) => {
  event.stopPropagation;
  event.preventDefault;

  const id = Number(event.target.id);
  const filledBottles = document.querySelectorAll(".fill").length;

  if (isNaN(id)) return;
  if (id === filledBottles - 1) {
    bottles[id].classList.remove("fill");
  } else {
    for (let i = 0; i < bottles.length; i++) {
      bottles[i].classList.remove("fill");
    }
    for (let i = 0; i <= id; i++) {
      bottles[i].classList.add("fill");
    }
  }

  const afterFilledBottles = document.querySelectorAll(".fill").length;
  remainingWater.style.height = `${100 - 12.5 * afterFilledBottles}%`;
  drankWater.style.height = `${50 * afterFilledBottles}px`;
  remainingWaterText.textContent = `${2 - 0.25 * afterFilledBottles}L`;
  drankWaterText.textContent = `${12.5 * afterFilledBottles}%`;
});
