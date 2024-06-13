
// const { check } = require("prettier");

const tasks = [
    { text: 'Buy milk', done: false, id: '1' },
    { text: 'Pick up Tom from airport', done: false, id: '2' },
    { text: 'Visit party', done: false, id: '3' },
    { text: 'Visit doctor', done: true, id: '4' },
    { text: 'Buy meat', done: true, id: '5' },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.btn');

const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const listItemsElems = tasksList.map(itemText => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.classList.add('list__item-checkbox');
        checkboxElem.setAttribute('data-id', itemText.id);
        // checkboxElem.addEventListener('click', (event) => console.log(event));
        if (itemText.done === true) {
            checkboxElem.checked = true;
            listItemElem.classList.add('list__item_done');
        }
        listItemElem.append(checkboxElem, itemText.text);
        return listItemElem;
    });

    listElem.append(...listItemsElems)
};

const onToggleTask = e => {
    const isCheckBox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckBox) return;

    const taskData = tasks.find(task => task.id === e.target.dataset.id);
    // console.log(taskData);
    Object.assign(taskData, { done: e.target.checked });
    // console.log(taskData);
    renderTasks(tasks);
};

const createNewItem = () => {
    console.log(inputElem.value);
    const text = inputElem.value;

    if (!text) return;
    inputElem.value = '';
    tasks.push({
        text,
        done: false,
        id: Math.random().toString(),
    })
    renderTasks(tasks);
}

listElem.addEventListener('click', onToggleTask);
createBtnElem.addEventListener('click', createNewItem);


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