// export const tasks = [
//     { text: 'Buy milk', done: false, id: '1' },
//     { text: 'Pick up Tom from airport', done: false, id: '2' },
//     { text: 'Visit party', done: false, id: '3' },
//     { text: 'Visit doctor', done: true, id: '4' },
//     { text: 'Buy meat', done: true, id: '5' },
// ];

const tasks = [
    { text: 'Buy milk', done: false, id: '1' },
    { text: 'Pick up Tom from airport', done: false, id: '2' },
    { text: 'Visit party', done: false, id: '3' },
    { text: 'Visit doctor', done: true, id: '4' },
    { text: 'Buy meat', done: true, id: '5' },
];

localStorage.setItem('tasksList', JSON.stringify(tasks));
// let a = localStorage.getItem('struct');

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));