const searchIcon = document.querySelector('.icon');
const clearIcon = document.querySelector('.clear');
const inputText = document.querySelector('.input');

clearIcon.addEventListener('click', () => {
  inputText.value = '';
});

searchIcon.addEventListener('click', (e) => {
  searchIcon.parentNode.classList.toggle('active');
});
