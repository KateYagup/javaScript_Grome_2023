'use strict';

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) return null;

    const resultArr = arr
        .map(el => {
            if (el % 2 === 0) return el + delta;
            return el;
        });
    return resultArr;
}



encreaseEvenEl([1, 2, 3, 4, 5], 20);