// const { check } = require("prettier");

const baseUrl = 'http://665d7308e88051d604069f45.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const checkValid = () => {
    const determineValid = formElem.reportValidity();
    console.log(determineValid);
    if (determineValid) {
        buttonElem.removeAttribute('disabled');
    }
    console.log(buttonElem);
};

formElem.addEventListener('input', checkValid);

const saveData = () => {
    const newData = Object.entries(new FormData(formElem));
    console.log(newData);
}
// buttonElem.addEventListener('click', saveData);
const onFormSubmit = event => {
    event.preventDefault();
    console.log('onFormSubmit');
    const newData = Object.values(...new FormData(formElem));
    console.log(newData);
    const nameValue = new FormData(formElem).get('name');
    const passwordValue = new FormData(formElem).get('password');
    const emailValue = new FormData(formElem).get('email');

    formElem.reset();
    buttonElem.setAttribute('disabled', true);

    const newUserData = {
        nameValue,
        passwordValue,
        emailValue,
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUserData)
    }).then(() => console.log('User created'));

    const newDB = fetch(baseUrl)
        .then(result => result.json())
        .then(users => console.log(users));
}
formElem.addEventListener('submit', onFormSubmit);

// formElem.addEventListener('input', () => (submitElem.disabled = !formElem.reportValidity()));
// formElem.addEventListener('input', () => (buttonElems.disabled = !formElem.reportValidity()));
