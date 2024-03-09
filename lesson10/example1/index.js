const getFiniteNumbers = arr => {
    return arr.filter(el => Number.isFinite(el));
}

const arr = [0 / 0, 1.3, Math.PI, 1 / 0, 1 / 3, 0.01];
getFiniteNumbers(arr);

const getFiniteNumbersV2 = arr => {
    return arr.filter(el => isFinite(el));
}
const arr1 = [0 / 0, 1.3, Math.PI, 1 / 0, 1 / 3, 0.01];
getFiniteNumbers(arr1);

const getNaN = arr => arr.filter(el => Number.isNaN(el));
const getNaNV2 = arr => arr.filter(el => isNaN(el));
const arr2 = [4.5, 10, 15, '55', NaN, null, NaN, Infinity, undefined];
getNaNV2(arr2);

const getIntegers = arr => arr.filter(el => Number.isInteger(el));
getIntegers(arr2);