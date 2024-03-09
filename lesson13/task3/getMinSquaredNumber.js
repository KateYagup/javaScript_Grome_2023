// const getMinSquaredNumber = arr => {
//     let minNumb = Infinity;
//     arr.forEach(num => {
//         if (Math.abs(num) < min) {
//             min = Math.abs(num);
//         }
//     });
//     return min * min;
// }

export const getMinSquaredNumber = arr => {
    const absoluteValues = arr
        .map(num => num * num);

    const result = Math.min(...absoluteValues);
    return result;
}
