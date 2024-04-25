import { tasks } from './storage.js';
import { renderTasks } from './renderer.js';
import { onToggleTask } from './updateTask.js';
import { onCreateTask } from './createTask.js';

const listElem = document.querySelector('.list');

renderTasks(tasks);

listElem.addEventListener('click', onToggleTask);

// const onCreateTask = () => {
//     const taskTitleInputElem = document.querySelector('.task-input');

//     const text = taskTitleInputElem.value;

//     if (!text) {
//         return;
//     }
//     taskTitleInputElem.value = '';

//     tasks.push({
//         text,
//         done: false,
//         id: Math.random().toString(),
//     });
//     renderTasks(tasks);
// };

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);


