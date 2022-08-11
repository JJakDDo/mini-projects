const btn = document.querySelector("#btn1");

const onClick = (e) => {
  const { x, y, width, height } = btn.getBoundingClientRect();
  const radius = Math.sqrt(width * width, height * height);
  btn.style.setProperty("--diameter", radius * 2 + "px");

  const { clientX, clientY } = e;

  const left = ((clientX - x - radius) / width) * 100 + "%";
  const top = ((clientY - y - radius) / height) * 100 + "%";

  btn.style.setProperty("--left", left);
  btn.style.setProperty("--top", top);
  btn.style.setProperty("--a", "");
  setTimeout(() => {
    btn.style.setProperty("--a", "ripple-effect 500ms linear");
  });
};

btn.addEventListener("click", onClick);
