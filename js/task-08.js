const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || 
    formElements.password.value === '') {
        alert('All fields must be filled!');
    }

    const form = {
        Email: `${formElements.email.value}`,
        Password: `${formElements.password.value}`,
    };
    
    console.log(form);
    
    event.currentTarget.reset();

}
