// Сумма дробных чсел
//  Создайте функцию, которая будет возвращать округленную сумму чисел
// Округление должно поисходить в меньшую сторону 17.159 => 17.15

const getTotalPrice = arr => {
    const sum = arr.reduce((sum, el) => sum + el, 0);
    const roundSum = Math.floor(sum * 100) / 100;
    return '$' + roundSum;
}
const arr = [20.125, 5.9999, 6.1114];
getTotalPrice(arr);