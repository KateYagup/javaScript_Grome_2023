function uniqueCount(array) {
    console.log('Работа функции');
    if (!Array.isArray(array)) return null;

    let count = 0;

    let endArr = 0;
    while (endArr < array.length) {
        let flag = true;
        for (let i = 0; i < endArr; i++) {
            if (array[endArr] === array[i]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            count++
        }
        endArr++;
    }
    // console.log(count);
    return count;
}

let s = uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]);
console.log('s: ' + s);