const buttonElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

buttonElem.addEventListener('click', (target) => {
    console.log(inputElem.value);
})