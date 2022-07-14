const divEventKey = document.querySelector("#event_key");
const divEventKeyCode = document.querySelector("#event_keycode");
const divEventCode = document.querySelector("#event_code");

const divKeyCodesContainer = document.querySelector(".keycodes_container");
const divIntro = document.querySelector(".intro");

function getKeyCodes(event) {
  event.preventDefault;

  divEventKey.textContent = event.key === " " ? "Space" : event.key;
  divEventKeyCode.textContent = event.keyCode;
  divEventCode.textContent = event.code;

  if (divIntro.classList.length === 1) {
    divKeyCodesContainer.classList.remove("hidden");
    divKeyCodesContainer.classList.add("flex");

    divIntro.classList.add("hidden");
  }
}

window.addEventListener("keydown", (event) => getKeyCodes(event));
