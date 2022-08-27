const bodyBgcolor = document.querySelector('body');
const targetBtn = document.querySelector('button');
const spanText = document.querySelector('span');


targetBtn.addEventListener('click', onTargetBtnClick);


function onTargetBtnClick () {
  const targetColor = getRandomHexColor();
  
  bodyBgcolor.style.backgroundColor = targetColor;
  spanText.textContent = targetColor;
}


function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}