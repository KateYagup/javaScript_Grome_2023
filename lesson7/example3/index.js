const flatArray = array => {
    let resultArray = array.slice();

    const flatArray = resultArray
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, []);
    flatArray.sort((a, b) => a - b);

    return flatArray;
}


const flatArray = array => {
    let resultArray = [...array];

    return resultArray
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, [])
        .sort((a, b) => a - b);
}

const flatArray = array =>
    array.slice()
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, [])
        .sort((a, b) => a - b)



const flatArray = arr => {
    const flatArr = arr.flat();
    const resultArr = flatArr.sort((a, b) => a - b);
    return resultArr;
};


const flatArray = arr => {
    return arr.flat()
        .sort((a, b) => a - b);
};

let arr = [1, [4, 3, 1], [2]];
flatArray(arr);