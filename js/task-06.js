const textInput = document.querySelector('input');
const inputLength = textInput.getAttribute('data-length');

textInput.addEventListener("focus", () => {
    if (textInput.classList.contains('invalid')) {
        textInput.classList.remove('invalid');
    } else {
        if (textInput.classList.contains('valid')) {
            textInput.classList.remove('valid');
        }
    }

  });

function onInputChange(event) {
    const inputValue = event.currentTarget.value;

    if (inputValue.length !== Number(inputLength)) {
    return textInput.classList.add('invalid');
}
    textInput.classList.add('valid');
};

const inputFunction = textInput.addEventListener('blur', onInputChange);
