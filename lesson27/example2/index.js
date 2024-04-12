const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
    const isButton = e.target.classList.contains('counter');

    if (!isButton) {
        return;
    }

    const action = e.target.dataset.action;
}

counterElem.addEventListener('click', onCounterChange);