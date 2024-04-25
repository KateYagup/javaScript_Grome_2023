import { tasks } from "./storage";
import { renderTasks } from "./renderer";

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';

    tasks.push({
        text,
        done: false,
        id: Math.random().toString(),
    });
    renderTasks(tasks);
};