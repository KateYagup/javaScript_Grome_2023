function sum(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((el, sum) => {
        return sum + el;
    }, 0);
};

sum([2, 5, 6, 3, 0, 3, -1]);