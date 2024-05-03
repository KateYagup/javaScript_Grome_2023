export const delay = (delay, callback, arg1) => {
    setTimeout(() => callback(arg1), delay);
}

// const print = (arg1) => {
//     console.log(arg1);
// };

// delay(1000, print, 7);