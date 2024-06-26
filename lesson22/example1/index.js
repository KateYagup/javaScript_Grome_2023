const divElem = document.querySelector('div');
const pElem = document.querySelector('p');
const spanElem = document.querySelector('span');
const eventsListElem = document.querySelector('.events-list');

const logEvent = (text, color) => {
    const spanElem = document.createElement('span');
    spanElem.style = `color: ${color}; margin-left: 8px;`;
    spanElem.textContent = text;
    eventsListElem.appendChild(spanElem);
}

// const logGreenDiv = logEvent('DIV', 'green'); // не страбатывает
const logGreenDiv = logEvent.bind(null, 'DIV', 'green');
const logGreyDiv = logEvent.bind(null, 'DIV', 'grey');

const logGreenP = logEvent.bind(null, 'P', 'green');
const logGreyP = logEvent.bind(null, 'P', 'grey');

const logGreenSpan = logEvent.bind(null, 'SPAN', 'green');
const logGreySpan = logEvent.bind(null, 'SPAN', 'grey');

const attachHandlers = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);
    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
};

const attachEventButton = document.querySelector('.attach-handlers-btn');
attachEventButton.addEventListener('click', attachHandlers);

const removeHandlers = () => {
    console.log('!!!');
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);
    pElem.removeEventListener('click', logGreenP);
    pElem.removeEventListener('click', logGreyP, true);
    spanElem.removeEventListener('click', logGreenSpan);
    spanElem.removeEventListener('click', logGreySpan, true);
};


const removeEventButton = document.querySelector('.remove-handlers-btn');
removeEventButton.addEventListener('click', removeHandlers);


const clearBoard = () => {
    eventsListElem.innerHTML = '';
};

const clearBtnElem = document.querySelector('.clear-btn');
clearBtnElem.addEventListener('click', clearBoard);

document.addEventListener('DOMContentLoaded', () => {
    attachHandlers();
});



