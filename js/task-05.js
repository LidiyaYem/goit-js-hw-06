const textInput = document.querySelector('#name-input');

const output = document.querySelector('#name-output');


function onInputChange(event) {
    const inputValue = event.currentTarget.value;

    if (inputValue.length === 0 ) {
    return output.textContent = 'Anonimus';
}
    output.textContent = inputValue;
};

textInput.addEventListener('input', onInputChange);