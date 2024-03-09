// const getRandomNumbers = (length, from, to) => {
//     if (from > to || to - from < 1) return null;
//     const resultArr = [];
//     for (let i = 0; i < length; i++) {
//         resultArr.concat(Math.trunc(Math.random() * (to - from) + from));
//     }
//     return resultArr;
// }
// const a = [];
// a.length = 10;

const getRandomNumbers = (length, from, to) => {
    if (from > to) return null;
    if (Math.trunc(from) === Math.trunc(to)) return null;

    if (!Number.isInteger(from)) from = Math.ceil(from);
    console.log('from: ' + from);

    if (!Number.isInteger(to)) to = Math.trunc(to);
    console.log('to: ' + to);

    // if (Math.abs(to - from) < 1) return null;
    let arr = [];
    arr.length = length;
    arr.fill(0);
    // console.log(arr);


    const result = arr.map(el => Math.trunc(Math.random() * (to - from) + from));
    console.log(result);
    return result;
}

console.log('Solution');
// getRandomNumbers(20, 0.5, 1.1); //только 1
// getRandomNumbers(5, 1.5, 2.1); // только 2
getRandomNumbers(5, 1.01, 2.5);// только 2
// const arr = getRandomNumbers(5, 1, 5);
// console.log(arr);

// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
// getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
// getRandomNumbers(3, 1.9, 2.5); // ==> [2, 2, 2]

// getRandomNumbers(7, 1.4, 1.9); // ==> null
// getRandomNumbers(7, 2.11, 2.9); // ==> null
// getRandomNumbers(1, 2.5, 0.9); // ==> null
// getRandomNumbers(7, 1.5, 1.9);
// getRandomNumbers(10, 8, 17.5);
// getRandomNumbers(50, 90.5, 95);

