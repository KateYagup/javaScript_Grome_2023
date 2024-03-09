function removeDuplicates(array) {
    console.log('Работа функции');
    if (!Array.isArray(array)) return null;
    let symbol = array[0];
    let resultArray = [];
    resultArray.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        let flag = true;
        for (let j = 0; j < resultArray.length; j++) {
            console.log(resultArray.length);
            console.log('i: ' + i + '  ' + array[i]);
            console.log('j: ' + j + '  ' + resultArray[j]);
            if (array[i] === resultArray[j]) {
                flag = false;
                break;
            }
            // resultArray.push(array[i]);
        }
        if (flag) {
            resultArray.push(array[i]);
        }
    }
    for (let el of resultArray) {
        console.log(el);
    }
    return resultArray;
}

// let arr = removeDuplicates([1, 2, 2, 3, 4, 3, 5]);

let arr = removeDuplicates([1, 1, 1, 7, 1, 2, 2, 3, 4, 3, 5]);