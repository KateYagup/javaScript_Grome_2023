function getArrayBounds(arr) {
    if (!Array.isArray(arr)) return null;

    let result = [];

    result.push(arr.length, arr[0], arr[arr.length - 1]);

    return result;
}

getArrayBounds([1, 10, 9, 11]);
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
