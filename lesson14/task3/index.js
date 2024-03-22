let numFromMemory = 0;


export function add(num) {
    return numFromMemory += num;
}
export function decrease(num) {
    return numFromMemory -= num;
}

export function reset() {
    numFromMemory = 0;
}

export function getMemo() {
    return numFromMemory;
}