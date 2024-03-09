// Reverse string
// Напишите функцию, которая будет преворачивать строку
//  Фукнция должна вернуть строку, где символы будут идти в обратном поядке
// В решении нужно использовать метод массива для изменения порядков элементов reverse

const reverseString = text => {
    if (typeof text !== 'string') return null;

    let arrOfStr = text.split('');
    arrOfStr.reverse();
    const result = arrOfStr.join('');
    return result;
};

// const reverseString = text => {
//     if (typeof text !== 'string') return null;

//     let result = '';

//     for (let i = text.length - 1; i >= 0; i--) {
//         result = result + text.charAt(i);
//         // console.log(result);
//     }
//     return result;
// };

console.log(reverseString('Kateryna'));