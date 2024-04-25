
// const storage = {};

// export const setItem = (key, value) => {
//     Object.assign(storage, { [key]: value });
// };

// export const getItem = key => storage[key];

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));

// const onStarageChange = e => {
//     if (e.key === 'tasksList') {
//         renderTasks();
//     }
// }

// window.addEventListener('storage', onStarageChange);