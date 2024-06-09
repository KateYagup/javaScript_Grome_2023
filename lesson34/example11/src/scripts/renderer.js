// import { tasks } from './storage.js';
import { getItem } from "./storage.js";
import { getTasksList, createTask } from "./tasksGateway.js";

const listElem = document.querySelector('.list');
let text;
getTasksList().then(result => {
    console.log(typeof result);
    text = result.json();
});
console.log('text');
console.log(text);

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];
    // const tasksList = getTasksList() || [];
    // console.log(tasksList);

    // getTasksList().then(result => console.log(result));
    // .then(result => console.log(result));

    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            // debugger;
            // console.log(text, done);
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', id);
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};