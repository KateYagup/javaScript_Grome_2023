export const delay = (delay, callback, context, ...args) => {
    setTimeout(() => callback.apply(context, args), delay);
}

const print = (arg1) => {
    console.log(arg1);
};

// delay(1000, print, this, 7);