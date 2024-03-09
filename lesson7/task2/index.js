function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;

    const resultArr = arr.slice();
    resultArr.reverse();
    return resultArr;
}

reverseArray([1, 2, 3, 4, 5]);