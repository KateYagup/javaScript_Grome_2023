const includes = (arr, num) => {
    // let result = false;
    for (let el of arr) {
        if (el === num) {
            return true;
        }
    }
    return false;
};
