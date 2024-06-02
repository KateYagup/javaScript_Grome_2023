// import { tasks } from './storage.js';
import { renderTasks } from './renderer.js';
import { onToggleTask } from './updateTask.js';
import { onCreateTask } from './createTask.js';

const listElem = document.querySelector('.list');

renderTasks();

listElem.addEventListener('click', onToggleTask);

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);


const onStorageCase = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
}

window.addEventListener('storage', onStorageCase);