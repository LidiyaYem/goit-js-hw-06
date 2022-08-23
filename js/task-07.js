const scrollInput = document.querySelector('input');
const spanText = document.querySelector('span');


function onInputChange(event) {
    spanText.style.fontSize = event.currentTarget.value+'px';
  
}

const inputFunction = scrollInput.addEventListener('input', onInputChange);

