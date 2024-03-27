const buttonElem = document.querySelector('.single-use-btn');
function consoleClicked() {
    console.log('clicked');
    buttonElem.removeEventListener('click', consoleClicked);
}

buttonElem.addEventListener('click', consoleClicked);
