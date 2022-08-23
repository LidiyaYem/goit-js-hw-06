
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divEl = document.getElementById('boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {

  for (let i = 0; i < Number(input.value); i ++ ) {
    const boxesDiv = document.createElement('div');
    boxesDiv.classList.add('size');


    boxesDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    
    divEl.append(boxesDiv);
  }
  
}

function destroyBoxes() {
  divEl.innerHTML = '';
}