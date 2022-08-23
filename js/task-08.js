const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || 
    formElements.password.value === '') {
        alert('All fields must be filled!');
    }

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach ((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });

    console.log(`Email: ${formElements.email.value}, Password: ${formElements.password.value}`);
    
    event.currentTarget.reset();

}
