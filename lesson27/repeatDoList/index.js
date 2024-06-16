
// const { check } = require("prettier");



const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
    const listElem = document.querySelector('.list');
    const listItemsElems = tasksList.map(itemText => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.classList.add('list__item-checkbox');
        if (itemText.done === true) {
            checkboxElem.checked = true;
            listItemElem.classList.add('list__item_done');
        }

        listItemElem.append(checkboxElem, itemText.text);
        return listItemElem;
    });
    listElem.append(...listItemsElems)
}

// const renderTasks = tasksList => {
//     const listElem = document.querySelector('.list');

//     const listItemsElems = tasksList.map(itemText => {
//         const listItemElem = document.createElement('li');
//         listItemElem.classList.add('list__item');


//         const checkboxElem = document.createElement('input');
//         checkboxElem.setAttribute('type', 'checkbox');
//         // checkboxElem.checked = done;
//         checkboxElem.classList.add('list__item-checkbox');
//         if (itemText.done === true) {
//             listItemElem.classList.add('list__item_done');
//             checkboxElem.checked = true;
//         }

//         listItemElem.append(checkboxElem, itemText.text);
//         return listItemElem;
//     });
//     listElem.append(...listItemsElems);
// }

renderTasks(tasks);