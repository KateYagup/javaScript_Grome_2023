const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', () => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.textContent = '';
});


const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

// const logGreenDiv = logTarget('DIV', 'green'); // не страбатывает
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const removeEventButton = document.querySelector('.remove-handlers-btn');
removeEventButton.addEventListener('click', () => {
    console.log('!!!');
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreyDiv);


    pElem.removeEventListener('click', logGreenP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreenSpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
});

const attachEventButton = document.querySelector('.attach-handlers-btn');
attachEventButton.addEventListener('click', () => {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
});
