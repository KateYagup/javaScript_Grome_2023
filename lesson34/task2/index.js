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

const onFormSubmit = event => {
    event.preventDefault();
    console.log('onFormSubmit');
    const newData = Object.values(...new FormData(formElem));
    console.log(newData);
    const name = new FormData(formElem).get('name');
    const password = new FormData(formElem).get('password');
    const email = new FormData(formElem).get('email');

    const newUserData = {
        name,
        password,
        email,
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUserData)
    }).then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
            formElem.reset();
            console.log(data);
        });

    const newDB = fetch(baseUrl)
        .then(result => result.json())
        .then(users => console.log(users));


    buttonElem.setAttribute('disabled', true);
};

formElem.addEventListener('submit', onFormSubmit);

// formElem.addEventListener('input', () => (submitElem.disabled = !formElem.reportValidity()));
// formElem.addEventListener('input', () => (buttonElems.disabled = !formElem.reportValidity()));
