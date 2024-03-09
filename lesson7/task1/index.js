function squareArray(arr) {
    if (!Array.isArray(arr)) return null;
    const resultArr = arr.map(el => el * el);
    return resultArr;
}

// examples
squareArray([10, 10, 10]); // ===> [100, 100, 100]
squareArray([0, 0, 1, 3]); // ===> [0, 0, 1, 9]
squareArray([-1, 0, -1, 1]); // ===> [1, 0, 1, 1]