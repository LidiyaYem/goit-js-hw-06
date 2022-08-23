const counter = document.querySelector('#counter');
const value = document.querySelector('#value');

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');



const decrementClick = () => {
    counterValue -= 1; 
    value.textContent = counterValue;
};

const incrementClick = () => {
    counterValue += 1; 
    value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);