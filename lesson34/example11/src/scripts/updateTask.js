// import { tasks } from './storage.js';
import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const tasks = getItem('tasksList');
    const taskData = tasks.find(task => task.id === e.target.dataset.id);
    Object.assign(taskData, { done: e.target.checked });
    setItem('tasksList', tasks);
    renderTasks();
};