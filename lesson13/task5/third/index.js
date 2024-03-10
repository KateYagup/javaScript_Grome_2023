// Count occurences
// Написать фукнцию, которая найдет количество
//  вхождений подстроки в строку

// Как перемещатся по массиву? Обрезать его?

// const countOccurrences = (text, str) => {
//     // put your code here
// };

export const countOccurrences = (text = '', subText) => {
    if (subText === '') return null;
    let accResult = 0;
    let startPosition = 0;

    while (true) {
        let newText;
        console.log('startPosition ' + startPosition);
        let isFind = text.indexOf(subText, startPosition);
        console.log('isFind ' + isFind);

        if (isFind === -1) break;
        accResult++;
        startPosition = subText.length + isFind;
    }
    console.log('accResult ' + accResult);
    return accResult;
}

// text = 'Ola-la-la Ola-la-la Ola';
// subText = 'Ola';
// countOccurrences(text, subText);

