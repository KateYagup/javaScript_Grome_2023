const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
});

const asyncNum1 = getValueWithDelay(56, 2000);
const asyncNum2 = getValueWithDelay(4, 1000);
const asyncNum3 = getValueWithDelay(10, 500);

const getSum = numbers =>
    numbers.reduce((acc, num) => acc + num, 0);

export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers));
};

// asyncSum(asyncNum1, asyncNum2, asyncNum3)
//     .then(result => console.log(result));