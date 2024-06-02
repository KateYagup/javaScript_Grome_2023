// import { tasks } from './storage.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';
import { renderTasks } from './renderer.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');
    const taskData = tasksList
        .find(task => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
        text,
        id,
        done,
    };

    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });
    // setItem(taskId, updatedTask);

    // const taskData = tasks.find(task => task.id === e.target.dataset.id);
    // Object.assign(taskData, { done: e.target.checked });
    // setItem('tasksList', tasks);
    // renderTasks();
};