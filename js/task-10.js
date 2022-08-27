
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divEl = document.getElementById('boxes');
let boxWidth = 30;
let boxHeight = 30;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes() {

  for (let i = 0; i < Number(input.value); i ++ ) {
    const boxesDiv = document.createElement('div');
    boxesDiv.style.height = boxWidth.toString()+'px';
    boxesDiv.style.width = boxHeight.toString()+'px';
    boxWidth += 10;
    boxHeight += 10; 

  const boxesColor = getRandomHexColor();
  boxesDiv.style.backgroundColor = boxesColor;
    divEl.append(boxesDiv);
  }
  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  divEl.innerHTML = '';
}