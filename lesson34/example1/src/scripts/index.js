// import { tasks } from './storage.js';
import { renderTasks } from './renderer.js';
import { onToggleTask } from './updateTask.js';
import { onCreateTask } from './createTask.js';
import { getTasksList } from './tasksGateway.js'
import { setItem } from './storage.js';

const listElem = document.querySelector('.list');

document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(getTasksList => {
            setItem('tasksList', getTasksList)
            renderTasks();
        });
});
// renderTasks();

listElem.addEventListener('click', onToggleTask);

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);


const onStorageCase = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
}

window.addEventListener('storage', onStorageCase);