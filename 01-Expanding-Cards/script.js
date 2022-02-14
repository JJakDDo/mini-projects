const cards = document.querySelectorAll('.card');
const descs = document.querySelectorAll('.desc_container');

const handleClick = (e) => {
  if (e.target.classList.contains('card')) {
    descs.forEach((desc) => desc.classList.add('hide'));
    cards.forEach((card) => card.classList.remove('expand'));
    e.target.classList.add('expand');
    console.log(e.target.children[0]);
    setTimeout(() => {
      e.target.children[0].classList.remove('hide');
    }, 700);
  }
};

cards.forEach((card) => card.addEventListener('click', handleClick));
console.log(cards);
