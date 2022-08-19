const mainGroup = document.querySelector(".svg-main");
const mainPaths = mainGroup.querySelectorAll("path");

mainPaths.forEach((path, index) => {
  const length = path.getTotalLength();
  path.style.setProperty("--length", length);
  path.style.setProperty("--delay", index * 100 + "ms");
  path.style.setProperty("--duration", length * 15 + "ms");
});
