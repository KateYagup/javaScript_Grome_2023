function sumOfSquare() {
    return [].reduce.apply(arguments, [(acc, elem) => acc + elem ** 2]);
    // return [...arguments].reduce((sum, el) => sum + el, 0);
}

console.log(sumOfSquare(1, 2));