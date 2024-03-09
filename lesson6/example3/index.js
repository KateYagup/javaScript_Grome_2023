function swap(numbers) {
    const [start, ...rest] = numbers;
    return [...rest, start];
}

function swapManual(numbers) {
    const first = numbers.shift(numbers);
    numbers.push(first);
    return numbers;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]