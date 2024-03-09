// function getSubArray(array, number) {
//     let resultArray = [];
//     for (let i = 0; i < number; i++) {
//         resultArray.push(array[i]);
//     }

//     return resultArray;
// }

const getSubArray = (arr, numberOfElements) => {
    let resultArray = [];
    for (let i = 0; i < numberOfElements; i++) {
        resultArray.push(arr[i]);
    }
    return resultArray;
};