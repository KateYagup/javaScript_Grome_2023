// Создать пограмму, которая запоминает аргументы, с которыми вызывалась фукнция, чтобы видеть некую историю этих вызовов.
// Фукнция saveFuncCalls принимает фукнцию, выховы которой мы хотим сохранять, как единственный параметр
//  и возвращает функию, которая бует повторять функционал изначальной функции, а ттак же будеть запоминать все свои вызове в свойстве
// callsHistory. Каждый вызов храниться как массив аргументов.

'use strict';

/**
 * @param {function} func
 * @return {function}
 */
// function saveFuncCalls(func) {
//     func.callsHistory = [];
//     return function withMemory() {
//         // func.callsHistory = 10;
//         func.callsHistory.push([...arguments]);
//         console.log(func.callsHistory);
//         return func.call(func, ...arguments);
//         // let callsHistory = [];
//         // func.callsHistory.push([...arguments]);

//         // console.log(...arguments);
//         // this.callsHistory.push([5]);
//         // func.callsHistory.push([...arguments]);
//         // console.log('func.callsHistory');
//         // console.log(func.callsHistory);
//     };
// }

function saveFuncCalls(func) {
    const callsHistory = [];
    function withMemory(...args) {
        callsHistory.push(args);
        return func.apply(this, args);
    }
    withMemory.callsHistory = callsHistory;
    return withMemory;
}

// example 1
function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
// sumWithMemory(4, 2); // ===> 6
console.log(sumWithMemory(4, 2));
// sumWithMemory(9, 1); // ===> 10
console.log(sumWithMemory(9, 1));
// sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]
console.log(sumWithMemory.callsHistory); //


const sumWithMemory1 = saveFuncCalls(sum);
// sumWithMemory(4, 2); // ===> 6
console.log(sumWithMemory1(3, 52));
// sumWithMemory(9, 1); // ===> 10
console.log(sumWithMemory1(7, 8));
// sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]
console.log(sumWithMemory1.callsHistory); //
// example 2
// function addDelta(array, delta) {
//     return array.map(el => el + delta);
// }

// const addDeltaWithMemory = saveFuncCalls(addDelta);
// addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
// addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

// addDeltaWithMemory.callsHistory; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// // example 3
// const user = {
//     name: 'John',
//     sayHi() {
//         return this.name;
//     },
// };

// const sayHiWithMemory = saveFuncCalls(user.sayHi);
// // sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
// const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
// console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory.callsHistory); // [ [] ]
