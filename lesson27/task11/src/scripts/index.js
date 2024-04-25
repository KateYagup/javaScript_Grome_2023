import { tasks } from './storage.js';
import { renderTasks } from './renderer.js';
import { onToggleTask } from './updateTask.js';
import { onCreateTask } from './createTask.js';

const listElem = document.querySelector('.list');

renderTasks(tasks);

listElem.addEventListener('click', onToggleTask);

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);


