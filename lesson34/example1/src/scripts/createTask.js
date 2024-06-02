// import { tasks } from "./storage.js";
import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderer.js";
import { createTask, getTasksList } from "./tasksGateway.js";
// import { getTasksList } from "../../../../lesson33/task1/index.js";

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    // const tasks = getItem('tasksList') || [];

    const newTask = {
        text,
        done: false,
        // id: Math.random().toString(),
    };

    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });

    // tasks.push({
    //     text,
    //     done: false,
    //     id: Math.random().toString(),
    // });

    // setItem('tasksList', tasks);
    // renderTasks();
};