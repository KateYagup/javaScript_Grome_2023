function sortDesc(array) {
    const resultArray = [...array];
    resultArray.sort((a, b) => b - a);
    return resultArray;
}

sortDesc([3, 7, 1, 2, 5, 4, 6, 1]);