const steps = document.querySelectorAll('.step');
const spanSteps = document.querySelectorAll('span');
const textSteps = document.querySelectorAll('.text');
const progress = document.querySelector('.progress');

const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

let currentAcitveStep = 0;

btnNext.addEventListener('click', () => {
  // 현재 활성화 된 step의 개수를 계산한다.
  // 5가 최대이므로 5가 넘어가지 않게한다.
  currentAcitveStep =
    currentAcitveStep < 5 ? currentAcitveStep + 1 : currentAcitveStep;

  // 각 step에 active 클래스를 추가한다.
  steps.forEach((step, index) => {
    if (index === currentAcitveStep - 1) {
      spanSteps[index].innerHTML = '&#10003;';
      spanSteps[index].style.color = `#fff`;
      step.style.background = `#ff8066`;
      textSteps[index].style.color = `#ff8066`;
    }
    if (index === currentAcitveStep) {
      step.classList.add('active');
    }
  });

  // progress의 width를 활성화된 step에 맞춰서 증가시킨다.
  if (currentAcitveStep < 5) {
    progress.style.width = `${(currentAcitveStep / (steps.length - 1)) * 100}%`;
  }
});

btnPrev.addEventListener('click', () => {
  // 각 step에 active 클래스를 제거한다.
  // 0 번째 step은 항상 활성화 상태이기 때문에 무시한다.
  steps.forEach((step, index) => {
    if (index === currentAcitveStep - 1) {
      spanSteps[index].innerHTML = currentAcitveStep;
      spanSteps[index].style.color = `#000`;
      step.style.background = `#fff`;
      textSteps[index].style.color = `#000`;
    }
    if (index !== 0 && index === currentAcitveStep) {
      step.classList.remove('active');
    }
  });
  // 현재 활성화 된 step의 개수를 계산한다.
  // 0이 최소이므로 0 보다 작아지지 않게 한다.
  currentAcitveStep =
    currentAcitveStep > 0 ? currentAcitveStep - 1 : currentAcitveStep;

  // progress의 width를 활성화된 step에 맞춰서 감소시킨다.
  progress.style.width = `${(currentAcitveStep / (steps.length - 1)) * 100}%`;
});
