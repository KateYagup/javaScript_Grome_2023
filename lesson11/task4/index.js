// Очистка данных о транзакциях
// На вход функции поступают данные в виде массива,
// элементами которого явлются суммы совершенных транзакций.
//  Но данные не очень качественны и могут содержать лишние
// пробелы или даже не числа.  Функция должна отсечь лишнееи вернуть только
// полезные и отформатированные данные.

const cleanTransactionsList = transactions => {
    const onlyNumbers = transactions
        .filter(el => Number(el));

    const result = onlyNumbers
        .map(el => '$' + parseFloat(el).toFixed(2));

    return result;
};

const tr = ['   1.9', '16.4', 17, '17  dol', ' 1 dollar ', 5, ' 3 '];
const arr = cleanTransactionsList(tr);
console.log(arr);
// console.log(tr);