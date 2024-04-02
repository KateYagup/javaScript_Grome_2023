const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

for (let task of tasks) {
    task.id = Math.floor(Math.random() * 1000).toString();
}

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            checkbox.dataset.id = id;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

renderTasks(tasks);

const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');

const removeLiElements = () => {
    const liElems = document.querySelectorAll('li');
    for (let el of liElems) {
        el.remove();
    }
}

const onButtonClick = () => {
    removeLiElements();
    if (input.value) {
        tasks.push({
            text: input.value, done: false
        });

        renderTasks(tasks);
    }
};

button.addEventListener('click', onButtonClick);
const checkElements = document.querySelectorAll('.list__item-checkbox');

const setCrossLine = (event) => {
    removeLiElements();
    const idClick = event.target.dataset.id;
    for (let task of tasks) {
        if (task.id == idClick) {
            if (!task.done) task.done = true;
            if (task.done) task.done = false;
        }
    }

    renderTasks(tasks);
}

for (let elem of checkElements) {
    elem.addEventListener('click', (event) => setCrossLine(event));
}


// put your code here
