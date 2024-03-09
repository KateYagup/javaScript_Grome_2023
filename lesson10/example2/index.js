// const getParsedItegers = arr => {
//     const arrOfNumbers = arr.map(el => Number.parseInt(el));
//     return arrOfNumbers;
// }
const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

const arr = [10.2, 5.7, '  17.17text', Math.PI];
getParsedIntegers(arr);
getParsedIntegersV2(arr);
getParsedFloats(arr);
getParsedFloatsV2(arr);