// Создайте фабрику массивов функций

const createArrayOfFunctions = (num) => {
    console.log(num);
    if (num.length === 0) return [];
    if (typeof num !== 'number') return null;

    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = function () {
            return i;
        }
    }
    return arr;
}

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions());

// let num = 9;
// let arr = [];
// for (let i = 0; i < num; i++) {
//     arr[i] = function () {
//         return i;
//     }
// }
// console.log(arr[5]());