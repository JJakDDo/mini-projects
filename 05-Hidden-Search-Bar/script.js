const btnSearch = document.querySelector("#search_btn");
const inputSearch = document.querySelector("#search_bar");

let isOpen = false;
btnSearch.addEventListener("click", (event) => {
  event.preventDefault;

  if (isOpen) {
    btnSearch.style.marginLeft = "0px";
    inputSearch.style.width = "50px";
  } else {
    btnSearch.style.marginLeft = "300px";
    inputSearch.style.width = "350px";
  }
  isOpen = !isOpen;
});
