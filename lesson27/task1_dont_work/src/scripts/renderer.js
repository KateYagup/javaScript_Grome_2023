import { getItem } from "./storage";

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
    return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
}

const createListItem = ({ text, done, id }) => {
    // const listItemElem = document.createElement('list'); //
    const listItemElem = document.createElement('li'); //

    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({ done, id });//
    if (done) {
        listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkboxElem, text);

    return listItemElem;
};

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];

    listElem.innerHTML = '';
    const tasksElems = tasksList
        .sort(compareTasks)
        .map(createListItem);

    listElem.append(...tasksElems);
}

