const cards = document.querySelectorAll('.card');
const descs = document.querySelectorAll('.desc_container');

const handleClick = (e) => {
  // 클릭한 엘리멘트가 card 인지 확인
  if (e.target.classList.contains('card')) {
    // 모든 desc_container 엘리멘트에 hide 클래스를 주기
    descs.forEach((desc) => desc.classList.add('hide'));
    // 모든 card 엘리멘트에서 expand를 삭제하기
    cards.forEach((card) => card.classList.remove('expand'));

    // 클릭한 엘리멘트에만 expand 클래스를 추가하기
    e.target.classList.add('expand');

    // 카드가 다 펼쳐진 뒤에 (0.7초) desc_container에서 hide 클래스를 삭제해서 desc_container를 보여주기
    setTimeout(() => {
      e.target.children[0].classList.remove('hide');
    }, 700);
  }
};

cards.forEach((card) => card.addEventListener('click', handleClick));
console.log(cards);
