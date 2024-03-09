// function getSpecialNumbers(array) {
//     let resultArray = array.filter(num => {
//         num % 3;
//     })
//     return resultArray;
// }

function getSpecialNumbers(array) {
    const resultArray = array.filter(num =>
        num % 3 === 0
    );
    return resultArray;
}

function getSpecialNumbers(array) {
    return array.filter(num =>
        num % 3 === 0
    );
}
getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function getSpecialNumbers(array) {
//     return array.filter(num => !num % 3);
// }

