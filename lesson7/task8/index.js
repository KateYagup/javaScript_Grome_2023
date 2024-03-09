function arrAverage(arr) {
    if (!Array.isArray(arr)) return null;

    const result = arr.reduce((acc, el) => {
        return (acc + el);
    }, 0);
    return result / arr.length;
}

function arrAverage(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((acc, el) => (acc + el), 0);
}

arrAverage([2, 5, 6, 3]);