// import { tasks } from "./storage.js";
import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderer.js";

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    const tasks = getItem('tasksList') || [];

    tasks.push({
        text,
        done: false,
        id: Math.random().toString(),
    });

    setItem('tasksList', tasks);
    renderTasks();
};