const btnSearch = document.querySelector("#search_btn");
const inputEmail = document.querySelector("#email_input");
const emailLetters = document.querySelectorAll("#email_letters > .letter");
const passwordLetters = document.querySelectorAll(
  "#password_letters > .letter"
);

window.addEventListener("click", (event) => {
  console.log(event.target.id);
  if (event.target.id === "email_input") {
    emailLetters.forEach((letter) => {
      letter.style.top = "-20px";
    });
  } else if (event.target.id === "password_input") {
    passwordLetters.forEach((letter) => {
      letter.style.top = "-20px";
    });
  } else {
    emailLetters.forEach((letter) => {
      letter.style.top = "0px";
    });
    passwordLetters.forEach((letter) => {
      letter.style.top = "0px";
    });
  }
});
