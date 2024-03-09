function cloneArr(arr) {
    if (!Array.isArray(arr)) return null;

    const resultArr = [...arr];
    return resultArr;
}