const bodyBgcolor = document.querySelector('body');
const targetBtn = document.querySelector('button');
const spanText = document.querySelector('span');


targetBtn.addEventListener('click', onTargetBtnClick);


function onTargetBtnClick () {
  bodyBgcolor.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();


function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}