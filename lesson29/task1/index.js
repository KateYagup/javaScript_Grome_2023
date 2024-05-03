export const delay = (delay, callback, context, arg1) => {
    setTimeout(() => callback.apply(context.arg1), delay);
}

const print = (arg1) => {
    console.log(arg1);
};

// delay(1000, print, this, 7);